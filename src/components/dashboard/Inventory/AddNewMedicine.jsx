/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { CgChevronRight } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { Textarea , Input , Select , Option } from '@material-tailwind/react';
const AddNewMedicine = () => {
  const [pictures, setPictures] = useState([]);

  const onDrop = (pictureFiles, pictureDataURLs) => {
    setPictures([...pictures, ...pictureFiles]);
  }

  return (
    <div className="bg-white rounded-sm pb-5">
      <div className='p-5 sticky top-20 z-30 bg-white'>
        <div className='flex justify-start items-center'>
        <Link to="/dashboard/inventory">
        <button className="text-slate-400">Inventory</button>
        </Link>
        <CgChevronRight />
        <div className='font-bold pl-2'>Add New Medicine</div>
        </div>
        <p className='text-zinc-400 text-[12px]'>*All fields are mandatory, except mentioned as (optional).</p>
      </div>
      <div className="grid grid-cols-4">
        <div className="col-span-2 m-3 h-10 rounded-lg shadow-2xl" style={{backgroundColor:"#E3EBF3"}}>
        <Input size="md" label="Medicine Name" />
        <div className="col-span-2 my-3 rounded-lg shadow-2xl" style={{backgroundColor:"#E3EBF3"}}>
        <Input size="md" label="Medicine ID" />
        </div>
        <div className="col-span-2 my-3 rounded-lg shadow-2xl" style={{backgroundColor:"#E3EBF3"}}>
<Input size="md" label="Quantity in Number" />
        </div>
        </div>


    <div className="col-span-4 m-3">
    <div className="flex justify-end mt-5 pr-10">
            <div className="w-52 px-2 shadow-xl" style={{backgroundColor:"#E3EBF3"}}>
              <Select label="Medicine Group">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div>
          </div>
    </div>
    <div className='col-span-2 m-3 rounded-lg shadow-2xl' style={{backgroundColor:"#E3EBF3"}}>
      <Textarea size="lg" label="How to Use" />
      </div>
      <div className='col-span-2 m-3 rounded-lg shadow-2xl' style={{backgroundColor:"#E3EBF3"}}>
    <Textarea size="lg" label="Side Effects" />
    </div>
    </div>
    <div className='pl-5 pt-2'>
      <button className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" style={{backgroundColor: "#A9A2A2"}}>
      Save Details
      </button>
    </div>
    </div>
  )
}

export default AddNewMedicine
