export function validarNovoUsuario(novoUsuario) {
    if (!novoUsuario.nome)
        throw new Error('Nome do visitante obrigatório.');

    if (!novoUsuario.escolaridade)
        throw new Error('O campo escolaridade é obrigatório.');

    if (!novoUsuario.interesse_curso)
        throw new Error('O campo interesse é obrigatório.');

    if (!novoUsuario.previsao_chegada)
        throw new Error('O campo previsão é obrigatório.');

    if (!novoUsuario.email)
        throw new Error('O campo email é obrigatório.');

    if (!novoUsuario.sabendo_feira)
        throw new Error('O campo feira é obrigatório.');

    if (!novoUsuario.telefone)
        throw new Error('O campo telefone é obrigatório.');

    if (!novoUsuario.ex_aluno)
        throw new Error('O campo aluno do frei é obrigatório.');

    if (!novoUsuario.cpf)
        throw new Error('O campo cpf é obrigatório.');
}