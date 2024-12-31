import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import FormsBanner from "./formBanner";
import implogo from "../../assets/eventLogos/impetus_logo.png";
import ProjectDetailsFormStep from "./steps/projectDetails";
import AddMemberStep from "./steps/addMembersStep";
import CollegeDetailsStep from "./steps/collegeDetailStep";
import PaymentStep from "./steps/paymentStep";
import StepProgressBar from "./stepProgress";

const steps = [
  { id: 1, label: "Project Details" },
  { id: 2, label: "Add Members" },
  { id: 3, label: "College Details" },
  { id: 4, label: "Payment" },
];

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <>
      <FormsBanner
        logo={implogo}
        eventName="Impetus"
        eventDescription="Register for the most grand project exhibition event impetus for all students from First to Third Year"
      />

      <div className="container mx-auto px-4">
        {/* New Progress Bar Component */}
        <StepProgressBar steps={steps} currentStep={currentStep} />

        {/* Step Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          {currentStep === 0 && ( 
            <ProjectDetailsFormStep nextStep={nextStep} />
          )}
          {currentStep === 1 && (
            <AddMemberStep
              minMembers={2}
              maxMembers={5}
              nextStep={nextStep}
            />
          )}
          {currentStep === 2 && (
            <CollegeDetailsStep nextStep={nextStep} />
          )}
          {currentStep === 3 && (
            <PaymentStep
              amount={100}
              imagePath={"src/assets/company/tesla.png"}
            />
          )}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Register, "register");
