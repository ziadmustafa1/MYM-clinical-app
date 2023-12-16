/* eslint-disable no-unused-vars */
import React from 'react'
import Profile from '../../components/profile/profile'
import NavRouter from '../../components/utily/NavRouter'

const ProfilePage = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#8BC4B5' }} className='pb-24'>
        <NavRouter text="Profile" />
      </div>
      <div>
        <Profile/>
      </div>
    </div>
  )
}

export default ProfilePage
