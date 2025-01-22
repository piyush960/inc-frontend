import { useEffect, useState } from "react";
import FormsBanner from "./forms/formBanner";
import ProjectDetailsFormStep from "./forms/steps/projectDetails";
import AddMemberStep from "./forms/steps/addMembersStep";
import CollegeDetailsStep from "./forms/steps/collegeDetailStep";
import PaymentStep from "./forms/steps/paymentStep";
import StepProgressBar from "./forms/stepProgress";
import { useParams } from "react-router-dom";
import { eventsData } from "../constants";
import { qr } from "../assets";

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
      if(currentStep === 0){
        setCurrentStep(1)
        setSteps(() => (pSteps))
      }
    }
  }, [])
  
  const eventData = eventsData[event];

  return (
    <>
      <div className="pt-24 p-2">
        <FormsBanner
          logo={eventData.logo}
          eventName={eventData.name}
          eventDescription={eventData.short_desc}
          fees={eventData.registrations.fees.national}
          min_team_size={eventData.registrations.min_team_size}
          max_team_size={eventData.registrations.max_team_size}
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
              <ProjectDetailsFormStep event={event} nextStep={nextStep} prevStep={prevStep} />
            </GradientWrapper>
          )}
          {currentStep === 1 && (
            <GradientWrapper>
              <AddMemberStep
                event={event}
                minMembers={event === 'pradnya' ? 1 : 2}
                maxMembers={event === 'pradnya' ? 2 : 5}
                nextStep={nextStep}
                prevStep={prevStep}
                isPradnya={(event === 'pradnya' ? true : false)}
              />
            </GradientWrapper>
          )}
          {currentStep === 2 && (
            <GradientWrapper>
              <CollegeDetailsStep event={event} nextStep={nextStep} prevStep={prevStep} />
            </GradientWrapper>
          )}
          {currentStep === 3 && (
            <GradientWrapper>
              <PaymentStep
                event={event}
                amount={eventData.registrations.fees.national}
                imagePath={qr}
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