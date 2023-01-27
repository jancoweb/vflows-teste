
function Table() {

  const contratos = [{ id: 1, name: 'Geladeiras', codigo: '129999670', ret: '60%' }]

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
              <span className="material-symbols-outlined details">search</span>
            </div>
          )
        }) : <div className="empty-msg"><h1>CNPJ NÃO POSSUI CONTRATOS ATIVOS</h1></div>
        }
      </div>
    </div>
  )
}

export default Table