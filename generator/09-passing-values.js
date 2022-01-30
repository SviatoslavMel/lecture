function* generatorFunction(name) {
  while (true) {
    name = yield `My name is ${name}`
  }
}

// Initiate a generator and seed it with an initial value
const generator = generatorFunction('Java');

console.log(generator.next('Why not ME?'));
console.log(generator.next('GO'));
console.log(generator.next('Python'));
console.log(generator.next('Java Script'));
