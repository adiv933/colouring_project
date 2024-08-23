/* eslint-disable react/display-name */
import { useState, forwardRef } from "react";
import GoldenButton from "../src/components/GoldenButton";
import SymbolText from "./font/SymbolText";

const Symbol = forwardRef((props, ref) => {
  const [position, setPosition] = useState(0);

  const rotateClockwise = () => {
    if (position < 1) {
      setPosition((prevPosition) => prevPosition + 1);
    }
  };

  const rotateAnticlockwise = () => {
    if (position > -1) {
      setPosition((prevPosition) => prevPosition - 1);
    }
  };

  const getRotationAngle = () => {
    switch (position) {
      case 1:
        return 30;
      case -1:
        return -30;
      default:
        return 0;
    }
  };

  return (
    <div>
      <div className="flex justify-between p-4">
        <GoldenButton onClick={rotateAnticlockwise}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
              stroke="#dbaf46"
              strokeWidth="5"
            />
          </svg>
          <h1 className="text-black">LEFT</h1>
        </GoldenButton>

        <h1 className="text-5xl font-semibold text-center text-white">
          Rotate
          <br />
          qualities
        </h1>

        <GoldenButton onClick={rotateClockwise}>
          <h1 className="text-black">RIGHT</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
              stroke="#dbaf46"
              strokeWidth="5"
            />
          </svg>
        </GoldenButton>
      </div>

      <svg
        {...props}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width="708.661"
        height="708.661"
        viewBox="0 0 708.661 708.661"
        style={{
          transform: `rotate(${getRotationAngle()}deg)`,
          position: `relative`,
        }}
      >
        <defs>
          <clipPath id="clip_0">
            <path
              transform="matrix(1,0,0,-1,0,708.661)"
              d="M0 708.661H708.661V0H0Z"
            />
          </clipPath>
          <clipPath id="clip_1">
            <path
              transform="matrix(1,0,0,-1,0,708.661)"
              d="M0 708.661H708.661V0H0Z"
            />
          </clipPath>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#ff0000", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#8b0000", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <g id="layer_1" data-name="Vrstva 1">
          <g id="layer_1" data-name="Vrstva 1">
            <g clipPath="url(#clip_0)">
              {/* golder outline */}
              <path
                transform="matrix(1,0,0,-1,600.1441,212.1676)"
                d="M0 0C78.259-135.554 31.808-308.891-103.752-387.159-239.311-465.428-412.645-418.989-490.903-283.436-569.162-147.882-522.71 25.455-387.151 103.724-251.592 181.992-78.258 135.553 0 0"
                fill="#dbaf46"
                style={{ pointerEvents: "none" }}
                stroke="#000000"
                strokeWidth="1"
              />
              {/* 4 inner petals */}
              <path
                transform="matrix(1,0,0,-1,275.7271,284.04023)"
                d="M0 0C-4.438 4.575-11.852 4.252-15.905-.666-25.64-12.475-40.601-36.111-40.6-69.836-40.599-103.561-25.635-127.199-15.9-139.008-11.846-143.927-4.432-144.25 .005-139.675L38.611-99.875C32.359-91.493 28.657-81.098 28.657-69.839 28.656-58.58 32.357-48.185 38.608-39.805V-39.803Z"
                fill="#ffffff"
                style={{ pointerEvents: "none" }}
                stroke="#000000"
                strokeWidth="1"
              />
              <path
                transform="matrix(1,0,0,-1,284.835,432.8493)"
                d="M0 0C-4.574-4.437-4.251-11.852 .667-15.906 12.476-25.642 36.111-40.606 69.833-40.608 103.555-40.609 127.19-25.646 138.999-15.911 143.916-11.857 144.238-4.443 139.664-.005L99.864 38.606H99.863C91.483 32.355 81.089 28.654 69.831 28.654 58.572 28.655 48.178 32.357 39.798 38.609H39.797Z"
                fill="#ffffff"
                style={{ pointerEvents: "none" }}
                stroke="#000000"
                strokeWidth="1"
              />
              <path
                transform="matrix(1,0,0,-1,284.8286,274.9621)"
                d="M0 0C-4.574 4.438-4.251 11.853 .666 15.906 12.474 25.642 36.108 40.604 69.831 40.603 103.553 40.602 127.188 25.637 138.997 15.901 143.915 11.847 144.238 4.433 139.664-.005L99.867-38.614H99.866C91.485-32.362 81.092-28.66 69.833-28.659 58.575-28.659 48.181-32.36 39.801-38.611H39.8Z"
                fill="#ffffff"
                style={{ pointerEvents: "none" }}
                stroke="#000000"
                strokeWidth="1"
              />
              <path
                transform="matrix(1,0,0,-1,433.6206,284.0465)"
                d="M0 0C4.437 4.575 11.851 4.251 15.905-.667 25.641-12.477 40.604-36.114 40.605-69.839 40.606-103.564 25.645-127.2 15.91-139.01 11.856-143.928 4.443-144.25 .006-139.676L-38.603-99.872V-99.871C-32.353-91.49-28.651-81.097-28.651-69.836-28.652-58.577-32.354-48.183-38.605-39.801V-39.8Z"
                fill="#ffffff"
                style={{ pointerEvents: "none" }}
                stroke="#000000"
                strokeWidth="1"
              />
              {/* 12 outer petals */}
              <path
                transform="matrix(1,0,0,-1,475.2788,108.93231)"
                d="M0 0C-33.004 16.108-67.904 25.012-102.686 27.225-109.366 27.65-114.934 22.483-114.871 15.976L-114.658-115.169C-97.066-116.206-76.952-121.228-60.342-129.853L5.036-15.851C8.339-10.215 6.039-2.947 0 0"
                fill="#fff"
                style={{ cursor: "pointer", transition: "fill 0.3s ease" }}
                stroke="#000000"
                strokeWidth="1"
                id="path-0"
              />
              <path
                transform="matrix(1,0,0,-1,581.6148,202.0441)"
                d="M0 0C-20.528 30.452-46.301 55.613-75.315 74.92-80.889 78.628-88.294 76.938-91.493 71.27L-156.882-42.411C-142.165-52.105-127.256-66.51-117.185-82.286L-3.564-16.246C2.113-13.016 3.756-5.572 0 0"
                fill="#fff"
                style={{ cursor: "pointer", transition: "fill 0.3s ease" }}
                stroke="#000000"
                strokeWidth="1"
                id="path-1"
              />
              <path
                transform="matrix(1,0,0,-1,627.148,335.84983)"
                d="M0 0C-2.552 36.636-12.291 71.313-27.766 102.541-30.737 108.539-37.996 110.777-43.6 107.469L-157.068 41.712C-149.171 25.959-143.462 6.028-142.627-12.669L-11.209-12.287C-4.678-12.329 .467-6.704 0 0"
                fill="#fff"
                style={{ cursor: "pointer", transition: "fill 0.3s ease" }}
                stroke="#000000"
                strokeWidth="1"
                id="path-2"
              />
              <path
                transform="matrix(1,0,0,-1,599.6783,474.4958)"
                d="M0 0C16.108 33.005 25.013 67.905 27.225 102.686 27.65 109.366 22.483 114.935 15.976 114.871L-115.169 114.659C-116.206 97.066-121.228 76.952-129.854 60.342L-15.851-5.036C-10.215-8.338-2.947-6.039 0 0"
                fill="#fff"
                style={{ cursor: "pointer", transition: "fill 0.3s ease" }}
                stroke="#000000"
                strokeWidth="1"
                id="path-3"
              />
              <path
                transform="matrix(1,0,0,-1,506.5659,580.8317)"
                d="M0 0C30.452 20.529 55.613 46.302 74.921 75.316 78.629 80.89 76.939 88.295 71.272 91.494L-42.41 156.882C-52.104 142.166-66.51 127.257-82.285 117.185L-16.245 3.564C-13.016-2.113-5.571-3.756 0 0"
                fill="#fff"
                style={{ cursor: "pointer", transition: "fill 0.3s ease" }}
                stroke="#000000"
                strokeWidth="1"
                id="path-4"
              />
              <path
                transform="matrix(1,0,0,-1,372.7613,626.3649)"
                d="M0 0C36.636 2.553 71.313 12.291 102.54 27.766 108.538 30.737 110.777 37.996 107.469 43.601L41.712 157.069C25.958 149.171 6.028 143.462-12.67 142.628L-12.287 11.21C-12.329 4.678-6.704-.467 0 0"
                fill="#fff"
                style={{ cursor: "pointer", transition: "fill 0.3s ease" }}
                stroke="#000000"
                strokeWidth="1"
                id="path-5"
              />
              <path
                transform="matrix(1,0,0,-1,234.1153,598.8952)"
                d="M0 0C33.004-16.107 67.904-25.012 102.686-27.225 109.366-27.649 114.934-22.483 114.871-15.976L114.658 115.17C97.066 116.206 76.952 121.228 60.342 129.854L-5.036 15.852C-8.338 10.216-6.039 2.947 0 0"
                fill="#fff"
                style={{ cursor: "pointer", transition: "fill 0.3s ease" }}
                stroke="#000000"
                strokeWidth="1"
                id="path-6"
              />
              <path
                transform="matrix(1,0,0,-1,127.7793,505.7829)"
                d="M0 0C20.529-30.452 46.301-55.613 75.316-74.92 80.889-78.629 88.294-76.938 91.494-71.271L156.882 42.41C142.166 52.104 127.256 66.51 117.185 82.286L3.564 16.246C-2.113 13.016-3.756 5.572 0 0"
                fill="#fff"
                style={{ cursor: "pointer", transition: "fill 0.3s ease" }}
                stroke="#000000"
                strokeWidth="1"
                id="path-7"
              />
              <path
                transform="matrix(1,0,0,-1,82.2461,371.9772)"
                d="M0 0C2.552-36.637 12.291-71.313 27.765-102.541 30.737-108.539 37.996-110.777 43.6-107.47L157.069-41.713C149.171-25.959 143.462-6.028 142.627 12.669L11.209 12.287C4.678 12.329-.467 6.703 0 0"
                fill="#fff"
                style={{ cursor: "pointer", transition: "fill 0.3s ease" }}
                stroke="#000000"
                strokeWidth="1"
                id="path-8"
              />
              <path
                transform="matrix(1,0,0,-1,109.7154,233.3317)"
                d="M0 0C-16.107-33.004-25.012-67.904-27.225-102.686-27.649-109.366-22.483-114.934-15.976-114.871L115.17-114.659C116.207-97.066 121.228-76.952 129.854-60.342L15.852 5.036C10.216 8.338 2.948 6.039 0 0"
                fill="#fff"
                style={{ cursor: "pointer", transition: "fill 0.3s ease" }}
                stroke="#000000"
                strokeWidth="1"
                id="path-9"
              />
              <path
                transform="matrix(1,0,0,-1,202.8277,126.99579)"
                d="M0 0C-30.452-20.529-55.613-46.301-74.92-75.316-78.628-80.889-76.938-88.294-71.271-91.494L42.411-156.882C52.104-142.165 66.51-127.256 82.286-117.185L16.246-3.564C13.016 2.113 5.572 3.756 0 0"
                fill="#fff"
                style={{ cursor: "pointer", transition: "fill 0.3s ease" }}
                stroke="#000000"
                strokeWidth="1"
                id="path-10"
              />
              <path
                transform="matrix(1,0,0,-1,336.6333,81.462589)"
                d="M0 0C-36.636-2.552-71.313-12.291-102.541-27.765-108.539-30.737-110.777-37.996-107.469-43.6L-41.712-157.069C-25.959-149.171-6.028-143.462 12.669-142.627L12.287-11.209C12.329-4.678 6.704 .467 0 0"
                fill="#fff"
                style={{ cursor: "pointer", transition: "fill 0.3s ease" }}
                stroke="#000000"
                strokeWidth="1"
                id="path-11"
              />
            </g>

            {/* middle circle */}
            <g clipPath="url(#clip_1)">
              <path
                transform="matrix(1,0,0,-1,379.8199,328.74873)"
                d="M0 0C13.879-13.88 13.878-36.384-.003-50.265-13.883-64.145-36.387-64.146-50.267-50.267-64.146-36.387-64.145-13.883-50.264-.002-36.384 13.878-13.88 13.879 0 0"
                fill="#ffffff"
                style={{ pointerEvents: "none" }}
                stroke="#000000"
                strokeWidth="2"
              />
            </g>
          </g>
          <g clipPath="url(#clip_1)">
            {/* middle circle */}
            <path
              transform="matrix(1,0,0,-1,379.8199,328.74873)"
              d="M0 0C13.879-13.88 13.878-36.384-.003-50.265-13.883-64.145-36.387-64.146-50.267-50.267-64.146-36.387-64.145-13.883-50.264-.002-36.384 13.878-13.88 13.879 0 0"
              fill="#ffffff"
              style={{
                pointerEvents: "none",
              }}
            />
            {/* <path
              transform={`matrix(1,0,0,-1,379.8199,328.74873) rotate(${getRotationAngle()})`}
              d="M0 0C13.879-13.88 13.878-36.384-.003-50.265-13.883-64.145-36.387-64.146-50.267-50.267-64.146-36.387-64.145-13.883-50.264-.002-36.384 13.878-13.88 13.879 0 0"
              fill="url(#redGradient)"
              style={{ pointerEvents: "none" }}
            /> */}
          </g>
          <SymbolText />
        </g>
      </svg>
    </div>
  );
});
export default Symbol;
