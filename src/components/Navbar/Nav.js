import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

import home from '../../icones/Navbarleft/home.svg'
import profile from '../../icones/Navbarleft/person.svg'
import search from '../../icones/Navbarleft/search.svg'
import message from '../../icones/Navbarleft/messenger.svg'
import notif from '../../icones/Navbarleft/notif.svg'
import sun from '../../icones/Navbarleft/video.svg'

import CurrentUser from '../../FackApis/CurrentUserData'
import Darkmode from '../Darkmode/Darkmode'

//Font-awesome Icon
// import {FontAwesomeIcon} from '@fontawesome/react-fontawesome'
// import {faHome} from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <nav>
        <div className='nav-container'>

         {/*-------------- Navbar Left--------------- */}
            <div className='nav-left'>
                <Link to="/">
                    <h3 className='logo'>NapaExtra</h3>
                </Link>
                <Link to="/">
                    <img src={home} className='icone'/>
                </Link>
                <Link to="/profile/id">
                    <img src={profile} className='icone'/>
                </Link>

                <div className='Nav-Searchbar'>
                    
                <img src={search} className='icone'/>
                     <input type='text'/>
                </div>
            </div>

        {/*-------------- Navbar Right--------------- */}
            <div className='nav-right'>
                <Link to="/chatbox/id">
                    <img src={message} className='icone'/>
                </Link>
                <Link to="/">
                    <img src={notif} className='icone'/>
                </Link>
                <Darkmode/>
                <Link to="/">
                    <img src={sun} className='icone'/>
                </Link>

                <div className='user'>
                    <img src={CurrentUser.map(user=>(user.ProfileImage))} alt=''/>
                    <h4>Beg Joker</h4>
                </div>
            </div>

        </div>
    </nav>
  )
}

export default Nav