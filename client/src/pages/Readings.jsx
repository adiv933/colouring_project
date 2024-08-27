import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";

function Readings() {
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
        <PageHeading>Readings</PageHeading>
      </section>
    </div>
  );
}

export default Readings;
