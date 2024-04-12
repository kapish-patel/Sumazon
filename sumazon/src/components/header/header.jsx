import './header.css'
import su_logo from '../../assets/sumazon_logo.png'
import Navigation from './navigation'
import Tailing from './tailing'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="header_container">
      <NavLink to='/'>
        <img src={su_logo} alt="Sumazon logo"/>
      </NavLink>
      <Navigation />
      <Tailing />
    </div>
  )
}
  
export default Header
  