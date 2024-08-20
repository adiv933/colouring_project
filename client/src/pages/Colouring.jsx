import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import VideoModal from "../components/VideoModal";
import MyStepper from "../components/MyStepper";
import PageHeading from "../components/PageHeading";
import ColouringPageText from "../components/ColouringPageText";

function Colouring() {
  useGSAP(() => {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (!isSmallScreen) {
      gsap.from(".hero", {
        y: 200,
        opacity: 0,
        delay: 2,
        duration: 0.8,
      });
    }
  });

  const steps = [
    { label: "Colouring 1", link: "/colouring1" },
    { label: "Colouring 2", link: "/colouring2" },
    { label: "Colouring 3", link: "/colouring3" },
    { label: "Colouring 4", link: "/colouring4" },
    { label: "Colouring 5", link: "/colouring5" },
    
  ];

  return (
    <div className="w-full min-h-screen gradient-background text-white overflow-hidden">
      <Navbar />
      <section className="min-h-screen w-full flex flex-col items-center justify-center hero sm:px-12 pt-20 sm:pt-16 gap-y-8">
        <PageHeading>Colourings</PageHeading>
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-8">
          <div className="flex-1 sm:w-1/2 flex justify-center">
            <img
              src="/Dual-Darshan-Photos.jpg"
              alt="Image of the Mother and Sri Aurobindo"
              className="w-full md:w-[25vw] max-h-[70vh] object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div className="flex-1 sm:w-1/2 flex flex-col items-center">
            <ColouringPageText />
            <div className="flex gap-x-3 justify-center py-8">
              <VideoModal />
            </div>
            <MyStepper steps={steps} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Colouring;
