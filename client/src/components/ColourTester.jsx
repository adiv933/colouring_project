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
    setSpaces(["white", "white", "white"]);
    setSelectedIndex(null);
  };

  return (
    <div className="flex-col order-2 lg:order-1 w-3/4 md:w-1/3 lg:w-[20%] flex items-center justify-center gap-y-4">
      <div className="h-full w-full flex flex-col items-center gap-4  border-2 border-[#dbaf46] p-4 rounded-md">
        <h1 className="text-[#dbaf46] font-semibold bg-white w-2/3 lg:w-full h-16 rounded-md text-center ">
          Try your colours below
        </h1>
        <div
          className="w-2/3 lg:w-full h-16 cursor-pointer rounded-md transition-colors duration-300 ease-in-out"
          style={{ backgroundColor: spaces[0] }}
          onClick={() => handleSpaceClick(0)}
        />
        <div
          className="w-2/3 lg:w-full h-16 cursor-pointer rounded-md transition-colors duration-300 ease-in-out"
          style={{ backgroundColor: spaces[1] }}
          onClick={() => handleSpaceClick(1)}
        />
        <div
          className="w-2/3 lg:w-full h-16 cursor-pointer rounded-md transition-colors duration-300 ease-in-out"
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
    </div>
  );
};

export default ColorTester;
