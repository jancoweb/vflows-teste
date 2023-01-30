import { useGlobalContext } from "../../context/useGlobalContext";

export default function ErrorModal() {
  const { error } = useGlobalContext()
  return (
    <div className="modal-container">
      <div className="error-modal">
        <span>{error}</span>
      </div>
    </div>
  )
}