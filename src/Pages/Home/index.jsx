import HomeContent from '../../components/content'
import HomeHeader from '../../components/header'
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