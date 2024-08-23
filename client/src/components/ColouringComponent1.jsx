/* eslint-disable react/prop-types */
import { useState } from "react";
import SwatchesPicker from "./SwatchesPicker";
import ColourTester from "./ColourTester";
import DesignCanvas from "./DesignCanvas";

const ColouringComponent1 = () => {
  const [color, setColor] = useState("#fff");

  const handleColorSelect = (color) => {
    setColor(color);
  };

  const colors = [
    "#660000",
    "#b20000",
    "#FF0000",
    "#ff4c4c",
    "#ff9999",
    "#661c00",
    "#b23000",
    "#FF4500",
    "#ff7d4c",
    "#ffb599",
    "#66281c",
    "#b24532",
    "#FF6347",
    "#ff927e",
    "#ffc1b5",
    "#664200",
    "#b27400",
    "#FFA500",
    "#ffc04c",
    "#ffdb99",
    "#66481c",
    "#b27d32",
    "#FFB347",
    "#ffca7e",
    "#ffe1b5",
    "#665600",
    "#b29600",
    "#FFD700",
    "#ffe34c",
    "#ffef99",
    "#666600",
    "#b2b200",
    "#FFFF00",
    "#ffff4c",
    "#ffff99",
    "#456613",
    "#79b221",
    "#ADFF2F",
    "#c6ff6d",
    "#deffac",
    "#145214",
    "#239023",
    "#32CD32",
    "#70dc70",
    "#adebad",
    "#003300",
    "#005a00",
    "#008000",
    "#4ca64c",
    "#99cc99",
    "#0e380e",
    "#186118",
    "#228B22",
    "#64ae64",
    "#a7d1a7",
    "#002800",
    "#004600",
    "#006400",
    "#4c924c",
    "#99c199",
    "#003333",
    "#005a5a",
    "#008080",
    "#4ca6a6",
    "#99cccc",
    "#45565c",
    "#7997a1",
    "#ADD8E6",
    "#c6e4ee",
    "#deeff5",
    "#36525e",
    "#5e90a4",
    "#87CEEB",
    "#abddf1",
    "#cfebf7",
    "#0c3a66",
    "#1565b2",
    "#1E90FF",
    "#62b1ff",
    "#a5d3ff",
    "#000052",
    "#000090",
    "#0000CD",
    "#4c4cdc",
    "#9999eb",
    "#000066",
    "#0000b2",
    "#0000FF",
    "#4c4cff",
    "#9999ff",
    "#000038",
    "#000061",
    "#00008B",
    "#4c4cae",
    "#9999d1",
    "#1e0034",
    "#34005b",
    "#4B0082",
    "#814ca7",
    "#b799cd",
    "#330033",
    "#5a005a",
    "#800080",
    "#a64ca6",
    "#cc99cc",
    "#380038",
    "#610061",
    "#8B008B",
    "#ae4cae",
    "#d199d1",
    "#4a2254",
    "#823b94",
    "#BA55D3",
    "#cf88e0",
    "#e3bbed",
    "#5f345f",
    "#a75ba7",
    "#EE82EE",
    "#f3a7f3",
    "#f8cdf8",
    "#662a48",
    "#b24a7e",
    "#FF69B4",
    "#ff96cb",
    "#ffc3e1",
    "#66083b",
    "#b20e67",
    "#FF1493",
    "#ff5ab3",
    "#ffa1d4",
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-y-6 w-full justify-center items-center">
      <ColourTester color={color} />
      <DesignCanvas color={color} />
      <div className="flex-col order-1 lg:order-3 w-fit flex items-center justify-center p-4 gap-y-4 bg-white rounded-lg">
        <SwatchesPicker
          colors={colors}
          onColorSelect={handleColorSelect}
          swatchSize={25} // Customize swatch size here
          gridSize={{ rows: 24, cols: 5 }} // Customize grid size here
          // gridSize={{ rows: 5, cols: 24 }} // Customize grid size here
        />
      </div>
    </div>
  );
};

export default ColouringComponent1;
