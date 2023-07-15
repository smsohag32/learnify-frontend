import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import "./register.css";
import StepThree from "./StepThree";

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepOneCompleted, setStepOneCompleted] = useState(false);
  const [stepTwoCompleted, setStepTwoCompleted] = useState(false);

  // handle step next step
  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleStepOneComplete = () => {
    setStepOneCompleted(true);
    handleNext();
  };
  const handleStepTwoComplete = () => {
    setStepTwoCompleted(true);
    handleNext();
  };

  const steps = [
    {
      title: "Information",
      completed: stepOneCompleted,
      component: <StepOne onNext={handleStepOneComplete} />,
    },
    {
      title: "Security",
      completed: stepTwoCompleted,
      component: <StepTwo onNext={handleStepTwoComplete} />,
    },
    {
      title: "Confirmation",
      completed: false,
      component: <StepThree />,
    },
  ];

  // handle click steps
  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className="default-container">
      <div className="step-titles">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-title ${index === currentStep ? "active" : ""} ${
              step.completed ? "completed" : ""
            }`}
            onClick={() => handleStepClick(index)}
          >
            <span
              className={`step-number ${step.completed ? "completed" : ""}`}
            >
              {step.completed ? (
                <span className="completed-number">{index + 1}</span>
              ) : (
                index + 1
              )}
            </span>
            <span className={`step-name ${step.completed ? "completed" : ""}`}>
              {step.title}
            </span>
          </div>
        ))}
      </div>

      {steps.map((step, index) => (
        <div
          key={index}
          style={{ display: index === currentStep ? "block" : "none" }}
        >
          {step.component}
        </div>
      ))}
    </div>
  );
};

export default Steps;
