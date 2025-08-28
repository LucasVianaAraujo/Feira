import { connection } from "../Connection.js";

export async function LerQrCode (QrCode) {
    const comando = `
    
    `

    const [info] = await connection.query(comando, [
        QrCode.id_visitante,
        QrCode.numero_qrcode
    ])

    return info.affectedRows;
}