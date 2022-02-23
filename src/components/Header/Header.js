import React from "react";
import "./Header.css";
import HeaderMiddle from "./HeaderMiddle";
import SideMenu from "../SideMenu/SideMenu";
import Login from "../User/Login";
import Register from "../User/Register/SignUp";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

function Header(props) {
  let navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate("/");
  }
  return (
    <>
      <nav className="header d-flex align-items-center justify-content-between sticky-top">
        <div className="headerLeft d-flex align-items-center ms-2">
          <img
            src={props.logo}
            alt="Blood Warriors India"
            style={{ width: "120px", cursor: "pointer" }}
          />
        </div>
        <HeaderMiddle />
        {!localStorage.getItem("token") ? (
          <div className="headerRight">
            <div className="loginBtn me-3 p-1">
              <Login logo={props.logo} showAlert={props.showAlert} />
            </div>
            <div className="registerBtn d-flex flex-column align-items-center me-3 p-1">
              <Register
                Icon={PersonAddIcon}
                title={"Sign Up"}
                showAlert={props.showAlert}
              />
            </div>
          </div>
        ) : (
          <div className="loginBtn me-3 p-1" onClick={handleLogout}>
            <LogoutIcon fontSize="large" style={{ color: "red" }} />
            <h6 className="mb-0" style={{ color: "white" }}>
              Logout
            </h6>
          </div>
        )}
        <div className="menuIcon">
          <SideMenu />
        </div>
      </nav>
    </>
  );
}

export default Header;
