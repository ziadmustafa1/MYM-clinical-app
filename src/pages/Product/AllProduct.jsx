/* eslint-disable no-unused-vars */
import React from 'react'
import NavRouter from '../../components/utily/NavRouter'
import Search from '../../components/utily/Search'
import ProductCard from '../../components/product/ProductCard'

const AllProduct = () => {
  return (
    <div>
    <div>
      <NavRouter text="Body care" />
      <Search/>
    </div>
    <div>
      <ProductCard/>
    </div>
  </div>
  )
}

export default AllProduct
