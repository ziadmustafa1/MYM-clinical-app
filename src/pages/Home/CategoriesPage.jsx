import CategoriesSiadBar from "../../components/categories/CategoriesSiadBar"
import '../../components/categories/cat.css'
import CategoriesIetm from "../../components/categories/CategoriesIetm"
const CategoriesPage = () => {
  return (
    <div className="md:px-8 text-center px-5">
      <CategoriesSiadBar/>
      <CategoriesIetm/>
    </div>
  )
}

export default CategoriesPage