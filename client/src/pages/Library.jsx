import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import GoldenButton from "../components/GoldenButton";

function Library() {
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
    <div className="w-full h-screen gradient-background">
      <Navbar />
      <section className="h-screen w-full flex flex-col items-center hero p-20 justify-between">
        <h1 className="text-2xl sm:text-3xl xl:text-5xl text-white flex items-center text-center font-semibold gap-x-2">
          <img
            src="/logo.png"
            alt="logo"
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
          Library
        </h1>
        <div className="h-full flex flex-col md:flex-row items-center justify-center gap-8">
          <GoldenButton>
            {" "}
            <br />
            Gallery
            <br /> <br />{" "}
          </GoldenButton>
          <GoldenButton>
            Works of the Mother
            <br />&<br />
            Sri Aurobindo
          </GoldenButton>
        </div>
      </section>
    </div>
  );
}

export default Library;
