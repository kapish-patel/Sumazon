import { NavLink } from "react-router-dom";

function Company() {
  return (
    <div className="container">
      <div className="top">
        <p>Company</p>
      </div>
      <div className="bottom">
        <NavLink to="/aboutus">About Sumazon</NavLink>
        <NavLink to="/aboutus">News</NavLink>
        <NavLink to="/aboutus">Careers</NavLink>
        <NavLink to="/aboutus">Investors</NavLink>
        <NavLink to="/aboutus">Purpose</NavLink>
        <NavLink to="/aboutus">Sustainability</NavLink>
      </div>
    </div>
  );
}
export default Company;