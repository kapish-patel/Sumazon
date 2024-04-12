import { NavLink } from "react-router-dom";

function Help() {
  return (
    <div className="container">
      <div className="top">
        <p>help</p>
      </div>
      <div className="bottom">
        <NavLink to="/help">Get Help</NavLink>
        <NavLink to="/help">Manage Your Account</NavLink>
        <NavLink to="/help">Return & Refunds</NavLink>
        <NavLink to="/help">Payment Options</NavLink>
        <NavLink to="/help">Contact Us</NavLink>
      </div>
    </div>
  );
}

export default Help;