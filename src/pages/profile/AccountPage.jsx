/* eslint-disable no-unused-vars */
import React from 'react'
import NavRouter from '../../components/utily/NavRouter'
import Account from '../../components/profile/Account'
import NavbarBtn from '../../components/utily/NavbarBtn'

const AccountPage = () => {
  return (
    <div>
    <div>
      <NavRouter text="Account" />
    </div>
    <div>
      <Account/>
    </div>
    <NavbarBtn/>
  </div>
  )
}

export default AccountPage