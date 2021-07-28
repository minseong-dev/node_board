const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'board',
})

async function query(sql, args) {
    return new Promise(async (resolve, reject) => {
        // Arrow Function
        try {
            // Check to connection of database
            const conn = await pool.getConnection()

            const [rows, fields] = await pool.query(sql, args)

            conn.release()

            resolve(rows)
        } catch(err) {
            console.error(err)

            resolve([])
        }
    })
}

module.exports = query