export function validarNovoUsuario(novoUsuario) {
    if (!novoUsuario.NOME)
        throw new Error('Nome do visitante obrigatório.');

    if (!novoUsuario.ESCOLARIDADE)
        throw new Error('O campo escolaridade é obrigatório.');

    if (!novoUsuario.INTERESSE_CURSO)
        throw new Error('O campo interesse é obrigatório.');

    if (!novoUsuario.PREVISAO_CHEGADA)
        throw new Error('O campo previsão é obrigatório.');

    if (!novoUsuario.EMAIL)
        throw new Error('O campo email é obrigatório.');

    if (!novoUsuario.SABENDO_FEIRA)
        throw new Error('O campo feira é obrigatório.');

    if (!novoUsuario.TELEFONE)
        throw new Error('O campo telefone é obrigatório.');

    if (!novoUsuario.ALUNO_FREI)
        throw new Error('O campo aluno do frei é obrigatório.');

    if (!novoUsuario.CPF)
        throw new Error('O campo cpf é obrigatório.');
}