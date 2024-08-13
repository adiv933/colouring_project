/* eslint-disable react/prop-types */
import { useState } from "react";
import SwatchesPicker_test from "./SwatchesPicker_test";
import ColourTester from "./ColourTester";
import DesignCanvas_without_desc from "./DesignCanvas_without_desc";

const ColouringComponent1 = () => {
  const [color, setColor] = useState("#000000");

  const handleColorSelect = (color) => {
    setColor(color);
  };

  const colors = [
    "#ff5233",
    "#bd5e0f",
    "#330099",
    "#2b0084",
    "#22006f",
    "#ff6b4e",
    "#62d6d5",
    "#00b000",
    "#009600",
    "#ffd264",
    "#ffcc47",
    "#ffc518",
    "#deac13",
    "#bd920f",
    "#ff8852",
    "#ff7837",
    "#ff6600",
    "#83e942",
    "#73e600",
    "#62c700",
    "#5047b0",
    "#402ca4",
    "#45d1d1",
    "#de5700",
    "#bd4900",
    "#92eb5f",
    "#00cccc",
    "#00b0b0",
    "#009696",
    "#ffc060",
    "#ffb846",
    "#ffae18",
    "#de9713",
    "#5fd758",
    "#42d23b",
    "#00cc00",
    "#5e0096",
    "#4991ed",
    "#3cb96a",
    "#00b158",
    "#bd9600",
    "#9752da",
    "#8d36d2",
    "#8100cc",
    "#40009b",
    "#5ac27a",
    "#6e00b0",
    "#009a4b",
    "#0062c7",
    "#0053ab",
    "#ff5e4d",
    "#ff9933",
    "#de842b",
    "#bd6f22",
    "#52ac4b",
    "#ffd661",
    "#bd810f",
    "#53ab00",
    "#008340",
    "#deb000",
    "#2e82ea",
    "#2e82eb",
    "#9900cc",
    "#5731bd",
    "#ff4030",
    "#ff4031",
    "#ffae68",
    "#ffa350",
    "#36a130",
    "#009601",
    "#008300",
    "#006e00",
    "#ffd243",
    "#ffcc00",
    "#de0000",
    "#2b38d4",
    "#1c00b0",
    "#160096",
    "#58c352",
    "#008301",
    "#664dc5",
    "#5731bc",
    "#7e52da",
    "#7136d2",
    "#7136d6",
    "#bd0000",
    "#3a53db",
    "#2b38d3",
    "#3bb937",
    "#3bb938",
    "#009a00",
    "#bdbd00",
    "#ad53d9",
    "#a337d2",
    "#350084",
    "#5700b0",
    "#490096",
    "#ffff4a",
    "#fdff6b",
    "#ffff00",
    "#215fff",
    "#0441ff",
    "#0000ff",
    "#0000de",
    "#dede00",
    "#8400b0",
    "#6f0096",
    "#de2b00",
    "#bd2200",
    "#ff9d5b",
    "#0000bd",
    "#ff3300",
    "#f058a3",
    "#c7007a",
    "#ab0068",
    "#ff8f41",
    "#ff8118",
    "#eb3b99",
    "#e6008e",
    "#de6e13",
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-y-6 w-full justify-center items-center">
      <div className="flex-col order-2 md:order-1 w-full md:w-1/5 flex items-center justify-center gap-y-4">
        <ColourTester color={color} />
      </div>
      <div className="order-3 md:order-2 w-full md:w-1/2">
        <DesignCanvas_without_desc color={color} />
      </div>
      <div className="flex-col order-1 md:order-3 w-full md:w-1/4 flex items-center justify-center p-2 bg-white rounded-lg">
        <SwatchesPicker_test
          colors={colors}
          onColorSelect={handleColorSelect}
          swatchSize={25} // Customize swatch size here
          gridSize={{ rows: 5, cols: 10 }} // Customize grid size here
        />
      </div>
    </div>
  );
};

export default ColouringComponent1;
