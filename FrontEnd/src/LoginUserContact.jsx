import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from './api.js'

export default function LoginUserContact() {
  const [email, setEmail] = useState('');
  const [cadastrounico, setCadastroUnico] = useState('');

  const navigate = useNavigate();

  async function Enviar() {
    await api.get('/verificar/admin/' + email + '/' + cadastrounico, {
      "email": email,
      "cpf": cadastrounico
    })
      .then((resposta) => {
        if (resposta.data.length === 0) {
          alert('Email ou CPF inválidos!')
          return;
        }

        alert('Administrador Logado!')
        navigate('/AdminControl')
      })
      .catch(() => {
        alert('Erro ao Logar')
      });
  }

  return (
    <div className='fundo_colorido10'>

      <div className="titulo">
        <h1>LOGIN <span>ADMINISTRADOR</span></h1>
      </div>
      <div className="bloco_login">
        <label>EMAIL:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>SENHA:</label>
        <input value={cadastrounico} onChange={(e) => setCadastroUnico(e.target.value)} />
      <button id='botao-admin' onClick={Enviar}>ACESSAR</button>
      </div>
      <div className="verifica">
      </div>

    </div>
  )
}