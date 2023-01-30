import { useContext, useState } from "react";
import { GlobalContext } from './globalContext'

export function useGlobalProvider() {

  const [contratos, setContratos] = useState([{ id: 1, name: 'teste', codigo: '123', ret: '50%' }, { id: 2, name: 'azul', codigo: '456', ret: '100%' }]);
  const [notaFiscal, setNotaFiscal] = useState([]);
  const [error, setError] = useState('');
  const [details, setDetails] = useState();
  const [success, setSuccess] = useState(false)

  return {
    contratos,
    setContratos,
    notaFiscal,
    setNotaFiscal,
    error,
    setError,
    details,
    setDetails,
    success,
    setSuccess
  }
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}