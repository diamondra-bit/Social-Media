import React from 'react'
import './Rightbar.css'
import Message from '../Message/Message'
import FriendReq from '../FriendReq/FriendReq'

function Rightbar() {
  return (
    <div className='rightBar'>
        <div className='rightbar-container'>
            <Message/>
            <FriendReq/>
        </div>
    </div>
  )
}

export default Rightbar