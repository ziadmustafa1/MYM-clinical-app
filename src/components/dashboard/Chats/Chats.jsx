/* eslint-disable no-unused-vars */
import React from "react";
import { Select, Option } from "@material-tailwind/react";
import ChatLeft from "./ChatLeft";
import ChatRight from "./ChatRight";
const Chats = () => {
  return (
    <div className="bg-white rounded-sm pb-5">
      <div className="p-5 flex justify-between items-center sticky top-20 z-30 bg-white">
        <div>
          <h1 className="px-2 text-2xl py-3">Chats</h1>
          <div className="flex justify-start pr-10 text-neutral-400">
            <div className="w-52 px-2 shadow-xl">
              <Select label="Recent Chats">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div>
          </div>
        </div>
        <button className="chat">+ create new chat</button>
      </div>
      <div className="grid grid-cols-2 p-5 pl-7">
        <div className="col-span-1">
        <ChatLeft />
        </div>
        <div className="col-span-1 ml-5">
        <ChatRight />
        </div>
      </div>
    </div>
  );
};

export default Chats;
