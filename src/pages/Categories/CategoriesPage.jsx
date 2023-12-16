/* eslint-disable no-unused-vars */
import React from 'react'
import NavRouter from '../../components/utily/NavRouter'
import Search from '../../components/utily/Search'
import Categories from '../../components/categories/Categories'

const CategoriesPage = () => {
  return (
    <div>
      <div>
        <NavRouter text="Categories" />
        <Search/>
      </div>
      <div>
        <Categories/>
      </div>
    </div>
  )
}

export default CategoriesPage
