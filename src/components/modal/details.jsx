import { useGlobalContext } from "../../context/useGlobalContext";

export default function DetailModal() {
  const { details, setDetails } = useGlobalContext();
  function handleClose() {
    setDetails()
    return
  }

  return (
    <div className="detail-modal-container">
      <div className="detail-modal-card">
        <h1 className="modal-title">Detalhes do contrato</h1>
        <div className="details-content">
          <div>
            <h4>Nome do fornecedor: <span>{details.name}</span></h4>
          </div>
          <div>
            <h4>Código do contrato: <span>{details.codigo}</span></h4>
          </div>
          <div>
            <h4>Retenção Técnica: <span>{details.ret}</span></h4>
          </div>
          <br />
          <button className="close" onClick={() => { handleClose() }}>Fechar</button>
        </div>
      </div>
    </div>
  )
}