import React from 'react'

import Topo from './Topo.jsx'
import Rodape from './Camada6.jsx'
import LoginContent from './LoginContent.jsx'
import './LoginContent.scss'

function Login() {
  return (
    <div>
      <Topo />
      <LoginContent />
      <Rodape/>
    </div>
  )
}

export default Login