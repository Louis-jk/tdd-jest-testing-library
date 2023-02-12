class Doggy {
  constructor(public readonly name: string, public age: number) {}
}

const lgg = new Doggy('LG', 13);

console.log(lgg.name);

class DogList {
  private doggies: Doggy[] = [];

  static instance: DogList = new DogList();

  private constructor() {} // javascript 싱글톤 구현
}

DogList.instance; // javascript 싱글톤 구현

// const dl = new DogList(); javascript 싱글톤 구현
