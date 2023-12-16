/* eslint-disable no-unused-vars */
import React from 'react'
import CustomerIetm from './CustomerIetm'

const Customers = () => {
  return (
    <div className="rounded-sm pb-5 bg-white pt-5">
      <div className='m-5 mt-5' style={{backgroundColor:"#F9FAFC"}}>
    <div className="sticky top-28 z-20 pr-5" style={{backgroundColor:"#F9FAFC"}}>
    <div className="flex justify-between items-center">
      <div className="p-4">
        <h1 className="text-2xl">your order</h1>
        <p className="text-sm text-zinc-400">this is your order list data</p>
      </div>
  </div>
  <div className="grid grid-cols-5 px-5 py-3 mx-5 rounded-lg text-center">
    <div className="col-span-2 text-start">Customer</div>
    <div className="col-span-1">Order</div>
    <div className="col-span-1">Total </div>
    <div className="col-span-1"></div>
  </div>
  </div>
  <div className="pr-5">
    <CustomerIetm/>
    <CustomerIetm/>
    <CustomerIetm/>
    <CustomerIetm/>
    <CustomerIetm/>
  </div>
  </div>
  </div>
  )
}

export default Customers
