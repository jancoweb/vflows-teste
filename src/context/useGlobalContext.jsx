import { useContext, useState } from "react";
import { GlobalContext } from './globalContext'

export function useGlobalProvider() {

  const [contratos, setContratos] = useState([])

  return {
    contratos,
    setContratos
  }
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}