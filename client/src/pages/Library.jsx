import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import GoldenButton from "../components/GoldenButton";
import PageHeading from "../components/PageHeading";
import { Link } from "react-router-dom";

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
    <div className="w-full min-h-screen gradient-background">
      <Navbar />
      <section className="min-h-screen w-full flex flex-col items-center hero p-20 justify-center">
        <PageHeading>Library</PageHeading>
        <div className="h-full flex flex-col md:flex-row items-center justify-center gap-8">
          <Link to="/gallery">
            <GoldenButton className="w-48 h-28">Gallery</GoldenButton>
          </Link>
          <Link to="/errors">
            <GoldenButton className="w-48 h-28">Errors finding</GoldenButton>
          </Link>
          <GoldenButton className="w-48 h-28">
            The Mother
            <br />&<br />
            Sri Aurobindo
          </GoldenButton>
          <Link to="/readings">
            <GoldenButton className="w-48 h-28">Readings</GoldenButton>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Library;
