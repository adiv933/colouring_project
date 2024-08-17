import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import PageHeading from "../components/PageHeading";

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
        <PageHeading>Contact us</PageHeading>
      </section>
    </div>
  );
}

export default Contact;
