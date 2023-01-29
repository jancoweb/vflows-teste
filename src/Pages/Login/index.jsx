import './Login.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import checkCNPJ from '../../services/checkCNPJ';
import { saveItem } from '../../services/localStorage';
import { useGlobalContext } from '../../context/useGlobalContext';
import api from '../../services/api';

function Login() {
  const { error, setError } = useGlobalContext()
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

    // remover antes de finalizar
    const user = {
      cnpj: cnpj,
      razaoSocial: 'EMPRESA TESTE',
      nomeFantasia: 'EMPRESA QUE ESTOU TESTANDO'
    }
    saveItem('user', JSON.stringify(user));

    async function getUserData(cnpj) {
      try {
        const response = await api.post('/login', {
          cnpj: cnpj
        });
        // coletando informações do usuário da API
        const user = {
          cnpj: cnpj,
          razaoSocial: response.data.user.razaoSocial,
          nomeFantasia: response.data.user.nomeFantasia
        }
        // salvando informações do usuário no localStorage
        saveItem('user', JSON.stringify(user));
        navigate('/home');

      } catch (error) {
        console.log(error.message)
      }
    }
    getUserData(cnpj)
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
