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

  const pdfPages = [
    { topic: "1. Physics of light and colour", pageNumber: "3" },
    { topic: "2. Physiology of colour vision", pageNumber: "8" },
    { topic: "3. Colour psychology", pageNumber: "11" },
    { topic: "4. Colour theory in art and design", pageNumber: "23" },
    { topic: "5. Colour in traditional yoga", pageNumber: "35" },
    { topic: "6. Living Symbol of the Mother", pageNumber: "45" },
  ];

  return (
    <div className="w-full min-h-screen gradient-background">
      <Navbar />
      <section className="h-full w-full flex flex-col items-center hero pt-20 sm:p-20 justify-between gap-8 sm:gap-36">
        <PageHeading>Guidance</PageHeading>
        <div className="h-full w-full flex flex-wrap md:flex-row items-center justify-center gap-2 md:gap-8">
          {pdfPages.map((page, index) => (
            <Link
              to={`/view-presentation?page=${page.pageNumber}`}
              key={index}
              target="_blank"
              // rel="noopener noreferrer"
            >
              <GoldenButton className="">{page.topic}</GoldenButton>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Guidance;
