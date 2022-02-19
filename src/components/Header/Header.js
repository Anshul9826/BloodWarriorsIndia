import React from "react";
import "./Header.css";
import HeaderMiddle from "./HeaderMiddle";
import SideMenu from "../SideMenu/SideMenu";
import Login from "../User/Login";
import Register from "../User/Register/Register";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function Header(props) {
  
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
        <div className="headerRight">
          <div className="loginBtn me-3 p-1">
            <Login logo={props.logo} showAlert={props.showAlert} />
          </div>
          <div className="registerBtn d-flex flex-column align-items-center me-3 p-1">
            <Register Icon={PersonAddIcon} title={"Sign Up"} showAlert={props.showAlert}/>
          </div>
        </div>
        <div className="menuIcon">
          <SideMenu />
        </div>
      </nav>
    </>
  );
}

export default Header;
