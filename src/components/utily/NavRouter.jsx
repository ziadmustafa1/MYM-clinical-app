/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { CgChevronLeft } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const NavRouter = ({text}) => {
  return (
    <div className='grid grid-cols-3 pt-10'>
      <Link to="/">
      <div className='text-3xl ml-10'>
      <CgChevronLeft />
      </div>
      </Link>
      <div className='md:text-center col-span-2 md:col-span-1 text-3xl'>
        {text}
      </div>
    </div>
  )
}

export default NavRouter
