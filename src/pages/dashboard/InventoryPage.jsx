/* eslint-disable no-unused-vars */
import React from 'react'
import DashboardSidBar from '../../components/dashboard/DashboardSidBar'
import Inventory from '../../components/dashboard/Inventory/Inventory'

const InventoryPage = () => {
  return (
    <div className="grid grid-cols-7">
    <div className="col-span-1">
      <DashboardSidBar />
    </div>
    <div className="col-span-6">
      <Inventory/>
    </div>
  </div>
  )
}

export default InventoryPage
