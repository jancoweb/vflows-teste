import { useNavigate } from "react-router-dom";
import HomeHeader from "../../components/header";
import { useGlobalContext } from "../../context/useGlobalContext";
import './index.css'


function DadosNF() {
  const { notaFiscal, setNotaFiscal } = useGlobalContext();
  const navigate = useNavigate();

  function handlePrev() {
    setNotaFiscal([]);
    return navigate('/home')
  }

  return (
    <div className="Home-wrapper">
      <HomeHeader />
      <div className='content-title'>
        <p>Dados da nota fiscal</p>
      </div>
      {notaFiscal &&
        <div>
          {notaFiscal[0].name}
        </div>
      }
      <button className='prev' onClick={(e) => handlePrev()}>Anterior</button>
    </div>
  )
}

export default DadosNF