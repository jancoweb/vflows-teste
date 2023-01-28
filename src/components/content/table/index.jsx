import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../context/useGlobalContext";
import { clearAll } from "../../../services/localStorage";

function Table() {
  const [error, setError] = useState('');
  const { contratos, setNotaFiscal, notaFiscal } = useGlobalContext();
  const navigate = useNavigate();

  function handlePrev() {
    clearAll();
    navigate('/');
  }

  function handleChange(e) {
    const id = e.target.id;
    const found = contratos.find((contrato) => { return contrato.id == id });
    setNotaFiscal([...notaFiscal, found]);
  }

  function handleNext() {

    if (notaFiscal.length > 1) {
      setNotaFiscal([]);
      console.log('erro')
      setError('Selecione apenas 1 contrato');
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    }
    if (notaFiscal.length == 0) {
      setError('Selecione pelo menos 1 contrato');
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    }

  }

  async function handleOpenContract(e) {
    e.preventDefault();

    navigate(`/home/${e.target.id}`)
  }

  return (
    <div className="content-container">
      <div className="data-headers">
        <span className="input-name-container">Nome do Fornecedor</span>
        <span>Codigo do Contrato</span>
        <span>Retenção Técnica</span>
        <span>Detalhes</span>
      </div>
      {error &&
        <div className="error-modal-container">
          <div className="error-modal">
            <span>{error}</span>
          </div>
        </div>
      }
      <div className="data-container">
        {contratos.length > 0 ? contratos.map(contrato => {
          return (
            <div key={contrato.id} className="data">
              <div className="input-name-container">
                <input type="checkbox" className="check" id={contrato.id} onChange={(e) => handleChange(e)} />
                <span>{contrato.name}</span>
              </div>
              <span>{contrato.codigo}</span>
              <span className="blue-bg">{contrato.ret}</span>
              <button id={contrato.id} className="material-symbols-outlined details" onClick={(e) => handleOpenContract(e)}>search</button>
            </div>

          )
        }) : <div className="empty-msg"><h1>CNPJ NÃO POSSUI CONTRATOS ATIVOS</h1></div>
        }
        <div className="btn-container">
          {contratos.length > 0 ?
            <>
              <button className='prev' onClick={(e) => handlePrev()}>Anterior</button>
              <button className='next' onClick={(e) => handleNext()}>Próximo</button>
            </> : <button className='prev' onClick={(e) => handlePrev()}>Anterior</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Table