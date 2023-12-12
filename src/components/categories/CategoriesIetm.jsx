/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slider from '../../assets/cat.svg';
const CategoriesIetm = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}

        className="mySwiper"
      >

        <SwiperSlide>
  <div>
          <img src={slider} alt="slider" className='img-cat' />
        </div>
        </SwiperSlide>
        <SwiperSlide>
  <div>
          <img src={slider} alt="slider" className='img-cat' />
        </div>
        </SwiperSlide>
        <SwiperSlide>
  <div>
          <img src={slider} alt="slider" className='img-cat' />
        </div>
        </SwiperSlide>
        <SwiperSlide>
  <div>
          <img src={slider} alt="slider" className='img-cat' />
        </div>
        </SwiperSlide>
        <SwiperSlide>
  <div>
          <img src={slider} alt="slider" className='img-cat' />
        </div>
        </SwiperSlide>
        <SwiperSlide>
  <div>
          <img src={slider} alt="slider" className='img-cat' />
        </div>
        </SwiperSlide>
        <SwiperSlide>
  <div>
          <img src={slider} alt="slider" className='img-cat' />
        </div>
        </SwiperSlide>
        <SwiperSlide>
  <div>
          <img src={slider} alt="slider" className='img-cat' />
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default CategoriesIetm
