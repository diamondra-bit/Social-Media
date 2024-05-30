import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <>
       <div className='login'>
       <div className='card'>
            <div className='left'>
                <h2>-<br/> NapExtra <br/> - </h2>
                <p>
                    lorem ipsum dolor sit amat consecteur adipscing elit.
                    Vero nostrum,vitae eum ipsum ibero delectus optio!
                </p>
                <span>Do not have an Account?</span>
                <Link to="/signup">
                  <button className='btn btn-primary'>Register</button>
                </Link>
              
            </div>

            <div className='right'>
              <form className='right'>
                <input type='text' required placeholder='username'/>
                <input type='password' required placeholder='password'/>
                <button type='submit' className='btn'>Login</button>
              </form>
            </div>
        </div>
       </div>
    </>
  )
}

export default Login