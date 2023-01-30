import LoginPage from './Pages/Login'
import Home from './Pages/Home'
import DadosNF from './Pages/DadosNF'
import GlobalProvider from './context/globalContext'
import { getItem } from './services/localStorage'
import { Outlet } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function ProtectedRoutes({ redirectTo }) {
  const isAuth = getItem('user');
  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />
}

function MyRoutes() {

  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route element={<ProtectedRoutes redirectTo={'/'} />}>
            <Route path='/home' element={<Home />} />
            <Route path='/nota-fiscal' element={<DadosNF />} />
          </Route>
        </Routes>
      </Router>
    </GlobalProvider>
  )
}
export default MyRoutes