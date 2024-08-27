/* eslint-disable react/prop-types */
function PageHeading({ children }) {
  return (
    <h1 className="text-2xl sm:text-3xl xl:text-5xl text-white flex items-center mb-8 text-center font-semibold gap-x-2">
      <img src="/logo.png" alt="logo" className="w-12 h-12 sm:w-16 sm:h-16" />
      {children}
    </h1>
  );
}

export default PageHeading;
