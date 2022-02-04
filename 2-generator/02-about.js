/** функція генератор */
function* generateFunction() {
  yield 1;
  yield 2;
  return 3;
}
console.log(`typeof "generateFunction":${typeof generateFunction}\n`);

// Assign the Generator object to generator
const generator = generateFunction();
console.log(`typeof "generator":${typeof generator}`);
console.log(`generator:${generator}\n`);

const result1 = generator.next();
console.log(`typeof "result1":${typeof result1}`);
console.log(`result1: ${JSON.stringify(result1)}\n`);

const result2= generator.next();
console.log(`result2: ${JSON.stringify(result2)}\n`);

const result3 = generator.next();
console.log(`result3: ${JSON.stringify(result3)}\n`);

const result4 = generator.next();
console.log(`result4: ${JSON.stringify(result4)}\n`);
