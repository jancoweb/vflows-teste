import logo from '../../../assets/logo.png'
import './index.css'

function HomeHeader() {
  return (
    <div className="Header-container">
      <header>
        <div className="Logo-Title">
          <img src={logo} alt="Vflows-logo" />
          <h1>PAGAMENTO DE FORNECEDOR</h1>
        </div>
        <div className="Header-content">
          <div className='User-data'>
            <p><span className='User-data-text'>Razão Social:</span> Nome do fornecedor </p>
            <p><span className='User-data-text'>Nome fantasia:</span> Nome do fornecedor </p>
          </div>
          <div className="User-CNPJ">
            <p><span className='User-data-text'>CNPJ:</span> 00.000.000/000-00 </p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default HomeHeader