/* eslint-disable no-unused-vars */
import React from 'react'
import NavRouter from '../../components/utily/NavRouter'

import PaymentDetails from '../../components/PaymentDetails/PaymentDetails'

const PaymentDetailsPage = () => {
  return (
    <div className='bg-white'>
    <div>
      <NavRouter text="Payment Details" />
    </div>
    <div>
      <PaymentDetails/>
    </div>
  </div>
  )
}

export default PaymentDetailsPage
