import Navbar from "../components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Landing = () => {
  //* gsap code

  useGSAP(() => {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (!isSmallScreen) {
      gsap.from(".hero", {
        y: 200,
        opacity: 0,
        delay: 2.5,
        duration: 0.8,
      });

      //   gsap.from(".video-section > div", {
      //     x: -200,
      //     opacity: 0,
      //     scrollTrigger: {
      //       trigger: ".video-section",
      //       start: "top bottom",
      //       end: "bottom 100%",
      //       scrub: 2,
      //     },
      //   });

      //   gsap.from(".video-section > section:first-child", {
      //     x: 200,
      //     opacity: 0,
      //     scrollTrigger: {
      //       trigger: ".video-section",
      //       start: "top bottom",
      //       end: "bottom 100%",
      //       scrub: 2,
      //     },
      //   });

      //   // Animation for the action sections
      //   gsap.from(".action-section > div:first-child", {
      //     x: -200,
      //     opacity: 0,
      //     scrollTrigger: {
      //       trigger: ".action-section",
      //       start: "top bottom",
      //       end: "bottom 100%",
      //       scrub: 2,
      //     },
      //   });

      //   gsap.from(".action-section > div:nth-child(2)", {
      //     x: 200,
      //     opacity: 0,
      //     scrollTrigger: {
      //       trigger: ".action-section",
      //       start: "top bottom",
      //       end: "bottom 100%",
      //       scrub: 2,
      //     },
      //   });
      // } else {
      //   // Different or no animations for small screens
      //   gsap.from(".hero", {
      //     y: 100,
      //     opacity: 0,
      //     delay: 2,
      //     duration: 0.5,
      //   });

      //   gsap.from(".video-section > div", {
      //     opacity: 0,
      //     scrollTrigger: {
      //       trigger: ".video-section",
      //       start: "top bottom",
      //       end: "bottom 100%",
      //       scrub: 2,
      //     },
      //   });

      //   gsap.from(".video-section > section:first-child", {
      //     opacity: 0,
      //     scrollTrigger: {
      //       trigger: ".video-section",
      //       start: "top bottom",
      //       end: "bottom 100%",
      //       scrub: 2,
      //     },
      //   });

      //   // Animation for the action sections
      //   gsap.from(".action-section > div:first-child", {
      //     opacity: 0,
      //     scrollTrigger: {
      //       trigger: ".action-section",
      //       start: "top bottom",
      //       end: "bottom 100%",
      //       scrub: 2,
      //     },
      //   });

      //   gsap.from(".action-section > div:nth-child(2)", {
      //     opacity: 0,
      //     scrollTrigger: {
      //       trigger: ".action-section",
      //       start: "top bottom",
      //       end: "bottom 100%",
      //       scrub: 2,
      //     },
      //   });
    }
  });

  return (
    <div className="w-full h-screen gradient-background overflow-y-hidden">
      <Navbar />
      <section className="h-screen w-full flex flex-col justify-center items-center hero landing">
        <h1 className="text-3xl sm:text-6xl text-white text-center font-dancing-script-bold mb-4 sm:mb-16">
          Living Symbol of the Mother
        </h1>
        <h1 className="text-2xl sm:text-4xl text-white text-center font-dancing-script mb-2 sm:mb-4">
          Question: Mother, in your symbol the twelve petals signify the twelve
          inner planes, don’t they?
        </h1>
        <p className="text-sm sm:text-lg text-center mx-4 font-semibold text-white">
          “It signifies anything one wants, you see. Twelve: that’s the number
          of Aditi, of Mahashakti. So it applies to everything; all Her action
          has twelve Aspects. There are also Her twelve Virtues, Her twelve
          Powers, Her twelve Aspects, and Her twelve Planes of manifestation and
          many other things that are twelve; and the symbol, the number twelve
          is in itself a symbol. It is the symbol of manifestation, double
          perfection, in essence and in manifestation, in the creation.” -{" "}
          <span className="underline text-blue-600"> The Mother</span>
        </p>
      </section>
    </div>
  );
};

export default Landing;
