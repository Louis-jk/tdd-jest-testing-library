abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.name} attack with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return 'Hadoken';
  }

  get name(): string {
    return 'Ryu';
  }
}

class Ken extends StreetFighter {
  getSpecialAttack(): string {
    return 'AttataTuruken';
  }

  get name(): string {
    return 'Ken';
  }
}

class ChunLi extends StreetFighter {
  getSpecialAttack(): string {
    return 'Lightning Kick';
  }

  get name(): string {
    return 'Chun-Li';
  }
}

const ryu = new Ryu();
const ken = new Ken();
const chunli = new ChunLi();
// console.log(ryu.getSpecialAttack());
ryu.fight();
ken.fight();
chunli.fight();
