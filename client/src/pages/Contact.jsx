import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";
import gsap from "gsap";

function Contact() {
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
      <section className="h-screen w-full flex flex-col justify-center items-center hero">
        <h1 className="text-3xl sm:text-6xl text-white text-center font-dancing-script-bold mb-4 sm:mb-16">
          Contact
        </h1>
      </section>
    </div>
  );
}

export default Contact;
