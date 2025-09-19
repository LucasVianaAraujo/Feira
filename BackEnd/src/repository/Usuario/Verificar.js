import { connection } from "../Connection.js";

export async function Verificar(email, cpf) {
    const comando = `
    SELECT email, cpf
    FROM administrador
    WHERE email = ?
    AND cpf = ?
    `

    const [info] = await connection.query(comando, [
        email,
        cpf
    ])

    return info;
}