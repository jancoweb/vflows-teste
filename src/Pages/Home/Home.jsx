import HomeContent from '../../components/Main/content'
import HomeHeader from '../../components/Main/header'
import './home.css'

function Home() {
  return (
    <div className="Home-wrapper">
      <HomeHeader />
      <HomeContent />
    </div>
  )
}

export default Home