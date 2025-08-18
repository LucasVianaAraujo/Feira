import { connection } from "./Connection.js";
import { validarNovoUsuario } from "../validation/AdicionarUsuarioError.js";

export async function listarUsuarios() {
  const comando = `
    SELECT *
      FROM CADASTRO
  `

  const [registros] = await connection.query(comando)
  return registros;
}

export async function adicionarUsuarios() {

}

export async function inserirUsuario(novoUsuario) {
  validarNovoUsuario(novoUsuario);

  const comando = `
    INSERT INTO cadastro (NOME, ESCOLARIDADE, INTERESSE_CURSO, PREVISAO_CHEGADA, EMAIL, SABENDO_FEIRA, TELEFONE, ALUNO_FREI, CPF)
               values (?, ?, ? , ? , ? , ? , ? , ?, ?);
  `

  const [info] = await connection.query(comando, [
    novoUsuario.NOME,
    novoUsuario.ESCOLARIDADE,
    novoUsuario.INTERESSE_CURSO,
    novoUsuario.PREVISAO_CHEGADA,
    novoUsuario.EMAIL,
    novoUsuario.SABENDO_FEIRA,
    novoUsuario.TELEFONE,
    novoUsuario.ALUNO_FREI,
    novoUsuario.CPF
  ])
  return info.insertId;
}