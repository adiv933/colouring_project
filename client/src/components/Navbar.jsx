import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

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
    tl.from(".links", {
      y: -100,
      opacity: 0,
      duration: 2,
      stagger: {
        amount: 0.3,
        from: "end" 
      },
      ease: "back.inOut",
    });
  });

  return (
    <nav className="fixed w-full bg-[#fbbda0] z-10 h-16 shadow-md navbar">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="/" className="flex-shrink-0 flex items-center">
            <img src="/logo.png" alt="Logo" className="h-14 w-14" />
          </a>
          <div className="hidden md:flex md:space-x-8 md:ml-10">
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-xl links"
            >
              About Us
            </a>
            <a
              href="#instructions"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-xl links"
            >
              Instructions
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-xl links"
            >
              Contact Us
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={handleToggle}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
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
        <div className="absolute top-16 left-0 w-full bg-white shadow-md px-2 pt-2 pb-3 space-y-1 md:hidden">
          <a
            href="/"
            className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium mobile-links"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium mobile-links"
          >
            About Us
          </a>
          <a
            href="#instructions"
            className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium mobile-links"
          >
            Instructions
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium mobile-links"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
