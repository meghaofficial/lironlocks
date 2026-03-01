import tempVideo from '../assets/tempVideo.mp4'
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from 'react';

type CategoryCardType = {
  name: string
}

const CategoryCard = ({ name }: CategoryCardType) => {

  const [playVd, setPlayVd] = useState(false);

  return (
    <>
      <div className={`bg-gray-200 rounded-3xl ${!playVd && 'p-4'} group cursor-pointer relative`}>
        {playVd ? (
          <video 
            src={tempVideo} 
            className='h-[305px] w-full object-cover rounded-[25px]' 
            autoPlay
            muted
            loop
            playsInline />
        ) : (
          <img src="https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262814/Picsart_26-02-27_23-38-23-989_igfj0h.png" alt="" className='group-hover:scale-100 scale-90 duration-500 ease-in-out transition-all' />
        )}
        {/* upper overlay */}
        <div className="absolute top-0 left-0 w-full h-20 bg-linear-to-b from-black to-transparent rounded-t-3xl duration-500 ease-in-out transition-all opacity-0 group-hover:opacity-100">
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
