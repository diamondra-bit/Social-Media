import React from 'react'
import Navbarleft from '../components/Navbarleft.js'
import '../css/Message.css'


function Message() {
  return (
    <>
      <div className='flex'>
        <Navbarleft/>

        <div className='chat'>
          <div className='title'>Messages</div>
          <table>
            <tr>
              <div className='flex'>
                <div className='profile-chat'><td ></td></div>
              
                <div className='block'>
                  <div><td>Mirella</td></div>
                  <div><td>Bonjour.Ca va?</td></div>
                </div>
              </div>
             
            </tr>
            
          </table>
        </div>

        <div className='chat-real'>
          
        </div>
        <div className='chat-online'>
          
        </div>
      </div>
    </>
  )
}

export default Message