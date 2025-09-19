import React from 'react'
import { useState } from 'react';
import api from './api.js'

export default function DeletarConteudo() {
  const [id_visitante, setVisitante] = useState('');

  async function Deletar() {
    await api.delete('/admin/deletar/' + id_visitante)
      .then(() => alert('Visitante Deletado!'))
      .catch(() => alert('Erro ao Deletar Visitante'))
  }

  return (
    <div className='fundo_colorido12'>
      <div className="titulo_deletar">
        <h1>DELETAR</h1>
        <span>VISITANTE</span>
      </div>
      <div className="caixa_deletar">
        <label>ID VISITANTE:</label>
        <input value={id_visitante} onChange={(e) => setVisitante(e.target.value)} />
        <button onClick={Deletar}>Deletar</button>
      </div>
    </div>
  )
}
