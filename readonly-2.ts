class Doggy {
  public readonly foo: number = 2;
  constructor(public readonly name: string, public age: number) {}
}

const lgg = new Doggy('LG', 13);

console.log(lgg.name);
console.log(lgg.foo);
