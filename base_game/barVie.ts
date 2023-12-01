function barVie(hp, hpMax) {
  const barVie: any = [];
  let k: number;
  let l: number;
  const damage = hpMax - hp;

  for (k = 1; k <= hp; k += 1) {
    barVie.push('|');
  }
  for (l = 1; l <= damage; l += 1) {
    barVie.push('_');
  }

  const j: any = barVie.join('');

  console.log(`HP ${j} ${hp}/${hpMax} \n`);
}

export default barVie;
