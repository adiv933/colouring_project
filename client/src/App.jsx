import { useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";
import DesignSvg from "./design";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const [color, setColor] = useState("#000000");
  const svgRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const svgElement = svgRef.current;

    const handleClick = (event) => {
      const { target } = event;
      if (target.tagName !== "svg") {
        target.setAttribute("fill", color);
      }
    };

    svgElement.addEventListener("click", handleClick);

    return () => {
      svgElement.removeEventListener("click", handleClick);
    };
  }, [color]);

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  const saveAsPng = () => {
    const svgElement = svgRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "design.png";
      link.click();
    };

    img.src = url;
  };

  //* gsap code

  useGSAP(() => {
    gsap.from(".hero", {
      y: 200,
      opacity: 0,
      delay: 3,
      duration: 0.8,
    });
  });

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="flex flex-col items-center min-h-screen p-4 md:p-6 space-y-6 md:space-y-8 pt-20 md:pt-24 hero">
        <h1 className="text-4xl md:text-5xl text-chalk-700 text-center font-dancing-script">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          The Mother's Living Symbol
        </h1>
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:space-x-6 w-full md:w-auto">
          <div className=" order-2 md:order-1 p-4 md:p-6 bg-[#f4978e] shadow-lg rounded-lg w-full md:w-[40%] flex items-center justify-center">
            <div className="w-full md:w-[100%]">
              <SketchPicker
                color={color}
                onChangeComplete={handleColorChange}
                styles={{
                  default: {
                    picker: {
                      width: "100%",
                      height: "100%",
                      boxSizing: "border-box",
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="order-1 md:order-2  p-4 md:p-6 bg-[#f4978e] shadow-lg rounded-lg overflow-hidden w-full md:w-[60%]">
            <DesignSvg
              ref={svgRef}
              className="w-full h-auto border border-gray-300"
            />
          </div>
        </div>
        <canvas
          ref={canvasRef}
          width="400"
          height="400"
          style={{ display: "none" }}
        />
        <button
          onClick={saveAsPng}
          className="px-4 py-2 md:px-6 md:py-3 text-md md:text-lg font-semibold text-white bg-[#f17777] rounded-lg shadow duration-100 hover:-translate-y-1 hover:bg-[#f08080] focus:outline-none focus:ring-2 focus:ring-[#f08080]"
        >
          Save as PNG
        </button>
      </div>
    </div>
  );
};

export default App;
