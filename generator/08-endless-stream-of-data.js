/** Create a fibonacci generator function */
function* fibonacci() {
  let prevNumber = 0
  let nextNumber = 1

  yield prevNumber
  yield nextNumber

  // Add previous and next values and yield them forever
  while (true) {
    const newVal = nextNumber + prevNumber

    yield newVal

    prevNumber = nextNumber
    nextNumber = newVal
  }
}

// Print the first 10 values of fibonacci
const fib = fibonacci()

for (let i = 0; i < 10; i++) {
  console.log(fib.next().value)
}
