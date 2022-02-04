// get the client
const mysql2 = require('mysql2/promise');

// create the connection to database
const pool = mysql2.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '111111',
    database: 'lecture'
});

/** Отримання інформації про марку
 * @param {Number} id  оголошення */
const getMarka = async (id) => {
    return await pool.query('SELECT * FROM lecture.marka WHERE id=?', [id])
}

/** Отримання інформації про модель
 * @param {Number} id  оголошення */
const getModel = async (id) => {
    return await pool.query('SELECT * FROM lecture.model WHERE id=?', [id])
};

/** Отримання інформації про авто
 * @param {Number} id  оголошення */
const getAuto = async (id) => {
    const [ [ autoData ] ] = await pool.query('SELECT * FROM lecture.auto WHERE id=?', [id]);
    const [ [ markaData ] ] = await getMarka (autoData.marka_id);
    const [ [ modelData ] ] = await getModel (autoData.model_id);
    return { ...autoData, markaData, modelData }
}

/** Функція для виводу інформації про авто (callback-функція)
 * @param data */
const printAuto = (data) => console.log(data);

getAuto(1).then(printAuto)


