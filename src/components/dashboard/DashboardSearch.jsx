import { CiSearch } from "react-icons/ci"

const DashboardSearch = () => {
  return (
    <div className="md:mx-2 mx-5">
      <div>
        <div className="flex items-center justify-between"></div>
        <div className="mt-3">
          <div className="relative">
            <div className="absolute inset-y-0 end-2 top-0 flex items-center ps-3.5 pointer-events-nonetext-xl font-bold text-neutral-500">
              <CiSearch />
            </div>
            <input
              placeholder="Search"
              type="text"
              name="search"
              id="search"
              aria-describedby="helper-text-explanation"
              className="w-full py-1 px-4 pl-2 focus:ring-cyan-400 rounded-lg" style={{border: '1px solid #cbcbcb ', background: '#dafef5'}}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardSearch
