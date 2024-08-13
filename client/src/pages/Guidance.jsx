import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import { Link } from "react-router-dom";

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

  const pdfLinks = [
    "Physics of light and colour",
    "Physiology of colour vision",
    "Colour psychology",
    "Colour theory in art and design",
    "Colour in traditional yoga",
    "Living Symbol of the Mother",
  ];

  return (
    <div className="w-full min-h-screen gradient-background">
      <Navbar />
      <section className="h-full w-full flex flex-col items-center hero pt-20 sm:p-20 justify-between gap-8 sm:gap-36">
        <h1 className="text-2xl sm:text-3xl xl:text-5xl text-white flex items-center text-center font-semibold gap-x-2">
          <img
            src="/logo.png"
            alt="logo"
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
          Guidance
        </h1>
        <div className="h-full w-full flex flex-wrap md:flex-row items-center justify-center gap-4 md:gap-8">
          {pdfLinks.map((pdfLink, index) => (
            <Link key={index} to={pdfLink} className="flex">
              <div className="w-24 h-24 md:w-32 md:h-32 text-center py-4 md:py-8 text-xs md:text-sm lg:text-md font-semibold text-[#dbaf46] bg-white rounded-lg duration-100 hover:-translate-y-1 hover:bg-[#dbaf46] hover:text-white flex items-center justify-center">
                {pdfLink}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Guidance;
