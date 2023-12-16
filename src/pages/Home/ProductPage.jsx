import ProductCard from "../../components/product/ProductCard"
import ProductSaidBar from "../../components/product/ProductSaidBar"
import '../../components/product/product.css'

const ProductPage = () => {
  return (
    <div className="md:px-8 text-center px-5">
      <ProductSaidBar/>
      <div className="grid grid-cols-1">
      <ProductCard/>
      </div>
    </div>
  )
}

export default ProductPage
