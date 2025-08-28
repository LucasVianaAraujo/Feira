import { connection } from "../Connection.js";

export async function AdicionarVisitante(NovoUsuario) {
    const comando = `
    INSERT INTO cadastro
    (nome,
    escolaridade,
    interesse_curso,
    previsao_chegada,
    email,
    sabendo_feira,
    telefone,
    ex_aluno,
    cpf)
    VALUES
    (?,?,?,?,?,?,?,?,?)
    `

    const [info] = await connection.query(comando, [
        NovoUsuario.nome,
        NovoUsuario.escolaridade,
        NovoUsuario.interesse_curso,
        NovoUsuario.previsao_chegada,
        NovoUsuario.email,
        NovoUsuario.sabendo_feira,
        NovoUsuario.telefone,
        NovoUsuario.ex_aluno,
        NovoUsuario.cpf
    ])

    return info.affectedRows;
}