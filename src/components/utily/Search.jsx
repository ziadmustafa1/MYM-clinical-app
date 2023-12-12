import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="md:mx-10 mx-5">
      <div>
        <div className="flex items-center justify-between"></div>
        <div className="mt-4">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-nonetext-xl font-bold text-neutral-500">
              <CiSearch />
            </div>
            <input
              placeholder="Search"
              type="text"
              name="search"
              id="search"
              aria-describedby="helper-text-explanation"
              className="w-full py-4 px-4 pl-10 focus:ring-cyan-400 rounded-lg" style={{border: '1px solid #cbcbcb'}}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
