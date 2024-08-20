/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Symbol from "../../public/Symbol.jsx";
import Symbol_without_desc from "../../public/Symbol_without_desc.jsx";
import GoldenButton from "./GoldenButton.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  haveSameRelativeShade,
  haveSameRelativeTint,
  containsWhite,
  hasNoDuplicates,
  countColorsInCategories,
} from "../utils/scoring.js";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const scoreMessages = [
  "Failed, retry",
  "Score is below 50%, try again or click the Guidance button",
  "Score is: ",
];

const DesignCanvas = ({ color }) => {
  const svgRef = useRef(null);
  const canvasRef = useRef(null);
  const [colorArray] = useState(Array(12).fill("#fff"));
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [scoreMessage, setScoreMessage] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const svgElement = svgRef.current;

    const handleClick = (event) => {
      const { target } = event;
      if (target.tagName !== "svg") {
        const index = extractNumber(target.id);
        target.setAttribute("fill", color);
        colorArray[index] = color;
      }
    };

    svgElement.addEventListener("click", handleClick);

    return () => {
      svgElement.removeEventListener("click", handleClick);
    };
  }, [color, colorArray]);

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

  const extractNumber = (text) =>
    parseInt((text.match(/path-(\d+)/) || [])[1], 10);

  const revealScore = () => {
    console.log("final colorArray", colorArray);
    if (!hasNoDuplicates(colorArray) || containsWhite(colorArray)) {
      setScoreMessage(scoreMessages[0]);
    }
    if (hasNoDuplicates(colorArray) && !containsWhite(colorArray)) {
      setScore(100 - 8.4 * countColorsInCategories(colorArray));
      if (score < 50) setScoreMessage(scoreMessages[1]);
      else setScoreMessage(scoreMessages[2] + score.toString);
    }
    console.log("score", score);
    console.log("scoreMessage", scoreMessage);
    handleOpen();
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
        <div className="flex justify-between gap-x-4">
          {(window.location.pathname === "/colouring1" ||
            window.location.pathname === "/colouring2") && (
            <div>
              <GoldenButton onClick={revealScore}>Reveal</GoldenButton>
              <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h3"
                    component="h2"
                  >
                    {scoreMessage}
                  </Typography>
                </Box>
              </Modal>
            </div>
          )}
          <GoldenButton onClick={saveAsPng} className="w-fit">
            Download
          </GoldenButton>
        </div>
      </div>
    </div>
  );
};
export default DesignCanvas;
