/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { Link } from "react-router-dom";

const steps = [
  { label: "Colouring 1", link: "/colouring1" },
  { label: "Colouring 2", link: "/colouring2" },
  { label: "Colouring 3", link: "/colouring3" },
  { label: "Colouring 4", link: "/colouring4" },
  { label: "Colouring 5", link: "/colouring5" },
];

export default function MyStepper() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear alternativeLabel>
        {steps.map((step) => {
          const { label, link } = step;
          return (
            <Step key={label}>
              <StepButton component={Link} to={link}>
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
