import Navbar from "../components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ColouringComponent3 from "../components/ColouringComponent3";
import ColouringFooter from "../components/ColouringFooter";
import { useEffect } from "react";

function Colouring3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  const steps = [
    { label: "Select colour and click on the symbol to apply it" },
    { label: "Repeat till you fill all 12 petals" },
    { label: "Download your image or go to the next colouring" },
  ];

  return (
    <div className="w-full min-h-screen  gradient-background">
      <Navbar />
      <div className="flex flex-col items-center min-h-screen w-full px-4 md:px-6 space-y-6 md:space-y-8 pt-24 md:pt-20 pb-16 hero">
        <h1 className="text-2xl sm:text-3xl xl:text-5xl text-white flex items-center text-center font-semibold gap-x-2">
          <img
            src="/logo.png"
            alt="logo"
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
          Colouring 3
        </h1>
        <p className="text-md lg:text-lg xl:text-xl font-semibold italic text-white mx-4 sm:mx-0 text-left">
          “Centre and four powers, white. The twelve, all of different colour in
          three groups:
          <br /> <br />
          Top group red, passing to orange towards yellow. Next group, yellow
          passing through green towards blue. And third group, blue passing
          through violet towards red.
          <br /> <br />
          If white is not convenient, the center may be gold (powder).”
          <br />
          <div className="underline w-full text-right text-blue-800">
            - Sri Aurobindo
          </div>
        </p>
        <ColouringComponent3 />
        <ColouringFooter steps={steps} />
      </div>
    </div>
  );
}

export default Colouring3;
