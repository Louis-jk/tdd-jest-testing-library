interface Database<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storeState: string): void;
}

type DBKeyType = string | number | symbol;
class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB<T, K extends DBKeyType>
  extends InMemoryDatabase<T, K>
  implements Persistable
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storeState: string): void {
    this.db = JSON.parse(storeState);
  }
}

const myDB = new PersistentMemoryDB<string, string>();
myDB.set('foo', 'bar');
// myDB.db["foo"] = "baz"

console.log(myDB.get('foo'));
// console.log(myDB.saveToString());
// console.log(myDB.restoreFromString('baz'));

const saved = myDB.saveToString();
myDB.set('foo', 'db1 - bar');
console.log(myDB.get('foo'));

const myDB2 = new PersistentMemoryDB<string, string>();
myDB2.restoreFromString(saved);
console.log(myDB2.get('foo'));
console.log(myDB.get('foo'));
