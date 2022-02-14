import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
  return (
    <div className='storyReel'>
        <Story profileSrc={""} title="Username" />
        <Story profileSrc={""} title="Username" />
        <Story profileSrc={""} title="Username" />
        <Story profileSrc={""} title="Username" />
        <Story profileSrc={""} title="Username" />
        <Story profileSrc={""} title="Username" />
    </div>
  )
}

export default StoryReel