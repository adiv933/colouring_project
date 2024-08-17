import Navbar from "../components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ColouringComponent1 from "../components/ColouringComponent1";
import ColouringFooter from "../components/ColouringFooter";
import { useEffect } from "react";
import PageHeading from "../components/PageHeading";
import ColouringPageText from "../components/ColouringPageText";

function Colouring1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const steps = [
    { label: "Select colour and click on the symbol to apply it" },
    { label: "Repeat till you fill all 12 petals" },
    { label: "Press the “Reveal” button to learn about harmony" },
    { label: "Download your image or go to the next colouring" },
  ];

  return (
    <div className="w-full min-h-screen  gradient-background">
      <Navbar />
      <div className="flex flex-col items-center min-h-screen w-full px-4 space-y-6 md:space-y-8 pt-24 md:pt-20 pb-16 p-2 hero">
        <PageHeading>Colouring 1</PageHeading>
        <ColouringPageText />
        <ColouringComponent1 />
        <ColouringFooter steps={steps} />
      </div>
    </div>
  );
}

export default Colouring1;
