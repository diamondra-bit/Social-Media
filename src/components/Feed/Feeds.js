import React from 'react'
import Feed from './Feed'

import HomeFeedData from '../../FackApis/HomeFeedData'

function Feeds() {
  return (
    <div className='feeds'>
        {
            HomeFeedData.map(fed=>(
                <Feed fed={fed} key={fed.key}>

                </Feed>
            ))
        }
    </div>
  )
}

export default Feeds