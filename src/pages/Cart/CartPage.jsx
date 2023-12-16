/* eslint-disable no-unused-vars */
import React from 'react'
import NavRouter from '../../components/utily/NavRouter'
import Cart from '../../components/cart/Cart'
import NavBarBtn from '../../components/utily/NavBarBtn'
const CartPage = () => {
  return (
    <div className='bg-white h-screen'>
    <div>
      <NavRouter text="Cart" />
    </div>
    <div>
      <Cart/>
      <Cart/>
      <Cart/>
    </div>
    <NavBarBtn/>
  </div>
  )
}

export default CartPage
