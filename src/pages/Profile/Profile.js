import React from 'react'
import Stories from '../../components/Stories/Stories'
import AddPost from '../../components/addPost/addPost'
import Userprofile from '../../components/Userprofile/Userprofile'
import Feeds from '../../components/Feed/Feeds'


function Profile() {
  return (
    <div>
        <Userprofile/>
        <AddPost/>
        {/* <Feeds/> */}
    </div>
  )
}

export default Profile