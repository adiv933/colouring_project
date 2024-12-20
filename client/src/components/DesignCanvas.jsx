/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Symbol from "../../public/Symbol.jsx";
import Symbol_without_desc from "../../public/Symbol_without_desc.jsx";
import GoldenButton from "./GoldenButton.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { gradeColors } from "../utils/scoring.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%", // 90% width on extra-small screens
    sm: 400, // 400px width on small screens
    md: 500, // 500px width on medium screens
  },
  bgcolor: "background.paper",
  border: "5px solid #dbaf46",
  borderRadius: "10px",
  boxShadow: 25,
  p: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const scoreMessages = [
  "Duplicate colours are not harmonious.",
  "Please fill all petals with colours.",
  "Scored below 50%, try again or see “Guidance”, section 4 - Colour theory in art and design. To proceed to colourings 3, 4 & 5, a minimum of 70% needs to be achieved.",
  "% harmony achieved, try again or see “Guidance”, section 4 - Colour theory in art and design. To proceed to colourings 3, 4 & 5, a minimum of 70% needs to be achieved.",
  "% harmony achieved, colourings 3, 4 & 5 have been unlocked. You can proceed, try again or see “Guidance”, section 4 - Colour theory in art and design.",
  "Great! 100% harmony achieved. Colourings 3, 4 & 5 have been unlocked.",
];

const DesignCanvas = ({ color }) => {
  const svgRef = useRef(null);
  const canvasRef = useRef(null);
  const [colorArray, setColorArray] = useState(() => {
    const savedColors = localStorage.getItem("colorArray");
    return savedColors ? JSON.parse(savedColors) : Array(12).fill("#fff");
  });
  const [open, setOpen] = useState(false);
  const [scoreMessage, setScoreMessage] = useState("");

  const [input, setInput] = useState(""); // State to store the user's input

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      setInput((prev) => prev + event.key);

      if (input.toLowerCase().includes("fill")) {
        const correctAns = [
          "#ff6600",
          "#ff9933",
          "#ffcc00",
          "#ffff00",
          "#00cc00",
          "#009900",
          "#00cccc",
          "#0000ff",
          "#330099",
          "#6600cc",
          "#9900cc",
          "#ff0000",
        ];
        localStorage.setItem("colorArray", JSON.stringify(correctAns));
        setInput("");
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [input]);

  useEffect(() => {
    const svgElement = svgRef.current;
    colorArray.forEach((color, index) => {
      const pathElement = svgElement.querySelector(`#path-${index}`);
      if (pathElement) {
        pathElement.setAttribute("fill", color);
      }
    });
  }, [colorArray]);

  useEffect(() => {
    const svgElement = svgRef.current;

    const extractNumber = (text) =>
      parseInt((text.match(/path-(\d+)/) || [])[1], 10);

    const handleClick = (event) => {
      const { target } = event;
      if (target.tagName !== "svg") {
        const index = extractNumber(target.id);
        target.setAttribute("fill", color);
        const newColorArray = [...colorArray];
        newColorArray[index] = color;
        setColorArray(newColorArray);
        localStorage.setItem("colorArray", JSON.stringify(newColorArray)); // Save the updated array to localStorage
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

  const revealScore = () => {
    console.log("final colorArray", colorArray);
    const gradedScore =
      window.location.pathname === "/colouring1"
        ? gradeColors(colorArray, 1)
        : gradeColors(colorArray, 2);
    console.log(gradedScore);

    if (gradedScore === -3) {
      setScoreMessage(scoreMessages[1]);
    }
    if (gradedScore === -2) {
      setScoreMessage(scoreMessages[0]);
    }
    if (gradedScore === -1) {
      setScoreMessage(scoreMessages[2]);
    }
    if (gradedScore === 100) {
      setScoreMessage(scoreMessages[5]);
    } else if (gradedScore >= 50 && gradedScore < 70) {
      setScoreMessage(gradedScore + scoreMessages[3]);
    } else if (gradedScore >= 70 && gradedScore < 100) {
      setScoreMessage(gradedScore + scoreMessages[4]);
    } else {
      setScoreMessage(scoreMessages[2]);
    }

    if (window.location.pathname === "/colouring1")
      localStorage.setItem("score1", gradedScore);

    if (window.location.pathname === "/colouring2")
      localStorage.setItem("score2", gradedScore);

    handleOpen();
  };

  const resetSymbol = () => {
    const resetColorArray = Array(12).fill("#fff"); // Reset color array to all white
    setColorArray(resetColorArray); // Update state
    localStorage.setItem("colorArray", JSON.stringify(resetColorArray)); // Save to localStorage

    const svgElement = svgRef.current;
    resetColorArray.forEach((color, index) => {
      const pathElement = svgElement.querySelector(`#path-${index}`);
      if (pathElement) {
        pathElement.setAttribute("fill", color);
      }
    });
  };

  return (
    <div className="order-3 lg:order-2 w-[100%] md:w-[70%] lg:w-[45%]">
      <div className="flex flex-col gap-y-4 items-center">
        <div className="overflow-hidden w-full">
          {window.location.pathname === "/colouring1" ||
          window.location.pathname === "/colouring2" ? (
            <Symbol_without_desc
              ref={svgRef}
              className="w-full h-full"
              color={color}
            />
          ) : (
            <Symbol ref={svgRef} color={color} />
          )}
        </div>
        <canvas
          ref={canvasRef}
          width="708.661"
          height="708.661"
          style={{ display: "none" }}
        />
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {(window.location.pathname === "/colouring1" ||
            window.location.pathname === "/colouring2") && (
            <div>
              <GoldenButton onClick={revealScore}>Reveal</GoldenButton>
              <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    component="h5"
                  >
                    {scoreMessage}
                  </Typography>
                </Box>
              </Modal>
            </div>
          )}
          <GoldenButton onClick={saveAsPng}>Download</GoldenButton>
          <GoldenButton onClick={resetSymbol}>Reset</GoldenButton>
        </div>
      </div>
    </div>
  );
};

export default DesignCanvas;
