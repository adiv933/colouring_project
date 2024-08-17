/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { useEffect, useRef } from "react";
// import Symbol from "../../public/Symbol.jsx";
// import Symbol_without_desc from "../../public/Symbol_without_desc.jsx";
// import GoldenButton from "./GoldenButton.jsx";

// const DesignCanvas = ({ color }) => {
//   const svgRef = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const svgElement = svgRef.current;

//     const handleClick = (event) => {
//       const { target } = event;
//       if (target.tagName !== "svg") {
//         target.setAttribute("fill", color);
//       }
//     };

//     svgElement.addEventListener("click", handleClick);

//     return () => {
//       svgElement.removeEventListener("click", handleClick);
//     };
//   }, [color]);

//   const saveAsPng = () => {
//     const svgElement = svgRef.current;
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const serializer = new XMLSerializer();
//     const svgString = serializer.serializeToString(svgElement);
//     const svgBlob = new Blob([svgString], {
//       type: "image/svg+xml;charset=utf-8",
//     });
//     const url = URL.createObjectURL(svgBlob);
//     const img = new Image();

//     img.onload = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(img, 0, 0);
//       URL.revokeObjectURL(url);

//       const link = document.createElement("a");
//       link.href = canvas.toDataURL("image/png");
//       link.download = "design.png";
//       link.click();
//     };

//     img.src = url;
//   };

//   return (
//     <div className="order-3 lg:order-2 md:w-[70%] lg:w-[50%]">
//       <div className="flex flex-col gap-y-4 items-center">
//         <div className="overflow-hidden w-full ">
//           {window.location.pathname === "/colouring1" ||
//           window.location.pathname === "/colouring2" ? (
//             <Symbol_without_desc
//               ref={svgRef}
//               className="w-full h-full"
//               color={color}
//             />
//           ) : (
//             <Symbol ref={svgRef} className="w-full h-full" color={color} />
//           )}
//         </div>
//         <canvas
//           ref={canvasRef}
//           width="708.661"
//           height="708.661"
//           style={{ display: "none" }}
//         />
//         <div className="flex justify-between gap-x-4">
//           {window.location.pathname === "/colouring1" ||
//             (window.location.pathname === "/colouring2" && (
//               <GoldenButton className="w-fit">Reveal</GoldenButton>
//             ))}
//           <GoldenButton onClick={saveAsPng} className="w-fit">
//             Download
//           </GoldenButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DesignCanvas;
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Symbol from "../../public/Symbol.jsx";
import Symbol_without_desc from "../../public/Symbol_without_desc.jsx";
import GoldenButton from "./GoldenButton.jsx";

const DesignCanvas = ({ color }) => {
  const svgRef = useRef(null);
  const canvasRef = useRef(null);
  const [colors, setColors] = useState(Array(12).fill("#ffffff")); // Array to store 12 colors

  useEffect(() => {
    const svgElement = svgRef.current;

    // const handleClick = (event) => {
    //   const { target } = event;
    //   if (
    //     target.tagName === "path" &&
    //     target.getAttribute("style")?.includes("cursor: pointer")
    //   ) {
    //     target.setAttribute("fill", color);

    //     // Update colors array based on the element clicked
    //     const pathIndex = Array.from(
    //       svgElement.querySelectorAll("path")
    //     ).indexOf(target);
    //     if (pathIndex >= 0 && pathIndex < 12) {
    //       setColors((prevColors) => {
    //         const newColors = [...prevColors];
    //         newColors[pathIndex] = color;
    //         return newColors;
    //       });
    //     }
    //   }
    // };

    const handleClick = (event) => {
      const { target } = event;
      if (
        target.tagName === "path" &&
        target.getAttribute("style")?.includes("cursor: pointer")
      ) {
        const pathId = target.getAttribute("id");
        if (pathId) {
          const pathIndex = parseInt(pathId.replace("path-", ""), 10);
          if (pathIndex >= 0 && pathIndex < 12) {
            console.log(`${pathIndex}`);
            target.setAttribute("fill", color);
            setColors((prevColors) => {
              const newColors = [...prevColors];
              newColors[pathIndex] = color;
              return newColors;
            });
          }
        }
      }
    };

    svgElement.addEventListener("click", handleClick);

    return () => {
      svgElement.removeEventListener("click", handleClick);
    };
  }, [color]);

  const saveAsPng = () => {
    const svgElement = svgRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "design.png";
      link.click();
    };

    img.src = url;
  };

  const revealColors = () => {
    console.log("Colors filled in the petals:", colors);
  };

  return (
    <div className="order-3 lg:order-2 md:w-[70%] lg:w-[50%]">
      <div className="flex flex-col gap-y-4 items-center">
        <div className="overflow-hidden w-full ">
          {window.location.pathname === "/colouring1" ||
          window.location.pathname === "/colouring2" ? (
            <Symbol_without_desc
              ref={svgRef}
              className="w-full h-full"
              color={color}
            />
          ) : (
            <Symbol ref={svgRef} className="w-full h-full" color={color} />
          )}
        </div>
        <canvas
          ref={canvasRef}
          width="708.661"
          height="708.661"
          style={{ display: "none" }}
        />
        <div className="flex justify-between gap-x-1">
          <GoldenButton onClick={saveAsPng} className="w-fit">
            Download
          </GoldenButton>
          {(window.location.pathname === "/colouring1" ||
            window.location.pathname === "/colouring2") && (
            <GoldenButton onClick={revealColors} className="w-fit">
              Reveal
            </GoldenButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignCanvas;
