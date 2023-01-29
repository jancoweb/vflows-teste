import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../context/useGlobalContext";
import api from "../../../services/api";
import { clearAll, getItem, saveItem } from "../../../services/localStorage";
import DetailModal from "../../modal/details";
import ErrorModal from "../../modal/error";

function Table() {

  const { contratos, setContratos, setNotaFiscal, notaFiscal, modal, setModal, error, setError, details, setDetails } = useGlobalContext();
  const navigate = useNavigate();

  async function getUserContracts(cnpj) {
    try {
      const response = await api.get('/user-contracts', {
        cnpj: cnpj
      });
      // array de contratos vindo da API
      const data = response.data.contratos;
      setContratos(data);

    } catch (error) {
      console.log(error.message)
    }
  }
  const user = JSON.parse(getItem('user'));
  getUserContracts(user.cnpj)

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
      setError('Selecione apenas 1 contrato');
      setTimeout(() => {
        window.location.reload()
      }, 2000)
      return
    }
    if (notaFiscal.length == 0) {
      setError('Selecione pelo menos 1 contrato');
      setTimeout(() => {
        window.location.reload()
      }, 2000)
      return
    }
    saveItem('notaFiscal', JSON.stringify(notaFiscal[0]));
    navigate(`/nota-fiscal`)
  }

  function handleDetails(e) {
    const id = e.target.id;
    const detail = contratos.find((contrato) => { return contrato.id == id });
    return setDetails(detail)
  }

  return (
    <div className="content-container">
      <div className="data-headers">
        <span className="input-name-container">Nome do Fornecedor</span>
        <span>Codigo do Contrato</span>
        <span>Retenção Técnica</span>
        <span>Detalhes</span>
      </div>
      {details && <DetailModal />}
      {error && <ErrorModal />}
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
              <button id={contrato.id} className="material-symbols-outlined details" onClick={(e) => handleDetails(e)}>search</button>
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