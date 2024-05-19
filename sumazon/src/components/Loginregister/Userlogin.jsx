import { Navigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginCustomer } from "../../Redux/slice/customerSlice";
import "./Userlogin.css";

function UserLogin() {
  const dispatch = useDispatch();

  // Accessing the authentication state from Redux store
  const isLoggedin = useSelector((state) => state.customer.isLoggedIn);

  // State to store the user input
  const [userEmail, setUseremail] = useState();
  const [userPassword, setUserPassword] = useState();

  const handleLogInBtnClick = (e) => {
    e.preventDefault();
    console.log("login button clicked");
    const credentials = {email: userEmail, password: userPassword };
    dispatch(loginCustomer(credentials));
  };

  return isLoggedin ? (
    <Navigate to="/" />
  ) : (
    <div className="login-container">
      <div className="login-form">
        <p>Sign In</p>
        <form method="post">
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setUseremail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <button type="submit" onClick={handleLogInBtnClick}>
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="register-container">
        <p>
          Don&apos;t have an account? <NavLink to="/register">Register</NavLink>
        </p>
      </div>
    </div>
  );
}

export default UserLogin;
