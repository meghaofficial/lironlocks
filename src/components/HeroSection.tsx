import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero_bg from "../assets/hero_bg.jpeg";
import hero_lock_img from "../assets/hero_lock_img.png";
import CustomBtn from "./CustomBtn";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection(
  { sectionRef, bgRef, textRef, lockRef, descRef }: { sectionRef: HTMLDivElement | null; bgRef: HTMLDivElement | null; lockRef: HTMLImageElement | null; descRef: HTMLDivElement | null; }
) {
  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-100 h-screen w-full"
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
      <img src={hero_lock_img} alt="lock" className="absolute left-[35%] top-25 h-107.5" ref={lockRef} />

      {/* Content */}
      <div className="absolute z-10 h-screen flex flex-col items-end justify-center text-white text-center px-6 right-[5%]" ref={descRef}>
        <h1 className="text-5xl font-bold mb-4">
          Secure Your World
        </h1>
        <p className="text-lg opacity-90 max-w-xl mb-5">
          Advanced locking systems engineered for strength and elegance.
        </p>
        <CustomBtn name="Explore More" url="/products" />
      </div>
    </section>
  );
}
