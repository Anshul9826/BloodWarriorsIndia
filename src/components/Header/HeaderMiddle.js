import React from "react";
import "./HeaderMiddle.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoIcon from "@mui/icons-material/Info";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import StorefrontRoundedIcon from "@mui/icons-material/Storefront";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Link } from "react-router-dom";

function HeaderMiddle() {
  return (
    <div className="headerMiddle">
      <Link to="/">
        <div className="headerOptions">
          <HomeRoundedIcon fontSize="large" style={{ color: "red" }} />
          <h6>Home</h6>
        </div>
      </Link>
      <Link to="/about">
        <div className="headerOptions">
          <InfoIcon fontSize="large" style={{ color: "red" }} />
          <h6>About Us</h6>
        </div>
      </Link>
      <Link to="/">
        <div className="headerOptions">
          <VolunteerActivismRoundedIcon
            fontSize="large"
            style={{ color: "red" }}
          />
          <h6>Donate Now</h6>
        </div>
      </Link>
      <Link to="/">
        <div className="headerOptions">
          <StorefrontRoundedIcon fontSize="large" style={{ color: "red" }} />
          <h6>Sponsors</h6>
        </div>
      </Link>
      <Link to="/">
        <div className="headerOptions">
          <LocationOnRoundedIcon fontSize="large" style={{ color: "red" }} />
          <h6>Find Donar</h6>
        </div>
      </Link>
    </div>
  );
}

export default HeaderMiddle;
