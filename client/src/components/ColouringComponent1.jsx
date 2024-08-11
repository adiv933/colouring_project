/* eslint-disable react/prop-types */
import { useState } from "react";
// import ColorPicker_test from "./ColorPicker_test";
import SwatchesPicker_test from "./SwatchesPicker_test";
import ColourTester from "./ColourTester";
import DesignCanvas_without_desc from "./DesignCanvas_without_desc";

const ColouringComponent1 = () => {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };
  const colors = [
    ["#5047b0", "#402ca4", "#330099", "#2b0084", "#22006f"],
    ["#ff6b4e", "#ff5233", "#ff3300", "#de2b00", "#bd2200"],
    ["#f058a3", "#eb3b99", "#e6008e", "#c7007a", "#ab0068"],
    ["#ff9d5b", "#ff8f41", "#ff8118", "#de6e13", "#bd5e0f"],
    ["#62d6d5", "#45d1d1", "#00cccc", "#00b0b0", "#009696"],
    ["#ffc060", "#ffb846", "#ffae18", "#de9713", "#bd810f"],
    ["#5fd758", "#42d23b", "#00cc00", "#00b000", "#009600"],
    ["#ffd264", "#ffcc47", "#ffc518", "#deac13", "#bd920f"],
    ["#ff8852", "#ff7837", "#ff6600", "#de5700", "#bd4900"],
    ["#92eb5f", "#83e942", "#73e600", "#62c700", "#53ab00"],
    ["#5ac27a", "#3cb96a", "#00b158", "#009a4b", "#008340"],
    ["#ffae68", "#ffa350", "#ff9933", "#de842b", "#bd6f22"],
    ["#52ac4b", "#36a130", "#009601", "#008300", "#006e00"],
    ["#ffd661", "#ffd243", "#ffcc00", "#deb000", "#bd9600"],
    ["#9752da", "#8d36d2", "#8100cc", "#6e00b0", "#5e0096"],
    ["#4991ed", "#2e82ea", "#2e82eb", "#0062c7", "#0053ab"],
    ["#ff5e4d", "#ff4030", "#ff4031", "#de0000", "#bd0000"],
    ["#3a53db", "#2b38d3", "#2b38d4", "#1c00b0", "#160096"],
    ["#58c352", "#3bb937", "#3bb938", "#009a00", "#008301"],
    ["#664dc5", "#5731bc", "#5731bd", "#40009b", "#350084"],
    ["#7e52da", "#7136d2", "#7136d6", "#5700b0", "#490096"],
    ["#fdff6b", "#ffff4a", "#ffff00", "#dede00", "#bdbd00"],
    ["#ad53d9", "#a337d2", "#9900cc", "#8400b0", "#6f0096"],
    ["#215fff", "#0441ff", "#0000ff", "#0000de", "#0000bd"],
  ];
  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:space-x-6 w-full justify-center p-16">
      <div className="flex-col order-2 md:order-1 p-4 md:p-6 bg-white shadow-lg rounded-lg w-full md:w-[30%] flex items-center justify-center gap-y-4 border border-black">
        Try your colours here
        <ColourTester color={color} />
      </div>
      <div className="order-3 md:order-2 w-full md:w-[55%] ">
        <DesignCanvas_without_desc color={color} />
      </div>
      <div className="flex-col order-1 md:order-3 p-4 md:p-6 bg-white shadow-lg rounded-lg w-full md:w-[30%] flex items-center justify-center gap-y-4">
        Select colors
        <SwatchesPicker_test
          color={color}
          colors={colors}
          onChangeComplete={handleColorChange}
        />
      </div>
    </div>
  );
};

export default ColouringComponent1;
