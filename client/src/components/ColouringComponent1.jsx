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
    "#ff5e4d",
    "#ff4031",
    "#ff0000",
    "#de0000",
    "#be0000",
    "#ff6b4e",
    "#ff5333",
    "#ff3300",
    "#de2b00",
    "#be2300",
    "#ff8953",
    "#ff7837",
    "#ff6600",
    "#de5800",
    "#be4a00",
    "#ff9d5b",
    "#ff8f41",
    "#ff8119",
    "#de6f14",
    "#be5e10",
    "#ffaf68",
    "#ffa450",
    "#ff9933",
    "#de842b",
    "#be7023",
    "#ffc061",
    "#ffb846",
    "#ffaf19",
    "#de9814",
    "#be8110",
    "#ffd762",
    "#ffd243",
    "#ffcc00",
    "#deb100",
    "#be9700",
    "#ffd265",
    "#ffcc48",
    "#ffc619",
    "#deac14",
    "#be9210",
    "#feff6b",
    "#ffff4b",
    "#ffff00",
    "#dede00",
    "#bebe00",
    "#93ec60",
    "#83e942",
    "#73e600",
    "#63c800",
    "#54ab00",
    "#60d859",
    "#42d23c",
    "#00cc00",
    "#00b100",
    "#009700",
    "#59c353",
    "#3cba37",
    "#00b200",
    "#009a00",
    "#008300",
    "#53ae4d",
    "#36a432",
    "#009900",
    "#008400",
    "#007000",
    "#5ac27b",
    "#3dba6a",
    "#00b259",
    "#009a4c",
    "#008340",
    "#63d7d6",
    "#45d1d1",
    "#00cccc",
    "#00b1b1",
    "#009797",
    "#4a91ee",
    "#2f82ea",
    "#0073e6",
    "#0063c8",
    "#0054ab",
    "#2260ff",
    "#0541ff",
    "#0000ff",
    "#0000de",
    "#0000be",
    "#3b54db",
    "#2b38d4",
    "#2200cc",
    "#1c00b1",
    "#160097",
    "#5048b1",
    "#402da5",
    "#330099",
    "#2b0084",
    "#230070",
    "#664dc6",
    "#5832bd",
    "#4b00b3",
    "#40009b",
    "#350084",
    "#7f52da",
    "#7236d3",
    "#6600cc",
    "#5800b1",
    "#4a0097",
    "#9852da",
    "#8d36d3",
    "#8100cc",
    "#6f00b1",
    "#5e0097",
    "#ae54d9",
    "#a437d3",
    "#9900cc",
    "#8400b1",
    "#700097",
    "#f159a4",
    "#ec3c99",
    "#e6008e",
    "#c8007b",
    "#ab0068",
  ];

  const midpoint = Math.floor(colors.length / 2);

const part1 = colors.slice(0, midpoint).reverse();
const part2 = colors.slice(midpoint);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-y-6 w-full justify-center items-center">
      <ColourTester color={color} />
      <DesignCanvas color={color} />
      <div className="order-1 lg:order-3 w-fit flex items-center justify-center p-4 bg-white rounded-lg">
        <SwatchesPicker
          colors={part1}
          onColorSelect={handleColorSelect}
          swatchSize={25} // Customize swatch size here
          gridSize={{ rows: 6, cols: 5 }} // Customize grid size here
        />
        <SwatchesPicker
          colors={part2}
          onColorSelect={handleColorSelect}
          swatchSize={25} // Customize swatch size here
          gridSize={{ rows: 6, cols: 5 }} // Customize grid size here
        />
        {/* <SwatchesPicker
          colors={colors}
          onColorSelect={handleColorSelect}
          swatchSize={25} // Customize swatch size here
          gridSize={{ rows: 12, cols: 10 }} // Customize grid size here
          // gridSize={{ rows: 24, cols: 5 }} // Customize grid size here
        /> */}
      </div>
    </div>
  );
};

export default ColouringComponent1;
