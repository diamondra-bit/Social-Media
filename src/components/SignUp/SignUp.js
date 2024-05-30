import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <>
    <div className='signup'>
       <div className='card'>
            <div className='left'>
                <h2> -<br/>NapExtra SignUp<br/> - </h2>
                <p>
                    lorem ipsum dolor sit amat consecteur adipscing elit.
                    Vero nostrum,vitae eum ipsum ibero delectus optio!
                </p>
                <span>Have an Account?</span>
                <Link to="/login">
                  <button className='btn btn-primary'>Login</button>
                </Link>
               
            </div>

            <div className='right'>
              <form className='right'>
                <input type='text' required placeholder='username'/>
                <input type='email' required placeholder='email'/>
                <input type='password' required placeholder='password'/>
                <button type='submit' className='btn'>Register</button>
              </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default SignUp