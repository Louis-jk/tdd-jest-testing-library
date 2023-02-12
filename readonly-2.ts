class Doggy {
  constructor(public readonly name: string, public age: number) {}
}

const lgg = new Doggy('LG', 13);
// lgg.name = 'Foo';
console.log(lgg.name);
