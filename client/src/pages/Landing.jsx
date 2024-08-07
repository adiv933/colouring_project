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
        delay: 2.5,
        duration: 0.8,
      });
    }
  });

  return (
    <div className="w-full min-h-screen gradient-background">
      <Navbar />
      <section className="min-h-screen w-full flex flex-col sm:flex-row items-center justify-center hero px-4 gap-4">
        <div className="flex-1 sm:w-1/2 flex justify-center my-8">
          <img
            src="/mother_image.png"
            alt="Image of the Mother"
            className="w-full md:w-[25vw] max-h-[70vh] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 sm:w-1/2 text-center sm:text-left">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl text-white font-dancing-script-bold mb-4 sm:mb-12 text-center">
            Living Symbol of the Mother
          </h1>
          <h1 className="text-2xl lg:text-3xl xl:text-4xl text-white font-dancing-script mb-2 sm:mb-4 text-center">
            Question: Mother, in your symbol the twelve petals signify the
            twelve inner planes, don’t they?
          </h1>
          <p className="text-sm lg:text-md xl:text-lg font-semibold text-white mx-4 sm:mx-0 text-center">
            “It signifies anything one wants, you see. Twelve: that’s the number
            of Aditi, of Mahashakti. So it applies to everything; all Her action
            has twelve Aspects. There are also Her twelve Virtues, Her twelve
            Powers, Her twelve Aspects, and Her twelve Planes of manifestation
            and many other things that are twelve; and the symbol, the number
            twelve is in itself a symbol. It is the symbol of manifestation,
            double perfection, in essence and in manifestation, in the
            creation.” -{" "}
            <span className="underline text-blue-600"> The Mother</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
