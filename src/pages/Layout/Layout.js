import React from 'react'
import './Layout.css'
import Main from '../../components/Main/Main'
import Login from '../../components/Login/Login'
import SignUp from '../../components/SignUp/SignUp'

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import Chatbox from '../Chatbox/Chatbox'
import Nav from '../../components/Navbar/Nav'
import Leftbar from '../../components/Leftbar/Leftbar'
import Rightbar from '../../components/Rightbar/Rightbar'

function Layout() {
  // Feed
  const Feed = ()=>{
    return (
      <>
        <Nav/>
        <main>
          <Leftbar/>
          <div className='container'>
            <Outlet/>
          </div>
          <Rightbar/>
        </main>
      </>
    )
  }

  // Router
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Feed/>,
      children: [
        {
          path: '/',
          element : <Home/>
        },
        {
          path: '/profile/:id',
          element : <Profile/>
        },
        {
          path: '/chatbox/:id',
          element : <Chatbox/>
        }
      ]
    },
    {
      path :'/login',
      element :<Login/>
    },
    {
      path :'/signup',
      element :<SignUp/>
    }
  ])
  return (
    <>

   <RouterProvider router={router}/>
        
    </>
  )
}

export default Layout