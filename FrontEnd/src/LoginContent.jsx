import React, { useState } from 'react';
import axios from 'axios';

function CadastroUsuario() {
    const [usuario, setUsuario] = useState({
        NOME: '',
        ESCOLARIDADE: '',
        INTERESSE_CURSO: '',
        PREVISAO_CHEGADA: '',
        EMAIL: '',
        SABENDO_FEIRA: '',
        TELEFONE: '',
        ALUNO_FREI: '',
        CPF: ''
    });

    const [mensagem, setMensagem] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({
            ...usuario,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validação básica de campo vazio
        if (!usuario.NOME) {
            setMensagem('O nome é obrigatório!');
            return;
        }

        axios.post('http://localhost:5001/cadastro/novousu', usuario)
            .then(response => {
                setMensagem(`Usuário cadastrado com ID: ${response.data.novoId}`);
                // Limpa o formulário
                setUsuario({
                    NOME: '',
                    ESCOLARIDADE: '',
                    INTERESSE_CURSO: '',
                    PREVISAO_CHEGADA: '',
                    EMAIL: '',
                    SABENDO_FEIRA: '',
                    TELEFONE: '',
                    ALUNO_FREI: '',
                    CPF: ''
                });
            })
            .catch(error => {
                setMensagem('Erro ao cadastrar usuário');
            });
    };

    return (
        <div className="fundo_colorido9">

            <div className="titulo_cadastro">
                <h2>CADASTRAR</h2> 
                <span>SUA INSCRIÇÃO</span>
            </div>

            <div className="campo_input">

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome:</label>
                        <input
                            type="text"
                            name="NOME"
                            value={usuario.NOME}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Escolaridade:</label>
                        <select
                            name="ESCOLARIDADE"
                            value={usuario.ESCOLARIDADE}
                            onChange={handleChange}
                        >
                            <option value="">Selecione</option>
                            <option value="Fundamental Completo">Fundamental Completo</option>
                            <option value="Médio Completo">Médio Completo</option>
                            <option value="Superior Completo">Superior Completo</option>
                            <option value="Pós-graduação">Pós-graduação</option>
                            <option value="Não Alfabetizado">Não Alfabetizado</option>
                            <option value="Prefiro não informar">Prefiro não informar</option>
                        </select>
                    </div>

                    <div>
                        <label>Interesse em algum de nossos cursos?</label>
                        <select
                            name="INTERESSE_CURSO"
                            value={usuario.INTERESSE_CURSO}
                            onChange={handleChange}
                        >
                            <option value="">Selecione</option>
                            <option value="Administração">Administração</option>
                            <option value="Informática">Informática</option>
                            <option value="Comunicação Visual">Comunicação Visual</option>
                            <option value="Eletromecânica de Autos">Eletromecânica de Autos</option>
                            <option value="Automação Residencial e Robótica">Automação Residencial e Robótica</option>
                            <option value="Inglês">Inglês</option>
                            <option value="Eletricista Instalador">Eletricista Instalador</option>
                            <option value="Instituto">Nenhum</option>
                        </select>
                    </div>

                    <div>
                        <label>Previsão de Chegada:</label>
                        <input
                            type="time"
                            name="PREVISAO_CHEGADA"
                            value={usuario.PREVISAO_CHEGADA}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Email:</label>
                        <input
                            type="text"
                            name="EMAIL"
                            value={usuario.EMAIL}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Como soube da feira:</label>
                        <select
                            name="SABENDO_FEIRA"
                            value={usuario.SABENDO_FEIRA}
                            onChange={handleChange}
                        >
                            <option value="">Selecione</option>
                            <option value="Instituto">Instituto</option>
                            <option value="Amigos ou colegas">Amigos ou colegas</option>
                        </select>
                    </div>

                    <div>
                        <label>Telefone:</label>
                        <input
                            type="text"
                            name="TELEFONE"
                            value={usuario.TELEFONE}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Já foi aluno do Instituto?</label>
                        <select
                            name="ALUNO_FREI"
                            value={usuario.ALUNO_FREI}
                            onChange={handleChange}
                        >
                            <option value="">Selecione</option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </select>
                    </div>

                    <div>
                        <label>CPF:</label>
                        <input
                            type="text"
                            name="CPF"
                            value={usuario.CPF}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit">Finalizar Inscrição</button>
                </form>

                {mensagem && <p>{mensagem}</p>}

            </div>

        </div>
    );
}

export default CadastroUsuario;