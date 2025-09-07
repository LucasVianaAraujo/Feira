import { BrowserRouter, Routes, Route } from 'react-router'

import App from './App.jsx'
import Sobre from './Sobre.jsx'
import Cursos from './Cursos.jsx'
import Contato from './Contato.jsx'
import Login from './Login.jsx'
import LoginUser from './LoginUser.jsx'
import BuscarVisitante from './Buscar.jsx'

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/Sobre' element={<Sobre />} />
                <Route path='/Cursos' element={<Cursos />} />
                <Route path='/Contato' element={<Contato />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/LoginUser' element={<LoginUser />} />
                <Route path='/BuscarVisitante' element={<BuscarVisitante/>} />
            </Routes>
        </BrowserRouter>
    )
}