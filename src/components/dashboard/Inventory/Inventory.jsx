/* eslint-disable no-unused-vars */
import React from "react";
import { Select, Option } from "@material-tailwind/react";
import CardInventory from "./CardInventory";
import AllMedicine from "./AllMedicine";
import { Link } from "react-router-dom";
const Inventory = () => {
  return (
    <div className="bg-white rounded-sm pb-5">
      <div className="p-5 flex justify-between items-center sticky top-20 z-30 bg-white">
        <div>
          <h1 className="px-2 text-2xl pt-3">Inventory</h1>
          <p className="text-zinc-400 text-[15px] px-2">
            List of medicines available for sales.
          </p>
        </div>
        <Link to="/dashboard/inventory/add-new-medicine">
        <button className="chat">+ Add New Item</button>
        </Link>
      </div>
      <CardInventory />
      <div className="flex justify-between px-5">
        <div className="text-xl font-bold">All Medicine</div>
        <div className=" flex justify-end items-center">
          <div>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66758 1.75H11.4176L7.03382 7.2625L2.66758 1.75ZM0.261325 1.40875C2.02883 3.675 5.29257 7.875 5.29257 7.875V13.125C5.29257 13.6062 5.68633 14 6.16757 14H7.91758C8.39883 14 8.79258 13.6062 8.79258 13.125V7.875C8.79258 7.875 12.0476 3.675 13.8151 1.40875C14.2613 0.83125 13.8501 0 13.1238 0H0.952575C0.226325 0 -0.184925 0.83125 0.261325 1.40875Z" fill="#141D21"/>
</svg>

          </div>
          <div className="flex justify-start pr-10 text-neutral-400">
            <div className="w-52 px-2 shadow-xl">
              <Select label="- Select Group -">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="All-Medicine m-5">
        <div className="grid grid-cols-4 p-4 dhd">
          <div className="col-span-1 text-center">Medicine Name</div>
          <div className="col-span-1 text-center">Group Name</div>
          <div className="col-span-1 text-center">Stock in Qty</div>
          <div className="col-span-1 text-center">Action</div>
        </div>
        <div className="overflow-y-auto h-[200px]">
        <AllMedicine/>
        <AllMedicine/>
        <AllMedicine/>
        <AllMedicine/>
        <AllMedicine/>
        <AllMedicine/>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
