/* eslint-disable react/prop-types */
function GoldenButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-1 text-sm md:text-md lg:text-lg font-semibold text-[#dbaf46] bg-white rounded-lg duration-100 hover:-translate-y-1 hover:bg-[#dbaf46] hover:text-white"
    >
      {children}
    </button>
  );
}

export default GoldenButton;
