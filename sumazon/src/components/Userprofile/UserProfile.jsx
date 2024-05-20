import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCustomer, logout } from "../../Redux/slice/customerSlice";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";

function UserProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer.customerDetails);

  const [username, setUsername] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);
  const [address, setAddress] = useState(customer.address);
  const [password, setPassword] = useState(customer.password);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {

  });

  const handleUpdateBtnClick = (e) => {
    e.preventDefault();
    console.log("Update button clicked");
    const customerDetails = {
      name: username,
      email: email,
      phone: phone,
      address: address,
      password: password,
    };
    dispatch(updateCustomer(customerDetails))
    setIsEditing(false);
  };

  const handleLogoutBtnClick = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="userprofile-container">
      <div className="userprofile-header">
        <div className="form-group">
          <button
            type="submit"
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            {isEditing ? "Cancle" : "Edit"}
          </button>
          <button
            type="submit"
            onClick={handleLogoutBtnClick}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="userprofile-form">
        <form method="post">
          <div className="form-group">
            <label>UserName: </label>
            <input
              className={isEditing ? "info-input" : "info"}
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              readOnly={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              className={isEditing ? "info-input" : "info"}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Phone Number: </label>
            <input
              type="tel"
              id="phone"
              className={isEditing ? "info-input" : "info"}
              name="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              readOnly={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <textarea
              type="text"
              className={isEditing ? "info-input" : "info"}
              id="address"
              name="address"
              placeholder="Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              readOnly={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              id="password"
              className={isEditing ? "info-input" : "info"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              readOnly={!isEditing}
            />
          </div>
          <div className="form-group">
            {isEditing ? (
              <button type="submit" onClick={handleUpdateBtnClick}>
                Update
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
