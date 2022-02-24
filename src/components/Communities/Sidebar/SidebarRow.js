import { Button} from "@mui/material";
import React from "react";
import "./SidebarRow.css";

function SidebarRow({ Component, Icon, title }) {
  return (
    <div className="sidebarRow">
      <Button>
      {Component && <Component Icon={Icon} title={title}/>}    
      </Button>
    </div>
  );
}

export default SidebarRow;
