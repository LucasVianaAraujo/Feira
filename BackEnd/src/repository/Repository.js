import { connection } from "./Connection.js";
import { validarNovoUsuario } from "../validation/AdicionarUsuarioError.js";

export async function listarUsuarios() {
  const comando = `
    SELECT *
    FROM cadastrofeira
  `

  const [registros] = await connection.query(comando)
  return registros;
}

export async function adicionarUsuarios() {

}

export async function inserirUsuario(novoUsuario) {
  validarNovoUsuario(novoUsuario);

  let horarioFormatado = novoUsuario.previsao_chegada;
  if (horarioFormatado.length === 5) {
    horarioFormatado += ':00';
  }

  const comando = `
    INSERT INTO cadastrofeira (nome, escolaridade, interesse_curso, previsao_chegada, email, sabendo_feira, telefone, ex_aluno, cpf)
               values (?, ?, ? , ? , ? , ? , ? , ?, ?);
  `

  const [info] = await connection.query(comando, [
    novoUsuario.nome,
    novoUsuario.escolaridade,
    novoUsuario.interesse_curso,
    horarioFormatado,
    novoUsuario.email,
    novoUsuario.sabendo_feira,
    novoUsuario.telefone,
    novoUsuario.ex_aluno,
    novoUsuario.cpf
  ])
  return info.insertId;
}