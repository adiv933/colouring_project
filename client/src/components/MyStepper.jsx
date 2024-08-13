/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const CustomStepButton = styled(StepButton)(() => ({
  color: "#dbaf46",
  "& .MuiStepLabel-label": {
    color: "white",
  },
}));

export default function MyStepper({ steps }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear alternativeLabel>
        {steps.map((step) => {
          const { label, link } = step;
          if (link) {
            return (
              <Step key={label}>
                <CustomStepButton component={Link} to={link}>
                  {label}
                </CustomStepButton>
              </Step>
            );
          } else {
            return (
              <Step key={label}>
                <CustomStepButton>{label}</CustomStepButton>
              </Step>
            );
          }
        })}
      </Stepper>
    </Box>
  );
}
