/* eslint-disable react/prop-types */
import { useState } from "react";
import DesignCanvas from "./DesignCanvas";
import ColourTester from "./ColourTester";
import ColourWheel from "./ColourWheel";
import { colors2 } from "../utils/scoring";

const ColouringComponent2 = () => {
  const [color, setColor] = useState("#fff");

  const handleColorSelect = (color) => {
    setColor(color);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-y-6 w-full justify-center items-center">
      <ColourTester color={color} />

      <DesignCanvas color={color} />
      <div className="flex-col order-1 lg:order-3 w-fit flex items-center justify-center bg-white rounded-lg">
        <ColourWheel
          colors={colors2}
          onColorSelect={handleColorSelect}
          r={230}
          cX={230}
          cY={230}
        />
      </div>
    </div>
  );
};

export default ColouringComponent2;
