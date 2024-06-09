import { forwardRef } from "react";

const DesignSvg = forwardRef((props, ref) => (
  <svg
    ref={ref}
    width="400"
    height="400"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      id="rect1"
      x="10"
      y="10"
      width="100"
      height="100"
      fill="white"
      stroke="black"
    />
    <rect
      id="rect2"
      x="120"
      y="10"
      width="100"
      height="100"
      fill="white"
      stroke="black"
    />
    <circle id="circle1" cx="250" cy="60" r="50" fill="white" stroke="black" />
    <circle id="circle2" cx="350" cy="60" r="50" fill="white" stroke="black" />
    <text
      id="text1"
      x="20"
      y="150"
      fontFamily="Verdana"
      fontSize="24"
      fill="black"
    >
      Hello SVG
    </text>
    <text
      id="text2"
      x="200"
      y="150"
      fontFamily="Verdana"
      fontSize="24"
      fill="black"
    >
      React Rocks
    </text>
    <line
      id="line1"
      x1="10"
      y1="200"
      x2="390"
      y2="200"
      stroke="black"
      strokeWidth="2"
    />
    <line
      id="line2"
      x1="10"
      y1="250"
      x2="390"
      y2="250"
      stroke="black"
      strokeWidth="2"
    />
  </svg>
));

export default DesignSvg;
