/** функція генератор */
function* generateFunction() {
  yield 1;
  yield 2;
  return 3;
}

// Assign the Generator object to generator
const generator = generateFunction();

// Iterate over Generator object
for (const value of generator) {
  console.log(value)
}
