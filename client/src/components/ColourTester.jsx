/* eslint-disable react/prop-types */
import { useState } from "react";

const ColorTester = ({ color }) => {
  const [spaces, setSpaces] = useState(["white", "white", "white"]);
  // eslint-disable-next-line no-unused-vars
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSpaceClick = (index) => {
    if (color && color !== "clear") {
      // Update the clicked space with the current color
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
    <div className="flex flex-col items-center gap-4">
      <div
        className="w-48 lg:w-64 h-20 lg:h-24 border border-black cursor-pointer rounded-md"
        style={{ backgroundColor: spaces[0] }}
        onClick={() => handleSpaceClick(0)}
      />
      <div
        className="w-48 lg:w-64 h-20 lg:h-24 border border-black cursor-pointer rounded-md"
        style={{ backgroundColor: spaces[1] }}
        onClick={() => handleSpaceClick(1)}
      />
      <div
        className="w-48 lg:w-64 h-20 lg:h-24 border border-black cursor-pointer rounded-md"
        style={{ backgroundColor: spaces[2] }}
        onClick={() => handleSpaceClick(2)}
      />
      <button
        onClick={handleClear}
        className="px-2 py-1 md:px-4 md:py-2 text-md md:text-lg font-semibold text-white bg-[#f17777] rounded-lg shadow duration-100 hover:-translate-y-1 hover:bg-[#f08080] focus:outline-none focus:ring-2 focus:ring-[#f08080]"
      >
        Clear
      </button>
    </div>
  );
};

export default ColorTester;
