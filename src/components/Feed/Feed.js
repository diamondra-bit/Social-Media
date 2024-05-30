import React ,{useState} from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'

import Comment from '../Comment/Comment'


import list from '../../icones/Navbarleft/sun.svg'
import like from '../../icones/Navbarleft/sun.svg'
import comment from '../../icones/Navbarleft/sun.svg'
import share from '../../icones/Navbarleft/sun.svg'

function Feed({fed}) {
    const[openComment,setOpenComment]=useState(false);
    const commentHandler = ()=>{
        setOpenComment(!openComment)
    }

  return (
    <div className='feed'>
        <div className='top-content'>
            <Link to='/profile/id'>
                <div className='user'>
                    <img src={fed.feedProfile}/>
                    <div>
                      <h5>{fed.name}</h5>
                      <small>1 mn ago</small>
                    </div>     
                </div>
            </Link>
            <span>
                <img src={list} className='icone'/>
            </span>
        </div>

        <div className='mid-content'>
            <p>{fed.desc}</p>
            <img src={fed.feedImage}/>
        </div>

        <div className='bottom-content'>
            <div className='action-item'>
                <span><img src={like} className='icone'/>14 like</span>
            </div>
            <div className='action-item'  onClick={commentHandler}>
                <span><img src={comment} className='icone'/>4 comments</span>
            </div>
            <div className='action-item'>
                <span><img src={share} className='icone'/>1 share</span>
            </div>
        </div>
        {openComment && <Comment/>}
    </div>
  )
}

export default Feed