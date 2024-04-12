
import { NavLink } from "react-router-dom";

function Navigation() {
  return(
    <div className="navigation_container">
      <div className="navigation_element">
        <NavLink to="/new" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>New and Featured</NavLink>
      </div>
      <div className="navigation_element"> 
        <NavLink to="/mens" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Mens</NavLink>
      </div>
      <div className="navigation_element">
        <NavLink to="/women" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Womens</NavLink>
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