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
console.log(pluck(dogs, 'age'));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent('addToCart', {
  productID: 'foo',
  quantity: 10,
  time: 23,
  user: 'Joonho',
});

sendEvent('checkout', { time: 10, user: 'louis' });
