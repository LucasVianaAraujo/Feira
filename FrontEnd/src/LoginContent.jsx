import { useState } from 'react'
import api from './api.js'
import { Link } from 'react-router'

function CadastroUsuario() {
    const [nome, setNome] = useState('')
    const [escolaridade, setEscolaridade] = useState('')
    const [interesse_curso, setInteresseCurso] = useState('')
    const [previsao_chegada, setPrevisaoChegada] = useState('')
    const [email, setEmail] = useState('')
    const [sabendo_feira, setSabendoFeira] = useState('')
    const [telefone, setTelefone] = useState('')
    const [ex_aluno, setAlunoFrei] = useState('')
    const [cpf, setCpf] = useState('')

    async function CadastrarAluno(e) {
        e.preventDefault();

        await api.post('/cadastro/novousu', {
            "nome": nome,
            "escolaridade": escolaridade,
            "interesse_curso": interesse_curso,
            "previsao_chegada": previsao_chegada,
            "email": email,
            "sabendo_feira": sabendo_feira,
            "telefone": telefone,
            "ex_aluno": ex_aluno,
            "cpf": cpf
        })
            .then(() => {
                alert('Usuário Cadastrado!');
                setNome('');
                setEscolaridade('');
                setInteresseCurso('');
                setPrevisaoChegada('');
                setEmail('');
                setSabendoFeira('');
                setTelefone('');
                setAlunoFrei('');
                setCpf('');
            })
            .catch(() => alert('Erro ao cadastrar usuário'));
    }

    return (
        <div className="fundo_colorido9">
            <div className="titulo_cadastro">
                <h2>CADASTRAR SUA</h2> 
                <span>INSCRIÇÃO</span>
            </div>

            <div className="campo_input">
                <form onSubmit={CadastrarAluno}>
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)} />

                    <label>Escolaridade:</label>
                    <select value={escolaridade} onChange={e => setEscolaridade(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="Fundamental Completo">Fundamental Completo</option>
                        <option value="Médio Completo">Médio Completo</option>
                        <option value="Superior Completo">Superior Completo</option>
                        <option value="Pós-graduação">Pós-graduação</option>
                        <option value="Não Alfabetizado">Não Alfabetizado</option>
                        <option value="Prefiro não informar">Prefiro não informar</option>
                    </select>

                    <label>Interesse em algum de nossos cursos?</label>
                    <select value={interesse_curso} onChange={e => setInteresseCurso(e.target.value)}>
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

                    <label>Previsão de Chegada:</label>
                    <input type="time" value={previsao_chegada} onChange={e => setPrevisaoChegada(e.target.value)} />

                    <label>Email:</label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <label>Como soube da feira:</label>
                    <select value={sabendo_feira} onChange={e => setSabendoFeira(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="Instituto">Instituto</option>
                        <option value="Amigos ou colegas">Amigos ou colegas</option>
                    </select>

                    <label>Telefone:</label>
                    <input type="text" value={telefone} onChange={e => setTelefone(e.target.value)} />

                    <label>Já foi aluno do Instituto?</label>
                    <select value={ex_aluno} onChange={e => setAlunoFrei(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>

                    <label>CPF:</label>
                    <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} />

                    <button type="submit">Finalizar Inscrição</button>
                </form>

                <Link to={'/buscarvisitante'}>
                    <button id='botao1'>DESCOBRIR VISITANTES</button>
                </Link>

                <Link to={'/loginuser'}>
                    <button id='botao2'>LOGIN</button>
                </Link>
            </div>
        </div>
    )
}

export default CadastroUsuario
