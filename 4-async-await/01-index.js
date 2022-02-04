// оголошення функції ВАРІАНТ 1
async function fn1 (){
    console.log('run fn1')
}
console.log('fn1', fn1)

// оголошення функції ВАРІАНТ 2
const fn2 = async () => {
    console.log('run fn2')
}
console.log('fn2', fn2())

fn2().then(fn1)

const fn3 = () => {
    await fn2()
}
