import './header.css'
import su_logo from '../../assets/sumazon_logo.png'
import Navigation from './navigation'
import Tailing from './tailing'

function Header() {
  return (
    <div className="header_container">
      <img src={su_logo} alt="Sumazon logo"/>
      <Navigation />
      <Tailing />
    </div>
  )
}
  
export default Header
  