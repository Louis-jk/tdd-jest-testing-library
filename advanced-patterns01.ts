interface Pocketmon {
  id: string;
  attack: number;
  defense: number;
}

interface BaseRecord {
  id: string;
}

interface Database<T extends BaseRecord> {
  set(newValue: T): void;
  get(id: string): T | undefined;
}

class InMemoryDatabase<T extends BaseRecord> implements Database<T> {
  private db: Record<string, T> = {};

  public set(newValue: T) {
    this.db[newValue.id] = newValue;
  }

  public get(id: string): T | undefined {
    return this.db[id];
  }
}

const pocketmonDB = new InMemoryDatabase<Pocketmon>();
pocketmonDB.set({
  id: 'Bulbasaur',
  attack: 50,
  defense: 10,
});

console.log(pocketmonDB.get('Bulbasaur'));
