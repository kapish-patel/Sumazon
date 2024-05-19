
import { NavLink } from "react-router-dom";

function Navigation() {
  return(
    <div className="navigation_container">
      <div className="navigation_element">
        <NavLink to="/clothing" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Clothing</NavLink>
      </div>
      <div className="navigation_element"> 
        <NavLink to="/sports" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Sports & fitness</NavLink>
      </div>
      <div className="navigation_element">
        <NavLink to="/electronics" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Electronics</NavLink>
      </div>
      <div className="navigation_element">
        <NavLink to="/bestseller" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Best Seller</NavLink>
      </div>
      <div className="navigation_element">
        <NavLink to="/more" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>More</NavLink>
      </div>
    </div>
  ) 
}

export default Navigation;