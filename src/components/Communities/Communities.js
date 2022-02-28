import { Box } from "@mui/system";
import React from "react";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LikeIcon from "./LikeIcon";
import "./Communities.css";

function Communities(props) {
  return (
    <div className="communitypage">
    <h1>
      Community Page
    </h1>
      <div className="postSection my-4">
        <div className="postSectionStart d-flex align-items-center m-2 mb-0">
          <div className="postUser d-flex align-items-center ms-2 me-auto p-2">
            <img src={props.logo} alt="Community logo" />
            <h5 className="ms-2 me-auto">Blood Warriors India</h5>
          </div>
          <MoreVertIcon
            className="dotIcon me-2"
            fontSize="large"
            style={{ color: "red" }}
          />
        </div>
        <Box className="postBox">
          <img src="/assets/communityPost.png" alt="Community's Post" />
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
    </div>
  );
}

export default Communities;
