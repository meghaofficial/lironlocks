import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ProductCard from './ProductCard';
import tempVideo from '../assets/tempVideo.mp4';

const ProductsList = () => {

  const params = useParams();
  const navigate = useNavigate();

  return (
    <div>
      {params?.category_name ? (
        <p className='text-[10px] text-gray-400 p-4 flex items-center gap-2'>
          <span className='mt-0.5 cursor-pointer hover:text-black' onClick={() => navigate("/")}><IoIosArrowBack /></span>
          <span className='cursor-pointer hover:text-black' onClick={() => navigate(`/${params?.category_name}`)}>
            {params?.category_name?.toUpperCase()}
          </span>
          {params?.sub_category && (
            <>
              <span className='mt-0.5'><IoIosArrowForward /></span>
              <span>{params?.sub_category?.toUpperCase()}</span>
            </>
          )}
        </p>
      ) : (
        <p className='text-[10px] text-gray-400 p-4'>
          <span>ALL</span>
        </p>
      )}
      <div className='px-7'>
        {/* upper with heading and 2 images */}
        <div className='flex gap-7'>
          <div className='w-1/2'>
            <p className='text-[100px] quicksand'>{params?.category_name}</p>
            {params?.sub_category ? (
              <p className='italiana text-[50px]'>{params?.sub_category}</p>
            ) : (
              <p className='italiana text-[50px]'>all</p>
            )}
          </div>
          <div className='w-1/2 grid grid-cols-2 gap-7'>
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        {/* middle row */}
        <div className='grid grid-cols-4 gap-7 mt-7'>
          <div className='w-auto'>
            <p>Property 1</p>
            <p>Property 2</p>
            <p>Property 3</p>
            <p>Property 4</p>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* second last grid */}
        <div className='grid grid-cols-2 gap-7 my-7 h-[600px]'>
          <div className='grid grid-cols-2 gap-7'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="h-full overflow-hidden relative">
            <div className='h-full w-full bg-black opacity-50 absolute' />
            <div className='h-full w-full absolute flex items-center justify-center flex-col text-white'>
                <p className='text-[50px] quicksand'>{params?.category_name}</p>
            {params?.sub_category ? (
              <p className='italiana text-[25px]'>{params?.sub_category}</p>
            ) : (
              <p className='italiana text-[25px]'>all</p>
            )}
            </div>
            <video
              src={tempVideo}
              className="w-full object-cover h-full"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, provident.</p> */}
        <div className='grid grid-cols-4 gap-7 mt-15'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default ProductsList
