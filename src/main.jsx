import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './components/Login/Login'
import Home from './components/Main/Home'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  </Router>
)
