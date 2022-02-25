import React, { useEffect } from "react";
import "./Header.css";
import SideMenu from "./SideMenu/SideMenu";
import Login from "../User/Login";
import Register from "../User/Register/SignUp";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoIcon from "@mui/icons-material/Info";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, Link, useLocation } from "react-router-dom";

function Header(props) {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  let location = useLocation();
  useEffect(() => {
    //
  }, [location]);
  return (
    <>
      <nav className="header d-flex align-items-center  sticky-top">
        <div className="headerLeft d-flex align-items-center me-auto">
          <img
            src={props.logo}
            alt="Blood Warriors India"
            style={{ width: "120px", cursor: "pointer" }}
          />
        </div>
        <div className="headerMiddle">
          <Link
            className={`headerOptions ${
              location.pathname === "/" ? "active" : ""
            }`}
            to="/"
          >
            <HomeRoundedIcon fontSize="large" />
            <h6>Home</h6>
          </Link>
          <Link
            className={`headerOptions ${
              location.pathname === "/about" ? "active" : ""
            }`}
            to="/about"
          >
            <InfoIcon fontSize="large" />
            <h6>About Us</h6>
          </Link>
          <Link
            className={`headerOptions ${
              location.pathname === "/donate" ? "active" : ""
            }`}
            to="/donate"
          >
            <VolunteerActivismRoundedIcon fontSize="large" />
            <h6>Donate Now</h6>
          </Link>
          <Link
            className={`headerOptions ${
              location.pathname === "/find_donors" ? "active" : ""
            }`}
            to="/find_donors"
          >
            <LocationOnRoundedIcon fontSize="large" />
            <h6>Find Donar</h6>
          </Link>
        </div>
        {!localStorage.getItem("token") ? (
          <div className="headerRight ms-auto">
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
