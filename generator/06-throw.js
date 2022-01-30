/** функція генератор */
function* generateFunction() {
  try{
    yield 1;
    yield 2;
    yield 3;
  }catch (e){
    console.error(e);
  }
}

// Assign the Generator object to generator
const generator = generateFunction();

const result1 = generator.next()
console.log(`result1: ${JSON.stringify(result1)}\n`);

const result2= generator.throw(new Error('STOP DOING THIS'))
console.log(`result2: ${JSON.stringify(result2)}\n`);

const result3 = generator.next();
console.log(`result3: ${JSON.stringify(result3)}\n`);
