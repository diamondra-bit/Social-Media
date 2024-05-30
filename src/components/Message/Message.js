import React from 'react'
import './Message.css'

import MessageData from '../../FackApis/MessageData'

import edit from '../../icones/Navbarleft/sun.svg'
import search from '../../icones/Navbarleft/search.svg'
import { Link } from 'react-router-dom'

function Message() {
  return (
    <div className='Message'>
        <div className='message-top'>
            <h4>Message</h4>
            <img src={edit} className='icone'/>
        </div>
        <div className='message-search'>
            <img src={search} className='icone'/>
            <input type='search' placeholder='Search message'/>
        </div>
        <div className='border-div'></div>

        <div className='message-container'>
            {
                MessageData.map(mess=>(
                    <Link to="/chatbox/id">
                     
                       <div className='message' key={mess.id}>
                            <div className='user'>
                                <img src={mess.img} alt=''/>
                                <div className='green-active'></div>
                            </div>
                            <div className='message-body'>
                                <h5>{mess.name}</h5>
                                <p>{mess.mText}</p>
                            </div>
                        </div>
                       
                    </Link>
                ))
            }
        </div>
        
    </div>
  )
}

export default Message