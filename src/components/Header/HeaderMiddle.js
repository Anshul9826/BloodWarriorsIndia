import React, { useEffect } from "react";
import "./HeaderMiddle.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoIcon from "@mui/icons-material/Info";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import StorefrontRoundedIcon from "@mui/icons-material/Storefront";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Link, useLocation } from "react-router-dom";

function HeaderMiddle() {
  let location = useLocation();
  useEffect(() => {
    //
  }, [location]);
  return (
    <div className="headerMiddle">
      <Link className={`headerOptions ${location.pathname==="/"? "active": ""}`} to="/">
        <HomeRoundedIcon fontSize="large" />
        <h6>Home</h6>
      </Link>
      <Link className={`headerOptions ${location.pathname==="/about"? "active": ""}`} to="/about">
        <InfoIcon fontSize="large" />
        <h6>About Us</h6>
      </Link>
      <Link className={`headerOptions ${location.pathname==="/donate"? "active": ""}`} to="/donate">
        <VolunteerActivismRoundedIcon
          fontSize="large"
        />
        <h6>Donate Now</h6>
      </Link>
      <Link className={`headerOptions ${location.pathname==="/sponsors"? "active": ""}`} to="/sponsors">
        <StorefrontRoundedIcon fontSize="large" />
        <h6>Sponsors</h6>
      </Link>
      <Link className={`headerOptions ${location.pathname==="/find_donar"? "active": ""}`} to="/find_donar">
        <LocationOnRoundedIcon fontSize="large" />
        <h6>Find Donar</h6>
      </Link>
    </div>
  );
}

export default HeaderMiddle;
