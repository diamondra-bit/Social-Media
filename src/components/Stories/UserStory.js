import React from 'react'
import CurrentUserData from '../../FackApis/CurrentUserData'

import add from '../../icones/Main/sun.svg'

function UserStory() {
  return (
    <div className='story userStory'>
      <div className='user'>
        <img src={CurrentUserData.map(user=>(user.ProfileImage))} alt=''/>
      </div>
      <img src={CurrentUserData.map(user=>(user.CoverPhoto))} alt=''/>
      <label htmlFor='storyFiles'>
          <img src={add} className='icone'/>
          <input type='file' id='storyFiles'/>
      </label>
      <h5>Add story</h5>
    </div>
  )
}

export default UserStory