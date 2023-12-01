import Enemy from './interfaces/Enemy';
import Player from './interfaces/Player';
import Boss from './interfaces/Boss';

function attack(player: Player, enemy: Enemy) {
  enemy.hp -= player.str;
}

function heal(player: Player, hpMaxPlayer: number) {
  const middle = hpMaxPlayer / 2;
  if (player.hp >= middle) {
    player.hp = hpMaxPlayer;
  } else {
    player.hp += middle;
  }
}

function enemyAttack(player: Player, enemy: Enemy) {
  player.hp -= enemy.str;
}

function bossAttack(player: Player, boss: Boss) {
  player.hp -= boss.str;
}

export default {
  attack, heal, enemyAttack, bossAttack,
};
