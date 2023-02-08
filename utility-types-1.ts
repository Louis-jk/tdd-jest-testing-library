interface MyUser {
  name: string;
  id: string;
  email?: string;
}

interface MyUserOptionals {
  name?: string;
  id?: string;
  email?: string;
}

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
