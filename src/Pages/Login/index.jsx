import '../../styles/loginPageStyle/loginStyles.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { saveItem } from '../../services/localStorage';
import { Form } from '@unform/web';
import Input from '../../components/Input/input';
import { useRef } from 'react';

function LoginPage() {
  const navigate = useNavigate();
  const formRef = useRef(null);

  const usersArr = [{ cnpj: 1111111111111, razaoSocial: 'User de teste n1 LTDA', nomeFantasia: 'Usuário de teste 1' }, { cnpj: 2222222222222, razaoSocial: 'User n2 COPR', nomeFantasia: 'Usuário de teste 2' }, { cnpj: 3333333333333, razaoSocial: 'User n3', nomeFantasia: 'Usuário de teste 3' }];

  function login(data) {
    const cnpj = data.cnpj;
    if (cnpj.length !== 13) {
      formRef.current.setFieldError('cnpj', 'CNPJ inválido');
      return
    }

    const user = usersArr.find((user) => { return user.cnpj == cnpj });
    if (!user) return formRef.current.setFieldError('cnpj', 'Usuário não encontrado!');

    saveItem('user', JSON.stringify(user));
    navigate('/home');
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
