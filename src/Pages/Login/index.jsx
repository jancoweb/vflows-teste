import './Login.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import checkCNPJ from '../../services/checkCNPJ';
import { saveItem } from '../../services/localStorage';
import { useState } from 'react';
import { useGlobalContext } from '../../context/useGlobalContext';

function Login() {
  const { setContratos } = useGlobalContext();
  const [error, setError] = useState('')
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const cnpj = e.target.cnpj.value;
    const check = checkCNPJ(cnpj);
    if (check == false) {
      setError('CNPJ inválido');
      setTimeout(() => {
        setError('')
      }, 3000);
      return
    }
    saveItem('userCNPJ', cnpj)

    // integração ainda faltaaa
    async function getUserContracts(cnpj) {
      try {
        const response = await api.post('/login', {
          cnpj: cnpj
        });
        const contratos = [...response.data]
        setContratos(contratos)

        navigate('/home');
      } catch (error) {
        console.log(error.message)
      }
    }
    getUserContracts(cnpj)
  }

  return (
    <div className="Wrapper">
      <div className='Login-container'>
        <div className="Logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="Form-container">
          <h2>PAGAMENTO DE FORNECEDOR</h2>
          <form onSubmit={(e) => handleLogin(e)}>
            <div className='Input-container'>
              <label>CNPJ</label>
              {/* INPUT PRA MUDAR COM UNFORM */}
              <input type="text" name='cnpj' />
            </div>
            {
              error &&
              <>
                <span style={{ color: 'red' }}>{error}</span>
                <br />
              </>
            }
            <button type='submit'>Acessar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
