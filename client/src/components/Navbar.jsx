import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".navbar", {
      y: -100,
      opacity: 0,
      delay: 0.5,
      duration: 2,
      ease: "back.inOut",
    });
    // tl.from(".links", {
    //   y: -100,
    //   opacity: 0,
    //   duration: 2,
    //   stagger: {
    //     amount: 0.3,
    //     from: "end",
    //   },
    //   ease: "back.inOut",
    // });
    ScrollTrigger.create({
      start: "top -200", // Adjust this value to determine the height where the navbar disappears
      end: 99999,
      toggleClass: { targets: ".navbar", className: "hidden" },
      onEnter: () => gsap.to(".navbar", { y: -100, duration: 1, opacity: 0 }),
      onLeaveBack: () => gsap.to(".navbar", { y: 0, duration: 1, opacity: 1 }),
    });
  });

  return (
    <nav className="fixed w-full bg-[#ffb2b2] backdrop-blur-lg text-black z-10 h-16 shadow-md navbar">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="/" className="flex-shrink-0 flex items-center">
            <img src="/logo.png" alt="Logo" className="h-14 w-14" />
          </a>
          <div className="hidden md:flex md:space-x-8 md:ml-10">
            <a
              href="#about"
              className="hover:text-gray-800 hover:-translate-y-1 duration-300 px-3 py-2 rounded-md text-xl links"
            >
              About Us
            </a>
            <a
              href="#instructions"
              className="hover:text-gray-800 hover:-translate-y-1 duration-300 px-3 py-2 rounded-md text-xl links"
            >
              Instructions
            </a>
            <a
              href="#contact"
              className="hover:text-gray-800 hover:-translate-y-1 duration-300 px-3 py-2 rounded-md text-xl links"
            >
              Contact Us
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={handleToggle}
              className="text-white hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#febfbf] text-zinc-700 shadow-md px-2 pt-2 pb-3 space-y-1 md:hidden">
          <a
            href="/"
            className="hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium mobile-links"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium mobile-links"
          >
            About Us
          </a>
          <a
            href="#instructions"
            className="hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium mobile-links"
          >
            Instructions
          </a>
          <a
            href="#contact"
            className="hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium mobile-links"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
