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
      <div className="flex flex-col items-center min-h-screen space-y-6 md:space-y-8 pt-20 md:pt-12">
        <section className="h-screen w-full flex flex-col justify-center items-center bg-[#fee2e2] hero overflow-hidden">
          <h1 className="text-4xl md:text-6xl text-zinc-800 text-center font-dancing-script mb-4">
            Living Symbol of the Mother
          </h1>
          <p className="text-lg text-center mx-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            venenatis enim. Proin commodo ante ac volutpat dignissim.
          </p>
        </section>

        {/* Video Section */}
        <div className="flex flex-col lg:flex-row-reverse gap-y-8 gap-x-4 video-section pb-12  px-4 md:px-6">
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
        <section className="h-screen flex flex-col lg:flex-row w-full action-section gap-4 p-4 px-4 md:px-6">
          <div
            onClick={() => navigate("/coloring")}
            className="relative w-full lg:w-1/2 text-2xl font-bold h-1/2 lg:h-full flex justify-center items-center bg-white rounded-xl duration-300 overflow-hidden"
          >
            <img
              className="h-full w-full transform object-cover transition-transform duration-300 ease-in-out hover:scale-110 opacity-60 hover:opacity-100"
              src="/start.jpeg"
            />
            {/* <div className="absolute bottom-0 left-0 h-full w-full bg-white opacity-30"></div> */}
            <div className="absolute bottom-50 left-50">
              <h2 className="text-2xl lg:text-5xl font-bold text-black text-outline">
                Start Coloring
              </h2>
            </div>
          </div>
          <div
            onClick={() => navigate("/instructions")}
            className="relative w-full lg:w-1/2 text-2xl font-bold h-1/2 lg:h-full flex justify-center items-center bg-white rounded-xl duration-300 overflow-hidden"
          >
            <img
              className="h-full w-full transform object-cover transition-transform duration-300 ease-in-out hover:scale-110 opacity-60 hover:opacity-100"
              src="/instructions.jpeg"
            />
            {/* <div className="absolute bottom-0 left-0 h-full w-full bg-white opacity-30"></div> */}
            <div className="absolute bottom-50 left-50">
              <h2 className="text-2xl lg:text-5xl font-bold text-black text-outline">
                Read Instructions
              </h2>
            </div>
          </div>
          {/* <div
            onClick={() => navigate("/coloring")}
            onMouseEnter={() => console.log("AAA")}
            className="w-full lg:w-1/2 text-2xl font-bold h-1/2 lg:h-full flex justify-center items-center rounded-xl bg-[url('/start.jpeg')] bg-cover duration-300"
          >
            Start Coloring
          </div>
          <div
            onClick={() => navigate("/instructions")}
            className="w-full lg:w-1/2 text-2xl font-bold h-1/2 lg:h-full flex justify-center items-center bg-[url('/instructions.jpeg')] bg-cover rounded-xl duration-300"
          >
            Read Instructions
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Landing;
