class Doggy {
  constructor(public readonly name: string, public age: number) {}
}

const lgg = new Doggy('LG', 13);
lgg.age = 22;

console.log(lgg.name);

class DogList {
  private doggies: Doggy[] = [];

  static instance: DogList = new DogList();

  private constructor() {} // javascript 싱글톤 구현

  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs() {
    return this.doggies;
  }
}

DogList.addDog(lgg);
console.log(DogList.instance.getDogs());

// const dl = new DogList(); javascript 싱글톤 구현
