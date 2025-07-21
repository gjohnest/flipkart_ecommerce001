import React from 'react'
import logo from '../assets/icons/logo.png'
import search from '../assets/icons/search.png'
import user from '../assets/icons/user.png'
import cart from '../assets/icons/cart.png'


function Navbar() {
  return (
    <div className='w-[100%] h-[12vh] flex' >
      <div className='w-[25%] h-[100%] flex items-center justify-center'>
        <img src={logo} className='h-[70%] cursor-pointer' alt="" />
      </div>
      <div className='w-[50%] h-[100%] flex items-center justify-center'>
        <div className='w-[100%] flex h-[50%] bg-[#F0F5FF] rounded-sm'>
            <div className='w-[50px] h-[100%] flex justify-center items-center pt-1'>
              <img src={search} className='h-[22px]' alt="" />
            </div>
            <input className='w-[100%] outline-none' type='text'/>

        </div>
      </div>
      <div className='w-[25%] h-[100%] flex gap-2 items-center justify-end px-[15px] '>
        <div className='px-[20px] h-[40px] rounded-sm flex items-center gap-2 transition-all duration-150 cursor-pointer hover:bg-blue-600 hover:text-white'>
        <img className='w-[25px]' src={user} alt="" />
        <h1 className='text-[1.1rem]'>Login</h1> </div>
      </div>
      <div className='w-[25%] h-[100%] flex gap-2 items-center px-[15px] '>
        <div className='px-[20px] h-[40px] rounded-sm flex items-center gap-2 transition-all duration-150 cursor-pointer  hover:bg-blue-600 hover:text-white'>
        <img className='w-[25px]' src={cart} alt="" />
        <h1 className='text-[1.1rem]'>Cart</h1> </div>
      </div>


        <div className=' '></div>
    </div>
  )
}
export default Navbar
