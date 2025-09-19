import { BrowserRouter, Routes, Route } from 'react-router'

import App from './App.jsx'
import Sobre from './Sobre.jsx'
import Cursos from './Cursos.jsx'
import Contato from './Contato.jsx'
import Login from './Login.jsx'
import LoginUser from './LoginUser.jsx'
import BuscarVisitante from './Buscar.jsx'
import AdminControl from './DeletarUsuario.jsx'
import LoginVisitante from './LoginVisitante.jsx'
import TelaDetalhes from './TelaDetalhes.jsx' 

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
                <Route path='/AdminControl' element={<AdminControl/>}/>
                <Route path='/VisitanteLogin' element={<LoginVisitante/>}/>
                <Route path='/TelaDetalhes' element={<TelaDetalhes/>}/>
            </Routes>
        </BrowserRouter>
    )
}