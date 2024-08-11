import Navbar from "../components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ColouringComponent1 from "../components/ColouringComponent1";

function Colouring1() {
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
    <div className="w-full min-h-screen  gradient-background">
      <Navbar />
      <div className="flex flex-col items-center min-h-screen w-full px-4 md:px-6 space-y-6 md:space-y-8 pt-24 md:pt-20 pb-16 hero">
        <ColouringComponent1 />
      </div>
    </div>
  );
}

export default Colouring1;
