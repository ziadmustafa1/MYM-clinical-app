/* eslint-disable no-unused-vars */
import React from 'react'
import DashboardSidBar from '../../components/dashboard/DashboardSidBar'
import Customers from '../../components/dashboard/Customers/Customers'

const CustomersPage = () => {
  return (
    <div className="grid grid-cols-7">
    <div className="col-span-1">
      <DashboardSidBar />
    </div>
    <div className="col-span-6">
      <Customers/>
    </div>
  </div>
  )
}

export default CustomersPage
