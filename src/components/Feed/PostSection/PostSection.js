import { Avatar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./PostSection.css";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LikeIcon from "./LikeIcon";

function PostSection() {
  return (
    <div className="postSection">
      <div className="postSectionStart d-flex align-items-center m-2">
        <div className="postUser d-flex align-items-center ms-2 me-auto p-2"  style={{ color: "white" }}>
          <Avatar src="/anshul.jpg" />
          <h5 className="ms-2 me-auto">
            Anshul Choubey
          </h5>
        </div>
        <MoreVertIcon className="dotIcon me-2" fontSize="large" style={{ color: "red" }} />
      </div>
      <Box className="postBox">
        <img src="/anshul.jpg" alt="User's Post" />
      </Box>
      <div className="likeShareComment ms-2 me-2">
        <LikeIcon className="me-2" />
        <CommentIcon
          fontSize="large"
          style={{ color: "red", margin: "10px" }}
        />
        <ShareIcon fontSize="large" style={{ color: "red", margin: "10px" }} />
      </div>
    </div>
  );
}

export default PostSection;
