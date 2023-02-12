abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`attack with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;
}

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return 'Hadoken';
  }
}

class Ken extends StreetFighter {
  getSpecialAttack(): string {
    return 'AttataTuruken';
  }
}

const ryu = new Ryu();
const ken = new Ken();
// console.log(ryu.getSpecialAttack());
ryu.fight();
ken.fight();
