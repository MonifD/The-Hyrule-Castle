import Enemy from './interfaces/Enemy';
import fightLib from './fightLib';
import barVie from './barVie';

const readline = require('readline-sync');

function fightDisplay(player, enemy: Enemy, hpMaxPlayer: number, hpMaxEnemy: number, i: number, coin: number) {
  while (player.hp > 0 && enemy.hp > 0) {
    console.log(`========================== FIGHT ${i} ==========================`);
    console.log('\x1b[33m' + `${player.name} ${coin} coin(s)` + '\x1b[0m');
    barVie(player.hp, hpMaxPlayer);
    console.log('\x1b[31m' + `${enemy.name}` + '\x1b[0m');
    barVie(enemy.hp, hpMaxEnemy);
    console.log('\n======= options =======\n');
    const action = readline.question('1: attack / 2: heal\n\n').toLowerCase();
    if (action === '1') {
      fightLib.attack(player, enemy);
    } else if (action === '2') {
      fightLib.heal(player, hpMaxPlayer);
    }
    if (enemy.hp > 0) {
      fightLib.enemyAttack(player, enemy);
    }
    player.hp;
    console.clear();
  }
  player.hp;
  enemy.hp = hpMaxEnemy;
  if (enemy.hp <= 0) {
    player.hp;
  }
}

export default fightDisplay;
