import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import StorefrontRoundedIcon from "@mui/icons-material/Storefront";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoIcon from "@mui/icons-material/Info";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import { Link, useLocation } from "react-router-dom";
import "./SideMenu.css";

function SideMenu() {
  let location = useLocation();
  useEffect(() => {
    //
  }, [location]);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="sidemenu">
        <div className="menu-first">
          <Link
            className={` ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            <ListItem className="list">
              <HomeRoundedIcon fontSize="large" />
              <h6>Home</h6>
            </ListItem>
          </Link>
          <Link
            className={` ${location.pathname === "/about" ? "active" : ""}`}
            to="/about"
          >
            <ListItem className="list">
              <InfoIcon fontSize="large" />
              <h6>About Us</h6>
            </ListItem>
          </Link>
          <Link
            className={` ${location.pathname === "/donate" ? "active" : ""}`}
            to="/donate"
          >
            <ListItem className="list">
              <VolunteerActivismRoundedIcon fontSize="large" />
              <h6>Donate Now</h6>
            </ListItem>
          </Link>
          <Link
            className={` ${
              location.pathname === "/find_donors" ? "active" : ""
            }`}
            to="/find_donors"
          >
            <ListItem className="list">
              <LocationOnRoundedIcon fontSize="large" />
              <h6>Find Donar</h6>
            </ListItem>
          </Link>
        </div>
        <Link
          className={`${location.pathname === "/sponsors" ? "active" : ""}`}
          to="/sponsors"
        >
          <ListItem className="list">
            <StorefrontRoundedIcon fontSize="large" />
            <h6>Redeem Coins</h6>
          </ListItem>
        </Link>
        <Link
          className={`${location.pathname === "/communities" ? "active" : ""}`}
          to="/communities"
        >
          <ListItem className="list">
            <PeopleRoundedIcon fontSize="large" />
            <h6>Communities</h6>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon
            onClick={toggleDrawer(anchor, true)}
            fontSize="large"
            style={{ color: "red" }}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              sx: {
                backgroundColor: "black",
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SideMenu;
