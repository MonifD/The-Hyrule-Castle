import CalculR from './RandomR';

function FindUser(user: any) {
  const r: number = CalculR(101);

  for (const find of user) {
    if (find.rarity === r) {
      return find;
    }
  }
}

function findID(user: any, id: number) {
  for (const find of user) {
    if (find.id === id) {
      return find;
    }
  }
}

export default { FindUser, findID };
