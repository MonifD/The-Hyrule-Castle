import Player from './interfaces/Player';
import Enemy from './interfaces/Enemy';
import Boss from './interfaces/Boss';
import fightDisplay from './fightDisplay';
import fightBossDisplay from './fightBossDisplay';
import Find from './findUser';
import CalculR from './RandomR';
import startGame from './basic_game_customization';
import save from './save';
import room from './random_game_events';

const fs = require('fs');
const readline = require('readline-sync');

function game(difficulty: number, Round: number) {
  const castelCount: number = 1 * Round;
  const hyruleCastle: number = castelCount;
  let coin: number = 12;

  let i: number;
  try {
    const contentPlayers: string = fs.readFileSync('./json/players.json', 'utf-8');
    const user: Player[] = JSON.parse(contentPlayers);
    const contentEnemies: string = fs.readFileSync('./json/enemies.json', 'utf-8');
    const userenemy: Enemy = JSON.parse(contentEnemies);
    const contentBosses: string = fs.readFileSync('./json/bosses.json', 'utf-8');
    const userboss: Boss = JSON.parse(contentBosses);

    const player = Find.FindUser(user);
    player.hpMax = player.hp;
    console.clear();

    for (i = 1; i <= hyruleCastle; i += 1) {
      console.clear();
      if (player.hp <= 0) {
        console.log('\x1b[31m' + 'YOU LOOOOOOSE !' + '\x1b[0m');
        const action = readline.question('\nreturn to main ?\n').toLowerCase();
        if (action) {
          startGame();
        }
      } else if (i % 10 === 0) {
        const boss = Find.FindUser(userboss);
        boss.hpMax = boss.hp * difficulty;
        boss.hp *= difficulty;
        boss.str *= difficulty;
        const Bonus: any = room(player.hpMax, player.int, player.str);
        if (Bonus <= 5) {
          coin += Bonus;
        } else if (Bonus > 5) {
          player.hpMax = Bonus;
          if (player.hp > player.hpMax) {
            player.hp = player.hpMax;
          }
        }
        fightBossDisplay(player, boss, player.hpMax, boss.hpMax, coin);
        coin += 1;
        save(player, difficulty, Round, i, coin);
      } else if (i <= hyruleCastle) {
        const enemy = Find.FindUser(userenemy);
        enemy.hpMax = enemy.hp * difficulty;
        enemy.hp *= difficulty;
        enemy.str *= difficulty;
        if (player.hp > 0 || enemy.hp > 0) {
          fightDisplay(player, enemy, player.hpMax, enemy.hpMax, i, coin);
          coin += 1;
          const roomchance: number = CalculR(100);
          if (roomchance === 2 || roomchance === 4 && player.hp > 0) {
            const Bonus: any = room(player.hpMax, player.int, player.str);
            if (Bonus <= 5) {
              coin += Bonus;
            } else if (Bonus > 5) {
              player.hpMax = Bonus;
              if (player.hp > player.hpMax) {
                player.hp = player.hpMax;
              }
            }
          }
          if (player.hp >= 0) {
            save(player, difficulty, Round, i, coin);
          }
        }
      }
    }
    console.log('\x1b[32m' + 'Congratulations ... you\'ve win the hyrule castle !' + '\x1b[0m');
  } catch (error) {
    console.error('Wrong use of the program.');
  }
}
export default game;
