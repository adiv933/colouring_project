import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import { Link } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import GoldenButton from "../components/GoldenButton";

function Guidance() {
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

  const pdfLinks = [
    "Physics of light and colour",
    "Physiology of colour vision",
    "Colour psychology",
    "Colour theory in art and design",
    "Colour in traditional yoga",
    "Living Symbol of the Mother",
  ];

  return (
    <div className="w-full min-h-screen gradient-background">
      <Navbar />
      <section className="h-full w-full flex flex-col items-center hero pt-20 sm:p-20 justify-between gap-8 sm:gap-36">
        <PageHeading>Guidance</PageHeading>
        <div className="h-full w-full flex flex-wrap md:flex-row items-center justify-center gap-4 md:gap-8">
          {pdfLinks.map((pdfLink, index) => (
            <GoldenButton key={index}>
              <Link to={pdfLink}>{pdfLink}</Link>
            </GoldenButton>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Guidance;
