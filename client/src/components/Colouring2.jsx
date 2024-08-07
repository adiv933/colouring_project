/* eslint-disable react/prop-types */
import { useState } from "react";
import ColorPicker_test from "./ColorPicker_test";
import DesignCanvas_without_desc from "./DesignCanvas_without_desc";
import ColourTester from "./ColourTester";

const Coloring2 = () => {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:space-x-6 w-full justify-center p-16">
      {" "}
      <div className="flex-col order-2 md:order-1 p-4 md:p-6 bg-white shadow-lg rounded-lg w-full md:w-[30%] flex items-center justify-center gap-y-4 border border-black">
        Try your colours here
        <ColourTester color={color} />
      </div>
      <div className="order-3 md:order-2 w-full md:w-[55%] ">
        <DesignCanvas_without_desc color={color} />
      </div>
      <div className="flex-col order-1 md:order-3 p-4 md:p-6 bg-white shadow-lg rounded-lg w-full md:w-[30%] flex items-center justify-center gap-y-4">
        Select colors
        <ColorPicker_test color={color} onChangeComplete={handleColorChange} />
      </div>
    </div>
  );
};

export default Coloring2;
