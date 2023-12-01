import Player from './interfaces/Player';
import SaveStage from './interfaces/SaveStage';

const readline = require('readline-sync');
const fs = require('fs');

function save(player: Player, difficulty: number, Round: number, i: number, coin: number) {
  const content: string = './json/.jsonsave.json';
  const element = {} as SaveStage;

  const action = readline.question('1:save / 2: continue / 3: quit\n').toLowerCase();
  if (action === '1') {
    element.idPlayer = player.id;
    element.namePlayer = player.name;
    element.strPlayer = player.str;
    element.rarityPlayer = player.rarity;
    element.hpMaxPlayer = player.hpMax;
    element.hpPlayer = player.hp;
    element.rarityPlayer = player.rarity;
    element.Round = Round;
    element.i = i + 1;
    element.coin = coin;
    element.difficulty = difficulty;
    fs.writeFileSync(content, JSON.stringify(element), 'utf-8');
    console.clear();
  }
  if (action === '2') {
    return;
  }
  if (action === '3') {
    process.exit(1);
  }
}

export default save;
