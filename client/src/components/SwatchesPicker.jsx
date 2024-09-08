import PropTypes from "prop-types";

const SwatchesPicker = ({
  colors,
  onColorSelect,
  swatchSize,
  gridSize,
  selectedColor,
}) => {
  const { cols } = gridSize;

  const handleColorClick = (color) => {
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
        <div
          onClick={() => handleColorClick(color)}
          key={index}
          style={{
            backgroundColor: color,
            width: `${swatchSize}px`,
            height: `${swatchSize}px`,
            cursor: "pointer",
            boxSizing: "border-box",
            border:
              color === selectedColor ? "3px solid #000" : "1px solid #ccc", // Highlight selected color
            transform: color === selectedColor ? "scale(1.1)" : "scale(1)", // Slightly scale up the selected swatch
            transition: "transform 0.1s ease-in-out, border 0.1s ease-in-out", // Smooth transition
          }}
        />
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
  selectedColor: PropTypes.string, // Added selectedColor prop type
};

SwatchesPicker.defaultProps = {
  swatchSize: 30,
  gridSize: { rows: 12, cols: 15 },
};

export default SwatchesPicker;
