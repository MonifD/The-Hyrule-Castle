import Player from './interfaces/Player';
import fightDisplay from './fightDisplay';
import fightBossDisplay from './fightBossDisplay';
import Enemy from './interfaces/Enemy';
import Boss from './interfaces/Boss';
import FindUser from './findUser';

const fs = require('fs');

const hyruleCastle: number = 10;

let i: number;
try {
  const contentPlayers: string = fs.readFileSync('./json/players.json', 'utf-8');
  const user: Player[] = JSON.parse(contentPlayers);
  const contentEnemies: string = fs.readFileSync('./json/enemies.json', 'utf-8');
  const userenemy: Enemy = JSON.parse(contentEnemies);
  const contentBosses: string = fs.readFileSync('./json/bosses.json', 'utf-8');
  const userboss: Boss = JSON.parse(contentBosses);

  const player = FindUser(user);
  player.hpMax = player.hp;

  for (i = 1; i <= hyruleCastle; i += 1) {
    if (player.hp <= 0) {
      console.log('\x1b[31m' + 'LOOOOOOSER !' + '\x1b[0m');
      break;
    } else if (i < hyruleCastle) {
      const enemy = FindUser(userenemy);
      enemy.hpMax = enemy.hp;
      console.log('\x1b[33m' + `${player.name} VS ${enemy.name}` + '\x1b[0m');
      if (player.hp > 0 || enemy.hp > 0) {
        fightDisplay(player, enemy, player.hpMax, enemy.hpMax, i);
      }
    } else if (i === hyruleCastle) {
      const boss = FindUser(userboss);
      boss.hpMax = boss.hp;
      console.log('\x1b[33m' + `${player.name} VS ${boss.name}` + '\x1b[0m');
      fightBossDisplay(player, boss, player.hpMax, boss.hpMax, i);
    }
  }
} catch (error) {
  console.error('Wrong use of the program.');
}
