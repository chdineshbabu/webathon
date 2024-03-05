import React from 'react'
import Walking from '../components/Walking'
import Cycling from '../components/Cycling'
import Water from '../components/Water'

function Detail() {
  return (
    <div className='bg-primary h-screen text-white'>
        <Walking />
        <div>
        <Cycling />
        <Water />
        </div>
        
    </div>
  )
}

export default Detail