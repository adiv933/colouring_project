/* eslint-disable react/prop-types */
import { useState } from "react";

const ColorTester = ({ color }) => {
  const [spaces, setSpaces] = useState(["white", "white", "white"]);
  // eslint-disable-next-line no-unused-vars
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSpaceClick = (index) => {
    if (color && color !== "clear") {
      const updatedSpaces = [...spaces];
      updatedSpaces[index] = color;
      setSpaces(updatedSpaces);
      setSelectedIndex(index);
    }
  };

  const handleClear = () => {
    // Reset all spaces to white
    setSpaces(["white", "white", "white"]);
    setSelectedIndex(null);
  };

  return (
    <div className="flex flex-col items-center gap-4  border-2 border-[#dbaf46] p-8 rounded-md">
      <h1 className="text-[#dbaf46] font-semibold text-xl bg-white w-64 h-12 lg:h-24 rounded-md text-center py-8">
        Try you colours below
      </h1>
      <div
        className="w-64 h-12 lg:h-24 cursor-pointer rounded-md"
        style={{ backgroundColor: spaces[0] }}
        onClick={() => handleSpaceClick(0)}
      />
      <div
        className="w-64 h-12 lg:h-24 cursor-pointer rounded-md"
        style={{ backgroundColor: spaces[1] }}
        onClick={() => handleSpaceClick(1)}
      />
      <div
        className="w-64 h-12 lg:h-24 cursor-pointer rounded-md"
        style={{ backgroundColor: spaces[2] }}
        onClick={() => handleSpaceClick(2)}
      />
      <button
        onClick={handleClear}
        className="px-2 py-1 md:px-4 md:py-2 text-md md:text-lg font-semibold text-[#dbaf46] bg-white  rounded-lg shadow duration-100 hover:-translate-y-1 hover:bg-[#dbaf46] hover:text-white"
      >
        Clear
      </button>
    </div>
  );
};

export default ColorTester;
