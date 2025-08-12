import { BrowserRouter, Routes, Route } from 'react-router'

import App from './App.jsx'
import Sobre from './Sobre.jsx'

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/Sobre' element={<Sobre/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}