import { Avatar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./PostSection.css";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LikeIcon from "./LikeIcon";

function PostSection({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="postSection">
      <div className="postSectionStart d-flex align-items-center m-2 mb-0">
        <div className="postUser d-flex align-items-center ms-2 me-auto p-2">
          <Avatar src={profilePic} />
          <h5 className="ms-2 me-auto">{username}</h5>
        </div>
        <MoreVertIcon
          className="dotIcon me-2"
          fontSize="large"
          style={{ color: "red" }}
        />
      </div>
      <p className="me-auto ms-3 mb-1">{timestamp}</p>
      <p className="me-auto ms-3 mb-1">{message}</p>
      <Box className="postBox">
        <img src={image} alt="User's Post" />
      </Box>
      <div className="likeShareComment ms-2 me-2">
        <LikeIcon className="likeShareCommentIcon me-2" />
        <ModeCommentRoundedIcon
          className="likeShareCommentIcon"
          fontSize="large"
        />
        <ShareIcon className="likeShareCommentIcon" fontSize="large" />
      </div>
    </div>
  );
}

export default PostSection;
