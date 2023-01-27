import HomeContent from './content'
import HomeHeader from './header'
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