import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeHeader from "../../components/header";
import './index.css'


function DadosNF() {
  const { id } = useParams();

  const contratos = [{ id: 1, name: 'Frigorifico do mané', codigo: '129999670', ret: '60%' }, { id: 2, name: 'Geladeiras e cia', codigo: '129999670', ret: '60%' }, { id: 3, name: 'Testando nome de fornecedor grande', codigo: '129999670', ret: '60%' }, { id: 4, name: 'Lojas americanas', codigo: '129999670', ret: '60%' }]

  const [notaFiscal, setNotaFiscal] = useState()

  function search() {
    const found = contratos.filter(contrato => { return contrato.id == id });
    setNotaFiscal(found)
  }

  return (
    <div className="Home-wrapper">
      <HomeHeader />
      <div className='content-title'>
        <p>Dados da nota fiscal</p>
      </div>
      <div>
      </div>
    </div>
  )
}

export default DadosNF