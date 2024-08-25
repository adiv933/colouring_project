/* eslint-disable react/prop-types */

import { useLocation, useNavigate } from "react-router-dom";
import MyStepper from "./MyStepper";

function ColouringFooter({ steps }) {
  const location = useLocation();
  const navigate = useNavigate();

  const pages = [
    "/colouring1",
    "/colouring2",
    "/colouring3",
    "/colouring4",
    "/colouring5",
  ];
  const currentPageIndex = pages.indexOf(location.pathname);

  const handleBack = () => {
    if (currentPageIndex > 0) {
      localStorage.removeItem("colorArray");
      navigate(pages[currentPageIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentPageIndex < pages.length - 1) {
      localStorage.removeItem("colorArray");
      navigate(pages[currentPageIndex + 1]);
    }
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <MyStepper steps={steps} />
      <div
        className={
          currentPageIndex === 0
            ? `flex justify-end items-center`
            : `flex justify-between items-center`
        }
      >
        {/* Back button */}
        {currentPageIndex > 0 && (
          <button
            onClick={handleBack}
            className="px-2 py-1 md:px-4 md:py-2 text-md md:text-lg font-semibold text-[#dbaf46] bg-white rounded-lg shadow duration-100 hover:-translate-y-1 hover:bg-[#dbaf46] hover:text-white"
          >
            Back
          </button>
        )}
        {/* Next button */}
        {currentPageIndex < pages.length - 1 && (
          <button
            onClick={handleNext}
            className="px-2 py-1 md:px-4 md:py-2 text-md md:text-lg font-semibold text-[#dbaf46] bg-white rounded-lg shadow duration-100 hover:-translate-y-1 hover:bg-[#dbaf46] hover:text-white"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default ColouringFooter;
