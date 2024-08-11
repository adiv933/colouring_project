import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";
import gsap from "gsap";

function Guidance() {
  useGSAP(() => {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (!isSmallScreen) {
      gsap.from(".hero", {
        y: 200,
        opacity: 0,
        delay: 2.5,
        duration: 0.8,
      });
    }
  });
  return (
    <div className="w-full min-h-screen gradient-background">
      <Navbar />
      <section className="min-h-screen w-full flex flex-col justify-center items-center hero">
        <h1 className="text-2xl sm:text-3xl xl:text-5xl text-white flex items-center text-center font-semibold gap-x-2">
          <img
            src="/logo.png"
            alt="logo"
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
          Guidance
        </h1>
      </section>
    </div>
  );
}

export default Guidance;
