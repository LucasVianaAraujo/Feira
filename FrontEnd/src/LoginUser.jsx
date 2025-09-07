import React from 'react'

import Topo from './Topo.jsx'
import Rodapé from './Camada6.jsx'
import ConteudoLogin from './LoginUserContact.jsx'
import './LoginUserContact.scss'

export default function LoginUser() {
  return (
    <div>
      <Topo/>
      <ConteudoLogin/>
      <Rodapé/>
    </div>
  )
}