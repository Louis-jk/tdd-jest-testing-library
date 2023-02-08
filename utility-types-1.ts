interface MyUser {
  name: string;
  id: string;
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
      id: 'foo',
      email: 'lippoint.surf0622@gmail.com',
    },
    {
      email: 'lippoint.surf0622@gmail.com',
    }
  )
);

type RequireMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, 'email' | 'name'>;

const mapById = (users: MyUser[]): Record<string, MyUser> => {
  return users.reduce((a, v) => {
    return {
      ...a,
      [v.id]: v,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 'foo',
      name: 'Mr. Foo',
    },
    {
      id: 'baz',
      name: 'Mr. Baz',
    },
  ])
);
