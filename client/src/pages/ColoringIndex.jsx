import Navbar from "../components/Navbar";
import MyStepper from "../components/MyStepper";

function ColoringIndex() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="flex flex-col items-center min-h-screen px-4 md:px-6 space-y-6 md:space-y-8 pt-24 md:pt-20 pb-16">
        <MyStepper />
      </div>
    </div>
  );
}

export default ColoringIndex;
