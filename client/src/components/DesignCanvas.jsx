/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import DesignSvg from "../../public/design";

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
    <>
      <div className="p-4 md:p-6 bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-[60%]">
        <DesignSvg
          ref={svgRef}
          className="w-full h-auto border border-gray-300"
        />
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
    </>
  );
};

export default DesignCanvas;
