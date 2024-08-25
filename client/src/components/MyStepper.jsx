/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

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
    gap: "4px",
    alignItems: "flex-start",
    width: "100%",
    padding: "10px 0",
  },
  stepContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
};
