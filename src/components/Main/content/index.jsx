import './index.css'
import Table from './table'

function HomeContent() {
  return (
    <div className='content-wrapper'>
      <div className='content-title'>
        <p>Contratos vinculados</p>
      </div>
      <Table />
      <div className="btn-container">
        <button className='prev'>Anterior</button>
        <button className='next'>Próximo</button>
      </div>
    </div>
  )
}

export default HomeContent