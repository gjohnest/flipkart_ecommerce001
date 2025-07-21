import React from 'react'
import p1 from '../assets/Products/1.webp'
import p2 from '../assets/Products/2.webp'
import p3 from '../assets/Products/3.webp'
import p4 from '../assets/Products/4.webp'
import p5 from '../assets/Products/5.webp'
import p6 from '../assets/Products/6.webp'
import p7 from '../assets/Products/7.webp'
import p8 from '../assets/Products/8.webp'
import p9 from '../assets/Products/9.webp'


import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';




const ProductTwo = ({title})=> {
let products = [
    {
        id:1,
        name : "Samsung Galaxy A16",
        price : "35,000",
        img : p1
    },
    {
        id:2,
        name : "POCO C16",
        price : "10,000",
        img : p2
    },
    {
        id:3,
        name : "Apple Iphone 15",
        price :"60,000" ,
        img : p3
    },
    {
        id:4,
        name : "iQOO Neo9 Pro 5G",
        price : "31,998",
        img : p4
    },
    {
        id:5,
        name : "Tecno POP %G",
        price : "11,999",
        img : p5
    },
    {
        id:6,
        name : "realme NARZO N16",
        price : "8,498",
        img : p6
    },
    {
        id:7,
        name : "Redmi A4 5G",
        price : "8,999",
        img : p7
    },
    {
        id:8,
        name : "Motorola G45 5G",
        price : "11,697",
        img : p8
    },
    {
        id:9,
        name : "iQOO Z9s 5G",
        price : "21,999",
        img : p9
    },

]
  return (
    <div className='w-[100%] p-[10px] bg-[#f1f2f4]'>
      <h1 className='text-[1.5rem] font-semibold bg-white'>{title ? title : "No title"} </h1>
      
      <div className='pt-2 flex bg-[#fff]'>
            <Swiper
      
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={6}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
         {products.map((obj) => {
        return(<SwiperSlide> <div className='w-[150px] flex flex-col items-center hover:scale-103 cursor-pointer'>
          <img className='h-[100px]' src={obj.img || ""} alt="" />
          <h1 className='font-semibold mt-2'>{obj.name || ""}</h1>
          <p className='text-[0.9rem]'>{obj.price || ""}</p>
        </div></SwiperSlide>) })}
      
      
      
    </Swiper>
       
      </div>
    </div>
  )
}

export default ProductTwo;
