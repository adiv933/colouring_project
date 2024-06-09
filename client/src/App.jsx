import { useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";
import DesignSvg from "./design"; // This should be your SVG design component

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
    <div className="App">
      <SketchPicker color={color} onChangeComplete={handleColorChange} />
      <div>
        <DesignSvg ref={svgRef} />
      </div>
      <canvas
        ref={canvasRef}
        width="400"
        height="400"
        style={{ display: "none" }}
      />
      <button onClick={saveAsPng}>Save as PNG</button>
    </div>
  );
};

export default App;
