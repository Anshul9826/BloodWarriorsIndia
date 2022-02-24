import React from "react";
import "./NewPost.css";

function Home({ Icon, title }) {
   return (
    <div className="newPost">
      <div className="newPostBtn">
        {Icon && <Icon />}
        <h5>{title}</h5>
      </div>
    </div>
  );
}

export default Home;
