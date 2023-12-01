function barVie(hp: number, hpMax: number) {
  const barlength = 50;
  const barVide: any = [];
  let k: number;
  let l: number;
  const purcentage = (hp / hpMax) * 100;
  const iCount = Math.round((purcentage * barlength) / 100);
  const roundHP = Math.round(hp);

  let color = '\x1b[32m';
  if (purcentage < 40) {
    color = '\x1b[33m';
  }
  if (purcentage < 20) {
    color = '\x1b[31m';
  }

  for (k = 1; k <= iCount; k += 1) {
    barVide.push(`${color}|` + '\x1b[0m');
  }
  for (l = 1; l <= barlength - iCount; l += 1) {
    barVide.push('-');
  }

  const j: any = barVide.join('');

  console.log(`HP ${j} ${roundHP}/${hpMax} \n`);
}

export default barVie;
