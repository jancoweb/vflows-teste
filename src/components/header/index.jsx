import logo from '../../assets/logo.png'
import { getItem } from '../../services/localStorage'
import './index.css'

function HomeHeader() {
  const user = JSON.parse(getItem('user'))

  return (
    <div className="Header-container">
      <header>
        <div className="Logo-Title">
          <img src={logo} alt="Vflows-logo" />
          <h1>PAGAMENTO DE FORNECEDOR</h1>
        </div>
        <div className="Header-content">
          <div className='User-data'>
            <p><span className='User-data-text'>Razão Social:</span> {user.razaoSocial}</p>
            <p><span className='User-data-text'>Nome fantasia:</span> {user.nomeFantasia} </p>
          </div>
          <div className="User-CNPJ">
            <p><span className='User-data-text'>CNPJ:</span> {user.cnpj} </p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default HomeHeader