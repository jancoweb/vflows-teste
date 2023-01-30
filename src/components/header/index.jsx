import logo from '../../assets/logo.png'
import { getItem } from '../../services/localStorage'
import '../../styles/headerStyle/headerStyles.css'

function HomeHeader() {
  const user = JSON.parse(getItem('user'))

  return (
    <div className="header-container">
      <header>
        <div className="logo-title">
          <img src={logo} alt="Vflows-logo" />
          <h1>PAGAMENTO DE FORNECEDOR</h1>
        </div>
        <div className="header-content">
          <div>
            <p><span>Razão Social:</span> {user.razaoSocial}</p>
            <p><span>Nome fantasia:</span> {user.nomeFantasia} </p>
          </div>
          <div>
            <p><span>CNPJ:</span> {user.cnpj} </p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default HomeHeader