import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles

export default function SwiperComp() {
  return (
    <>
      <Swiper
              loop={true}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        <SwiperSlide><img style={{width:'100%'}} src="images/backgb.png" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{width:'100%'}} src="images/backgb.png" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{width:'100%'}} src="images/backgb.png" alt="" /></SwiperSlide>
        </Swiper>
        <h2>Home</h2>
      </>
  )
}
