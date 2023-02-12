class Doggy {
  public name: string = '';
  public age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const lgg = new Doggy('LG', 13);
console.log(lgg.age);
