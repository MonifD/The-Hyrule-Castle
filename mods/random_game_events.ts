import CalculR from './RandomR';

const readline = require('readline-sync');

function room(hpMax: number, int: number, str: number) {
  const random: number = CalculR(100);
  if (random === 1) {
    console.log('\x1b[31m' + '=========== FAIL : YOU ARE TRAP ===========' + '\x1b[0m');
    console.log(`Your int is ${int} and your str is ${str}.\n`);
    const trapRarity: number = CalculR(100);
    if (trapRarity === 1 || trapRarity === 2) {
      if (str >= 10) {
        console.log('you\'ve been trap but you\'ve enought str to leave');
        const action = readline.question('\x1b[96m' + '\nReady to leave ? : \n' + '\x1b[0m').toLowerCase();
        if (action) {
          return hpMax;
        }
      } else {
        console.log(`you have ${str} str. You need 10 to leave. Damn you're trap.`);
        console.log('you just can quit and loose between 5% and 15% of his maximum HP');
        const action = readline.question('\x1b[96m' + '\nReady to leave ? : \n' + '\x1b[0m').toLowerCase();
        if (action) {
          const loose: number = CalculR(100);
          if (loose === 1) {
            hpMax = (95 * hpMax) / 100;
          } else if (loose === 2) {
            hpMax = (93 * hpMax) / 100;
          } else if (loose === 3) {
            hpMax = (90 * hpMax) / 100;
          } else if (loose === 4) {
            hpMax = (88 * hpMax) / 100;
          } else {
            hpMax = (85 * hpMax) / 100;
          }
          return hpMax;
        }
      }
    } else if (int >= 10) {
      console.log('you\'ve been trap but you\'ve enought int to leave');
      const action = readline.question('\x1b[96m' + '\nReady to leave ? : \n' + '\x1b[0m').toLowerCase();
      if (action) {
        return hpMax;
      }
    } else {
      console.log(`you have ${int} int. You need 10 to leave. Damn you're trap.`);
      console.log('you just can quit and loose between 5% and 15% of his maximum HP');
      const action = readline.question('\x1b[96m' + '\nReady to leave ? : \n' + '\x1b[0m').toLowerCase();
      if (action) {
        const loose: number = CalculR(100);
        if (loose === 1) {
          hpMax = (95 * hpMax) / 100;
        } else if (loose === 2) {
          hpMax = (93 * hpMax) / 100;
        } else if (loose === 3) {
          hpMax = (90 * hpMax) / 100;
        } else if (loose === 4) {
          hpMax = (88 * hpMax) / 100;
        } else {
          hpMax = (85 * hpMax) / 100;
        }
        return hpMax;
      }
    }
  } else {
    console.log('=========== YOU ARE IN THE TREASURE ROOM ===========');
    const win: number = CalculR(100);
    let coinBonus: number;
    if (win === 1) {
      coinBonus = 3;
    } else if (win === 2 || win === 3) {
      coinBonus = 4;
    } else {
      coinBonus = 5;
    }
    console.log(`You\'ve earn ${coinBonus} coins`);
    const action = readline.question('\x1b[96m' + 'Congratulations. Return to game ?\n' + '\x1b[0m').toLowerCase();
    if (action) {
      return coinBonus;
    }
  }
}

export default room;
