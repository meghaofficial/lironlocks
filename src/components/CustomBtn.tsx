import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const CustomBtn = ({ name, url } : { name: string; url: string; }) => {
  const navigate = useNavigate();
  return (
    <div className='rounded-md bg-white shadow-lg shadow-black cursor-pointer flex items-center gap-2 p-2 ps-3' onClick={() => navigate(url)}>
      <span className='text-brand'>{name}</span>
      <div className='bg-brand p-2 rounded-md'>
        <FaArrowRightLong className='' />
      </div>
    </div>
  )
}

export default CustomBtn
