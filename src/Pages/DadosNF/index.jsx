import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../../components/header";
import { useGlobalContext } from "../../context/useGlobalContext";
import { getItem, removeItem } from "../../services/localStorage";
import './index.css'


function DadosNF() {
  const { setNotaFiscal } = useGlobalContext();
  const navigate = useNavigate();

  const [taxes, setTaxes] = useState(false);
  const [ret, setRet] = useState(false);

  function handleShowMenu(e) {
    if (e.target.name == 'taxes') {
      setTaxes(!taxes)
    }
    if (e.target.name == 'ret') {
      setRet(!ret)
    }
  }
  const nf = JSON.parse(getItem('notaFiscal'));

  function handlePrev() {
    setNotaFiscal([]);
    removeItem('notaFiscal')
    return navigate('/home')
  }

  return (
    <div className="Home-wrapper">
      <HomeHeader />
      <div className='content-title'>
        <p>Dados da nota fiscal</p>
      </div>
      <div className="nf-container">
        <div className="nf-header">
          <div className="nf-title">
            <p>Código do contrato: <span>{nf.codigo}</span></p>
            <p>{nf.name}</p>
          </div>
          <div className="data">
            <form className="nf-data">
              <div>
                <label>Número da nota</label>
                <input type="text" />
              </div>
              <div>
                <label>Data de emissão</label>
                <input type="date" />
              </div>
              <div>
                <label>Data de vencimento</label>
                <input type="date" />
              </div>
              <div>
                <label>Valor</label>
                <input type="text" />
              </div>
            </form>
          </div>
        </div>
        <div className="taxes">
          <form className="taxes-checkbox-container" onChange={(e) => handleShowMenu(e)}>
            <input type="checkbox" name="taxes" />
            <label>Retenção de impostos</label>
          </form>
          {taxes &&
            <div className="hidden-form-container">
              <p className="inborder-text">Dados</p>
              <form className="hidden-form">
                <div>
                  <label>ISSQN</label>
                  <input type="text" name="issqn" />
                </div>
                <div>
                  <label>IRFF</label>
                  <input type="text" name="irff" />
                </div>
                <div>
                  <label>CSLL</label>
                  <input type="text" name="csll" />
                </div>
                <div>
                  <label>COFINS</label>
                  <input type="text" name="cofins" />
                </div>
                <div>
                  <label>INSS</label>
                  <input type="text" name="inss" />
                </div>
                <div>
                  <label>PIS</label>
                  <input type="text" name="pis" />
                </div>
              </form>
            </div>
          }
        </div>
        <div className="ret">
          <form className="taxes-checkbox-container" onChange={(e) => handleShowMenu(e)}>
            <input type="checkbox" name="ret" />
            <label>Retenção Técnica</label>
          </form>
          {ret &&
            <div className="hidden-form-container">
              <p className="inborder-text">Dados</p>
              <form className="hidden-form2">
                <div>
                  <label>Valor</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Percentual</label>
                  <input type="text" />
                </div>
              </form>
            </div>
          }
        </div>
        <div className="insert-btn-container">
          <button className="btn-insert">ANEXAR NOTA FISCAL</button>
        </div>
        <div className="btn-container">
          <button className='prev' onClick={(e) => handlePrev()}>Anterior</button>
          <button className='next' onClick={(e) => handlePrev()}>Próximo</button>
        </div>
      </div>
    </div>
  )
}

export default DadosNF