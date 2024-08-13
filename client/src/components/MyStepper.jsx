/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepButton from "@mui/material/StepButton";
// import { Link } from "react-router-dom";
// import { styled } from "@mui/material/styles";

import React from "react";
import { Link } from "react-router-dom";

// const CustomStepButton = styled(StepButton)(() => ({
//   color: "#dbaf46",
//   "& .MuiStepLabel-label": {
//     color: "white",
//   },
// }));

// export default function MyStepper({ steps }) {
//   return (
//     <Box sx={{ width: "100%" }}>
//       <Stepper nonLinear alternativeLabel>
// {
//   steps.map((step) => {
//     const { label, link } = step;
//     if (link) {
//       return (
//         <Step key={label}>
//           <CustomStepButton component={Link} to={link}>
//             {label}
//           </CustomStepButton>
//         </Step>
//       );
//     } else {
//       return (
//         <Step key={label}>
//           <CustomStepButton>{label}</CustomStepButton>
//         </Step>
//       );
//     }
//   });
// }
//       </Stepper>
//     </Box>
//   );
// }
// Stepper Component
export default function MyStepper({ steps }) {
  return (
    <div style={styles.stepperContainer}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {step.link ? (
            <Link to={step.link}>
              <Step index={index} label={step.label} />
            </Link>
          ) : (
            <Step index={index} label={step.label} />
          )}
          {/* Render a line between steps except the last one */}
          {index < steps.length - 1 && <div style={styles.line} />}
        </React.Fragment>
      ))}
    </div>
  );
}

// Step Component
function Step({ index, label }) {
  return (
    <div style={styles.stepContainer}>
      <div
        style={{
          ...styles.circle,
        }}
      >
        {index + 1}
      </div>
      <div
        style={{
          ...styles.label,
        }}
      >
        {label}
      </div>
    </div>
  );
}

// Styles
const styles = {
  stepperContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "20px 0",
  },
  stepContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  },
  circle: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    color: "#dbaf46",
    fontWeight: "700",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "8px",
  },
  activeCircle: {
    backgroundColor: "#dbaf46",
  },
  completedCircle: {
    backgroundColor: "#4caf50",
  },
  label: {
    color: "#fff",
    fontSize: "14px",
    textAlign: "center",
    fontWeight: "700",
  },
  activeLabel: {
    color: "#dbaf46",
  },
  line: {
    height: "1px",
    backgroundColor: "#fff",
    flexGrow: 1,
    margin: "0 10px",
  },
};
