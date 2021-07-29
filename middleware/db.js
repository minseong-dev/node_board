const mysql = require('mysql')

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '1234',
    port:3306,
    database : 'boardDB',
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

module.exports = pool