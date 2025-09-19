import { connection } from "../Connection.js";

export async function ReceberQrCode(email, cpf) {
    const comando = `
    SELECT numero_qrcode
    FROM qrcode
    INNER JOIN cadastrofeira ON qrcode.id_qrcode = cadastrofeira.id_visitante
    WHERE cadastrofeira.email = ?
    AND cadastrofeira.cpf = ?
    `

    const [info] = await connection.query(comando, [email, cpf])

    return info;
}