import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import PeopleTwoToneIcon from '@mui/icons-material/PeopleTwoTone';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import NewPost from '../CreatePost/NewPost';
function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow Component={NewPost} Icon={AddBoxTwoToneIcon} title={"New Post"}/>
        <SidebarRow Component={NewPost} Icon={PeopleTwoToneIcon} title={"Communities"}/>
        <SidebarRow Component={NewPost} Icon={ChatTwoToneIcon} title={"Chats"}/>
        <SidebarRow Component={NewPost} Icon={StorefrontTwoToneIcon} title={"Sponsors"}/>
        <SidebarRow Component={NewPost} Icon={ImportContactsTwoToneIcon} title={"Informative Content"}/>
        <SidebarRow Component={NewPost} Icon={InfoTwoToneIcon} title={"About Us"}/>
    </div>
  )
}

export default Sidebar;