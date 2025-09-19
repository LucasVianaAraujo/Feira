import { useState } from "react"
import { Link } from "react-router"
import { useNavigate } from "react-router";
import api from "./api.js";

export default function LoginConteudo() {
  const [email, setEmail] = useState('');
  const [cadastro, setCadastro] = useState('');

  const navigate = useNavigate();

  async function Enviar() {
    await api.get('/verificar/visitante/' + email + '/' + cadastro, {
      "email": email,
      "cpf": cadastro
    })
      .then((resposta) => {
        if (resposta.data.length === 0) {
          alert('Email ou CPF inválidos!')
          return;
        }

        const visitante = resposta.data[0];

        alert('Visitante encontrado!')
        navigate('/TelaDetalhes', { state: { nome: visitante.nome, codigo: visitante.numero_qrcode } })
      })
      .catch(() => {
        alert('Erro ao Logar')
      });
  }

  return (
    <div className='fundo_colorido10'>

      <div className="titulo">
        <h1>LOGIN <span>USUÁRIO</span></h1>
      </div>
      <div className="bloco_login">
        <label>EMAIL:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>CPF:</label>
        <input value={cadastro} onChange={(e) => setCadastro(e.target.value)} />
        <button id="botao-acessar" onClick={Enviar}>ACESSAR</button>
      </div>
        <Link to={'/LoginUser'}>
          <button id="botao-administrador">ADMINISTRADOR</button>
        </Link>
      <div className="verifica">
      </div>

    </div>
  )
}
