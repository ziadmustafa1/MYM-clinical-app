/* eslint-disable no-unused-vars */
import React from 'react';

const Rating = () => {
  return (
    <div>
      <h1 className='mt-5'>Your Rating</h1>
      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <div className='relative mt-10'>
        <div style={{background: "#F99C30"}} className='w-40 h-40 rounded-full absolute right-10 top-5'>
          <h1 className='text-center pt-14 text-2xl text-zinc-50'>85%</h1>
          <p className='text-center text-white'>Skin care</p>
        </div>
        <div style={{background: "#6463D6"}} className='w-28 h-28 rounded-full absolute top-0 left-10'>
        <h1 className='text-center pt-8 text-xl text-zinc-50'>85%</h1>
          <p className='text-center text-white'>Medicines</p>
        </div>
        <div style={{background: "#2FBFDE"}} className='w-36 h-36 rounded-full absolute top-32 left-0'>
        <h1 className='text-center pt-12 text-2xl text-zinc-50'>92%</h1>
          <p className='text-center text-white'>Packaging</p>
        </div>
      </div>
    </div>
  )
}

export default Rating