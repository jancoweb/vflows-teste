import './Login.css'
import logo from '../../assets/logo.png'

function Login() {
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
            <button type='submit'>Acessar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
