import { Select, Option } from "@material-tailwind/react";
import dash from '../../assets/dashboard/dash.svg'
import dash2 from '../../assets/dashboard/dash2.svg'
import dash3 from '../../assets/dashboard/dash3.svg'
import ChartThree from "./Analytics/ChartThree";
import ChartOne from "./Analytics/ChartOne";
import ChartTow from "./Analytics/ChartTow";
const Dashboard = () => {
  return (
    <div className="bg-white rounded-sm pb-5">
      <div className="pr-5">
        <div className="flex justify-between items-center">
          <div className="p-4">
            <h1 className="text-2xl"> Dash board  </h1>
            <p className="text-sm text-zinc-400">
            Here is the summary
            </p>
          </div>
          <div className="flex justify-start pr-10">
          <div className="w-52 px-2 shadow-xl">
      <Select label="Select Version">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    </div>
          </div>
        </div>
        <div
          className="grid grid-cols-4 px-5 py-3 mx-5 rounded-lg text-center"
        >
          <div className="col-span-1 rounded-xl bg-yellow-100 px-2 py-5 text-start font-medium pl-5">
            <img src={dash} className="p-2 rounded-full" style={{background: "#feb157"}}/>
            <h1 className="py-2">Total Profit</h1>
            <p>4553</p>
            </div>
          <div className="col-span-1 rounded-xl bg-blue-100 px-2 py-5 text-start font-medium mx-5 pl-5" style={{ background: "#bdf3f6" }}>
          <img src={dash} className="p-2 rounded-full" style={{background: "#3bbdc4"}}/>
            <h1 className="py-2"> Total expenses </h1>
            <p> 24753 </p>
          </div>
          <div className="col-span-1 rounded-xl bg-red-100 px-2 py-5 text-start font-medium mr-5 pl-5">
          <img src={dash2} className="p-2 rounded-full" style={{background: "#ff6f6f"}}/>
            <h1 className="py-2">Total Balance</h1>
            <p>24753</p>
          </div>
          <div className="col-span-1 rounded-xl bg-purple-200 px-2 py-5 text-start font-medium pl-5">
          <img src={dash3} className="p-2 rounded-full" style={{background: "#a765fa"}}/>
            <h1 className="py-2">Total Customers</h1>
            <p>5599</p>
          </div>
        </div>
      </div>
      <div className="pr-5 flex justify-between">
        <ChartThree/>
        <ChartOne/>
      </div>
      <ChartTow/>
    </div>
  );
};

export default Dashboard;
