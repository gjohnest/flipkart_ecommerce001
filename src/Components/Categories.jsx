import React from 'react';
import CatCart from '../UI/CatCart';
import c1 from '../assets/Category/1.webp';
import c2 from '../assets/Category/2.webp';
import c3 from '../assets/Category/3.webp';
import c4 from '../assets/Category/4.webp';
import c5 from '../assets/Category/5.jpg';
import c6 from '../assets/Category/6.jpg';
import c7 from '../assets/Category/7.jpg';
import c8 from '../assets/Category/8.jpg';
import c9 from '../assets/Category/9.jpg';

const Categories = () => {
  let categoryArr = [
    {
        name : "Kilos",
        img : c1
    },
    {
        name : "Mobiles",
        img : c2
    },
    {
        name : "Fasion",
        img : c3
    },
    {
        name : "Electronics",
        img : c4
    },
    {
        name : "Furniture",
        img : c5
    },
    {
        name : "Appliances",
        img : c6
    },
    {
        name : "Flight Booking",
        img : c7
    },
    {
        name : "Toys",
        img : c8
    },
    {
        name : "Two Wheelers",
        img : c9
    },
]
  return (
    <div className='w-[100%] h-[30vh] p-[10px] bg-[#f1f2f4]'>
      <div className='w-[100%] h-[100%] bg-white flex'>
        {
          categoryArr.map((obj) => {
            return(<CatCart name={obj.name} img={obj.img} />)
          })
        }
        <CatCart name= {"Kiols"} img={c1}/>
      
      </div>
    </div>
  )
}

export default Categories
