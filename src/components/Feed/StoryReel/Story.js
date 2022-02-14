import { Avatar } from '@mui/material'
import React from 'react'
import "./Story.css"
function Story({profileSrc, title}) {
  return (
    <div className='story'>
        <Avatar className='story_avatar' src={profileSrc}/>
        <h6>{title}</h6>
    </div>
  )
}

export default Story