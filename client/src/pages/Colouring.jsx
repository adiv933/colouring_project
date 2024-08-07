// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import VideoModal from "../components/VideoModal";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// function Coloring() {
//   useGSAP(() => {
//     const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

//     if (!isSmallScreen) {
//       gsap.from(".hero", {
//         y: 200,
//         opacity: 0,
//         delay: 2.5,
//         duration: 0.8,
//       });
//     }
//   });

//   return (
//     <div className="w-full min-h-screen gradient-background">
//       <Navbar />
//       <div className="min-h-screen w-full  flex flex-col hero">
//         <header className="w-full text-center pt-16 sm:pt-20 ">
//           <h1 className="text-3xl sm:text-6xl text-black font-dancing-script-bold mb-4 sm:mb-8">
//             Colouring
//           </h1>
//         </header>

//         <section className="flex flex-col sm:flex-row justify-between items-center flex-1 px-12">
//           <div className="text-left sm:w-1/2 mb-8 sm:mb-0">
//             <p className="text-base sm:text-xl leading-relaxed">
//               Centre and four powers, white. The twelve, all of different colour
//               in three groups:
//               <br />
//               <br />
//               Top group red, passing to orange towards yellow.
//               <br />
//               Next group, yellow passing through green towards blue.
//               <br />
//               And third group, blue passing through violet towards red.
//               <br />
//               <br />
//               If white is not convenient, the center may be gold (powder).
//               <br />
//               <br />{" "}
//               <span className="underline text-white">— Sri Aurobindo</span>
//             </p>
//           </div>
//           <div className="sm:w-1/3 h-96 flex justify-center">
//             <img
//               src="./colouring_image.jpeg"
//               alt="Description"
//               className="w-full h-auto max-w-sm rounded-lg shadow-lg"
//             />
//           </div>
//         </section>

//         <div className="flex gap-x-3 justify-center py-8">
//           <VideoModal />

//           <button className="px-6 py-3 bg-blue-500 text-white text-lg font-bold rounded-lg shadow-md hover:bg-blue-600 transition">
//             <Link to="/colouringIndex">Start Colouring</Link>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Coloring;
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import VideoModal from "../components/VideoModal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Coloring() {
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
      <div className="min-h-screen w-full flex flex-col hero">
        <header className="w-full text-center pt-16 sm:pt-20">
          <h1 className="text-3xl sm:text-6xl text-black font-dancing-script-bold mb-4 sm:mb-8">
            Colouring
          </h1>
        </header>

        <section className="flex flex-col sm:flex-row-reverse justify-between items-center flex-1 px-4 sm:px-12">
          <div className="text-left sm:w-1/2 mb-8 sm:mb-0">
            <p className="text-base sm:text-xl leading-relaxed">
              Centre and four powers, white. The twelve, all of different colour
              in three groups:
              <br />
              <br />
              Top group red, passing to orange towards yellow.
              <br />
              Next group, yellow passing through green towards blue.
              <br />
              And third group, blue passing through violet towards red.
              <br />
              <br />
              If white is not convenient, the center may be gold (powder).
              <br />
              <br />
              <span className="underline text-white">— Sri Aurobindo</span>
            </p>
          </div>
          <div className="sm:w-1/3 h-96 flex justify-center mb-8 sm:mb-0">
            <img
              src="./colouring_image.jpeg"
              alt="Description"
              className="w-full h-auto max-w-sm rounded-lg shadow-lg"
            />
          </div>
        </section>

        <div className="flex gap-x-3 justify-center py-8">
          <VideoModal />

          <button className="px-6 py-3 bg-blue-500 text-white text-lg font-bold rounded-lg shadow-md hover:bg-blue-600 transition">
            <Link to="/colouringIndex">Start Colouring</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Coloring;
