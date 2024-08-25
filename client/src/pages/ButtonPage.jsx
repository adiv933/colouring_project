import { Link } from "react-router-dom";

const ButtonPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Navigate to PDF Sections
      </h1>
      <ul className="space-y-4">
        <li>
          <Link
            to="/view-pdf?page=1"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Go to Introduction
          </Link>
        </li>
        <li>
          <Link
            to="/view-pdf?page=5"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Go to Chapter 1
          </Link>
        </li>
        <li>
          <Link
            to="/view-pdf?page=10"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Go to Chapter 2
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default ButtonPage;
