import "../styles/event_registrations.css";
import React, { useRef } from "react";
import { useState } from "react";
import {
  InputBox,
  Buttons,
  FileInputBox,
  toast,
  NoteBox,
  CloseMessage,
} from "../../index.js";
import styled from "styled-components";
import { paymentLinks, year_arr } from "../../../static/data";
import Dropdown from "../../dropdown";
import RadioButtons from "../../radioButtons";
import {
  useRegisterStep1,
  useRegisterStep2,
  useRegisterStep3,
  useRegisterStep4,
} from "../../../hooks/events.hooks";
import {
  projectDomains,
  projectTypes,
  localTypes
} from "../../../static/data";

const MainContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
  position: relative;
  :before {
    content: "";
    position: absolute;
    background: #f3e7f3;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: "";
    position: absolute;
    background: #155e75;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`;

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const StepStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid
    ${({ step }) => (step === "completed" ? "#075985" : "#155e75")};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepCount = styled.span`
  font-size: 19px;
  color: #000000;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StepLabel = styled.span`
  font-size: 19px;
  color: #155e75;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 100px;
`;

const ButtonStyle = styled.button`
  border-radius: 4px;
  border: 0;
  background: #155e75;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  width: 90px;
  :active {
    transform: scale(0.98);
  }
  :disabled {
    background: #155e75;
    color: #000000;
    cursor: not-allowed;
  }
`;

const CheckMark = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #155e75;
  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
  transform: scaleX(-1) rotate(-46deg);
`;

const steps = [
  {
    label: "Step1",
    step: 1,
  },
  {
    label: "Step2",
    step: 2,
  },
  {
    label: "Step3",
    step: 3,
  },
  {
    label: "Step4",
    step: 4,
  },
];
const totalSteps = steps.length;
const initialErrorsForm0 = {
  title: "",
  domain: "",
  project_type: "",
  guide_name: "",
  guide_email: "",
  guide_phone: "",
  hod_email: "",
  sponsored: "",
  company: "",
  abstract: "",
  nda: "",
  demo: "",
  reason_of_demo: "",
};
const initialErrorsForm1 = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  member_id: "",
};
const initialErrorsForm2 = {
  isPICT: "",
  isInternational: "0",
  college: "",
  country: "",
  state: "",
  district: "",
  locality: "1",
  mode: "1",
  reason_of_mode: "",
  referral: "",
  year: "",
};

const sponsor_arr = [
  {
    value: "1",
    label: "Yes",
    // onChange: function (e) { }
  },
  {
    value: "0",
    label: "No",
  },
];

const nda_arr = [
  {
    value: "1",
    label: "Yes",
    // onChange: function (e) { }
  },
  {
    value: "0",
    label: "No",
  },
];
const initialErrorsForm3 = {
  payment_id: "",
};

const pict_arr = [
  {
    value: "1",
    label: "Yes",
    // onChange: function (e) { }
  },
  {
    value: "0",
    label: "No",
  },
];

const mode_arr = [
  {
    value: "1",
    label: "Offline",
    // onChange: function (e) { }
  },
  {
    value: "0",
    label: "Online",
  },
];
const country_arr = [
  {
    value: "1",
    label: "Yes",
    // onChange: function (e) { }
  },
  {
    value: "0",
    label: "No",
  },
];
const proj_domain = [
  { value: "SEL", label: "Select" },
  { value: "AD", label: "Application Development" },
  { value: "CN", label: "Communication Networks and Security Systems" },
  { value: "DSP", label: "Digital / Image/ Speech / Video Processing" },
  { value: "ES", label: "Embedded/VLSI Systems" },
  { value: "ML", label: "Machine Learning and Pattern Recognition" },
  { value: "OT", label: "Others" },
];

// export const projectTypes = [
//   { value: 'SEL', label: 'Select' },
//   { value: 'Open Hardware/Firmware', label: 'Open Hardware/Firmware' },
//   { value: 'Open Software', label: 'Open Software' }
// ]

const gender_type = [
  { value: "SEL", label: "Select", disabled: true },
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];


// const state_arr = [
//     { value: 'SEL', label: 'Select' },
//     { value: 'AP', label: "Arunachal Pradesh" },
//     { value: 'AS', label: "Assam" },
//     { value: 'BI', label: "Bihar" },
//     { value: 'CH', label: "Chhattisgarh" },
//     { value: 'DEL', label: "Delhi" },
//     { value: 'G', label: "Goa" },
//     { value: 'GUJ', label: "Gujarat" },
//     { value: 'HAR', label: "Haryana" },
//     { value: 'HP', label: "Himachal Pradesh" },
//     { value: 'JK', label: "Jammu &amp; Kashmir" },
//     { value: 'JH', label: "Jharkhand" },
//     { value: 'KAR', label: "Karnataka" },
//     { value: 'KR', label: "Kerala" },
//     { value: 'MP', label: "Madhya Pradesh" },
//     { value: 'MAH', label: "Maharashtra" },
//     { value: 'MN', label: "Manipur" },
//     { value: 'MG', label: "Meghalaya" },
//     { value: 'MZ', label: "Mizoram" },
//     { value: 'OR', label: "Orissa" },
//     { value: 'PN', label: "Punjab" },
//     { value: 'RJ', label: "Rajasthan" },
//     { value: 'TN', label: "Tamil Nadu" },
//     { value: 'TL', label: "Telangana" },
//     { value: 'TR', label: "Tripura" },
//     { value: 'UP', label: "Uttar Pradesh" },
//     { value: 'UT', label: "Uttarakhand" },
//     { value: 'WB', label: "West Bengal" },

// ]

// const local_arr = [
//   { value: "SEL", label: "Select", disabled: true },
//   { value: "1", label: "Urban" },
//   { value: "0", label: "Rural" },
// ];




const demo_arr = [
  {
    value: "1",
    label: "Yes",
    // onChange: function (e) { }
  },
  {
    value: "0",
    label: "No",
  },
];
function TeamImpetus() {
  //form0
  const [activeStep, setActiveStep] = React.useState(1);
  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;
  const [form0, setForm0] = useState({
    title: "",
    domain: "",
    project_type: "",
    guide_name: "",
    guide_email: "",
    guide_phone: "",
    hod_email: "",
    sponsored: "0",
    company: "",
    abstract: "",
    nda: "0",
    demo: "1",
    reason_of_demo: "",
  });
  const [errors0, setErrors0] = useState(initialErrorsForm0);
  const registerUserMutationForm0 = useRegisterStep1(setErrors0, "impetus");

  const handleInputChange0 = (e) => {
    const { name, value } = e.target;
    setForm0((prevState) => {
      errors0[name] !== "" &&
        setErrors0((prevState) => ({ ...prevState, [name]: "" }));
      return { ...prevState, [name]: value };
    });
  };
  const handleSelectChange0 = (e) => {
    const { name, value } = e.target;
    setForm0((prevState) => {
      errors0[name] !== "" &&
        setErrors0((prevState) => ({ ...prevState, [name]: "" }));
      return { ...prevState, [name]: value };
    });
    //setForm0(form0);
  };

  //form1

  const [formFields, setFormFields] = useState([
    {
      name: "",
      email: "",
      phone: "",
      gender: "",
      member_id: "",
    },
  ]);

  const handleImageChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.files[0];
    setFormFields(data);
  };

  const [errors1, setErrors1] = useState(initialErrorsForm1);
  const registerUserMutationForm1 = useRegisterStep2(setErrors1, "impetus");

  const handleFormChange = (event, index) => {
    const { name, value } = event.target;
    setFormFields((prevState) => {
      errors1[name] !== "" &&
        setErrors1((prevState) => ({ ...prevState, [name]: "" }));
      let data = [...prevState];
      data[index][name] = value;
      return data;
    });
  };

  const handleSelectChange1 = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const addFields = () => {
    if (formFields.length < 5) {
      for (const property in formFields.at(-1)) {
        if (formFields.at(-1)[property] === "") {
          toast.warn("Please fill all the fields");
          return;
        }
      }

      const memberFormData = new FormData();
      memberFormData.append("member_id", formFields.at(-1).member_id);
      const tempMemberDetails = { ...formFields.at(-1) };
      delete tempMemberDetails.member_id;
      memberFormData.append("body", JSON.stringify(tempMemberDetails));
      registerUserMutationForm1.mutate(memberFormData, {
        onSuccess: () => {
          setErrors1(initialErrorsForm1);
          toast.success("Completed Step 2️⃣ !", { icon: "✅" });
          let object = {
            name: "",
            email: "",
            phone: "",
            gender: "",
            member_id: "",
          };
          setFormFields([...formFields, object]);
          SetMemberCount((memberCount) => memberCount + 1);
        },
        onError: () => {
          if (formFields.length === 1) {
            return;
          }
          setFormFields((formFields) => formFields.slice(0, -1));
        },
      });
      return;
    }
    toast.warn("Maximum 5 members are allowed");
  };

  const removefields = (index) => {
    setFormFields((data) => data.slice(index, 1));
  };

  //form 2

  const [form2, setForm2] = useState({
    isPICT: "",
    isInternational: "",
    college: "",
    country: "",
    state: "",
    district: "",
    locality: "1",
    mode: "1",
    reason_of_mode: "",
    referral: "",
    year: "",
  });
  const [errors2, setErrors2] = useState(initialErrorsForm2);
  const registerUserMutationForm2 = useRegisterStep3(setErrors2, "impetus");

  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    if (name === "isPICT" && value === "1") {
      setForm2((form2) => ({
        ...form2,
        isPICT: "1",
        college: "Pune Institute Of Computer Technology",
        country: "India",
        city: "Pune",
        state: "Maharashtra",
        district: "Pune",
        locality: "1",
        mode: "1",
        reason_of_mode: "",
        isInternational: "0",
        year: "",
      }));
      setPaymentStatus(true);
    } else if (name === "isPICT" && value === "0") {
      setForm2((form2) => ({
        ...form2,
        isPICT: "0",
        college: "",
        country: "",
        state: "",
        city: "",
        district: "",
        locality: "",
        isInternational: "",
        year: "",
      }));
    } else if (name === "isInternational" && value === "0") {
      setForm2((form2) => ({
        ...form2,
        country: "India",
        isPICT: "0",
        [name]: value,
      }));
      setPaymentStatus(false);
    } else if (name === "isInternational" && value === "1") {
      setForm2((form2) => ({
        ...form2,
        country: "",
        isPICT: "0",
        [name]: value,
      }));
      setPaymentStatus(true);
    } else {
      setForm2((prevState) => {
        errors2[name] !== "" &&
          setErrors2((prevState) => ({ ...prevState, [name]: "" }));
        return { ...prevState, [name]: value };
      });
      setPaymentStatus(false);
    }
    console.log(form2);
  };


  const country_arr = [
    {
      value: "1",
      label: "Yes",
      onChange: handleInputChange2
    },
    {
      value: "0",
      label: "No",
      onChange: handleInputChange2
    },
  ];


  const handleSelectChange2 = (e) => {
    const { name, value } = e.target;
    setForm2((prevState) => {
      errors2[name] !== "" &&
        setErrors2((prevState) => ({ ...prevState, [name]: "" }));
      return { ...prevState, [name]: value };
    });
  };

  //form 3
  const [paymentStatus, setPaymentStatus] = useState(true);
  const paymentRef = useRef("");
  const [errors3, setErrors3] = useState(initialErrorsForm3);
  const registerUserMutationForm3 = useRegisterStep4(setErrors3, "impetus");

  //steps for whole form
  const [formStep, setFormStep] = useState(0);

  const prevForm = (e) => {
    // e.preventDefault();
    setFormStep((currentStep) => currentStep - 1);
    setActiveStep(activeStep - 1);
  };

  const [memberCount, SetMemberCount] = useState(0);

  const nextForm = (e) => {
    e.preventDefault();
    if (formStep === 0) {
      console.log("form0", form0);
      for (const property in form0) {
        if (form0[property] === "") {
          if (property === "company" && form0["sponsored"] === "0") continue;
          if (property === "reason_of_demo" && form0["demo"] === "1") continue;
          if (property === "nda" && form0["sponsored"] === "0") continue;
          else {
            toast.warn("Please enter all fields!");
            return;
          }
        }
      }
      registerUserMutationForm0.mutate(form0, {
        onSuccess: () => {
          setErrors0(initialErrorsForm0);
          toast.success("Completed Step 1️⃣ !", { icon: "✅" });
          setFormStep((currentStep) => currentStep + 1);
          setActiveStep((activeStep) => activeStep + 1);
          return;
        },
      });
    }
    if (formStep === 1) {
      if (memberCount < 2) {
        toast.warn("At least two member needed!");
        return;
      }
      setFormStep((currentStep) => currentStep + 1);
      setActiveStep((activeStep) => activeStep + 1);
    }

    if (formStep === 2) {
      for (const property in form2) {
        if (form2[property] === "") {
          if (property === "reason_of_mode" && form2["mode"] === "1") continue;
          if (property === "referral") continue;
          toast.warn("Please enter all fields!");
          return;
        }
      }
      registerUserMutationForm2.mutate(form2, {
        onSuccess: () => {
          setErrors2(initialErrorsForm2);
          if (form2.isPICT === "1" || form2.isInternational === "1") {
            const temp =
              form2.isPICT === "1" ? { isPICT: "1" } : { isInternational: "1" };
            registerUserMutationForm3.mutate(temp, {
              onSuccess: () => {
                toast.success("Completed Registration !", { icon: "✅" });
                setPaymentStatus(true);
                setFormStep((currentStep) => currentStep + 1);
                setActiveStep((activeStep) => activeStep + 1);
              },
            });
          } else {
            toast.success("Completed Step 3️⃣ !", { icon: "✅" });
            const win = window.open(paymentLinks.get("impetus"), "_blank");
            setFormStep((currentStep) => currentStep + 1);
            setActiveStep((activeStep) => activeStep + 1);
            win.focus();
          }
        },
      });
    }
    if (formStep === 3) {
      if (paymentRef.current.value.length < 8) {
        toast.warn("Please enter valid Transaction ID !");
        return;
      }
      registerUserMutationForm3.mutate(
        { payment_id: paymentRef.current.value?.trim() },
        {
          onSuccess: () => {
            toast.success("Completed Step 4️⃣ !", { icon: "✅" });
            setActiveStep((activeStep) => activeStep + 1);
            setPaymentStatus(true);
          },
        }
      );
    }

    // setFormStep((currentStep) => currentStep + 1);
    // setActiveStep(activeStep + 1);
  };

  //dropdown

  //const [option, setOption] = useState();

  return (
    <MainContainer>
      {true ?
        <>
          <StepContainer width={width}>
            {steps.map(({ step, label }) => (
              <StepWrapper key={step}>
                <StepStyle step={activeStep >= step ? "completed" : "incomplete"}>
                  {activeStep > step ? (
                    <CheckMark>L</CheckMark>
                  ) : (
                    <StepCount>{step}</StepCount>
                  )}
                </StepStyle>
                <StepsLabelContainer>
                  <StepLabel key={step}>{label}</StepLabel>
                </StepsLabelContainer>
              </StepWrapper>
            ))}
          </StepContainer>
          <div className=" md:mx-16 my-6">
            <form className="rounded-lg px-8 pt-6 pb-8 mb-4 border">
              {/* form 0 */}
              {formStep === 0 && (
                <>
                  <NoteBox
                    title="Note"
                    text="Please complete the payment within 60 minutes before your session expires. Don't refresh the window or close the tab."
                  />
                  <InputBox
                    type="text"
                    label={"Project Title"}
                    name={"title"}
                    placeholder={"Project title"}
                    classNames=""
                    required
                    onChange={(e) => handleInputChange0(e)}
                    value={form0.title}
                    error={errors0.title}
                    tip={"The project title should be between 10 and 100 characters long.(both inclusive)"}
                  ></InputBox>
                  <Dropdown
                    label="Domain of the project"
                    options={[
                      { value: "SEL", label: "Select", selected: true },
                      ...projectDomains,
                    ]}
                    name={"domain"}
                    state={form0}
                    setState={setForm0}
                    required
                    error={errors0.domain}
                  />
                  <Dropdown
                    label=" Project Type"
                    options={[
                      { value: "SEL", label: "Select", selected: true },
                      ...projectTypes,
                    ]}
                    name={"project_type"}
                    state={form0}
                    setState={setForm0}
                    required
                    error={errors0.project_type}
                  />
                  <InputBox
                    type="text"
                    label={"Guide_Name"}
                    name={"guide_name"}
                    placeholder={"Name"}
                    classNames=""
                    required
                    onChange={(e) => handleInputChange0(e)}
                    value={form0.guide_name}
                    error={errors0.guide_name}
                    tip={"Guide name should be between 3 and 50 characters(both inclusive) long and contains only alphabetical characters."}
                  ></InputBox>
                  <InputBox
                    type="email"
                    label={"Guide_Email"}
                    name={"guide_email"}
                    placeholder={"Email"}
                    classNames=""
                    required
                    onChange={(e) => handleInputChange0(e)}
                    value={form0.guide_email}
                    error={errors0.guide_email}
                    tipstyle={"hidden"}
                  ></InputBox>
                  <InputBox
                    type="text"
                    label={"Guide_Phone"}
                    name={"guide_phone"}
                    placeholder={"Phone"}
                    classNames=""
                    required
                    onChange={(e) => handleInputChange0(e)}
                    value={form0.guide_phone}
                    error={errors0.guide_phone}
                    tipstyle={"hidden"}
                  ></InputBox>
                  <InputBox
                    type="text"
                    label={"Hod_email"}
                    name={"hod_email"}
                    placeholder={"Hod email"}
                    classNames=""
                    required
                    onChange={(e) => handleInputChange0(e)}
                    value={form0.hod_email}
                    error={errors0.hod_email}
                    tipstyle={"hidden"}
                  ></InputBox>
                  <RadioButtons
                    label="Is the project sponsored or not?"
                    options={sponsor_arr}
                    state={form0}
                    setState={setForm0}
                    name="sponsored"
                    required
                    error={errors0.sponsored}

                  />
                  {form0.sponsored === "1" && (
                    <>
                      <InputBox
                        type="text"
                        label={"If yes, then name of company?"}
                        placeholder={"Company name"}
                        name={"company"}
                        classNames=""
                        required
                        onChange={(e) => handleInputChange0(e)}
                        value={form0.company}
                        error={errors0.company}
                        tip={"Company name if applicable, should be between 3 and 100 characters(both inclusive)"}
                      ></InputBox>
                      <RadioButtons
                        label=" NDA signed or not?"
                        options={nda_arr}
                        state={form0}
                        setState={setForm0}
                        name="nda"
                        required
                        error={errors0.nda}
                      />
                    </>
                  )}

                  <InputBox
                    type="textarea"
                    label={"Abstract"}
                    name={"abstract"}
                    placeholder={"In 1000 characters or less"}
                    classNames=""
                    required
                    onChange={(e) => handleInputChange0(e)}
                    value={form0.abstract}
                    error={errors0.abstract}
                    tip={"Abstract should be between 300 and 2000 characters(both inclusive)"}
                  ></InputBox>
                  <RadioButtons
                    label="  Can you show a demo of your project?"
                    options={demo_arr}
                    state={form0}
                    setState={setForm0}
                    name="demo"
                    required
                    error={errors0.demo}
                  />

                  {form0.demo === "0" && (
                    <div>
                      <InputBox
                        type="textarea"
                        label={"Reason for demo"}
                        name={"reason_of_demo"}
                        placeholder={"reason"}
                        classNames=""
                        required
                        onChange={(e) => handleInputChange0(e)}
                        value={form0.reason_of_demo}
                        error={errors0.reason_of_demo}
                        tip={"Reason of demo if applicable, should be between 5 and 100 characters(both inclusive)"}
                      ></InputBox>
                    </div>
                  )}
                </>
              )}
              {/* form 1 */}
              {formStep === 1 && (
                <>
                  <NoteBox
                    title="Note"
                    text="Please complete the payment within 60 minutes before your session expires. Don't refresh the window or close the tab."
                  />
                  <Buttons
                    value="add members"
                    onClick={addFields}
                    classNames=" my-2"
                    loading={registerUserMutationForm1.isLoading}
                    disabled={formFields.length >= 5}

                  />

                  {formFields.map((form, index) => {
                    return (
                      <div key={index}>
                        <InputBox
                          label="Name"
                          name="name"
                          type="text"
                          placeholder="name "
                          required
                          error={errors1.name}
                          onChange={(event) => handleFormChange(event, index)}
                          value={form.name}
                          tip={"Name of member should be between 3 and 20 characters(both inclusive)"}
                        />
                        <InputBox
                          label="Email ID"
                          name="email"
                          type="text"
                          placeholder="email "
                          required
                          error={errors1.email}
                          onChange={(event) => handleFormChange(event, index)}
                          value={form.email}
                          tipstyle={"hidden"}
                        />
                        <div className="flex">
                          <div className="mr-1 w-1/2">
                            <InputBox
                              label="Phone Number"
                              name="phone"
                              type="tel"
                              placeholder="phone number"
                              required
                              error={errors1.phone}
                              onChange={(event) => handleFormChange(event, index)}
                              value={form.phone}
                              tipstyle={"hidden"}
                            />
                          </div>
                          <div className="input-box-dropdown w-full mb-4 relative">
                            <label
                              className={`input-label font-medium mb-1 text-white text-lg flex`}
                            >
                              {"Gender"}
                              <h1 className="text-gold">*</h1>
                            </label>
                            <div className="relative inline-block w-full">
                              <select
                                name={"gender"}
                                value={formFields.gender}
                                onChange={(event) => handleFormChange(event, index)}
                                required
                                error={errors1.gender}
                                className={`w-full h-10 pl-4 pr-8 bg-[#0B1E47] text-base text-gold placeholder-gray-500 border rounded-lg appearance-none focus:outline-none focus:shadow-outline-blue`}
                              >
                                {gender_type.map((option) => (
                                  <option
                                    key={option?.value}
                                    value={option?.value}
                                    className={`py-1 bg-[#0B1E47] ${option?.className || ""
                                      }`}
                                  >
                                    {option?.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          {/* <Dropdown
                                                label=" Gender"
                                                options={gender_type}
                                                name={"gender"}
                                                state={formFields}
                                                setState={setFormFields}
                                                required
                                            /> */}
                        </div>
                        <FileInputBox
                          name="member_id"
                          accept="image/png, image/jpeg"
                          type="file"
                          onChange={(e) => handleImageChange(e, index)}
                          label="Upload Screenshot of ID"
                          required
                          error={errors1.member_id}
                        />
                        <NoteBox title="please take note" text="accepted format: jpeg, png and less than 200kb" />
                        {formFields.length > 1 && (
                          <>
                            <Buttons
                              value="remove member"
                              onClick={() => removefields(index)}
                              classNames=" my-2"
                              disabled={true}
                            />
                          </>
                        )}
                      </div>
                    );
                  })}
                </>
              )}
              {/* form 2 */}
              {formStep === 2 && (
                <>
                  <NoteBox
                    title="Note"
                    text="Please complete the payment within 60 minutes before your session expires. Don't refresh the window or close the tab."
                  />
                  <RadioButtons
                    label=" Are you PICTian or not?"
                    options={country_arr}
                    state={form2}
                    setState={setForm2}
                    name="isPICT"
                    required
                    error={errors2.isPICT}
                  />

                  {form2.isPICT === "0" && (
                    <>
                      <RadioButtons
                        label="Is International ?"
                        options={country_arr}
                        state={form2}
                        setState={setForm2}
                        name="isInternational"
                        required
                        error={errors2.isInternational}
                      />
                      <div className=" mx-1 my-2">
                        <InputBox
                          label="College"
                          name={"college"}
                          type="text"
                          placeholder="Name of member should be between 3 and 20 characters(both inclusive)"
                          required
                          onChange={(e) => handleInputChange2(e)}
                          value={form2.college}
                          error={errors2.college}
                          tip={"College name should be between 3 and 100 characters(both inclusive) and contains only alphabetical characters."}
                        />
                      </div>
                      <div className="mx-1 my-2">
                        <InputBox
                          label="Country"
                          name={"country"}
                          type="text"
                          placeholder="country"
                          required
                          error={errors2.country}
                          onChange={(e) => handleInputChange2(e)}
                          value={
                            form2.isInternational === "0" ? "India" : form2.country
                          }
                          tip={"Country should be between 2 and 20 characters(both inclusive) and contains only alphabetical characters."}
                        />
                      </div>
                      <div className="flex mx-1 ">
                        <div className="mr-1 w-1/2">
                          <InputBox
                            label="State"
                            type="text"
                            name={"state"}
                            placeholder="state"
                            required
                            onChange={(e) => handleInputChange2(e)}
                            value={form2.state}
                            error={errors2.state}
                            tip={"State should be between 3 and 20 characters(both inclusive) and contains only alphabetical characters."}
                          />
                        </div>
                        <div className="ml-1 w-1/2">
                          <InputBox
                            label="District"
                            name={"district"}
                            type="text"
                            placeholder="district"
                            required
                            onChange={(e) => handleInputChange2(e)}
                            value={form2.district}
                            error={errors2.district}
                            tip={"District should be between 2 and 20 characters(both inclusive) and contains only alphabetical characters."}
                          />
                        </div>
                      </div>
                      <div className="flex mx-1 ">
                        <div className="mr-1 w-1/2">
                          <InputBox
                            label="City"
                            type="text"
                            name={"city"}
                            placeholder="city"
                            required
                            error={errors2.city}
                            onChange={(e) => handleInputChange2(e)}
                            value={form2.city}
                          />
                        </div>
                        <div className="ml-1 w-1/2">
                          <Dropdown
                            label="Locality"
                            options={[
                              { value: "SEL", label: "Select", selected: true },
                              ...localTypes,
                            ]}
                            name={"locality"}
                            state={form2}
                            setState={setForm2}
                            required
                            error={errors2.locality}
                          />
                        </div>
                      </div>
                      <RadioButtons
                        label="  Preferred mode of presentation"
                        options={mode_arr}
                        state={form2}
                        setState={setForm2}
                        name="mode"
                        required
                        error={errors2.mode}
                        tip={"Participants from Pune should select offline mode only."}
                      />
                      {form2.mode === "0" && (
                        <div>
                          <InputBox
                            type="textarea"
                            label={"Reason for Online"}
                            name={"reason_of_mode"}
                            placeholder={"reason"}
                            required
                            error={errors2.reason_of_mode}
                            onChange={(e) => handleInputChange2(e)}
                            value={form2.reason_of_mode}
                            tip={"Reason of mode if applicable, should be between 2 and 20 characters(both inclusive)"}
                          ></InputBox>
                        </div>
                      )}
                      <InputBox
                        type="text"
                        label="Referral"
                        name="referral"
                        placeholder="Referral ID given by Campus Ambassador"
                        onChange={(e) => handleInputChange2(e)}
                        error={errors2.referral}
                        value={form2.referral}
                        tip={"Referral should be between 3-50 characters long (if any)"}
                      />
                    </>
                  )}

                  <Dropdown
                    label=" Which year are you in?"
                    options={[
                      { value: "SEL", label: "Select", selected: true },
                      ...year_arr,
                    ]}
                    name={"year"}
                    state={form2}
                    setState={setForm2}
                    required
                    error={errors2.year}
                  />
                </>
              )}
              {formStep === 3 &&
                (paymentStatus ? (
                  <div className="shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl items-center p-4 md:p-8 border border-light_blue w-full">
                    <p className="text-xl text-center text-gold font-bold mb-3">
                      Thank you for registering in InC'23. Looking forward to have
                      you in person
                    </p>
                    <NoteBox
                      title="Note"
                      text="Registration payment will be verified and will be informed by email."
                    />
                  </div>
                ) : (
                  <div className="mb-6 shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl  items-center p-4 md:p-8 border border-light_blue w-full">
                    <NoteBox
                      title="Note"
                      text="Please complete the payment within 60 minutes before your session expires. Don't refresh the window or close the tab."
                    />
                    <InputBox
                      label="Transaction ID (received on email)"
                      type="text"
                      name="payment_id"
                      placeholder="Enter Transaction ID"
                      inputref={paymentRef}
                      minlenght="8"
                      error={errors3.payment_id}
                      className="tracking-widest"
                      required
                    />
                  </div>
                ))}
              <div className="flex justify-between">
                {/* {formStep > 0 && formStep < 4 && (
              <Buttons
                className="mx-2 my-2"
                value=" Previous Step"
                onClick={prevForm}
                loading={
                  registerUserMutationForm1.isLoading ||
                  registerUserMutationForm2.isLoading
                }
              />
            )} */}

                {formStep === 3 ? (
                  paymentStatus ? (
                    <></>
                  ) : (
                    <Buttons
                      className=" mx-2 my-2 "
                      value="Submit"
                      onClick={nextForm}
                      loading={registerUserMutationForm3.isLoading}
                    />
                  )
                ) : (
                  formStep === 2 &&
                  (paymentStatus ? (
                    <Buttons
                      className=" mx-2 my-2  "
                      value="Submit"
                      onClick={nextForm}
                      loading={
                        registerUserMutationForm0.isLoading ||
                        registerUserMutationForm1.isLoading ||
                        registerUserMutationForm2.isLoading
                      }
                    />
                  ) : (
                    <Buttons
                      className=" mx-2 my-2  "
                      value="Pay (Rs.100)"
                      onClick={nextForm}
                      loading={
                        registerUserMutationForm0.isLoading ||
                        registerUserMutationForm1.isLoading ||
                        registerUserMutationForm2.isLoading
                      }
                    />
                  ))
                )}
                {formStep < 2 && (
                  <Buttons
                    className=" mx-2 my-2  "
                    value="Next Step"
                    onClick={nextForm}
                    loading={
                      registerUserMutationForm0.isLoading ||
                      registerUserMutationForm1.isLoading ||
                      registerUserMutationForm2.isLoading
                    }
                  />
                )}
              </div>
            </form>
            {/* <Buttons
                value="submit"
                onClick={submit}
                classNames='mx-2 my-2'
            /> */}
          </div>
        </>
        :
        <div className="md:mx-16 my-20">
          <CloseMessage />
        </div>
      }
    </MainContainer>
  );
}

export default TeamImpetus;
