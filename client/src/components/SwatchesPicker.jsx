import { Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const SwatchesPicker = ({ colors, onColorSelect, swatchSize, gridSize }) => {
  // eslint-disable-next-line no-unused-vars
  const { rows, cols } = gridSize;
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color); // Set the selected color
    if (onColorSelect) {
      onColorSelect(color);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${swatchSize}px)`,
        gridGap: "5px",
        padding: "5px",
      }}
    >
      {colors.flat().map((color, index) => (
        <>
          <Tooltip title={color} placement="left">
            <div
              onClick={() => handleColorClick(color)}
              key={index}
              style={{
                backgroundColor: color,
                width: `${swatchSize}px`,
                height: `${swatchSize}px`,
                cursor: "pointer",
                border:
                  color === selectedColor ? "3px solid #000" : "1px solid #ccc", // Highlight selected color
                boxSizing: "border-box", // Ensure borders are included in width/height
                transform: color === selectedColor ? "scale(1.1)" : "scale(1)", // Slightly scale up the selected swatch
                transition:
                  "transform 0.1s ease-in-out, border 0.1s ease-in-out", // Smooth transition
              }}
            />
          </Tooltip>
        </>
      ))}
    </div>
  );
};

SwatchesPicker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onColorSelect: PropTypes.func.isRequired,
  swatchSize: PropTypes.number,
  gridSize: PropTypes.shape({
    rows: PropTypes.number,
    cols: PropTypes.number,
  }),
};

SwatchesPicker.defaultProps = {
  swatchSize: 30,
  gridSize: { rows: 12, cols: 15 },
};

export default SwatchesPicker;
