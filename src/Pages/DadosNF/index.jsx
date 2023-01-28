import HomeHeader from "../../components/header";
import { useGlobalContext } from "../../context/useGlobalContext";
import './index.css'


function DadosNF() {

  return (
    <div className="Home-wrapper">
      <HomeHeader />
      <div className='content-title'>
        <p>Dados da nota fiscal</p>
      </div>
      <div>
      </div>
    </div>
  )
}

export default DadosNF