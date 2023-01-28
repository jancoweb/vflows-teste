import { useContext, useState } from "react";
import { GlobalContext } from './globalContext'

export function useGlobalProvider() {

  const [contratos, setContratos] = useState([{ id: 1, name: 'teste', codigo: '123', ret: '50%' }, { id: 2, name: 'azul', codigo: '456', ret: '100%' }]);
  const [notaFiscal, setNotaFiscal] = useState([]);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState('');
  const [details, setDetails] = useState();

  return {
    contratos,
    setContratos,
    notaFiscal,
    setNotaFiscal,
    modal,
    setModal,
    error,
    setError,
    details,
    setDetails
  }
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}