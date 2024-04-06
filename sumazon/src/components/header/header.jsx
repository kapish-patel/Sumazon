import './header.css'
import su_logo from '../../assets/sumazon_logo.png'
import Navigation from './navigation/navigation'

function Header() {
  return (
    <>
      <div className="header_container">
        <img src={su_logo} alt="Sumazon logo"/>
        <Navigation />
        <h1>tailing</h1>
      </div>
    </>
  )
}
  
export default Header
  