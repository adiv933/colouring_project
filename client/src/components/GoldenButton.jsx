/* eslint-disable react/prop-types */
function GoldenButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`py-1 flex justify-center items-center w-36 text-sm md:text-md lg:text-lg font-semibold text-[#dbaf46] bg-white rounded-lg duration-100 hover:-translate-y-1 hover:bg-[#dbaf46] hover:text-white whitespace-nowrap ${className}`}
    >
      {children}
    </button>
  );
}

export default GoldenButton;
