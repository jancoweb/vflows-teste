import { useContext, useState } from "react";
import { GlobalContext } from './globalContext'

export function useGlobalProvider() {

  const [contratos, setContratos] = useState([]);
  const [notaFiscal, setNotafiscal] = useState({})

  return {
    contratos,
    setContratos,
    notaFiscal,
    setNotafiscal
  }
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}