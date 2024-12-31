import React, { useState } from "react";
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

const steps = [
  { id: 1, label: "Project Details" },
  { id: 2, label: "Add Members" },
  { id: 3, label: "College Details" },
  { id: 4, label: "Payment" },
];

const DummyContent = () => {
  return (
    <Register />
  );
};


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

  return (
    <>
    <div className='flex flex-col overflow-hidden'>
      <p className={styles.sectionSubText}>Register Now</p>
      <h3 className={styles.sectionHeadText}>Fill the Form.</h3>
      <motion.div variants={fadeIn('left', 'spring', 0.2, 1)} className='bg-black-100 p-8 rounded-2xl'>
        <form ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 grid md:grid-cols-2 grid-cols-1 gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white-100 font-medium mb-4'>Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='Enter your name' className='bg-tertiary py-4 px-6 placeholder:text-orange-100 text-white-100 rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white-100 font-medium mb-4'>Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder='Enter your email' className='bg-tertiary py-4 px-6 placeholder:text-orange-100 text-white-100 rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white-100 font-medium mb-4'>Team Name</span>
            <input type="team_name" name='team_name' value={form.team_name} onChange={handleChange} placeholder='Enter your team_name' className='bg-tertiary py-4 px-6 placeholder:text-orange-100 text-white-100 rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white-100 font-medium mb-4'>Mobile no.</span>
            <input type="mobile" name='mobile' value={form.mobile} onChange={handleChange} placeholder='Enter your mobile' className='bg-tertiary py-4 px-6 placeholder:text-orange-100 text-white-100 rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col md:col-span-2'>
            <span className='text-white-100 font-medium mb-4'>Message</span>
            <textarea rows='7' name='message' value={form.message} onChange={handleChange} placeholder='What do you want to say?' className='bg-tertiary py-4 px-6 placeholder:text-orange-100 text-white-100 rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white-100 font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </motion.div>
      </div>
    </>
  )
}

export default Register





/*

*/

