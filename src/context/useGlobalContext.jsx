import { useContext, useState } from "react";
import { GlobalContext } from './globalContext'

export function useGlobalProvider() {
  const [notaFiscal, setNotaFiscal] = useState([]);
  const [error, setError] = useState('');
  const [details, setDetails] = useState();
  const [success, setSuccess] = useState(false)

  return {
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