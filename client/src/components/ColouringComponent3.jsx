import { useState } from "react";
import ColourTester from "./ColourTester";
import DesignCanvas from "./DesignCanvas";
import RybPicker from "./RybPicker";
import RgbPicker from "./RgbPicker";
import GoldenButton from "./GoldenButton";

const ColouringComponent3 = () => {
  const [color, setColor] = useState("#fff");
  const [isRGB, setIsRGB] = useState(false);

  const handleColorSelect = (color) => {
    setColor(color);
  };

  const togglePicker = () => {
    setIsRGB(!isRGB);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-y-6 w-full justify-center items-center">
      <ColourTester color={color} />
      <DesignCanvas color={color} />
      <div className="flex-col order-1 lg:order-3 w-fit lg:w-[30%] flex items-center justify-center p-4 gap-y-4 bg-white rounded-lg">
        <div className="flex gap-x-1 xl:gap-x-4 mb-4 p-1 xl:p-2 bg-[#dbaf46] rounded-lg">
          <GoldenButton
            onClick={togglePicker}
            className={!isRGB ? "border-2 border-black" : ""}
          >
            RGB Picker
          </GoldenButton>
          <GoldenButton
            onClick={togglePicker}
            className={isRGB ? "border-2 border-black" : ""}
          >
            RYB Picker
          </GoldenButton>
        </div>

        {!isRGB ? (
          <RgbPicker size={300} onColorSelect={handleColorSelect} />
        ) : (
          <RybPicker size={300} onColorSelect={handleColorSelect} />
        )}
      </div>
    </div>
  );
};

export default ColouringComponent3;
