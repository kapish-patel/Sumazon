import { Outlet } from "react-router-dom"
import suLogo from "../../assets/sumazon_logo.png"
import { useNavigate } from "react-router-dom";

import "./loginlayout.css";
function LoginLayout() {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  }
  return (
    <div className="login-register-container">
      <div className="logo-container">
        <img src={suLogo} alt="logo" onClick={handleLogoClick}/>
      </div>
      <Outlet />
    </div>
  )
}

export default LoginLayout
