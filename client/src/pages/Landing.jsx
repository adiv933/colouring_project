import Navbar from "../components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

// import Coloring1 from "./components/Coloring1";

const Landing = () => {
  //* gsap code

  
  useGSAP(() => {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (!isSmallScreen) {
      gsap.from(".hero", {
        y: 200,
        opacity: 0,
        delay: 3,
        duration: 0.8,
      });

      gsap.from(".video-section > div", {
        x: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".video-section",
          start: "top bottom",
          end: "bottom 100%",
          scrub: 2,
        },
      });

      gsap.from(".video-section > section:first-child", {
        x: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".video-section",
          start: "top bottom",
          end: "bottom 100%",
          scrub: 2,
        },
      });

      // Animation for the action sections
      gsap.from(".action-section > div:first-child", {
        x: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".action-section",
          start: "top bottom",
          end: "bottom 100%",
          scrub: 2,
        },
      });

      gsap.from(".action-section > div:nth-child(2)", {
        x: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".action-section",
          start: "top bottom",
          end: "bottom 100%",
          scrub: 2,
        },
      });
    } else {
      // Different or no animations for small screens
      gsap.from(".hero", {
        y: 100,
        opacity: 0,
        delay: 2,
        duration: 0.5,
      });

      gsap.from(".video-section > div", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".video-section",
          start: "top bottom",
          end: "bottom 100%",
          scrub: 2,
        },
      });

      gsap.from(".video-section > section:first-child", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".video-section",
          start: "top bottom",
          end: "bottom 100%",
          scrub: 2,
        },
      });

      // Animation for the action sections
      gsap.from(".action-section > div:first-child", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".action-section",
          start: "top bottom",
          end: "bottom 100%",
          scrub: 2,
        },
      });

      gsap.from(".action-section > div:nth-child(2)", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".action-section",
          start: "top bottom",
          end: "bottom 100%",
          scrub: 2,
        },
      });
    }
  });

  const navigate = useNavigate();

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="flex flex-col items-center min-h-screen px-4 md:px-6 space-y-6 md:space-y-8 pt-20 md:pt-12   ">
        <section className="h-screen flex flex-col justify-center items-center bg-[#fee2e2] hero">
          <h1 className="text-4xl md:text-6xl text-zinc-600 text-center font-dancing-script mb-4">
            Living Symbol of the Mother
          </h1>
          <p className="text-lg text-center mx-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            venenatis enim. Proin commodo ante ac volutpat dignissim.
          </p>
        </section>

        {/* Video Section */}
        <div className="flex flex-col lg:flex-row-reverse gap-y-8 gap-x-4 video-section pb-12">
          <section className="h-60vh lg:h-screen flex justify-center items-center bg-gray-200 w-full lg:w-[70%] rounded-xl">
            <video className="w-full h-full object-cover" controls>
              <source src="your-video-source.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
          <div className="h-40vh lg:h-screen flex justify-center items-center bg-gray-200 w-full lg:w-[30%] p-4 rounded-xl">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos aliquam quia fuga reiciendis laudantium nam officia
              neque, ipsa voluptates totam.
            </p>
          </div>
        </div>

        {/* Action Sections */}
        <section className="h-screen flex flex-col lg:flex-row w-full action-section gap-4 p-4">
          <div
            onClick={() => navigate("/coloring")}
            className="w-full lg:w-1/2 text-2xl font-bold h-1/2 lg:h-full flex justify-center items-center bg-[#B7E5CE] rounded-xl hover:-translate-y-2 duration-300"
          >
            Start Coloring
          </div>
          <div
            onClick={() => navigate("/instructions")}
            className="w-full lg:w-1/2 text-2xl font-bold h-1/2 lg:h-full flex justify-center items-center bg-[#F0A8B7] rounded-xl hover:-translate-y-2 duration-300"
          >
            Read Instructions
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
