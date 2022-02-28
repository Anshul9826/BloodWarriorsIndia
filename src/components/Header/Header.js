import React, { useContext, useEffect} from "react";
import "./Header.css";
import SideMenu from "./SideMenu/SideMenu";
import LoginIcon from "@mui/icons-material/Login";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoIcon from "@mui/icons-material/Info";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, Link, useLocation } from "react-router-dom";
import userContext from "../../Store/User/UserContext";
import { ToastContainer, toast } from "react-toastify";
import { Avatar } from "@mui/material";

function Header(props) {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Loggedout successfully!");
    setTimeout(() => {
      navigate("/");
    }, 2500);
  };
  let location = useLocation();
  useEffect(() => {
    //
  }, [location]);

  const user = useContext(userContext);

  return (
    <>
      <nav className="header d-flex align-items-center  sticky-top">
      <ToastContainer/>
        <Link className="headerLeft d-flex align-items-center me-auto" to="/">
          <img
            src={props.logo}
            alt="Blood Warriors India"
            style={{ width: "120px", cursor: "pointer" }}
          />
        </Link>
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
            <h6>Find Donor</h6>
          </Link>
        </div>
        {!localStorage.getItem("token") ? (
          <div className="headerRight ms-auto">
            <Link className="loginBtn me-3 p-1" to="/login">
              <LoginIcon fontSize="large" style={{ color: "red" }} />
              <h6 className="mb-0">Login</h6>
            </Link>
            <Link className="loginBtn me-3 p-1" to="/signup">
              <PersonAddIcon fontSize="large" style={{ color: "red" }} />
              <h6 className="mb-0">Sign Up</h6>
            </Link>
          </div>
        ) : (
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <Avatar src={""} />
              <h6 className="mb-0 ms-2 me-3" style={{ color: "white" }}>
                {user.info.name}
              </h6>
            </div>
            <div className="loginBtn me-3 p-1" onClick={handleLogout}>
              <LogoutIcon fontSize="large" style={{ color: "red" }} />
              <h6 className="mb-0" style={{ color: "white" }}>
                Logout
              </h6>
            </div>
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
