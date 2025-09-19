import { connection } from "../Connection.js";

export async function VeficiarVisitante(email, cpf) {
    const comando = `
    SELECT cadastrofeira.email, cadastrofeira.cpf, cadastrofeira.nome, qrcode.numero_qrcode
    FROM cadastrofeira
    INNER JOIN qrcode ON cadastrofeira.id_visitante = qrcode.id_qrcode
    WHERE email = ?
    AND cpf = ?
    `

    const [info] = await connection.query(comando, [
        email, cpf
    ])

    return info;
}