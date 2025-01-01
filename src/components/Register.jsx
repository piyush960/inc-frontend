import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import FormsBanner from "./forms/formBanner";
import implogo from "../assets/eventLogos/impetus_logo.png";
import ProjectDetailsFormStep from "./forms/steps/projectDetails";
import AddMemberStep from "./forms/steps/addMembersStep";
import CollegeDetailsStep from "./forms/steps/collegeDetailStep";
import PaymentStep from "./forms/steps/paymentStep";
import StepProgressBar from "./forms/stepProgress";
import { useParams } from "react-router-dom";
import { eventsData } from "../constants";

const osteps = [
  { id: 1, label: "Project Details" },
  { id: 2, label: "Add Members" },
  { id: 3, label: "College Details" },
  { id: 4, label: "Payment" },
];

const pSteps = [
  { id: 1, label: "Add Members" },
  { id: 2, label: "College Details" },
  { id: 3, label: "Payment" },
]

const Register = () => {
  const { event } = useParams()
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState(osteps)
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  
  useEffect(() => {
    if(event === 'pradnya'){
      setCurrentStep(1)
      setSteps(() => (pSteps))
    }
  }, [])
  

  const eventData = eventsData[event];

  console.log('eventData', eventData)

  return (
    <>
      <div className="pt-24 p-2">
        <FormsBanner
          logo={eventData.logo}
          eventName={eventData.name}
          eventDescription={eventData.short_desc}
        />
      </div>

      <div className="container mx-auto px-2 pb-16">
        {/* New Progress Bar Component */}
        <StepProgressBar steps={steps} currentStep={(event === 'pradnya') ? currentStep - 1 : currentStep} />

        {/* Step Content */}
        <div
          className="mt-8"
        >
          {currentStep === 0 && ( 
            <GradientWrapper>
              <ProjectDetailsFormStep nextStep={nextStep} prevStep={prevStep} />
            </GradientWrapper>
          )}
          {currentStep === 1 && (
            <GradientWrapper>
              <AddMemberStep
                minMembers={2}
                maxMembers={5}
                nextStep={nextStep}
                prevStep={prevStep}
                isPradnya={(event === 'pradnya')}
              />
            </GradientWrapper>
          )}
          {currentStep === 2 && (
            <GradientWrapper>
              <CollegeDetailsStep nextStep={nextStep} prevStep={prevStep} />
            </GradientWrapper>
          )}
          {currentStep === 3 && (
            <GradientWrapper>
              <PaymentStep
                amount={100}
                imagePath={"src/assets/company/tesla.png"}
                prevStep={prevStep}
              />
            </GradientWrapper>
          )}
        </div>
      </div>
    </>
  );
};

export default Register

const GradientWrapper = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 w-full max-w-7xl mx-auto p-px">
      { children }
    </div>
  )
}