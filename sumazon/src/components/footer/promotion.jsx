import { NavLink } from "react-router-dom";

function Promotion() {
  return (
    <div className="container">
      <div className="top">
        <p>Promotion</p>
      </div>
      <div className="bottom">
        <NavLink to="/promotions">Student</NavLink>
        <NavLink to="/promotions">Military</NavLink>
        <NavLink to="/promotions">Teacher</NavLink>
        <NavLink to="/promotions">First Responders & Medical Professionals</NavLink>
        <NavLink to="/promotions">Birthday</NavLink>
      </div>
    </div>
  );
}
export default Promotion;