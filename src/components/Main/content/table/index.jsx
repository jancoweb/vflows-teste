function Table() {

  const contratos = [{ id: 1, name: 'Geladeiras', codigo: '11510-9090.00', ret: '60%' }, { id: 2, name: 'Geladeiras Do paraguai', codigo: '11510-9090.00', ret: '5%' }, { id: 3, name: 'Geladeiras', codigo: '11510-9090.00', ret: '10%' }]


  return (
    <div className="content-container">
      <div className="data-headers">
        <span className="input-name-container">Nome do Fornecedor</span>
        <span>Codigo do Contrato</span>
        <span>Retenção Técnica</span>
        <span>Detalhes</span>
      </div>
      <div className="data-container">
        {contratos &&
          contratos.map(contrato => {
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
          })
        }
      </div>
    </div>
  )
}

export default Table