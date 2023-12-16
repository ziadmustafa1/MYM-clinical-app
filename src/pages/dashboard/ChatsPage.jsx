/* eslint-disable no-unused-vars */
import React from 'react'
import DashboardSidBar from '../../components/dashboard/DashboardSidBar'
import Chats from '../../components/dashboard/Chats/Chats'
import './dashboard.css'

const ChatsPage = () => {
  return (
    <div className="grid grid-cols-7">
    <div className="col-span-1">
      <DashboardSidBar />
    </div>
    <div className="col-span-6">
      <Chats/>
    </div>
  </div>
  )
}

export default ChatsPage
