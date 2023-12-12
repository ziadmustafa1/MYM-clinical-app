import Chat from "../components/utily/Chat"
import NavBarBtn from "../components/utily/NavBarBtn"
import Slider from "../components/utily/Silder"
import CategoriesPage from "./CategoriesPage"
import ProductPage from "./ProductPage"

const Homepage = () => {
  return (
    <div>
      <Slider/>
      <CategoriesPage/>
      <ProductPage/>
      <Chat/>
      <NavBarBtn/>
    </div>
  )
}

export default Homepage
