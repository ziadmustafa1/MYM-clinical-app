/* eslint-disable no-unused-vars */
import React from "react";
import { CiSearch } from "react-icons/ci";
import { Select, Option } from "@material-tailwind/react";
const SearchChat = () => {
  return (
    <div className="bg-white">
      <div>
        <div className="flex items-center justify-between"></div>
        <div className="pt-3">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-nonetext-xl font-bold text-neutral-500">
              <CiSearch />
            </div>
            <div className="absolute end-0">
              <div className="flex justify-start pr-10">
                <div className="px-2 shadow-xl w-44">
                  <Select label="Messages">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                </div>
              </div>
            </div>
            <input
              placeholder="Search"
              type="text"
              name="search"
              id="search"
              aria-describedby="helper-text-explanation"
              className="w-full py-2 px-4 pl-10 rounded-lg shadow-2xl bg-white"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchChat;
