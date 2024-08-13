import Navbar from "../components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Landing = () => {
  useGSAP(() => {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    if (!isSmallScreen) {
      gsap.from(".hero", {
        y: 200,
        opacity: 0,
        delay: 2,
        duration: 0.8,
      });
    }
  });

  return (
    <div className="w-full min-h-screen gradient-background">
      <Navbar />
      <section className="min-h-screen w-full flex flex-col items-center justify-center hero p-12 ">
        <h1 className="text-2xl sm:text-3xl xl:text-5xl text-white flex items-center text-center font-semibold gap-x-2">
          <img
            src="/logo.png"
            alt="logo"
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
          Living Symbol of the Mother
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-8">
          <div className="flex-1 sm:w-1/2 flex md:block justify-center">
            <img
              src="/mother_image.png"
              alt="Image of the Mother"
              className="w-full md:w-[25vw] max-h-[70vh] object-cover rounded-3xl shadow-lg md:ml-24"
            />
          </div>
          <div className="flex-1 sm:w-1/2 landing relative">
            <h1 className="text-md lg:text-lg xl:text-xl font-semibold text-white text-left mb-2 sm:mb-4">
              Question: Mother, in your symbol the twelve petals signify the
              twelve inner planes, don’t they?
            </h1>
            <p className="text-md lg:text-lg xl:text-xl font-semibold italic text-white mx-4 sm:mx-0 text-justify">
              “It signifies anything one wants, you see. Twelve: that’s the
              number of Aditi, of Mahashakti. So it applies to everything; all
              Her action has twelve Aspects. There are also Her twelve Virtues,
              Her twelve Powers, Her twelve Aspects, and Her twelve Planes of
              manifestation and many other things that are twelve; and the
              symbol, the number twelve is in itself a symbol. It is the symbol
              of manifestation, double perfection, in essence and in
              manifestation, in the creation.”
              <br />
              <div className="underline w-full text-right text-blue-800">
                {" "}
                - The Mother
              </div>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
