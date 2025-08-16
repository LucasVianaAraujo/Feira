import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '25012006',
    database: 'FEIRACADASTRO'
})

export { connection }