import NavigationBar from './NavigationBar'
import HeroSection from './HeroSection'
import { useRef } from 'react';
import gsap from "gsap";
import { useEffect } from 'react';
import CategoryCard from './CategoryCard';
import lion from '../assets/lion.png'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TestimonialCard from './TestimonialCard';
import ProductCard from './ProductCard';

const Layout = () => {

  const textRef = useRef<HTMLParagraphElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const triggerSectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // text
  useEffect(() => {
    const chars = textRef.current?.querySelectorAll(".char");
    if (!chars) return;

    gsap.to(chars, {
      opacity: 1,
      stagger: 0.05,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "top+=100 top",
        scrub: true,
      }
    });

  }, []);

  // lion image animation
  // useEffect(() => {
  //   if (!parentRef.current || !triggerSectionRef.current) return;

  //   gsap.to(parentRef.current, {
  //     backgroundColor: "#030303", // new color
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: triggerSectionRef.current,
  //       start: "top 80%",   // when section enters view
  //       end: "top 20%",     // how long transition lasts
  //       scrub: true,
  //     }
  //   });
  // }, []);

  return (
    <div className='bg-gray-100 transition-colors duration-500' ref={parentRef}>
      <div className='p-6 z-999 fixed w-full'>
        <NavigationBar />
      </div>
      <div className='relative -top-87.5 w-full'>
        <HeroSection />
      </div>

      <p
        ref={textRef}
        className="
          w-full
          font-bold
          py-20
          px-6
          break-words
          text-[clamp(32px,8vw,80px)]
          leading-[1.1] relative -top-87.5
        "
      >
        {"LironLocks: Where Uncompromising Strength Meets the Art of Modern Engineering."
          .split("")
          .map((char, i) => (
            <span key={i} className="char">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
      </p>

      {/* available categories */}
      <div className='relative -top-87.5 w-full p-6'>
        <div className='bg-white p-10 rounded-4xl'>

          <p className='mb-10 text-[40px] font-bold bg-linear-to-r from-[#4B0082] to-brand bg-clip-text text-transparent'>
            Explore Categories
          </p>


          <div className='grid grid-cols-4 gap-10'>
            <CategoryCard name='Mortise Locks' url='https://res.cloudinary.com/dlmdsldqn/image/upload/v1772560299/Picsart_26-03-03_22-30-21-319_lkwchg.jpg' />
            <CategoryCard name='Handles' url='https://res.cloudinary.com/dlmdsldqn/image/upload/v1772555408/Picsart_26-03-03_21-58-58-685_kj13qo.jpg' />
            <CategoryCard name='Cylinders' url='https://res.cloudinary.com/dlmdsldqn/image/upload/v1772560325/1772559695793_kxqpye.png' />
            <CategoryCard name='Dead Locks' url='https://res.cloudinary.com/dlmdsldqn/image/upload/v1772560325/1772559873415_v3bill.png' />
          </div>
        </div>
      </div>

      {/* testimonials */}
      <div className='relative -top-77.5 w-full'>
        <div className='px-30 flex items-end justify-between'>
          <p className='mb-10 w-[60%]'>
            <span className='text-[40px] font-bold bg-linear-to-r from-[#4B0082] to-brand bg-clip-text text-transparent'>Our Featured Products.</span> <br />
            <span className='text-gray-500 text-sm ps-2'>Explore our top picks, crafted for quality and performance.</span>
          </p>
          {/* <div className='mb-10 flex items-center gap-2'>
            <div className='bg-gray-200 p-3 rounded-lg cursor-pointer'>
              <IoIosArrowBack size={20} className={``} />
            </div>
            <div className='bg-gray-200 p-3 rounded-lg cursor-pointer'>
              <IoIosArrowForward size={20} className={``} />
            </div>
          </div> */}
        </div>
        <div className='px-10 overflow-x-auto'>
          <div className='p-5 pt-7 flex items-center gap-3'>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className=''>
                {/* <TestimonialCard
                  name="Sarah Johnson"
                  role="Marketing Manager"
                  company="TechCorp"
                  image="https://randomuser.me/api/portraits/women/44.jpg"
                  testimonial="This service completely transformed our workflow. The team was professional, responsive, and exceeded our expectations!"
                /> */}
                {/* <ProductCard /> */}
                <div className='bg-gray-200 h-75 group'>
                  <div className='p-10'>
                    <img src={`https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262814/Picsart_26-02-27_23-38-23-989_igfj0h.png`} alt="" className='h-auto group-hover:scale-200 duration-300 ease-in-out transition-all' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* lion image animation */}
      {/* <div
        ref={triggerSectionRef}
        className="min-h-screen flex items-center justify-center relative -top-87.5">
          <img src={lion} alt="lion" className='w-1/2' ref={imgRef} />
      </div> */}

    </div>
  )
}

export default Layout
