/** функція генератор */
function* generateFunction() {
  yield 1;
  yield 2;
  yield 3;
}

// Assign the Generator object to generator
const generator = generateFunction();

const result1 = generator.next()
console.log(`result1: ${JSON.stringify(result1)}\n`);

const result2= generator.return('There is no result')
console.log(`result2: ${JSON.stringify(result2)}\n`);

const result3 = generator.next();
console.log(`result3: ${JSON.stringify(result3)}\n`);
