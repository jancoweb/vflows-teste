import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Pages/Login'
import Home from './Pages/Home'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DadosNF from './Pages/DadosNF'
import { GlobalProvider } from './context/globalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/:id' element={<DadosNF />} />
      </Routes>
    </Router>
  </GlobalProvider>
)
