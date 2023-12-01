function CalculR(max: number) {
  let random: number;
  random = Math.floor(Math.random() * max);
  if (random < 51) {
    random = 1;
  } else if (random >= 51 && random < 81) {
    random = 2;
  } else if (random >= 81 && random < 96) {
    random = 3;
  } else if (random >= 96 && random < 100) {
    random = 4;
  } else if (random === 100) {
    random = 5;
  }
  return random;
}

export default CalculR;
