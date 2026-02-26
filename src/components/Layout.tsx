import NavigationBar from './NavigationBar'
import HeroSection from './HeroSection'
import { useRef } from 'react';
import gsap from "gsap";
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Layout = () => {

  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const text = textRef.current;

    if (!section || !bg || !text) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
      },
    });

    // 1. Hardware Lock Animation (Ellipse)
    tl.fromTo(bg, 
      { clipPath: "ellipse(0% 50% at 50% 100%)" },
      { 
        clipPath: "ellipse(100% 100% at 50% 100%)",
        scale: 1.15,
        ease: "none" 
      }
    ).to(bg, {
      y: -200,
      ease: "none",
    }, 0);

    // 2. Text Fill Animation (Happening simultaneously)
    tl.to(text, {
      backgroundSize: "100% 100%",
      ease: "none",
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);


  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: textRef,
  //       start: "top top",
  //       end: "+=100%",
  //       scrub: true,
  //       pin: true,
  //     },
  //   });

  //   tl.to(textRef.current, {
  //     backgroundSize: "100% 100%",
  //     ease: "none",
  //   }, 0);

  //   return () => {
  //     ScrollTrigger.killAll();
  //   };
  // }, []);

  return (
    <>
      <div className='p-6 z-999 fixed w-full'>
        <NavigationBar />
      </div>
      <div className='relative -top-87.5 w-full'>
        <HeroSection sectionRef={sectionRef} bgRef={bgRef} />
      </div>
      {/* <p className='relative -top-87.5 w-full text-[80px]/25 font-bold py-20 px-10'>
        LironLocks: Where Uncompromising Strength Meets the Art of Modern Engineering.
      </p> */}
      <p
        ref={textRef}
        className='relative -top-87.5 w-full text-[80px]/[1.1] font-bold py-20 px-10 
             bg-clip-text text-transparent bg-no-repeat'
        style={{
          // Light gray base
          backgroundColor: '#d1d5db',
          // The "fill" gradient (replace colors with your brand colors)
          backgroundImage: 'linear-gradient(90deg, #facc15, #eab308)',
          backgroundSize: '0% 100%', // Start with 0% width
        }}
      >
        LironLocks: Where Uncompromising Strength Meets the Art of Modern Engineering.
      </p>

    </>
  )
}

export default Layout
