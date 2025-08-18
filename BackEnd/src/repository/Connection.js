import mysql from 'mysql2/promise'

// Obrigatório usar o "process.env" para garantir a integridade do banco de dados, afinal não queremos nosso acesso flutando por aí...
const connection = await mysql.createConnection({
    host: process.env.MY_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB

    // adicionar TYPECAST
})

export { connection }