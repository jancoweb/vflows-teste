import { Form } from "@unform/web";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../../components/header";
import Input from "../../components/Input/input";
import { useGlobalContext } from "../../context/useGlobalContext";
import { getItem, removeItem } from "../../services/localStorage";
import './index.css'


function DadosNF() {
  const formRef = useRef(null);
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
  function handleNext(data) {
    console.log(data)
  }

  return (
    <div className="Home-wrapper">
      <HomeHeader />
      <div className='content-title'>
        <p>Dados da nota fiscal</p>
      </div>
      <Form onSubmit={handleNext} className="nf-container">
        <div className="nf-header">
          <div className="nf-title">
            <p>Código do contrato: <span>{nf.codigo}</span></p>
            <p>{nf.name}</p>
          </div>
          <div className="data">
            <div className="nf-data">
              <div>
                <label>Número da nota</label>
                <Input type="text" name="nf-number" />
              </div>
              <div>
                <label>Data de emissão</label>
                <Input type="date" name="nf-emission-date" />
              </div>
              <div>
                <label>Data de vencimento</label>
                <Input type="date" name="nf-due-date" />
              </div>
              <div>
                <label>Valor em R$</label>
                <Input type="text" name="nf-value" />
              </div>
            </div>
          </div>
        </div>
        <div className="taxes">
          <div className="taxes-checkbox-container" onChange={(e) => handleShowMenu(e)}>
            <input type="checkbox" name="taxes" />
            <label>Retenção de impostos</label>
          </div>
          {taxes &&
            <div className="hidden-form-container">
              <p className="inborder-text">Dados</p>
              <div className="hidden-form">
                <div>
                  <label>ISSQN</label>
                  <Input type="text" name="issqn" />
                </div>
                <div>
                  <label>IRFF</label>
                  <Input type="text" name="irff" />
                </div>
                <div>
                  <label>CSLL</label>
                  <Input type="text" name="csll" />
                </div>
                <div>
                  <label>COFINS</label>
                  <Input type="text" name="cofins" />
                </div>
                <div>
                  <label>INSS</label>
                  <Input type="text" name="inss" />
                </div>
                <div>
                  <label>PIS</label>
                  <Input type="text" name="pis" />
                </div>
              </div>
            </div>
          }
        </div>
        <div className="ret">
          <div className="taxes-checkbox-container" onChange={(e) => handleShowMenu(e)}>
            <input type="checkbox" name="ret" />
            <label>Retenção Técnica</label>
          </div>
          {ret &&
            <div className="hidden-form-container">
              <p className="inborder-text">Dados</p>
              <div className="hidden-form2">
                <div>
                  <label>Valor</label>
                  <Input type="text" name='rt-value' />
                </div>
                <div>
                  <label>Percentual</label>
                  <Input type="text" name='rt-percentage' />
                </div>
              </div>
            </div>
          }
        </div>
        <div className="insert-btn-container">
          <button className="btn-insert">ANEXAR NOTA FISCAL</button>
        </div>
        <div className="btn-container">
          <button className='prev' onClick={() => handlePrev()}>Anterior</button>
          <button className='next' type="submit">Próximo</button>
        </div>
      </Form>
    </div>
  )
}

export default DadosNF