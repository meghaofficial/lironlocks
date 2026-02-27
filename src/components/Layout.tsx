import NavigationBar from './NavigationBar'
import HeroSection from './HeroSection'
import { useRef, useLayoutEffect } from 'react';
import gsap from "gsap";
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Layout = () => {

  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const lockRef = useRef<HTMLImageElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const text = textRef.current;
    const lock = lockRef.current;
    const desc = descRef.current;

    if (!section || !bg || !text || !lock || !desc) return;

    const chars = text.querySelectorAll(".char");

    gsap.set(desc, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=500%", // Increased for better "smoothness"
        scrub: 1,
        pin: true,
      },
    });

    tl.fromTo(bg,
      { clipPath: "ellipse(0% 50% at 50% 100%)" },
      {
        clipPath: "ellipse(100% 100% at 50% 100%)",
        scale: 1.15,
        ease: "none"
      }
    );
    tl.to(bg, { y: -200, ease: "none" }, 0);


    tl.to(lock, {
      x: "-80%",
      duration: 1,
      ease: "power2.inOut"
    }, ">"); // ">" means "start after previous animation ends"

    tl.to(desc, {
      opacity: 1,
      duration: 1,
      ease: "power1.in"
    }, "<"); // Starts at the same time as the text fill

    tl.to(text, {
      backgroundSize: "100% 100%",
      duration: 1.5,
      ease: "none",
    }, "<"); // "<" means "start at the same time as the image shift"

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className='bg-gray-100'>
      <div className='p-6 z-999 fixed w-full'>
        <NavigationBar />
      </div>
      <div className='relative -top-87.5 w-full'>
        <HeroSection sectionRef={sectionRef} bgRef={bgRef} lockRef={lockRef} descRef={descRef} />
      </div>
      <p
        ref={textRef}
        className="relative -top-87.5 w-full text-[80px]/[1.1] font-bold py-20 px-10 text-transparent bg-no-repeat"
        style={{
          // The "Base" color (Light Gray)
          backgroundColor: '#d1d5db',
          // The "Fill" color (Gold Gradient)
          backgroundImage: 'linear-gradient(90deg, #facc15, #01204e)',
          // Start at 0% size (shows gray), GSAP will animate this to 100%
          backgroundSize: '0% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
      >
        LironLocks: Where Uncompromising Strength Meets the Art of Modern Engineering.
      </p>

      {/* <p
        ref={textRef}
        className="relative -top-87.5 w-full text-[80px]/[1.1] font-bold py-20 px-10"
        style={{ color: '#d1d5db' }}
      >
        {"LironLocks: Where Uncompromising Strength Meets the Art of Modern Engineering."
          .split("")
          .map((char, i) => (
            <span key={i} className="char">
              {char}
            </span>
          ))}
      </p> */}


    </div>
  )
}

export default Layout
