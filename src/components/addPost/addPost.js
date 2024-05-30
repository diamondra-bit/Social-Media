import React from 'react'
import './addPost.css'

import CurrentUserData from '../../FackApis/CurrentUserData'

import image from '../../icones/Navbarleft/sun.svg'
import video from '../../icones/Navbarleft/sun.svg'
import tags from '../../icones/Navbarleft/sun.svg'
import face from '../../icones/Navbarleft/sun.svg'

function addPost() {
  return (
    <form className='postForm'>
        <div className='user form-top'>
            <img className='icone' src={CurrentUserData.map(user=>user.ProfileImage)} alt=''/>
            <input type='text' placeholder="What 's in your mind"/>
            <button type='submit' className='btn btn-primary'>POST</button>
        </div>
        <div className='post-categories'>
            <label htmlFor='file'>
                <input type='file' id='file'/>
                <span><img className='icone' src={image}/>Photos</span>
            </label>
            <label htmlFor='file'>
                <input type='file'/>
                <span><img className='icone' src={video}/>Vidéos</span>
            </label>
                <span><img className='icone' src={tags}/>Tags</span>
                <span><img className='icone' src={face}/>Feelings</span>
            

        </div>
    </form>
  )
}

export default addPost