import { useState } from "react";
import ColorPicker_test from "./ColorPicker_test";
// import SwatchesPicker_test from "./SwatchesPicker_test";
import DesignCanvas from "./DesignCanvas";

const Coloring3 = () => {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:space-x-6 w-full justify-center p-16">
      {" "}
      <div className="flex-col order-3 md:order-1 p-4 md:p-6 bg-white shadow-lg rounded-lg w-full md:w-[30%] flex items-center justify-center gap-y-8">
        Try your colours here
        <ColorPicker_test color={color} onChangeComplete={handleColorChange} />
      </div>
      <div className="order-2 md:order-2 w-full md:w-[55%] ">
        <DesignCanvas color={color} />
      </div>
      <div className="flex-col order-1 md:order-3 p-4 md:p-6 bg-white shadow-lg rounded-lg w-full md:w-[30%] flex items-center justify-center gap-y-8">
        Select colors
        <ColorPicker_test color={color} onChangeComplete={handleColorChange} />
      </div>
    </div>
  );
};

export default Coloring3;
