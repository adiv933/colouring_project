import { useState } from "react";
import Navbar from "../components/Navbar";
import MyStepper from "../components/MyStepper";
// import MyProgress from "../components/MyProgress";
import Colouring1 from "../components/Colouring1";
import Colouring2 from "../components/Colouring2";
import Colouring3 from "../components/Colouring3";
import Colouring4 from "../components/Colouring4";
import Colouring5 from "../components/Colouring5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function ColouringIndex() {
  const steps = [
    { label: "Colouring 1", component: <Colouring1 /> },
    { label: "Colouring 2", component: <Colouring2 /> },
    { label: "Colouring 3", component: <Colouring3 /> },
    { label: "Colouring 4", component: <Colouring4 /> },
    { label: "Colouring 5", component: <Colouring5 /> },
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  useGSAP(() => {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (!isSmallScreen) {
      gsap.from(".hero", {
        y: 200,
        opacity: 0,
        delay: 2.5,
        duration: 0.8,
      });
    }
  });

  return (
    <div className="w-full min-h-screen  gradient-background">
      <Navbar />
      <div className="flex flex-col items-center min-h-screen px-4 md:px-6 space-y-6 md:space-y-8 pt-24 md:pt-20 pb-16 hero">
        <div className="w-full p-4 bg-blue-300 rounded-md mt-4">
          <MyStepper
            activeStep={activeStep}
            completed={completed}
            handleStep={handleStep}
            allStepsCompleted={allStepsCompleted}
            handleReset={handleReset}
            handleBack={handleBack}
            handleNext={handleNext}
            handleComplete={handleComplete}
            completedSteps={completedSteps}
            totalSteps={totalSteps}
          />
        </div>
        {/* <div className="w-full p-4 bg-blue-400 rounded-md mt-4">
          <MyProgress />
        </div> */}
        <div className="">{steps[activeStep].component}</div>
      </div>
    </div>
  );
}

export default ColouringIndex;
