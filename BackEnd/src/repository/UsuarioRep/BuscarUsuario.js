import { connection } from "../Connection.js";

export async function BuscarUsuario(nome) {
    let comando = `
    SELECT

    NOME    visitante,
    CPF     cpf_visitante

    FROM CADASTRO
    WHERE NOME like ?
    `

    let resposta = await connection.query(comando, ['%' + nome + '%']);
    let registros = resposta[0];

    return registros;
}