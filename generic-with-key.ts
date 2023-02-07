function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  {
    name: 'MINI',
    age: 12,
  },
  {
    name: 'LG',
    age: 10,
  },
];

console.log(pluck(dogs, 'name'));
