import Chart3 from "./Chart3"
import Rating from "./Rating"
import ChartThree from "./ChartThree"
import Chart4 from "./Chart4"

const Analytics = () => {
  return (
    <div className="bg-white shadow-xl px-5 py-5">
      <div className="grid grid-cols-3">
        <div className="col-span-2 mx-5">
        <Chart3/>
        </div>
        <Rating/>
      </div>
      <div className="grid grid-cols-3 mt-5">
        <div className="mx-5 col-span-2">
        <ChartThree/>
        </div>
        <Chart4/>
      </div>
    </div>
  )
}

export default Analytics
