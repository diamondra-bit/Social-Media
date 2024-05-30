import React from 'react'
import './Comment.css'

import CommentData from '../../FackApis/CommetData'
import CurrentUserData from '../../FackApis/CurrentUserData'
import { Link } from 'react-router-dom'

function Comment() {
  return (
    <div className='comments'>
        <div className='writebox'>
            <form action='#'>
                <div className='user'>
                    <img src={CurrentUserData.map((user)=>(user.ProfileImage))} alt=''/>
                    <input type='text' placeholder='Write a comment'/>
                    <button type='submit' className='btn btn-primary'>Send</button>
                </div>
            </form>
        </div>
        {CommentData.map((comment)=>(
            <Link to='/profile/id'>
                <div className='user' key={comment.id}>
                    <div>
                      <img src={comment.commentProfile} alt=''/>
                      <h5>{comment.name}</h5>
                      <p>{comment.CommeText}</p>
                    </div> 
                    <small>1H</small>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default Comment