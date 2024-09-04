import { useState } from "react";

/* eslint-disable react/prop-types */
function ColourWheel({ colors, onColorSelect }) {
  const radius = 250; // Adjust this for the size of the wheel
  const centerX = 250; // Center of the SVG
  const centerY = 250; // Center of the SVG

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    if (onColorSelect) {
      onColorSelect(color);
    }
  };

  const generateSpokes = (colors) => {
    const spokes = [];
    const selectedSpokes = [];
    const angleIncrement = (2 * Math.PI) / 36; // Angle for each spoke

    colors.forEach((spoke, spokeIndex) => {
      const startAngle = spokeIndex * angleIncrement; // Starting angle for each spoke

      spoke.forEach((color, partIndex) => {
        const innerRadius = (partIndex * radius) / 5; // Calculate radius for each part
        const outerRadius = ((partIndex + 1) * radius) / 5; // Outer radius for each part

        const x1 = centerX + innerRadius * Math.cos(startAngle);
        const y1 = centerY + innerRadius * Math.sin(startAngle);
        const x2 = centerX + outerRadius * Math.cos(startAngle);
        const y2 = centerY + outerRadius * Math.sin(startAngle);
        const x3 =
          centerX + outerRadius * Math.cos(startAngle + angleIncrement);
        const y3 =
          centerY + outerRadius * Math.sin(startAngle + angleIncrement);
        const x4 =
          centerX + innerRadius * Math.cos(startAngle + angleIncrement);
        const y4 =
          centerY + innerRadius * Math.sin(startAngle + angleIncrement);

        const pathData = `M ${x1} ${y1} L ${x2} ${y2} A ${outerRadius} ${outerRadius} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 0 0 ${x1} ${y1} Z`;

        const path = (
          <path
            onClick={() => handleColorClick(color)}
            key={`${spokeIndex}-${partIndex}`}
            d={pathData}
            fill={color}
            stroke={color === selectedColor ? "#000000" : "#ffffff"}
            strokeWidth={color === selectedColor ? "2" : "1"}
            transform={
              color === selectedColor
                ? `translate(${Math.cos(startAngle) * 2}, ${
                    Math.sin(startAngle) * 2
                  })`
                : ""
            }
          />
        );

        if (color === selectedColor) {
          selectedSpokes.push(path);
        } else {
          spokes.push(path);
        }
      });
    });

    return [...spokes, ...selectedSpokes];
  };

  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      {generateSpokes(colors)}
    </svg>
  );
}

export default ColourWheel;
