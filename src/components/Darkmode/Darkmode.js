import React from 'react'
import sun from '../../icones/Navbarleft/sun.svg'

function Darkmode() {
    const darkhandler=()=>{
        document.querySelector('body').classList.toggle('darkmood')
    }
    
  return (
    <div className='dark-mood-icon'>
        <img src={sun} className='icone' onClick={darkhandler}/>
    </div>
  )
}

export default Darkmode