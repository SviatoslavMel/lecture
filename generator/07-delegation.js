function* delegation(){
  yield 3;
  yield 4;
}

/** функція генератор */
function* generateFunction() {
  yield 1;
  yield 2;
  yield* delegation();
}

// Assign the Generator object to generator
const generator = generateFunction();

console.log(...generator)
