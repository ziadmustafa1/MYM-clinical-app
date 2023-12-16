/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../../../assets/Avatar.svg'
const ChatCard = () => {
  return (
    <div className='bg-white shadow-2xl p-5 my-5'>
      <div className="flex justify-start items-center py-5">
        <img src={logo} className='pr-3' />
        Luy Robin
      </div>
      <div className='flex justify-between'>
        <div className='w-5/6'>
        Most of its text is made up from sections 1.10.32–3 of Ciceros De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).
        </div>
        <div className="rounded-full bg-red-600 w-5 h-5 text-center text-white flex justify-center items-center">
          2
        </div>
      </div>
    </div>
  )
}

export default ChatCard