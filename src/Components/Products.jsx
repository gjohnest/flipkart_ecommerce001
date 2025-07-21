import React from 'react'
import p10 from '../assets/Products/10.jpg'
import p11 from '../assets/Products/11.webp'
import p12 from '../assets/Products/12.webp'
import p13 from '../assets/Products/13.jpg'
import p14 from '../assets/Products/14.webp'
import p15 from '../assets/Products/15.jpg'
import p16 from '../assets/Products/16.webp'
import p17 from '../assets/Products/17.webp'
import p18 from '../assets/Products/18.webp'

import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';




const Products = ({title})=> {
  let offerArr = [
    {
        id:1,
        name : "Medium Tote Bag",
        price : "399",
        img : p10
    }, 
    {
        id:2,
        name : "Godrej 7 Kg ",
        price : "9,999",
        img : p11
    }, 
    {
        id:3,
        name : "Godrej 1 Ton AC",
        price : "28,990",
        img : p12
    }, 
    {
        id:4,
        name : "DOCTOR EXTRA SOFT",
        price : "398",
        img : p13
    }, 
    {
        id:5,
        name : "Sonata Watch",
        price : "749",
        img : p14
    }, 
    {
        id:6,
        name : "Fastrack Limitless Fs2 Pro",
        price : "3,800",
        img : p15
    }, 
    {
        id:7,
        name : "Presto Naphthalene Balls",
        price : "380",
        img : p16
    }, 
    {
        id:8,
        name : "Solimo 12-Inch Clock",
        price : "599",
        img : p17
    }, 
    {
        id:9,
        name : "FUNTEREST Wall Decor",
        price : "699",
        img : p18
    }, 
   
    
]
  return (
    <div className='w-[100%] p-[10px] bg-[#f1f2f4]'>
      <h1 className='text-[1.5rem]  font-semibold bg-white'>{title ? title : "No title"} </h1>
      
      <div className='pt-2 flex bg-[#fff] cursor-pointer'>
            <Swiper
      
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={6}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
         {offerArr.map((obj) => {
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

export default Products
