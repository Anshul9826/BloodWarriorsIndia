import React from 'react'
import "./Feed.css"
import PostSection from './PostSection/PostSection'
import StoryReel from './StoryReel/StoryReel'

function Feed() {
  return (
    <>
        <div className='feed'>
            <StoryReel/>
            <PostSection/>
        </div>
    </>
  )
}

export default Feed