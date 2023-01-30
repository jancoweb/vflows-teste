import { useGlobalContext } from "../../context/useGlobalContext"
import { clearAll } from "../../services/localStorage"

export default function SuccessModal() {
  const { setSuccess } = useGlobalContext()

  function goodbye() {
    setSuccess(false)
    clearAll()
    window.location.reload()
  }

  return (
    <div className="modal-container">
      <div className="success-modal">
        <span>Solicitação: 999999 efetuada com sucesso!</span>
        <button onClick={goodbye}>Ir para tela de Login</button>
      </div>
    </div>
  )
}