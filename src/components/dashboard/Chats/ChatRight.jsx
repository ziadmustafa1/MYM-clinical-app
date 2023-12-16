/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import Avatar from "../../../assets/Avatar.svg";
import { CgMoreVerticalAlt } from "react-icons/cg";

const ChatRight = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className=" bg-white">
        <div
          className=" w-[480px] h-[60px] bg-secondary rounded-full flex items-center justify-between px-5"
          style={{ backgroundColor: "#EDFFFA" }}
        >
          <div className="cursor-pointer flex justify-start">
            <img src={Avatar} width={40} height={40} />{" "}
          <div className=" ml-6 mr-auto">
            <h3 className="text-lg">Alexander</h3>
            <p className="text-sm font-light text-gray-600 text-center">online</p>
          </div>
          </div>
          <div className="bg-white rounded-full p-2">
          <CgMoreVerticalAlt />
          </div>
        </div>
        <div className="overflow-scroll border-b shadow-sm  w-[500px] h-[200px]">
          <div className="p-5">
            <div className="rounded-b-xl rounded-tr-xl py-4 chat-start">
              Hello Fatih !
            </div>
            <div className="rounded-b-xl rounded-tr-xl py-4 text-end chat-end">
              Hi Alexander
            </div>
            <div className="rounded-b-xl rounded-tr-xl py-4 chat-start">
              How are you ?
            </div>
            <div className="rounded-b-xl rounded-tr-xl py-4 text-end chat-end">
              Im good and you :
            </div>
            <div className="rounded-b-xl rounded-tr-xl py-4 chat-start">
              Im bad :/
            </div>
            <div className="rounded-b-xl rounded-tr-xl py-4 text-end chat-end">
              Why ? What happend ?
            </div>
            <div className="rounded-b-xl rounded-tr-xl py-4 chat-start">
              Lorem Ipsum
            </div>
            <div className="rounded-b-xl rounded-tr-xl py-4 text-end chat-end">
              Lorem Ipsum
            </div>
            <div className="rounded-b-xl rounded-tr-xl py-4 chat-start">
              Lorem Ipsum
            </div>
            <div className="rounded-b-xl rounded-tr-xl py-4 text-end chat-end">
              Lorem Ipsum
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-[500px] pb-20 pt-3 relative">
          <input
            placeHolder="Type a message..."
            className="p-4 pl-24 w-full border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none" style={{ backgroundColor: "#F1F1F1" }}
          />
          <div className="ml-4 p-2 cursor-pointer bg-light rounded-full absolute right-1">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.40018 6.5643L15.8902 3.73429C19.7002 2.46429 21.7702 4.54429 20.5102 8.35429L17.6802 16.8443C15.7802 22.5543 12.6602 22.5543 10.7602 16.8443L9.92018 14.3243L7.40018 13.4843C1.69018 11.5843 1.69018 8.4743 7.40018 6.5643Z" stroke="#224A46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.1099 13.8947L13.6899 10.3047" stroke="#224A46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </div>
          <div className="ml-4 p-2 cursor-pointer bg-light rounded-full absolute left-8">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15.7441C14.21 15.7441 16 13.9541 16 11.7441V6.24414C16 4.03414 14.21 2.24414 12 2.24414C9.79 2.24414 8 4.03414 8 6.24414V11.7441C8 13.9541 9.79 15.7441 12 15.7441Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.3501 9.89453V11.5945C4.3501 15.8145 7.7801 19.2445 12.0001 19.2445C16.2201 19.2445 19.6501 15.8145 19.6501 11.5945V9.89453" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6099 6.67328C11.5099 6.34328 12.4899 6.34328 13.3899 6.67328" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.2002 8.79445C11.7302 8.65445 12.2802 8.65445 12.8102 8.79445" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19.2441V22.2441" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </div>
          <div className="ml-4 p-2 cursor-pointer bg-light rounded-full absolute left-0">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.76017 22.2441H17.2402C20.0002 22.2441 21.1002 20.5541 21.2302 18.4941L21.7502 10.2341C21.8902 8.07414 20.1702 6.24414 18.0002 6.24414C17.3902 6.24414 16.8302 5.89414 16.5502 5.35414L15.8302 3.90414C15.3702 2.99414 14.1702 2.24414 13.1502 2.24414H10.8602C9.83017 2.24414 8.63017 2.99414 8.17017 3.90414L7.45017 5.35414C7.17017 5.89414 6.61017 6.24414 6.00017 6.24414C3.83017 6.24414 2.11017 8.07414 2.25017 10.2341L2.77017 18.4941C2.89017 20.5541 4.00017 22.2441 6.76017 22.2441Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 8.24414H13.5"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 18.2441C13.79 18.2441 15.25 16.7841 15.25 14.9941C15.25 13.2041 13.79 11.7441 12 11.7441C10.21 11.7441 8.75 13.2041 8.75 14.9941C8.75 16.7841 10.21 18.2441 12 18.2441Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRight;
