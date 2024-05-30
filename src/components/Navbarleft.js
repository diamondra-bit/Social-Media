import React from 'react'
import '../css/Navbarleft.css'
import home from '../icones/Navbarleft/home.svg'
import messenger from '../icones/Navbarleft/messenger.svg'
import ami from '../icones/Navbarleft/person.svg'
import profile from '../icones/Navbarleft/profile.svg'
import video1 from '../icones/Navbarleft/video.svg'

function Navbarleft() {
  return (
    <>

        <div className='navbarleft'>
          <div className='navbar-left-icone'>
           <div className='icone-left'> <img src={home}/></div>
           <div className='icone-left'> <img src={ami}/></div>
           <div className='icone-left'> <img src={video1}/></div>
           <div className='icone-left'> <img src={messenger}/></div>
           <div className='icone-left'> <img src={profile}/></div>
          </div>
        </div>
    </>
  )
}

export default Navbarleft