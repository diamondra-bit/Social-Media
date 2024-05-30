import React from 'react'
import Stories from '../../components/Stories/Stories'
import AddPost from '../../components/addPost/addPost'
import Feeds from '../../components/Feed/Feeds'

function Home() {
  return (
    <>
      <Stories/>
      <AddPost/>
      <Feeds/>
    </>
  )
}

export default Home