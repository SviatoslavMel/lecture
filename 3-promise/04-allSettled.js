// get the client
const mysql2 = require('mysql2/promise');

// create the connection to database
const pool = mysql2.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '111111',
    database: 'lecture'
});

/** Отримання інформації про авто
 * @param {Number} id  оголошення */
const getAuto = (id) => pool.query('SELECT * FROM lecture.auto WHERE id=?', [id])
    .then(([[data]]) => data);

/** Отримання інформації про марку
 * @param {Number} id  оголошення */
const getMarka = (id) => Promise.reject('Some Error');

/** Отримання інформації про модель
 * @param {Number} id  оголошення */
const getModel = (id) => pool.query('SELECT * FROM lecture.model WHERE id=?', [id])
    .then(([[data]]) => data);

/** Функція для виводу інформації про авто (callback-функція)
 * @param data */
const printAuto = (data) => console.log(data);


getAuto(1)
    .then((autoData) => Promise.allSettled([
            getMarka(autoData.marka_id),
            getModel(autoData.model_id)
        ])
            .then(([marka, model]) =>
                printAuto({...autoData, marka, model})));



