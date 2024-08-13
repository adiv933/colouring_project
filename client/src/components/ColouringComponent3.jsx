import { useState } from "react";
import ColourTester from "./ColourTester";
import DesignCanvas from "./DesignCanvas";
import RybPicker from "./RybPicker";
import RgbPicker from "./RgbPicker";
import GoldenButton from "./GoldenButton";

const ColouringComponent3 = () => {
  const [color, setColor] = useState("#000000");
  const [isRGB, setIsRGB] = useState(true);

  const handleColorSelect = (color) => {
    setColor(color);
  };

  const togglePicker = () => {
    setIsRGB(!isRGB);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-y-6 w-full justify-center items-center">
      <div className="flex-col order-2 md:order-1 p-4 md:p-6 w-full md:w-1/5 flex items-center justify-center gap-y-4">
        <ColourTester color={color} />
      </div>
      <div className="order-3 md:order-2 w-full md:w-1/2">
        <DesignCanvas color={color} />
      </div>
      {/* <div className="flex-col order-1 md:order-3 w-full md:w-1/4 flex items-center justify-center bg-white p-4 rounded-lg">
        <RybPicker size={350} onColorSelect={handleColorSelect} />
      </div> */}
      <div className="flex-col order-1 md:order-3 w-full md:w-1/4 flex items-center justify-center p-4 gap-y-4 bg-white rounded-lg">
        <div className="flex gap-x-4 mb-4 p-2 bg-[#dbaf46] rounded-lg">
          <GoldenButton onClick={togglePicker}>
            {isRGB ? "RGB Picker" : "RYB Picker"}
          </GoldenButton>
          <GoldenButton onClick={togglePicker}>
            {isRGB ? "RYB Picker" : "RGB Picker"}
          </GoldenButton>
        </div>

        {isRGB ? (
          <RgbPicker size={300} onColorSelect={handleColorSelect} />
        ) : (
          <RybPicker size={300} onColorSelect={handleColorSelect} />
        )}
      </div>
    </div>
  );
};

export default ColouringComponent3;
