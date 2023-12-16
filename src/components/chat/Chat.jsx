/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import Avatar from "../../assets/Avatar.svg"
import { CgChevronLeft, CgMoreVerticalAlt } from "react-icons/cg"
import { Link } from 'react-router-dom'
const Chat = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="">
      <div className='grid grid-cols-3 pb-5 pt-10' style={{ backgroundColor: "#8BC4B5" }}>
      <Link to="/">
      <div className='text-3xl ml-10'>
      <CgChevronLeft />
      </div>
      </Link>
      <div className='md:text-center text-3xl'>
      pharmacy chat
      </div>
      <div className='flex items-center justify-end mr-10'>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.47 18.33C22.47 18.69 22.39 19.06 22.22 19.42C22.05 19.78 21.83 20.12 21.54 20.44C21.05 20.98 20.51 21.37 19.9 21.62C19.3 21.87 18.65 22 17.95 22C16.93 22 15.84 21.76 14.69 21.27C13.54 20.78 12.39 20.12 11.25 19.29C10.1 18.45 9.01 17.52 7.97 16.49C6.94 15.45 6.01 14.36 5.18 13.22C4.36 12.08 3.7 10.94 3.22 9.81C2.74 8.67 2.5 7.58 2.5 6.54C2.5 5.86 2.62 5.21 2.86 4.61C3.1 4 3.48 3.44 4.01 2.94C4.65 2.31 5.35 2 6.09 2C6.37 2 6.65 2.06 6.9 2.18C7.16 2.3 7.39 2.48 7.57 2.74L9.89 6.01C10.07 6.26 10.2 6.49 10.29 6.71C10.38 6.92 10.43 7.13 10.43 7.32C10.43 7.56 10.36 7.8 10.22 8.03C10.09 8.26 9.9 8.5 9.66 8.74L8.9 9.53C8.79 9.64 8.74 9.77 8.74 9.93C8.74 10.01 8.75 10.08 8.77 10.16C8.8 10.24 8.83 10.3 8.85 10.36C9.03 10.69 9.34 11.12 9.78 11.64C10.23 12.16 10.71 12.69 11.23 13.22C11.77 13.75 12.29 14.24 12.82 14.69C13.34 15.13 13.77 15.43 14.11 15.61C14.16 15.63 14.22 15.66 14.29 15.69C14.37 15.72 14.45 15.73 14.54 15.73C14.71 15.73 14.84 15.67 14.95 15.56L15.71 14.81C15.96 14.56 16.2 14.37 16.43 14.25C16.66 14.11 16.89 14.04 17.14 14.04C17.33 14.04 17.53 14.08 17.75 14.17C17.97 14.26 18.2 14.39 18.45 14.56L21.76 16.91C22.02 17.09 22.2 17.3 22.31 17.55C22.41 17.8 22.47 18.05 22.47 18.33Z" stroke="#141D21" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>
      </div>
    </div>
        <div className="overflow-scroll border-b shadow-sm  w-[100%] h-[450px]">
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
        <div className="flex items-center justify-between w-[100%] pb-20 pt-3 relative">
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
  )
}

export default Chat
