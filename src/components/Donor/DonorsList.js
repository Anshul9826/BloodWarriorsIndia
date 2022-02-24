import React from "react";
import "./DonorsList.css";
import CallIcon from "@mui/icons-material/Call";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Avatar } from "@mui/material";

function DonarsList() {
  return (
    <div className="donorsList d-flex align-items-center justify-content-center mx-4 my-2">
        <Avatar src="" style={{width:"75px",height:"75px"}} />
      <div className="donorDetails ms-4 d-flex flex-column">
        <h4>Username</h4>
        <div className="d-flex align-tems-center">
          <LocationOnOutlinedIcon style={{ color: "red" }} />
          <h5>Indore, India</h5>
        </div>
        <div className="callDonor d-flex align-items-center p-2">
          <CallIcon style={{ color: "red" }} />
          <h5 className="m-0 ms-2">Call</h5>
        </div>
      </div>
        <div className="drop d-flex align-items-center justify-content-center ms-4">
          <h5>B+</h5>
        </div>
    </div>
  );
}

export default DonarsList;
