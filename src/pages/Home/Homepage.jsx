import Chat from "../../components/utily/Chat"
import NavBarBtn from "../../components/utily/NavBarBtn"
import Slider from "../../components/utily/Silder"
import ProductPage from "./ProductPage"
import Navbar from "../../components/utily/Navbar"
import Search from "../../components/utily/Search"
import CategoriesPage from "./CategoriesPage"
const Homepage = () => {
  return (
    <div>
      <Navbar/>
        <Search/>
      <Slider/>
      <CategoriesPage/>
      <ProductPage/>
      <Chat/>
      <NavBarBtn/>
    </div>
  )
}

export default Homepage
