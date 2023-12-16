import { Link } from "react-router-dom"

const CategoriesSiadBar = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-xl py-2 text-start rounded-xl w-full md:w-auto my-5">
      Categories
      </h1>
      <Link to="/categories">
      <button className="text-12 text-end py-2 px-4 rounded-xl w-full md:w-auto my-5 text-xl">
      see all
      </button>
      </Link>
    </div>
  )
}

export default CategoriesSiadBar
