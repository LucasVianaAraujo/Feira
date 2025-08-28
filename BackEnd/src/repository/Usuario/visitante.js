import { connection } from "../Connection.js";

export async function Login(NovoLog) {
    const comando = `
    INSERT INTO ADMIN
    (Email,
    Login)
    VALUES
    (?,?)
    `

    const [info] = await connection.query(comando, [
        NovoLog.Email,
        NovoLog.Login
    ])

    return info.affectedRows;
}