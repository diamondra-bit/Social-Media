import React, { useState } from 'react'
import './Main.css'
import { Link } from 'react-router-dom'
import notif from '../../icones/Main/notif.svg'
import moon from '../../icones/Main/moon.svg'
import sun from '../../icones/Main/sun.svg'

function Main() {
  const[classe,setClasse]=useState('body-container-light')
  const[iconetrue,setIconetrue]=useState(false);

  const changeBack= ()=>{
    if(classe==='body-container-light'){
      setClasse('body-container-dark')
      setIconetrue(true)
    }else{
      setClasse('body-container-light')
      setIconetrue(false)
    }
  }
  return (
    <>
    <div className={classe}>
        <div className='navbar-container'>

          <div className='navbar1'>
              <div className='navbar-title'>Connectify</div>

              <div className='navbar-icone'>
                <div className='navbar-search'></div>
                  <div> <img src={iconetrue?moon:sun} onClick={changeBack}/> </div>  
                  <div> <img src={notif} /> </div>       
                  <select>
                      <option></option>
                      <option>MLG</option>
                      <option>FR</option>
                      <option>ANG</option>
                  </select>
              </div>
          </div> 

          <div className='navbar-link'>
            <ul>
             
                <li><Link to="/Publication">Publications</Link></li>
                <li><Link>Amis</Link></li>
                <li><Link>Vidéos</Link></li>
                <li><Link to="/Message">Messages</Link></li>
                <li><Link to="/Message">Profile</Link></li>
                <li><Link to="/Message">Guide d'utilisation</Link></li>
              </ul>
          </div>  

          <div className='main-p'>
            Partagez votre experience avec
            <span className='connectify'> Connectify</span>
          </div>

        </div>

    </div>
    </>
  )
}

export default Main