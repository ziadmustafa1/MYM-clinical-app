/* eslint-disable no-unused-vars */
import React from 'react'
import NavRouter from '../../components/utily/NavRouter'
import Search from '../../components/utily/Search'
import FavoriteCard from '../../components/product/FavoriteCard'

const FavoritesPage = () => {
  return (
    <div>
    <div>
      <NavRouter text="Favorite" />
      <Search/>
    </div>
    <div>
      <FavoriteCard/>
    </div>
  </div>
  )
}

export default FavoritesPage