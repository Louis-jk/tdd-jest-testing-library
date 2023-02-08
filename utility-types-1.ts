interface MyUser {
  name: string;
  id: number;
  email?: string;
}

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: 'Joonho',
      id: 2,
      email: 'lippoint.surf0622@gmail.com',
    },
    {
      email: 'lippoint.surf0622@gmail.com',
    }
  )
);

type RequireMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, 'email' | 'name'>;

type UserWithoutID = Omit<MyUser, 'id'>;

const mapById = (users: MyUser[]): Record<MyUser['id'], UserWithoutID> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 1,
      name: 'Mr. Foo',
    },
    {
      id: 2,
      name: 'Mr. Baz',
    },
  ])
);
