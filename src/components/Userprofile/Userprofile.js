import React from 'react'
import './Userprofile.css'
import CurrentUser from '../../FackApis/CurrentUserData'

import { Link } from 'react-router-dom'
import message from '../../icones/Navbarleft/messenger.svg'
import feed from '../../icones/Navbarleft/sun.svg'
import link from '../../icones/Navbarleft/sun.svg'

function Userprofile() {
  return (
    <div className='userProfile'>
        <div className='cover-photos'>
            <img src={CurrentUser.map(user=>(user.CoverPhoto))} alt=''/>
        </div>
        <div className='profile-info'>
            <img src={CurrentUser.map(user=>(user.ProfileImage))} alt=''/>
            <div className='user-name'>
                <h3>{CurrentUser.map(user=>(user.name))} </h3>
                <h5>{CurrentUser.map(user=>(user.username))} </h5>
            </div>
            <div className='profile-button'>
                <Link to="/chatbox/id">
                    <button className='btn btn-primary'>
                        <img src={message} alt=''/>
                    </button>
                </Link>
                <button className='btn btn-primary'>
                    <img src={feed} alt=''/> Follow me
                </button>
                <button className='btn '>
                    <img src={link} alt=''/> 
                </button>
            </div>

        </div>
    </div>
  )
}

export default Userprofile