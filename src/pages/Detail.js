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
      <div className='border-2 rounded-2xl border-slate-600  py-4 px-24 mb-10'>
      <Walking />
      </div>
        
        <div className=''>
          <Cycling />
          <Water />
        </div>
      </div>
      <div className='ml-16 flex gap-12'>    <Daily />
        <Goal />
        <Swim /></div>


    </div>
  )
}

export default Detail