import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import ColouringComponent4 from "../components/ColouringComponent4";
import ColouringFooter from "../components/ColouringFooter";
import PageHeading from "../components/PageHeading";
import ColouringPageText from "../components/ColouringPageText";

function Colouring4() {
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
    { label: "Download your image or go to the next colouring" },
  ];

  return (
    <div className="w-full min-h-screen  gradient-background">
      <Navbar />
      <div className="flex flex-col items-center min-h-screen w-full space-y-6 md:space-y-8 pt-24 md:pt-20 pb-16 hero p-2">
        <PageHeading>Colouring 4</PageHeading>
        <ColouringPageText />
        <ColouringComponent4 />
        <ColouringFooter steps={steps} />
      </div>
    </div>
  );
}

export default Colouring4;
