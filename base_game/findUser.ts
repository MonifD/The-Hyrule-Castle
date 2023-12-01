import CalculR from './RandomR';

function FindUser(user: any) {
  const r: number = CalculR(101);

  for (const find of user) {
    if (find.rarity === r) {
      return find;
    }
  }
}

export default FindUser;
