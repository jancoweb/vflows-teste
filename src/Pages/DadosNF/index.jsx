import { Form } from "@unform/web";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../../components/header";
import Input from "../../components/Input/input";
import { useGlobalContext } from "../../context/useGlobalContext";
import { getItem, removeItem, clearAll } from "../../services/localStorage";
import '../../styles/DadosPage/nfStyles.css'
import CurrencyInput from "../../components/Input/currencyInput";
import validateForm from "../../services/formValidation";
import SuccessModal from "../../components/modal/success";

function DadosNF() {

  const [selected, setSelected] = useState([])
  const formRef = useRef(null);
  const { setNotaFiscal, setSuccess, success } = useGlobalContext();
  const navigate = useNavigate();

  const [taxes, setTaxes] = useState(false);
  const [ret, setRet] = useState(false);
  const [retValue, setRetValue] = useState(Number);

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

  function handleMath(e) {
    let v1 = e.target.value
    let div = (nf.ret).replace('%', '')
    let result = (v1 * 10) * (div / 100)
    setRetValue(result)
  }

  function handleSelect(e) {
    setSelected([...selected, e.target.files[0].name])
  }
  function handleDeleteSelected(e, target) {
    e.preventDefault()
    let newSelected = selected.filter((item) => { return item !== target })
    setSelected(newSelected)
  }

  function sendData(data) {
    if (validateForm(data, formRef)) return
    data.file = selected
    console.log(data);
    setSuccess(true)
  }

  return (
    <div className="Home-wrapper-nf">
      <HomeHeader />
      <div className='content-title'>
        <p>Dados da nota fiscal</p>
      </div>
      {success &&
        <SuccessModal />
      }
      <Form ref={formRef} onSubmit={e => sendData(e)} className="nf-container">
        <div className="nf-header">
          <div className="nf-title">
            <p>Código do contrato: <span>{nf.codigo}</span></p>
            <p>{nf.name}</p>
          </div>
          <div>
            <div className="nf-data">
              <div>
                <label>Número da nota</label>
                <Input type="text" name="nfNumber" />
              </div>
              <div>
                <label>Data de emissão</label>
                <Input type="date" name="emissionDate" />
              </div>
              <div>
                <label>Data de vencimento</label>
                <Input type="date" name="dueDate" />
              </div>
              <div>
                <label>Valor em R$</label>
                <CurrencyInput type="number" name="nfValue" onChange={(e) => handleMath(e)} />
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
                  <CurrencyInput type="number" name="issqn" />
                </div>
                <div>
                  <label>IRFF</label>
                  <CurrencyInput type="number" name="irff" />
                </div>
                <div>
                  <label>CSLL</label>
                  <CurrencyInput type="number" name="csll" />
                </div>
                <div>
                  <label>COFINS</label>
                  <CurrencyInput type="number" name="cofins" />
                </div>
                <div>
                  <label>INSS</label>
                  <CurrencyInput type="number" name="inss" />
                </div>
                <div>
                  <label>PIS</label>
                  <CurrencyInput type="number" name="pis" />
                </div>
              </div>
            </div>
          }
        </div>
        <div className="ret">
          <div className="ret-checkbox-container" onChange={(e) => handleShowMenu(e)}>
            <input type="checkbox" name="ret" />
            <label>Retenção Técnica</label>
          </div>
          {ret &&
            <div className="hidden-form-container">
              <p className="inborder-text">Dados</p>
              <div className="hidden-form2">
                <div>
                  <label>Valor</label>
                  <Input type="text" name='retValue' readOnly value={`R$ ${retValue.toFixed(2)}`} />
                </div>
                <div>
                  <label>Percentual</label>
                  <Input type="text" name='retPercentage' defaultValue={nf.ret} readOnly />
                </div>
              </div>
            </div>
          }
        </div>
        <div className="insert-btn-container">
          <h4 className="insert-camp">ANEXAR NOTA FISCAL</h4>
          <div>
            <Input name='file' type="file" onChange={e => handleSelect(e)} />
            <div className="files-container">
              <h4>Arquivos selecionados:</h4>
              {selected &&
                selected.map((file) => {
                  return (
                    <div className="file-div">
                      <p>{file}</p>
                      <button onClick={e => handleDeleteSelected(e, file)}><span className="material-symbols-outlined">
                        delete
                      </span></button>
                    </div>
                  )
                })
              }
            </div>
          </div>
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