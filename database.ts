interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storeState: string): void;
}
class InMemoryDatabase implements Database {
  protected db: Record<string, string> = {};
  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storeState: string): void {
    this.db = JSON.parse(storeState);
  }
}

const myDB = new PersistentMemoryDB();
myDB.set('foo', 'bar');
// myDB.db["foo"] = "baz"

console.log(myDB.get('foo'));
// console.log(myDB.saveToString());
// console.log(myDB.restoreFromString('baz'));

const saved = myDB.saveToString();
myDB.set('foo', 'db1 - bar');
console.log(myDB.get('foo'));

const myDB2 = new PersistentMemoryDB();
myDB2.restoreFromString(saved);
console.log(myDB2.get('foo'));
console.log(myDB.get('foo'));
