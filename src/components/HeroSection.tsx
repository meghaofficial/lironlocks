import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomBtn from "./CustomBtn";

gsap.registerPlugin(ScrollTrigger);

type HeroSectionType = {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  bgRef: React.RefObject<HTMLDivElement | null>;
  lockRef: React.RefObject<HTMLImageElement | null>;
  descRef: React.RefObject<HTMLDivElement | null>;
};

export default function HeroSection(
  { sectionRef, bgRef, lockRef, descRef }: HeroSectionType
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
