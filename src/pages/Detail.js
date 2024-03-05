import React from 'react'
import Walking from '../components/Walking'
import Cycling from '../components/Cycling'
import Water from '../components/Water'
import Daily from '../components/Daily'
import Goal from '../components/Goal'
import Swim from '../components/Swim'

function Detail() {
  return (
    <div className='bg-primary h-screen text-white pt-24'>
      <div className='flex justify-around'>
        <Walking />
        <div className=''>
          <Cycling />
          <Water />
        </div>
      </div>
      <div className='ml-8 flex gap-6'>    <Daily />
        <Goal />
        <Swim /></div>


    </div>
  )
}

export default Detail