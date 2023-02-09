interface Cat {
  name: string;
  breed: string;
}

function makeCat(name: string, breed: string): Readonly<Cat> {
  return {
    name,
    breed,
  };
}

const usul = makeCat('Usul', 'Tabby');
// usul.name = 'Piter';

console.log('====================================');
console.log(usul);
console.log('====================================');
