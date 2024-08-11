/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { Link } from "react-router-dom";

export default function MyStepper({ steps }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear alternativeLabel>
        {steps.map((step) => {
          const { label, link } = step;
          if (link) {
            return (
              <Step key={label}>
                <StepButton component={Link} to={link}>
                  {label}
                </StepButton>
              </Step>
            );
          } else {
            return (
              <Step key={label}>
                <StepButton>{label}</StepButton>
              </Step>
            );
          }
        })}
      </Stepper>
    </Box>
  );
}
