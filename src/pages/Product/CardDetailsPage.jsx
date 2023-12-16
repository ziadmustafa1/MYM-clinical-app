/* eslint-disable no-unused-vars */
import React from 'react'
import NavRouter from '../../components/utily/NavRouter'
import CardDetails from '../../components/product/CardDetails'
import ProductCard from '../../components/product/ProductCard'
const CardDetailsPage = () => {
  return (
    <div>
    <div>
      <NavRouter />
    </div>
    <div>
      <CardDetails/>
      <ProductCard/>
    </div>
  </div>
  )
}

export default CardDetailsPage