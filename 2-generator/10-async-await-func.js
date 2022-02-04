// get the client
const mysql2 = require('mysql2/promise');

// create the connection to database
const pool = mysql2.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '111111',
    database: 'lecture'
});

// Define a function named asyncAlt that takes a generator function as an argument
function asyncAlt(generatorFunction) {
  return function() {
    // Create and assign the generator object
    const generator = generatorFunction(...arguments)

    // Define a function that accepts the next iteration of the generator
    function resolve(next) {
      // If the generator is closed and there are no more values to yield, resolve the last value
      if (next.done) {
        return Promise.resolve(next.value)
      }

      // If there are still values to yield, they are promises and must be resolved.
      return Promise.resolve(next.value).then(response => {
        return resolve(generator.next(response))
      })
    }
    return resolve(generator.next())
  }
}

/** Отримання інформації про авто
 * @param {Number} id  оголошення */
const getAuto = function *(id) {
    const [ [ autoData ] ] = yield pool.query('SELECT * FROM lecture.auto WHERE id=?', [id]);
    const [  [ marka ] ] = yield pool.query('SELECT * FROM lecture.marka WHERE id=?', [autoData.marka_id]);
    const [ [ model ] ] = yield pool.query('SELECT * FROM lecture.model WHERE id=?', [autoData.model_id]);
    return { ...autoData, marka, model}
};

/** Функція для виводу інформації про авто (callback-функція)
 * @param data */
function printAuto(data) {
    console.log(data);
    process.exit(0);
}
asyncAlt(getAuto)(1).then((data) => printAuto(data))

