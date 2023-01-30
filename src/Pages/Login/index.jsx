import '../../styles/loginPageStyle/loginStyles.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { saveItem } from '../../services/localStorage';
import api from '../../services/api';
import { Form } from '@unform/web';
import Input from '../../components/Input/input';
import { useRef } from 'react';

function LoginPage() {
  const navigate = useNavigate();
  const formRef = useRef(null);

  async function login(data) {
    const cnpj = data.cnpj
    if (cnpj.length !== 13) {
      formRef.current.setFieldError('cnpj', 'CNPJ inválido')
      return
    }

    // EXEMPLO DE LOGIN BEM SUCEDIDO
    const user = {
      cnpj: cnpj,
      razaoSocial: 'EMPRESA TESTE',
      nomeFantasia: 'EMPRESA QUE ESTOU TESTANDO'
    }
    saveItem('user', JSON.stringify(user));
    navigate('/home');

    // EXEMPLO DE LOGIN COM VALIDAÇÃO DA API
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

        // EXEMPLO DE ERRO CASO NÃO CONSIGA LOGIN
        // formRef.current.setFieldError('cnpj', 'CNPJ não encontrado')
      }
    }
    getUserData(cnpj)
  }

  return (
    <div className="Wrapper">
      <div className='login-container'>
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="form-container">
          <h2>PAGAMENTO DE FORNECEDOR</h2>
          <Form ref={formRef} onSubmit={(e) => login(e)}>
            <label>CNPJ</label>
            <Input type="text" name='cnpj' />
            <div className='login-btn'>
              <button type='submit'>Acessar</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
