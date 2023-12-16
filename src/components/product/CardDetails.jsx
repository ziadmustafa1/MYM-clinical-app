/* eslint-disable no-unused-vars */
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const CardDetails = () => {
  return (
    <div className='p-10'>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img className='img-details' src='https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol-reskin/ar_AE/adult/Panadol%20Advance%20455x455.jpg.rendition.455.455.jpg?auto=format'/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-details' src='https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol-reskin/ar_AE/adult/Panadol%20Advance%20455x455.jpg.rendition.455.455.jpg?auto=format'/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-details' src='https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol-reskin/ar_AE/adult/Panadol%20Advance%20455x455.jpg.rendition.455.455.jpg?auto=format'/>
        </SwiperSlide>
        </Swiper>
      <h1 className='text-xl'>Panadol</h1>
      <p className='text-slate-400'>20mg</p>
      <div className='flex justify-between'>
        <h1>$ 10</h1>
        <div>
        <div className='flex items-center justify-between overflow-hidden w-40 h-10 border-tertiary-light border-2 border-black-600 rounded-full'>
            <button
                className='flex-1 h-full flex items-center justify-center hover:bg-gray' style={{backgroundColor: "#E4E4E4"}}
            >
                <AiOutlineMinus />
            </button>
            <p className='flex-1 h-full text-center flex items-center justify-center'>
                1
            </p>
            <button
                className='flex-1 h-full flex items-center justify-center text-white' style={{backgroundColor: "#224A46"}}
            >
                <AiOutlinePlus />
            </button>
        </div>
        </div>
      </div>
      <div>
        <h1>Description</h1>
        <p className='text-slate-400'>
        Voluptatem non exercitationem ducimus ut est delectus dolores. Et nemo consequatur labore blanditiis in voluptates sed esse. Omnis odit mollitia exercitationem ratione. Nobis fugit et dolores deleniti. Dolorum ut eius et.
        </p>
      </div>
      <div className="px-5 flex justify-between w-full sticky bottom-0 pb-10" style={{backgroundColor: "#E4E4E4"}}>
                    <button className="btn-cart p-1 w-full md:text-xl">
                    add to cart
                  </button>
                  <button className="btn-cart-2 p-1 w-full md:text-xl">
                  buy now
                  </button>
                  </div>
    </div>
  )
}

export default CardDetails