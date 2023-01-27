import { useNavigate } from "react-router-dom";

function Table() {

  const navigate = useNavigate();

  async function handleOpenContract(e) {
    e.preventDefault();

    navigate(`/home/${e.target.id}`)
  }

  const contratos = [{ id: 1, name: 'Frigorifico do mané', codigo: '129999670', ret: '60%' }, { id: 2, name: 'Geladeiras e cia', codigo: '129999670', ret: '60%' }, { id: 3, name: 'Testando nome de fornecedor grande', codigo: '129999670', ret: '60%' }, { id: 4, name: 'Lojas americanas', codigo: '129999670', ret: '60%' }]

  return (
    <div className="content-container">
      <div className="data-headers">
        <span className="input-name-container">Nome do Fornecedor</span>
        <span>Codigo do Contrato</span>
        <span>Retenção Técnica</span>
        <span>Detalhes</span>
      </div>
      <div className="data-container">
        {contratos.length > 0 ? contratos.map(contrato => {
          return (
            <div key={contrato.id} className="data">
              <div className="input-name-container">
                <input type="checkbox" className="check" />
                <span>{contrato.name}</span>
              </div>
              <span>{contrato.codigo}</span>
              <span className="blue-bg">{contrato.ret}</span>
              <button id={contrato.id} className="material-symbols-outlined details" onClick={(e) => handleOpenContract(e)}>search</button>
            </div>
          )
        }) : <div className="empty-msg"><h1>CNPJ NÃO POSSUI CONTRATOS ATIVOS</h1></div>
        }
      </div>
    </div>
  )
}

export default Table