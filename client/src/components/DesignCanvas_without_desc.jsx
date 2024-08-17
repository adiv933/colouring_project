/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import GoldenButton from "./GoldenButton.jsx";

const DesignCanvas_without_desc = ({ color }) => {
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
    <div className="flex flex-col gap-y-4">
      <div className="overflow-hidden w-full">
        
      </div>
      <canvas
        ref={canvasRef}
        width="708.661"
        height="708.661"
        style={{ display: "none" }}
      />
      <GoldenButton onClick={saveAsPng}>Download</GoldenButton>
    </div>
  );
};

export default DesignCanvas_without_desc;
