import { connection } from "../Connection.js";

export async function DeletarUsuario(Usuario) {
    const comando = `
    DELETE FROM cadastrofeira
    WHERE id_visitante = ?
    `

    const [info] = await connection.query(comando, [
        Usuario
    ]);

    return info;
}