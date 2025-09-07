import React from 'react'

import Topo from './Topo.jsx'
import Rodapé from './Camada6.jsx'
import BuscarVisitante from './BuscarVisitante.jsx'
import './Buscar.scss'

export default function Buscar() {
  return (
    <div>
      <Topo />
      <BuscarVisitante/>
      <Rodapé />

    </div>
  )
}