/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import Cart from '../cart/Cart'

const Details = () => {
  return (
    <div className='p-10'>
      <div className='grid grid-cols-2 pt-10 pb-5' style={{borderBottom: '1px solid #A19E9E'}}>
        <div>
          <h1>
          Delivery  address
          </h1>
          <p className='text-[15px] text-slate-400'>25 Nasr City,Egypt </p>
        </div>
        <div className='flex justify-end items-center'>
          <h1>Change</h1>
          <div>
            <svg width="25" height="30" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.05499 11.6475L10.695 9.00004L8.05499 6.35254" stroke="#224A46" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
        </div>
      </div>
      <div className='grid grid-cols-2 pt-10 pb-5' style={{borderBottom: '1px solid #A19E9E'}}>
        <div>
          <h1>
          Payment Method
          </h1>
        </div>
        <div className='flex justify-end items-center'>
          <h1>Change</h1>
          <div>
            <svg width="25" height="30" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.05499 11.6475L10.695 9.00004L8.05499 6.35254" stroke="#224A46" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
        </div>
        <div className='relative mb-10'>
          <input type='text' placeholder='XXXXXXXXXXXX' className='absolute pl-14 py-2 bg-transparent' />
          <div className='absolute left-2 '>
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_635_2205)">
<path d="M11.1096 20.8405H13.6186L15.2313 10.8062H12.5433L11.1096 20.8405Z" fill="#1565C0"/>
<path d="M8.95981 10.6267L6.63029 17.7941L6.19048 15.7752C4.93627 12.7288 2.78564 11.4746 2.78564 11.4746L5.01764 20.661H7.7056L11.4689 10.626H8.95981V10.6267ZM29.0291 10.6267H26.3411L22.2194 20.6616H24.7278L25.2652 19.2279H28.4905L28.8489 20.6616H31.0002L29.0291 10.6267ZM25.8038 17.4357L27.2375 13.673L27.9544 17.4357H25.8038ZM18.6357 13.4935C18.6357 12.9562 18.9941 12.4182 20.2483 12.4182C21.1441 12.4182 22.0405 13.1351 22.0405 13.1351L22.5779 10.9851C22.5779 10.9851 21.3236 10.4478 20.2483 10.4478C17.5604 10.4478 16.3062 11.8815 16.3062 13.4941C16.3062 16.7194 19.8899 16.1821 19.8899 17.7948C19.8899 18.1532 19.711 18.6905 18.2772 18.6905C16.8435 18.6905 15.7688 18.1532 15.7688 18.1532L15.4104 20.3032C15.4104 20.3032 16.3062 20.8405 18.0984 20.8405C19.711 21.0194 22.2201 19.5863 22.2201 17.4357C22.2201 14.9273 18.6357 14.7484 18.6357 13.4935Z" fill="#1565C0"/>
<path d="M6.2715 16.1814L5.37573 11.7019C5.37573 11.7019 5.0173 10.8062 3.94198 10.8062C2.86667 10.8062 -0.000183105 10.8062 -0.000183105 10.8062C-0.000183105 10.8062 5.19619 12.4188 6.2715 16.1814Z" fill="#FF9800"/>
</g>
<defs>
<clipPath id="clip0_635_2205">
<rect width="31" height="31" fill="white"/>
</clipPath>
</defs>
            </svg>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 pt-10 pb-5' style={{borderBottom: '1px solid #A19E9E'}}>
        <div>
          <h1>
          Order
          </h1>
        </div>
        <div className='flex justify-end items-center'>
          <h1>Change</h1>
          <div>
            <svg width="25" height="30" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.05499 11.6475L10.695 9.00004L8.05499 6.35254" stroke="#224A46" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
        </div>
        <div className='relative mb-10'>
        <Cart/>
        </div>
      </div>
      <div
            className="grid grid-cols-2 m-5">
            <div className="py-2">Subtotal</div>
            <div className="text-end py-2">100$</div>
            <div className="py-2">Delivery</div>
            <div className="text-end py-3">10$</div>
          </div>
          <div className="md:m-2 flex justify-center items-center font-bold pb-20">
                <button className="btn text-center rounded-3xl md:py-3 h-10">
                Pay Now
                </button>
              </div>
    </div>
  )
}

export default Details
