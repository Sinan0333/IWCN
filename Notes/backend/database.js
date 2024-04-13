const mysql = require('mysql2')

const pool = mysql.createPool({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER,
    database: process.env.MY_SQL_DATABASE ,
    password: process.env.MY_SQL_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise()


async function createNote (date,heading,note){
   try {

        const result = await pool.query(`
        INSERT INTO notes (date,heading,note)
        VALUES (?,?,?)
        `,[date,heading,note])
        return result

   } catch (error) {
        throw error
   }
}

async function getAllNotes (){
   try {

        const [rows] = await pool.query('SELECT * FROM notes');
        return rows

   } catch (error) {
    throw error
   }
}

async function deleteNoteById(id) {
    try {

        const [result] = await pool.query('DELETE FROM notes WHERE id = ?', [id]);
        return result;

    } catch (error) {
        throw error
    }
}

module.exports={
    createNote,
    getAllNotes,
    deleteNoteById
}