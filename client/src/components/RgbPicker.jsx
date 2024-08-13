/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";

const RgbPicker = ({ onColorSelect, size = 200 }) => {
  const [color, setColor] = useState("#ffffff");
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const radius = size / 2;
    const toRad = (deg) => (deg * Math.PI) / 180;

    for (let angle = 0; angle < 360; angle++) {
      const startAngle = toRad(angle);
      const endAngle = toRad(angle + 1);

      const gradient = ctx.createLinearGradient(0, 0, size, size);
      gradient.addColorStop(0, "white");
      gradient.addColorStop(1, `hsl(${angle}, 100%, 50%)`);

      ctx.beginPath();
      ctx.moveTo(radius, radius);
      ctx.arc(radius, radius, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
    }
  }, [size]);

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const imageData = ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b] = imageData;

    const selectedColor = `rgb(${r}, ${g}, ${b})`;
    setColor(selectedColor);

    if (onColorSelect) {
      onColorSelect(selectedColor);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        onClick={handleClick}
        style={{ cursor: "pointer", borderRadius: "50%" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: color,
          width: size / 4,
          height: size / 4,
          borderRadius: "50%",
          border: "2px solid #fff",
          boxShadow: "0 0 5px rgba(0,0,0,0.5)",
        }}
      />
    </div>
  );
};

export default RgbPicker;
