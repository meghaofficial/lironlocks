import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomBtn from "./CustomBtn";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {

  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef<HTMLImageElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const lock = lockRef.current;
    const desc = descRef.current;

    if (!section || !bg || !lock || !desc) return;

    gsap.set(desc, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=400%", // Increased for better "smoothness"
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

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

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
          backgroundImage:
            `url(https://res.cloudinary.com/dlmdsldqn/image/upload/v1772265265/hero_bg_pbi6hf.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <img src={`https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262814/Picsart_26-02-27_23-38-23-989_igfj0h.png`} alt="lock" className="absolute left-[35%] top-25 h-107.5" ref={lockRef} />

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
