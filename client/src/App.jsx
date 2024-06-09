import { useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";
import DesignSvg from "./design";

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

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6 space-y-8">
      <h1 className="text-4xl font-bold text-gray-700">
        Mother's Symbol Colouring
      </h1>
      <div className="flex space-x-6">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <SketchPicker color={color} onChangeComplete={handleColorChange} />
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg overflow-hidden">
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
        className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Save as PNG
      </button>
    </div>
  );
};

export default App;
