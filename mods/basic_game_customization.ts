import game from './gameStruct';
import gameSaved from './gameStructSaved';

const readline = require('readline-sync');

function startGame() {
  console.clear();
  console.log('\x1b[46m' + '=========== WELCOME to HRYULE CASTLE ===========' + '\x1b[0m');
  const response = readline.question('Press S to start\nPress C to Continue last save\nPress Q to quit\n').toLowerCase();
  let difficulty: number = 1;
  if (response === 'q') {
    process.exit(1);
  } else if (response === 'c') {
    gameSaved();
  } else if (response === 's') {
    console.clear();
    console.log('\x1b[46m' + '=========== WELCOME to HRYULE CASTLE ===========' + '\x1b[0m');
    const action = readline.question('difficulty mod ?\nPress 1: normal    2: diffult    3: insane\n').toLowerCase();
    if (action === '1') {
      const Round = readline.question('How many round ? 10,20,50,100 ?\n').toLowerCase();
      if (Round === '10' || Round === '20' || Round === '50' || Round === '100') {
        game(difficulty, Round);
      }
    } else if (action === '2') {
      difficulty *= 1.5;
      const Round = readline.question('How many round ? 10,20,50,100 ?\n').toLowerCase();
      if (Round === '10' || Round === '20' || Round === '50' || Round === '100') {
        game(difficulty, Round);
      }
    } else if (action === '3') {
      difficulty *= 2;
      const Round = readline.question('How many round ? 10,20,50,100 ?\n').toLowerCase();
      if (Round === '10' || Round === '20' || Round === '50' || Round === '100') {
        game(difficulty, Round);
      }
    }
  }
}

export default startGame;
