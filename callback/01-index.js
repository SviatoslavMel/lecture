// get the client
const mysql2 = require('mysql2');

// create the connection to database
const connection = mysql2.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '111111',
    database: 'lecture'
});

/** Отримання інформації про авто (ФУНКЦІЯ ВИЩОГО ПОРЯДКУ)
 * @param {Number} id  оголошення
 * @param {function} callback - функція зворотнього виклику */
function getAuto(id, callback) {
    const qs = 'SELECT * FROM lecture.auto WHERE id=?';
    return connection.query(qs, [id],function (err, results) {
            if (err) {
                console.error(err)
            } else {
                return callback(results)
            }
        }
    );
}

/** Функція для виводу інформації про авто (callback-функція)
 * @param data */
function printAuto(data) {
    console.log(data);
    process.exit(0);
}

getAuto(1, printAuto);
