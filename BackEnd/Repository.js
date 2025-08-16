import { connection } from "./Connection.js";

export async function listarUsuarios() {
    const comando = `
    SELECT *
      FROM CADASTRO
  `

    const [registros] = await connection.query(comando)
    return registros;
}