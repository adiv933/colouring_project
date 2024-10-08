import Navbar from "../components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PageHeading from "../components/PageHeading";

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
      <section className="min-h-screen w-full flex flex-col items-center justify-center hero px-4 pt-16 landing overflow-auto">
        <PageHeading>Living Symbol of the Mother</PageHeading>
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-8">
          <div className="flex-1 sm:w-1/2 flex md:block justify-center">
            <img
              src="/mother_image.png"
              alt="Image of the Mother"
              className="w-full md:w-[25vw] max-h-[70vh] object-cover rounded-3xl shadow-lg md:ml-24"
            />
          </div>
          <div className="flex-1 sm:w-1/2">
            <h1 className="text-md lg:text-lg xl:text-xl font-semibold text-white text-left mb-2 sm:mb-4">
              Question: Mother, in your symbol the twelve petals signify the
              twelve inner planes, don’t they?
            </h1>
            <p className="text-md lg:text-lg xl:text-xl font-semibold italic text-white text-justify">
              “It signifies anything one wants, you see. Twelve: that’s the
              number of Aditi, of Mahashakti. So it applies to everything; all
              Her action has twelve Aspects. There are also Her twelve Virtues,
              Her twelve Powers, Her twelve Aspects, and Her twelve Planes of
              manifestation and many other things that are twelve; and the
              symbol, the number twelve is in itself a symbol. It is the symbol
              of manifestation, double perfection, in essence and in
              manifestation, in the creation.”
              <br />
              <div className="w-full text-right text-white"> - The Mother</div>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
