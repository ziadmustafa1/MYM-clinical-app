/* eslint-disable no-unused-vars */
import React from 'react'
import DashboardSidBar from '../../components/dashboard/DashboardSidBar'
import AddNewMedicine from '../../components/dashboard/Inventory/AddNewMedicine'

const AddNewMedicinePage = () => {
  return (
    <div className="grid grid-cols-7">
    <div className="col-span-1">
      <DashboardSidBar />
    </div>
    <div className="col-span-6">
      <AddNewMedicine/>
    </div>
  </div>
  )
}

export default AddNewMedicinePage
