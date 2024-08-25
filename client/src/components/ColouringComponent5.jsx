import { useState } from "react";
import ColourTester from "./ColourTester";
import DesignCanvas from "./DesignCanvas";
import RgbPicker from "./RgbPicker";

const ColouringComponent5 = () => {
  const [color, setColor] = useState("#fff");

  const handleColorSelect = (color) => {
    setColor(color);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-y-6 w-full justify-center items-center">
      <ColourTester color={color} />

      <DesignCanvas color={color} />
      <div className="flex-col order-1 lg:order-3 w-fit flex items-center justify-center p-4 gap-y-4 bg-white rounded-lg">
        <RgbPicker size={300} onColorSelect={handleColorSelect} />
      </div>
    </div>
  );
};

export default ColouringComponent5;
