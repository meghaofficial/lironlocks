import NavigationBar from './NavigationBar'
import HeroSection from './HeroSection'
import { useRef } from 'react';
import gsap from "gsap";
import { useEffect } from 'react';
import CategoryCard from './CategoryCard';
import lion from '../assets/lion.png'

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

  useEffect(() => {
    if (!parentRef.current || !triggerSectionRef.current) return;

    gsap.to(parentRef.current, {
      backgroundColor: "#030303", // new color
      ease: "none",
      scrollTrigger: {
        trigger: triggerSectionRef.current,
        start: "top 80%",   // when section enters view
        end: "top 20%",     // how long transition lasts
        scrub: true,
      }
    });
  }, []);

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
            <CategoryCard name='Mortise Locks' />
            <CategoryCard name='Handles' />
            <CategoryCard name='Cylinders' />
            <CategoryCard name='Dead Locks' />
          </div>
        </div>
      </div>

      {/* dd */}
      <div
        ref={triggerSectionRef}
        className="min-h-screen flex items-center justify-center relative -top-87.5">
          <img src={lion} alt="lion" className='w-1/2' ref={imgRef} />
      </div>

    </div>
  )
}

export default Layout
