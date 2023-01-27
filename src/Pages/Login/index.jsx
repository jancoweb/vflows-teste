import './Login.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import checkCNPJ from '../../services/checkCNPJ';

function Login() {

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    // vamos checar antes do login
    checkCNPJ();

    // guardar o token no localstorage

    // navegar p home
    navigate('/home');
  }

  return (
    <div className="Wrapper">
      <div className='Login-container'>
        <div className="Logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="Form-container">
          <h2>PAGAMENTO DE FORNECEDOR</h2>
          <form>
            <div className='Input-container'>
              <label>CNPJ</label>
              {/* INPUT PRA MUDAR COM UNFORM */}
              <input type="text" />
            </div>
            <button type='submit' onClick={(e) => handleLogin(e)}>Acessar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
