/* eslint-disable no-unused-vars */
import React from 'react'
import SearchChat from './SearchChat'
import ChatCard from './ChatCard'

const ChatLeft = () => {
  return (
    <div className="bg-white">
      <div className=''>
      <SearchChat/>
      </div>
      <div className='h-[300px] overflow-scroll'>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      </div>
    </div>
  )
}

export default ChatLeft