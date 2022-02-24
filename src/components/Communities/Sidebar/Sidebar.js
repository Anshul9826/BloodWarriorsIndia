import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoIcon from "@mui/icons-material/Info";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import StorefrontRoundedIcon from "@mui/icons-material/Storefront";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import NewPost from './NewPost';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow Component={NewPost} Icon={HomeRoundedIcon} title={"Home"}/>
        <SidebarRow Component={NewPost} Icon={InfoIcon} title={"About Us"}/>
        <SidebarRow Component={NewPost} Icon={VolunteerActivismRoundedIcon} title={"Donate Now"}/>
        <SidebarRow Component={NewPost} Icon={StorefrontRoundedIcon} title={"Sponsors"}/>
        <SidebarRow Component={NewPost} Icon={LocationOnRoundedIcon} title={"Find Donar"}/>
    </div>
  )
}

export default Sidebar;