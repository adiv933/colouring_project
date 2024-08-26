/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";

const RgbPicker = ({ onColorSelect, size = 200 }) => {
  const [color, setColor] = useState("#ffffff");
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const canvasRef = useRef(null);

  const rybToRgb = (angle) => {
    const hue = (angle % 360) / 60;
    const chroma = 1;
    const x = chroma * (1 - Math.abs((hue % 2) - 1));
    let r = 0,
      g = 0,
      b = 0;

    if (0 <= hue && hue < 1) {
      r = chroma;
      g = x;
    } else if (1 <= hue && hue < 2) {
      r = x;
      g = chroma;
    } else if (2 <= hue && hue < 3) {
      g = chroma;
      b = x;
    } else if (3 <= hue && hue < 4) {
      g = x;
      b = chroma;
    } else if (4 <= hue && hue < 5) {
      r = x;
      b = chroma;
    } else if (5 <= hue && hue < 6) {
      r = chroma;
      b = x;
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const radius = size / 2;
    const toRad = (deg) => (deg * Math.PI) / 180;

    for (let angle = 0; angle < 360; angle++) {
      const startAngle = toRad(angle);
      const endAngle = toRad(angle + 1);

      const [r, g, b] = rybToRgb(angle);

      ctx.beginPath();
      ctx.moveTo(radius, radius);
      ctx.arc(radius, radius, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fill();
    }
  }, [size]);

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const positionX = (x / size) * 100;
    const positionY = (y / size) * 100;

    setPosition({ x: positionY, y: positionX });

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
          top: `${position.x}%`,
          left: `${position.y}%`,
          transform: "translate(-50%, -50%)",
          backgroundColor: color,
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          border: "2px solid #fff",
          boxShadow: "0 0 5px rgba(0,0,0,0.5)",
        }}
      />
    </div>
  );
};

export default RgbPicker;
