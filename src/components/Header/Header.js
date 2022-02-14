import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import StorefrontRoundedIcon from "@mui/icons-material/Storefront";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LogoutIcon from "@mui/icons-material/Logout";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";

function Header(props) {
  return (
    <>
      <nav className="header d-flex align-items-center justify-content-between">
        <div className="headerLeft d-flex align-items-center ms-2">
          <img
            src={props.logo}
            alt="Blood Warriors India"
            style={{ width: "120px", cursor:"pointer" }}
          />
          <div className="searchBar d-flex align-items-center ms-4 me-2 p-1 rounded-pill">
            <SearchIcon className="searchIcon" fontSize="large" style={{color: "red"}}/>
            <input
              type="search"
              aria-label="Search"
            />
          </div>
        </div>
        <div className="headerMiddle d-flex allign-items-center m-auto">
          <div className="headerOptions">
            <HomeRoundedIcon fontSize="large" style={{ color: "red" }} />
          </div>
          <div className="headerOptions">
            <VolunteerActivismRoundedIcon fontSize="large" style={{ color: "red" }} />
          </div>
          <div className="headerOptions">
            <StorefrontRoundedIcon fontSize="large" style={{ color: "red" }} />
          </div>
          <div className="headerOptions">
            <LocationOnRoundedIcon fontSize="large" style={{ color: "red" }} />
          </div>
        </div>
        <div className="headerRight d-flex allign-items-center me-2">
          <div className="d-flex align-items-center me-4">
            <Avatar src="/anshul.jpg"/>
            <h6 className="ms-1" style={{ color: "white" }}>Anshul Choubey</h6>
          </div>
          <div className="headerOptions d-flex align-items-center me-3 p-1">
            <LogoutIcon fontSize="large" style={{ color: "red" }} />
            <h6 className="ms-1" style={{ color: "white" }}>Logout</h6>
          </div>
          {/* <div className="">
            <ExpandMoreIcon className="searchIcon" fontSize="large" style={{ color: "red" }} />
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default Header;
