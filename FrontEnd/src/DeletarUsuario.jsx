import { useState } from "react"

import Topo from "./Topo.jsx"
import DeletarConteudo from './DeletarConteudo.jsx'
import Camada6 from "./Camada6.jsx"
import './DeletarConteudo.scss'

export default function DeletarUsuario() {
  return (
    <div>
      <Topo />
      <DeletarConteudo/>
      <Camada6/>
    </div>
  )
}
