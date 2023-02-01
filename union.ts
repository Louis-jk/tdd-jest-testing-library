type HasName = { name: string };
type HasAge = { age: number };

type HasNameOrAge = HasName | HasAge;

const a: HasNameOrAge = { name: 'Joonho' };
const b: HasNameOrAge = { age: 25 };
const c: HasNameOrAge = { name: 'Joonho', age: 25 };

type HasNameAndAge = HasName & HasAge;

const d: HasNameAndAge = { name: 'Joonho' };

console.log('====================================');
console.log('c', c);
console.log('====================================');
