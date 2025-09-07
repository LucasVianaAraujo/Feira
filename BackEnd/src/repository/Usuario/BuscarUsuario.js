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

export async function BuscarVisitanteFeiraFiltro(nome) {
    const comando = `
    SELECT * FROM CADASTRO
    WHERE nome
    LIKE ?
    `

    const [info] = await connection.query(comando, [`%${nome}%`])
    return info;
}

export async function BuscarVisitanteFeira(nome) {
    const comando = `
    SELECT * FROM CADASTRO
    WHERE nome
    LIKE ?
    `

    const [info] = await connection.query(comando, [`%${nome}%`])
    return info;
}