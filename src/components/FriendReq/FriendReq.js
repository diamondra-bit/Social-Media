import React from 'react'
import './FriendReq.css'
import FriendReqData from '../../FackApis/FriendReqData'
import { Link } from 'react-router-dom'

function FriendReq() {
  return (
    <div className='Frien-Requests'>
      <h4>Friend Requests</h4>
      {
        FriendReqData.map(friend=>(
          <div className='request'>
            <Link to="/profile/id">
                <div className='info' key={friend.id}>
                  <div className='user'>
                    <img src={friend.img}/>
                    <h5>{friend.name}</h5>
                  </div>
                  <div className='info-name'>
                    <p>{friend.info}</p>
                  </div>
                </div>
                <div className='action'>
                  <button className='btn btn-primary'>Accept</button>
                  <button className='btn btn-red'>Delete</button>
                </div>
               
            </Link>
          </div> 
        ))
      }
    </div>
  )
}

export default FriendReq