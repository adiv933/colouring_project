/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Symbol from "../../public/Symbol.jsx";

const DesignCanvas = ({ color }) => {
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

  return (
    <div className="flex flex-col gap-y-4 ">
      <div className="p-4 md:p-6 overflow-hidden w-full ">
        <Symbol ref={svgRef} className="w-full h-auto" color={color} />
      </div>
      <canvas
        ref={canvasRef}
        width="708.661"
        height="708.661"
        style={{ display: "none" }}
      />
      <button
        onClick={saveAsPng}
        className="px-4 py-2 md:px-6 md:py-3 text-md md:text-lg font-semibold text-[#dbaf46] bg-white  rounded-lg shadow duration-100 hover:-translate-y-1 hover:bg-[#dbaf46] hover:text-white"
      >
        Download
      </button>
    </div>
  );
};

export default DesignCanvas;
