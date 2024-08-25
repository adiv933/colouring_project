import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import GoldenButton from "../components/GoldenButton";
import PageHeading from "../components/PageHeading";

function Library() {
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
      <section className="h-screen w-full flex flex-col items-center hero p-20 justify-between">
        <PageHeading>Library</PageHeading>
        <div className="h-full flex flex-col md:flex-row items-center justify-center gap-8">
          <GoldenButton className="w-48">
            {" "}
            <br />
            Gallery
            <br /> <br />{" "}
          </GoldenButton>
          <GoldenButton className="w-48">
            Works of the Mother
            <br />&<br />
            Sri Aurobindo
          </GoldenButton>
        </div>
      </section>
    </div>
  );
}

export default Library;
