import Player from './interfaces/Player';
import Enemy from './interfaces/Enemy';
import Boss from './interfaces/Boss';
import saveStage from './interfaces/SaveStage';
import fightDisplay from './fightDisplay';
import fightBossDisplay from './fightBossDisplay';
import Find from './findUser';
import CalculR from './RandomR';
import startGame from './basic_game_customization';
import room from './random_game_events';
import save from './save';

const fs = require('fs');
const readline = require('readline-sync');

function gameSaved() {
  try {
    const datasaved: string = fs.readFileSync('./json/.jsonsave.json', 'utf-8');
    const data: saveStage = JSON.parse(datasaved);
    const contentPlayers: string = fs.readFileSync('./json/players.json', 'utf-8');
    const user: Player[] = JSON.parse(contentPlayers);
    const contentEnemies: string = fs.readFileSync('./json/enemies.json', 'utf-8');
    const userenemy: Enemy = JSON.parse(contentEnemies);
    const contentBosses: string = fs.readFileSync('./json/bosses.json', 'utf-8');
    const userboss: Boss = JSON.parse(contentBosses);

    const player = Find.findID(user, data.idPlayer);
    player.hp = data.hpPlayer;
    player.hpMax = data.hpMaxPlayer;
    let { coin } = data;
    let i: number;
    console.clear();

    for (i = data.i; i <= data.Round; i += 1) {
      console.clear();
      if (player.hp <= 0) {
        console.log('\x1b[31m' + 'YOU LOOOOOOSE !' + '\x1b[0m');
        const action = readline.question('\nreturn to main ?\n').toLowerCase();
        if (action) {
          startGame();
        }
      } else if (i % 10 === 0) {
        const boss = Find.FindUser(userboss);
        boss.hpMax = boss.hp * data.difficulty;
        boss.hp *= data.difficulty;
        boss.str *= data.difficulty;
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
        save(player, data.difficulty, data.Round, i, coin);
      } else if (i <= data.Round) {
        const enemy = Find.FindUser(userenemy);
        enemy.hpMax = enemy.hp * data.difficulty;
        enemy.hp *= data.difficulty;
        enemy.str *= data.difficulty;
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
            save(player, data.difficulty, data.Round, i, coin);
          }
        }
      }
    }
  } catch (error) {
    console.error('Wrong use of the program.');
  }
}

export default gameSaved;
