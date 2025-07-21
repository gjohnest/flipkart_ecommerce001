import React from 'react'
import b1 from '../assets/banner/1.webp';
import b2 from '../assets/banner/2.webp';
import b3 from '../assets/banner/3.webp';
import b4 from '../assets/banner/4.webp';
import b5 from '../assets/banner/5.webp';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 const Banner = ()=> {
    let bannerArr = [b1, b2, b3, b4, b5];
  return (
    <div>
        <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {bannerArr.map((img) => {
        return (<SwiperSlide>
            <div className='w-[100%] hover:scale-105 duration-75 cursor-pointer'>
                <img src={img} alt="" />

            </div>
        </SwiperSlide>)
      })}
      
    </Swiper>
    
    </div>
  )
}

export default Banner
