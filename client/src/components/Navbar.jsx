import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import GoldenButton from "./GoldenButton.jsx";

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

    ScrollTrigger.create({
      start: "top -200", // Adjust this value to determine the height where the navbar disappears
      end: 99999,
      toggleClass: { targets: ".navbar", className: "hidden" },
      onEnter: () => gsap.to(".navbar", { y: -100, duration: 1, opacity: 0 }),
      onLeaveBack: () => gsap.to(".navbar", { y: 0, duration: 1, opacity: 1 }),
    });
  });

  const links = [
    { href: "colourings", heading: "Colourings" },
    { href: "guidance", heading: "Guidance" },
    { href: "library", heading: "Library" },
    { href: "links", heading: "Useful links" },
    { href: "contact", heading: "Contact us" },
  ];

  return (
    // <nav className="fixed w-full bg-[#0046ff] backdrop-blur-lg text-white z-10 h-16 shadow-md navbar pr-4">
    //   <div className="max-w-full ">
    //     <div className="flex justify-between h-16 items-center">
    //       <Link
    //         to="/"
    //         className="hover:text-gray-800 hover:-translate-y-1 duration-300 px-3 py-2 rounded-md text-xl links"
    //       >
    //         <GoldenButton>Home</GoldenButton>
    //       </Link>
    //       <div className="hidden lg:flex md:items-center md:space-x-4 md:ml-10">
    //         {links.map((link, index) => (
    //           <Link
    //             to={`/${link.href}`}
    //             className="hover:text-gray-800 hover:-translate-y-1 duration-300 px-3 py-2 rounded-md text-xl links"
    //             key={index}
    //           >
    //             <GoldenButton>{link.heading}</GoldenButton>
    //           </Link>
    //         ))}
    //       </div>
    //       <div className="flex items-center lg:hidden">
    //         <button
    //           onClick={handleToggle}
    //           className="text-white hover:text-gray-800 focus:outline-none"
    //         >
    //           <svg
    //             className="h-6 w-6"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h16M4 18h16"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   {isOpen && (
    //     <div className="absolute top-16 left-0 w-full bg-[#00d5ff] text-white shadow-md px-2 pt-2 pb-3 space-y-1 md:hidden">
    //       {links.map((link, index) => (
    //         <Link
    //           to={`/${link.href}`}
    //           className="hover:text-gray-800 block px-3 py-2 text-base font-medium mobile-links "
    //           key={index}
    //         >
    //           {link.heading}
    //         </Link>
    //       ))}
    //     </div>
    //   )}
    // </nav>
    <nav className="fixed w-full bg-[#0046ff] backdrop-blur-lg text-white z-10 h-16 shadow-md navbar pr-4 overflow-x-auto">
      <div className="max-w-full ">
        <div className="flex flex-wrap justify-between h-16 items-center">
          <Link
            to="/"
            className="hover:text-gray-800 hover:-translate-y-1 duration-300 px-3 py-2 rounded-md text-xl links"
          >
            <GoldenButton>Home</GoldenButton>
          </Link>
          <div className="hidden lg:flex md:items-center md:space-x-2 md:ml-10 md:text-sm">
            {links.map((link, index) => (
              <Link
                to={`/${link.href}`}
                className="hover:text-gray-800 hover:-translate-y-1 duration-300 px-2 py-1 rounded-md text-lg links"
                key={index}
              >
                <GoldenButton>{link.heading}</GoldenButton>
              </Link>
            ))}
          </div>
          <div className="flex items-center lg:hidden">
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
        <div className="absolute top-16 left-0 w-full bg-[#00d5ff] text-white shadow-md px-2 pt-2 pb-3 space-y-1 md:hidden">
          {links.map((link, index) => (
            <Link
              to={`/${link.href}`}
              className="hover:text-gray-800 block px-3 py-2 text-base font-medium mobile-links "
              key={index}
            >
              {link.heading}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
