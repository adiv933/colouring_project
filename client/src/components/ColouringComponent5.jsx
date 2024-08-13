import { useState } from "react";
import ColourTester from "./ColourTester";
import DesignCanvas from "./DesignCanvas";
import RybPicker from "./RybPicker";

const ColouringComponent5 = () => {
  const [color, setColor] = useState("#000000");

  const handleColorSelect = (color) => {
    setColor(color);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-y-6 w-full justify-center items-center">
      <div className="flex-col order-2 md:order-1 p-4 md:p-6 w-full md:w-1/5 flex items-center justify-center gap-y-4">
        <ColourTester color={color} />
      </div>
      <div className="order-3 md:order-2 w-full md:w-1/2">
        <DesignCanvas color={color} />
      </div>
      <div className="flex-col order-1 md:order-3 w-full md:w-1/4 flex items-center justify-center p-4 gap-y-4 bg-white rounded-lg">
        <RybPicker size={300} onColorSelect={handleColorSelect} />
      </div>
    </div>
  );
};

export default ColouringComponent5;
