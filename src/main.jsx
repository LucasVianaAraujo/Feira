import { BrowserRouter, Routes, Route } from 'react-router'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
    </Routes>
  </BrowserRouter>
)