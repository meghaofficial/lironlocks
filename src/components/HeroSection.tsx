import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero_bg from "../assets/hero_bg.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ sectionRef, bgRef } : { sectionRef: HTMLDivElement | null; bgRef: HTMLDivElement | null }) {
  // const sectionRef = useRef<HTMLDivElement | null>(null);
  // const bgRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const section = sectionRef.current;
  //   const bg = bgRef.current;

  //   if (!section || !bg) return;

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: section,
  //       start: "top top",
  //       end: "+=100%",
  //       scrub: true,
  //       pin: true,
  //     },
  //   });

  //   tl.fromTo(bg,
  //     {
  //       clipPath: "ellipse(0% 50% at 50% 100%)"
  //     },
  //     {
  //       // Animate to the flat state
  //       clipPath: "ellipse(100% 100% at 50% 100%)", 
  //       scale: 1.15,
  //       ease: "none",
  //     }
  //   ).to(bg, {
  //     y: -200,
  //     ease: "none",
  //   }, 0);

  //   return () => {
  //     ScrollTrigger.killAll();
  //   };
  // }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white h-screen w-full"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute -bottom-100 left-0 w-full h-[150vh]"
        style={{
          // clipPath: "ellipse(0% 50% at 50% 100%)",
          backgroundImage:
            `url(${hero_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      {/* <div className="relative z-10 h-screen flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Secure Your World
        </h1>
        <p className="text-lg opacity-90 max-w-xl">
          Advanced locking systems engineered for strength and elegance.
        </p>
      </div> */}
    </section>
  );
}
