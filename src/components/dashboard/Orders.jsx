import { Select, Option } from "@material-tailwind/react";
import OrdersItem from "./OrdersItem";
const Orders = () => {
  return (
    <div className="bg-white rounded-sm pb-5">
      <div className="sticky top-28 z-20 bg-white pr-5">
      <div className="flex justify-between items-center">
        <div className="p-4">
          <h1 className="text-2xl">your order</h1>
          <p className="text-sm text-zinc-400">this is your order list data</p>
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
    <div className="grid grid-cols-7 px-5 py-3 mx-5 rounded-lg text-center" style={{border:"1px solid #cbcbcb", backgroundColor:"#dafef5"}}>
      <div className="col-span-1">order id</div>
      <div className="col-span-1">date</div>
      <div className="col-span-1">customer name</div>
      <div className="col-span-1">location</div>
      <div className="col-span-1">items</div>
      <div className="col-span-1">TOTAL </div>
      <div className="col-span-1">States</div>
    </div>
    </div>
    <div className="pr-5">
      <OrdersItem/>
      <OrdersItem/>
      <OrdersItem/>
      <OrdersItem/>
      <OrdersItem/>
      <OrdersItem/>
      <OrdersItem/>
    </div>
    </div>
  )
}

export default Orders
