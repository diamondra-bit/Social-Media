import React from 'react'
import '../css/Profil.css'

import couverture from '../images/couverture.jpg'

function Profil() {
  return (
    <>
    <div className='profil-online-container'>
      <div className='profil-container'>

          <div className='couverture'>
              <img src={couverture} className='photo-couverture'/>

              <div className='profile2'> </div>

              <div className='profile-nom'>Diamondra Nirina </div>

              <div className='profile-nombre'>
                  <div className='profile-nombre-post'>
                      <div className='block'> <div className='bold'> 12</div> <div>Posts</div> </div>
                      <div className='block'> <div className='bold'>250</div> <div>Followers </div> </div>
                      <div className='block'><div className='bold'>200</div> <div>Following </div> </div>
                  </div>
              </div>

              <div className='button-div'> 
                <button className='button'>Edit Profile</button>
              </div>

              {/* <div className='story-div'> 
                <div className='new-story'></div>
                <div className='new-story'></div>
                <div className='new-story'></div>
              </div> */}
          </div>


      </div>

      <div className='online-container'>
        <div className='online-title'>Friends requests</div>

        <div className='flex friend-request '>
          <div className='profil-image'></div>
          <div>Ratovoson Emmanuela</div> 
          <div>  <button className='button-confirm'>Confirm</button> </div> 
        </div>
        <div className='flex friend-request '>
          <div className='profil-image'></div>
          <div>Rakotonirina Mendrika</div> 
          <div>  <button className='button-confirm'>Confirm</button> </div> 
        </div>
        <div className='flex friend-request '>
          <div className='profil-image'></div>
          <div>Rakotonirina Mendrika</div> 
          <div>  <button className='button-confirm'>Confirm</button> </div> 
        </div>
      </div>
    </div>
    </>
  )
}

export default Profil