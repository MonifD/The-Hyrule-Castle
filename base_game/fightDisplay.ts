import Enemy from './interfaces/Enemy';
import Player from './interfaces/Player';
import fightLib from './fightLib';
import barVie from './barVie';

const readline = require('readline-sync');

function fightDisplay(player: Player, enemy: Enemy, hpMaxPlayer: number, hpMaxEnemy: number, i: number) {
  while (player.hp > 0 && enemy.hp > 0) {
    console.clear();
    console.log(`========================== FIGHT ${i} ==========================`);
    console.log('\x1b[33m' + `${player.name}` + '\x1b[0m');
    barVie(player.hp, hpMaxPlayer);
    console.log('\x1b[31m' + `${enemy.name}` + '\x1b[0m');
    barVie(enemy.hp, hpMaxEnemy);
    const action = readline.question('1: attack / 2: heal\n').toLowerCase();
    if (action === '1') {
      fightLib.attack(player, enemy);
    } else if (action === '2') {
      fightLib.heal(player, hpMaxPlayer);
    }
    if (enemy.hp > 0) {
      fightLib.enemyAttack(player, enemy);
    }
    player.hp;
  }
  player.hp;
  enemy.hp = hpMaxEnemy;
  if (enemy.hp <= 0) {
    player.hp;
  }
}

export default fightDisplay;
