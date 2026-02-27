import React from 'react'
import hero_lock_img from '../assets/hero_lock_img.png';

const ProductCard = () => {
  return (
    <div className='bg-gray-100 h-[300px]'>
      <div className='p-10'>
        <img src={hero_lock_img} alt="" className='h-auto' />
      </div>
    </div>
  )
}

export default ProductCard
