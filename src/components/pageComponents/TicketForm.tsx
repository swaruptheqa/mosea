import { Stack, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import useScreen from "../hooks/useScreen";
import { PageOne } from "./pageOne";
import { PageThree } from "./pageThree";
import { PageTwo } from "./pageTwo";

export const TicketForm: React.FC<{}> = ({}) => {
  //core variables
  const { currentScreen } = useScreen();
  const steps = ["Select tickets", "Your details", "Payment"];

  //state variables
  const [currentStep, setCurrentStep] = useState<0 | 1 | 2>(0);

  return (
    <>
      <Stack
        sx={{
          width: "100%",
          position: "sticky",
          top: 75,
          bgcolor: "white",
          zIndex: 1,
        }}
      >
        <StepperElement currentStep={currentStep} steps={steps} />
      </Stack>

      <Stack direction={"column"} sx={{ mt: "16px", width: "100%" }}>
        <Stack>
          {currentStep === 0 && <PageOne onNext={() => setCurrentStep(1)} />}
          {currentStep === 1 && <PageTwo />}
          {currentStep === 2 && <PageThree />}
        </Stack>
      </Stack>
    </>
  );
};

const StepperElement: React.FC<{ currentStep: 0 | 1 | 2; steps: string[] }> = ({
  currentStep,
  steps,
}) => {
  //core variables
  const { currentScreen } = useScreen();

  return (
    <Stepper
      activeStep={currentStep}
      alternativeLabel
      // connector={<ColorlibConnector />}
      sx={{
        width: currentScreen === "desktop" ? "320px" : "100vw",
        "& .MuiStepConnector-line": {
          minHeight: "40px",
        },
        marginX: "auto",
        marginBottom: "16px",
      }}
    >
      {steps.map((label, index) => {
        return (
          <Step key={label}>
            <StepLabel
              sx={{
                color: "white",
              }}
              // StepIconComponent={CustomStepIcon}
            >
              {label}
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};
