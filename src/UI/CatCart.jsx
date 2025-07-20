import React from 'react'

function CatCart({name,img}) {
  return (
      <div className='w-[150px] h-[100%] flex  items-center justify-center flex-col'>
        <img src={img} className='h-[100px]' />
        <h1 className='text-[1.1rem] font-semibold'>{name}</h1>
      </div>
    
  )
}

export default CatCart
