import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ProductCard from './ProductCard';
import tempVideo from '../assets/tempVideo.mp4';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import CategoryCard from './CategoryCard';

const ProductsList = () => {

  const params = useParams();
  const navigate = useNavigate();
  const productsList = useSelector((state: RootState) => state.product.value);

  const category = productsList.find(
    (p) => p.category_name === params?.category_name
  );
  const subCategory = category?.sub_category?.find(
    (p) => p.sub_category_name === params?.sub_category
  );
  const products_list = subCategory ? subCategory?.products_list || [] : category?.products_list || [];

  const formatted = (name: string) => {
    return name?.split(" ")?.map(s => s[0]?.toUpperCase())?.join("");
  }
  const nameInitials = subCategory ? formatted(subCategory?.sub_category_name) || "" : formatted(category?.category_name || "") || "";

  return (
    <div>
      {params?.category_name && (
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
      )}
      <div className='px-7'>
        {/* upper with heading and 2 images */}
        <div className='flex gap-7'>
          <div className='w-1/2'>
            <p className='text-[100px]/25 quicksand'>{params?.category_name}</p>
            {params?.sub_category && (
              <p className='italiana text-[50px]'>{params?.sub_category}</p>
            )}
          </div>
          {params?.sub_category && (subCategory || products_list?.length > 0) && (
            <div className='w-1/2 grid grid-cols-2 gap-7'>
              {products_list?.[0] && <ProductCard url={products_list?.[0]} name={`${nameInitials}-1`} />}
              {products_list?.[1] && <ProductCard url={products_list?.[1]} name={`${nameInitials}-2`} />}
            </div>
          )}
        </div>
        {params?.sub_category && (subCategory || products_list?.length > 0) ? (
          <>
            {/* middle row */}
            {products_list?.length > 2 && (
              <div className='grid grid-cols-4 gap-7 my-7'>
                {products_list?.[2] && <ProductCard url={products_list?.[2]} name={`${nameInitials}-3`} />}
                {products_list?.[3] && <ProductCard url={products_list?.[3]} name={`${nameInitials}-4`} />}
                {products_list?.[4] && <ProductCard url={products_list?.[4]} name={`${nameInitials}-5`} />}
                {products_list?.[5] && <ProductCard url={products_list?.[5]} name={`${nameInitials}-6`} />}
              </div>
            )}
            {/* second last grid */}
            {products_list?.length > 6 && (
              <div className='grid grid-cols-2 gap-7 mb-7 h-150'>
                <div className='grid grid-cols-2 gap-7'>
                  {products_list?.[6] && <ProductCard url={products_list?.[6]} name={`${nameInitials}-7`} />}
                  {products_list?.[7] && <ProductCard url={products_list?.[7]} name={`${nameInitials}-8`} />}
                  {products_list?.[8] && <ProductCard url={products_list?.[8]} name={`${nameInitials}-9`} />}
                  {products_list?.[9] && <ProductCard url={products_list?.[9]} name={`${nameInitials}-10`} />}
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
            )}
            {products_list?.length > 10 && (
              <div className='grid grid-cols-4 gap-7 mt-15 mb-7'>
                {products_list?.slice(10,)?.map((p, index) => (
                  <div key={index}>
                    <ProductCard url={p} name={`${nameInitials}-${index+1}`} />
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className='grid grid-cols-4 gap-7 mt-10'>
            {category?.sub_category?.map((p, index) => (
              <div key={index}>
                <CategoryCard url={p?.products_list?.[0]} name={p?.sub_category_name} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsList
