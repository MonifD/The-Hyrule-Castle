import Player from './interfaces/Player';
import Boss from './interfaces/Boss';
import fightLib from './fightLib';
import barVie from './barVie';

const readline = require('readline-sync');

function fightDisplay(player: Player, boss: Boss, hpMaxPlayer: number, hpMaxBoss: number, i: number) {
  while (player.hp > 0 && boss.hp > 0) {
    console.clear();
    console.log(`==================== FINAL ROUND ${i} ====================`);
    console.log('\x1b[33m' + `${player.name}` + '\x1b[0m');
    barVie(player.hp, hpMaxPlayer);
    console.log('\x1b[31m' + `${boss.name}` + '\x1b[0m');
    barVie(boss.hp, hpMaxBoss);
    const action = readline.question('1: attack / 2: heal\n').toLowerCase();
    if (action === '1') {
      fightLib.attack(player, boss);
    } else if (action === '2') {
      fightLib.heal(player, hpMaxPlayer);
    }
    if (boss.hp > 0) {
      fightLib.bossAttack(player, boss);
    }
  }
  player.hp;
  boss.hp;

  if (boss.hp <= 0) {
    console.log('\x1b[32m' + 'Congratulations ... you\'ve win the Hyrule Castel !');
  }
  if (player.hp <= 0) {
    console.clear();
    console.log('\x1b[31m' + 'LOOOOOOSER !');
  }
}

export default fightDisplay;
