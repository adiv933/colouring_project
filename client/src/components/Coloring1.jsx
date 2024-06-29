/* eslint-disable react/prop-types */
import { useState } from "react";
import ColorPicker_test from "./ColorPicker_test";
import DesignCanvas from "./DesignCanvas";

const Coloring1 = () => {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };
  return (
    <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:space-x-6 w-full md:w-auto">
      <div className="order-2 md:order-1 p-4 md:p-6 bg-white shadow-lg rounded-lg w-full md:w-[40%] flex items-center justify-center">
        <ColorPicker_test color={color} onChangeComplete={handleColorChange} />
      </div>
      <div className="order-1 md:order-2">
        <DesignCanvas color={color} />
      </div>
    </div>
  );
};

export default Coloring1;
