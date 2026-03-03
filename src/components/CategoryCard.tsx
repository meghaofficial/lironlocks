import tempVideo from '../assets/tempVideo.mp4'
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from 'react';

type CategoryCardType = {
  name: string,
  url: string
}

const CategoryCard = ({ name, url }: CategoryCardType) => {

  const [playVd, setPlayVd] = useState(false);

  return (
    <>
      <div className={`bg-gray-200 rounded-3xl ${!playVd && ''} overflow-hidden group h-[315px] cursor-pointer relative`}>
        {playVd ? (
          <video 
            src={tempVideo} 
            className='h-[315px] w-full object-cover rounded-[25px]' 
            autoPlay
            muted
            loop
            playsInline />
        ) : (
          <img src={url} alt="" className='group-hover:scale-120 h-full object-cover w-full scale-100 duration-500 ease-in-out transition-all rounded-3xl' />
        )}
        {/* upper overlay */}
        <div className="absolute top-0 left-0 w-full h-20 bg-linear-to-b from-black to-transparent rounded-t-3xl duration-500 ease-in-out transition-all">
          <p className="text-white italiana text-center mt-5 text-xl">{name}</p>
        </div>
        {/* lower overlay */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-black to-transparent rounded-b-3xl duration-500 ease-in-out transition-all opacity-0 group-hover:opacity-100 flex items-center justify-between px-4">
          <div className='p-2 rounded-full bg-gray-200/30' onClick={() => setPlayVd(prev => !prev)}>
            {playVd ? (
              <IoPause className='text-white' size={20} />
            ) : (
              <IoPlay className='text-white' size={20} />
            )}
          </div>
          <div className='p-1 rounded-full bg-gray-200/30'>
            <IoIosArrowRoundForward className='text-white' size={30} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryCard
