import React from "react";
import "./Feed.css";
import PostSection from "./PostSection/PostSection";

function Feed() {
  return (
    <>
      <div className="feed">
        <PostSection
          profilePic={'/anshul.jpg'}
          message={"We are creating the bloodwarriorsindia which will help thousands of people in future. 🙂🙂"}
          timestamp={"this is time stamp"}
          username={"Anshul Choubey"}
          image={'/anshul.jpg'}
        />
      </div>
    </>
  );
}

export default Feed;
