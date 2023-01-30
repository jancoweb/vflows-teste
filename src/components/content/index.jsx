import '../../styles/contentStyle/contentStyles.css'
import Table from './table'

function HomeContent() {

  return (
    <div className='content-wrapper'>
      <div className='content-title'>
        <p>Contratos vinculados</p>
      </div>
      <Table />
    </div>
  )
}

export default HomeContent