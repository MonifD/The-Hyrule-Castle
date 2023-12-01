import Player from './interfaces/Player';
import Boss from './interfaces/Boss';
import fightLib from './fightLib';
import barVie from './barVie';

const readline = require('readline-sync');

function fightDisplay(player: Player, boss: Boss, hpMaxPlayer: number, hpMaxBoss: number, coin: number) {
  while (player.hp > 0 && boss.hp > 0) {
    console.clear();
    console.log('==================== FIGHT THE BOSS ====================');
    console.log('\x1b[33m' + `${player.name} ${coin} coin(s)` + '\x1b[0m');
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
    console.log('\x1b[32m' + 'Congratulations ... you\'ve kick the boss !' + '\x1b[0m');
  }
  if (player.hp <= 0) {
    console.clear();
    console.log('\x1b[31m' + 'LOOOOOOSER !');
  }
}

export default fightDisplay;
