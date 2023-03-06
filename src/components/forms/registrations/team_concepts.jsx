import "../styles/event_registrations.css";
import { useState } from "react";
import styled from 'styled-components';
import { InputBox, Buttons, FileInputBox, toast } from "../../index.js";
import Dropdown from "../../dropdown";
import RadioButtons from "../../radioButtons";
import { useRegisterStep1, useRegisterStep2, useRegisterStep3 } from "../../../hooks/events.hooks";
import { domains } from "../../../static/data";

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
        label: 'Step1',
        step: 1,
    },
    {
        label: 'Step2',
        step: 2,
    },
    {
        label: 'Step3',
        step: 3,
    },
    {
        label: 'Step4',
        step: 4,
    },
]
const totalSteps = steps.length

const initialErrorsForm0 = {
    title: "",
    domain: "",
    project_type: "",
    guide_name: "",
    guide_email: "",
    guide_phone: "",
    hod_email: "",
    company: "",
    abstract: "",
    nda: "",
    sponsored: "",
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
    isInternational: "",
    college: "",
    country: "",
    state: "",
    district: "",
    locality: "",
    mode: "",
    reason_of_mode: "",
    referral: "",
};
const sponsor_arr = [
    {
        value: '1',
        label: 'Yes',
        // onChange: function (e) { }
    },
    {
        value: '0',
        label: 'No',
    },
]

const nda_arr = [
    {
        value: '1',
        label: 'Yes',
        // onChange: function (e) { }
    },
    {
        value: '0',
        label: 'No',
    },
]

const pict_arr = [
    {
        value: '1',
        label: 'Yes',
        // onChange: function (e) { }
    },
    {
        value: '0',
        label: 'No',
    },

]

const mode_arr = [
    {
        value: '1',
        label: 'Offline',
        // onChange: function (e) { }
    },
    {
        value: '0',
        label: 'Online',
    },

]
const country_arr = [
    {
        value: '1',
        label: 'Yes',
        // onChange: function (e) { }
    },
    {
        value: '0',
        label: 'No',
    },
]
const proj_domain = [
    { value: 'SEL', label: 'Select' },
    { value: 'AD', label: 'Application Development' },
    { value: 'CN', label: 'Communication Networks and Security Systems' },
    { value: 'DSP', label: 'Digital / Image/ Speech / Video Processing' },
    { value: 'ES', label: 'Embedded/VLSI Systems' },
    { value: 'ML', label: 'Machine Learning and Pattern Recognition' },
    { value: 'OT', label: 'Others' }
]

const proj_type = [
    { value: 'SEL', label: 'Select' },
    { value: 'OH', label: 'Open Hardware' },
    { value: 'OS', label: 'Open Software' },
    { value: 'OT', label: 'Others' },
]

const gender_type = [
    { value: 'SEL', label: 'Select' },
    { value: 'M', label: 'Male' },
    { value: 'F', label: 'Female' },
    { value: 'OT', label: 'Other' },
]

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

const local_arr = [
    { value: 'SEL', label: "Select" },
    { value: 'UR', label: "Urban" },
    { value: 'RU', label: "Rural" },


]


function TeamConcepts() {
    //form0
    const [activeStep, setActiveStep] = useState(1);
    const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;
    const [form0, setForm0] = useState({
        title: "",
        domain: "",
        project_type: "",
        guide_name: "",
        guide_email: "",
        guide_phone: "",
        hod_email: "",
        company: "",
        abstract: "",
        nda: "0",
        sponsored: "0",

    });
    const [errors0, setErrors0] = useState(initialErrorsForm0);
    const registerUserMutationForm0 = useRegisterStep1(setErrors0, 'concepts');
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
    const registerUserMutationForm1 = useRegisterStep2(setErrors1, 'concepts');

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
                if (formFields.at(-1)[property] === '') {
                    toast.warn("Please fill all the fields")
                    return
                }
            }

            const memberFormData = new FormData()
            memberFormData.append('member_id', formFields.at(-1).member_id)
            const tempMemberDetails = { ...formFields.at(-1) }
            delete tempMemberDetails.member_id
            memberFormData.append('body', JSON.stringify(tempMemberDetails))
            registerUserMutationForm1.mutate(memberFormData, {
                onSuccess: () => {
                  setErrors1(initialErrorsForm1);
                  toast.success("Added member to the team !", { icon: "✅" });
                  let object = {
                      name: "",
                      email: "",
                      phone: "",
                      gender: "",
                      member_id:"",
                  };
                  setFormFields([...formFields, object]);
                },
                onError: () => setFormFields(formFields => formFields.slice(0, -1))
            })
            return
        }
        toast.warn("Maximum 5 members are allowed")
    };

    const removefields = (index) => {

        let data = [...formFields];
        data.splice(index, 1);
        setFormFields(data);
    };

    //form 2

    const [form2, setForm2] = useState(

        {
            isPICT: "1",
            isInternational: "0",
            college: "",
            country: "",
            state: "",
            district: "",
            locality: "1",
            mode: "1",
            reason_of_mode: "",
            referral: ""
        }

    )
    const [errors2, setErrors2] = useState(initialErrorsForm2);
    const registerUserMutationForm2 = useRegisterStep3(setErrors2, 'concepts');

    const handleInputChange2 = (e) => {
        console.log(form2.isPICT)
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
                isInternational: "0"
            }));
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
                isInternational: ""
            }));
        }
        else {
            setForm2((prevState) => {
                errors2[name] !== "" &&
                    setErrors2((prevState) => ({ ...prevState, [name]: "" }));
                return { ...prevState, [name]: value };
            });
        }
    }

    const handleSelectChange2 = (e) => {
        const { name, value } = e.target;
        setForm2((prevState) => {
            errors2[name] !== "" &&
                setErrors2((prevState) => ({ ...prevState, [name]: "" }));
            return { ...prevState, [name]: value };
        });
    };

  //steps for whole form
  const [formStep, setFormStep] = useState(0);

    const prevForm = (e) => {
        // e.preventDefault();
        setFormStep((currentStep) => currentStep - 1);
        setActiveStep(activeStep - 1);
    };

    const nextForm = (e) => {
        e.preventDefault();
        if (formStep === 0) {
            console.log('form0', form0);
            for (const property in form0) {
                if (form0[property] === "") {
                    if (property === "company" && form0["sponsored"] === "0")
                        continue;
                    if (property === "nda" && form0["sponsored"] === "0")
                        continue;
                    else {
                        toast.warn("Please enter all fields!")
                        return
                    }
                }
            }
            registerUserMutationForm0.mutate(form0, {
                onSuccess: () => {
                    setErrors0(initialErrorsForm0);
                    toast.success("Completed Step 1️⃣ !", { icon: "✅" });
                    setFormStep(currentStep => currentStep + 1);
                    setActiveStep(activeStep => activeStep + 1);
                    return
                }
            });
        }
        if (formStep === 1) {
            if (formFields.length < 2) {
                toast.warn("At least two member needed!")
                return
            }
            setFormStep(currentStep => currentStep + 1);
            setActiveStep(activeStep => activeStep + 1);
        }
        if (formStep === 2) {
            console.log(form2)
            for (const property in form2) {
                if (form2[property] === "") {
                    if (property === "reason_of_mode" && form2["mode"] === "1")
                        continue;
                    toast.warn("Please enter all fields!")
                    return
                }
            }
            registerUserMutationForm2.mutate(form2, {
              onSuccess: () => {
                  setErrors2(initialErrorsForm2);
                  toast.success("Completed Step 3️⃣ !", { icon: "✅" });
                  setFormStep(currentStep => currentStep + 1);
                  setActiveStep(activeStep => activeStep + 1);
              },
            });

        }
        // if (!registerUserMutationForm0.isLoading || !registerUserMutationForm1.isLoading || !registerUserMutationForm2.isLoading) {
        // }
    };

    //dropdown

    //const [option, setOption] = useState();

    return (
        <MainContainer>
            <StepContainer width={width}>
                {steps.map(({ step, label }) => (
                    <StepWrapper key={step}>
                        <StepStyle step={activeStep >= step ? 'completed' : 'incomplete'}>
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
                            <InputBox
                                type="text"
                                label={"Project Title"}
                                name={"title"}
                                placeholder={"Project title"}

                                required
                                onChange={(e) => handleInputChange0(e)}
                                value={form0.title}
                                minlenght='10'
                            ></InputBox>
                            <Dropdown
                                label="Domain of the project"
                                options={proj_domain}
                                name={"domain"}
                                state={form0}
                                setState={setForm0}
                                required
                            />
                            <Dropdown
                                label=" Project Type"
                                options={proj_type}
                                name={"project_type"}
                                state={form0}
                                setState={setForm0}
                                required
                            />
                            <InputBox
                                type="text"
                                label={"Guide_Name"}
                                name={"guide_name"}
                                placeholder={"Name"}
                                required
                                onChange={(e) => handleInputChange0(e)}
                                value={form0.guide_name}
                            ></InputBox>
                            <InputBox
                                type="email"
                                label={"Guide_Email"}
                                name={"guide_email"}
                                placeholder={"Email"}

                                required
                                onChange={(e) => handleInputChange0(e)}
                                value={form0.guide_email}
                            ></InputBox>
                            <InputBox
                                type="tel"
                                label={"Guide_Phone"}
                                name={"guide_phone"}
                                placeholder={"Phone"}

                                required
                                onChange={(e) => handleInputChange0(e)}
                                value={form0.guide_phone}
                            ></InputBox>
                            <InputBox
                                type="email"
                                label={"Hod_email"}
                                name={"hod_email"}
                                placeholder={"Hod email"}

                                required
                                onChange={(e) => handleInputChange0(e)}
                                value={form0.hod_email}
                            ></InputBox>
                            <RadioButtons
                                label='Is the project sponsored or not?'
                                options={sponsor_arr}
                                state={form0}
                                setState={setForm0} name='sponsored' required />
                            {form0.sponsored === "1" &&
                                (<>
                                    <InputBox
                                        type="text"
                                        label={"If yes, then name of company?"}
                                        placeholder={"Company name"}
                                        name={"company"}

                                        required
                                        onChange={(e) => handleInputChange0(e)}
                                        value={form0.company}
                                    ></InputBox>
                                    <RadioButtons
                                        label=' NDA signed or not?'
                                        options={nda_arr}
                                        state={form0}
                                        setState={setForm0} name='nda' required />
                                </>
                                )

                            }

                            <InputBox
                                type="textarea"
                                label={"Abstract"}
                                name={"abstract"}
                                placeholder={"In 300 words or less"}

                                required
                                onChange={(e) => handleInputChange0(e)}
                                value={form0.abstract}
                                minlenght='50'
                            ></InputBox>
                        </>
                    )}
                    {/* form 1 */}
                    {formStep === 1 && (
                        <>
                            <Buttons
                                value="Add Members"
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
                                            onChange={(event) => handleFormChange(event, index)}
                                            value={form.name}
                                        />
                                        <InputBox
                                            label="Email ID"
                                            name="email"
                                            type="text"
                                            placeholder="email "
                                            required
                                            onChange={(event) => handleFormChange(event, index)}
                                            value={form.email}
                                        />
                                        <div className="flex">
                                            <div className="mr-1 w-1/2">
                                                <InputBox
                                                    label="Phone No"
                                                    name="phone"
                                                    type="number"
                                                    placeholder="phone number"
                                                    required
                                                    onChange={(event) => handleFormChange(event, index)}
                                                    value={form.phone}
                                                />
                                            </div>

                                            <Dropdown
                                                label=" Gender"
                                                options={gender_type}
                                                name={"gender"}
                                                state={formFields}
                                                setState={setFormFields}
                                                required
                                            />

                                        </div>
                                        <FileInputBox name="member_id" accept="image/png, image/jpeg" type="file" onChange={(e) => handleImageChange(e, index)} label="Upload Screenshot of ID" required />

                                        {formFields.length > 1 && (<Buttons
                                            value="remove member"
                                            onClick={() => removefields(index)}
                                            classNames=" my-2"
                                            disabled={true}
                                        />)}
                                    </div>
                                );
                            })}
                        </>
                    )}

                    {/* form 2 */}
                    {formStep === 2 && (
                        <>
                            <RadioButtons
                                label=' Are you PICTian or not?'
                                options={pict_arr}
                                state={form2}
                                setState={setForm2}
                                name='isPICT' required />


                            {form2.isPICT === "0" && (
                                <>
                                    <RadioButtons
                                        label='Is International ?'
                                        options={country_arr}
                                        state={form2}
                                        setState={setForm2}
                                        name='isInternational' required />
                                    <div className=" mx-1 my-2">
                                        <InputBox
                                            label="College"
                                            name={"college"}
                                            type="text"
                                            placeholder="college name"
                                            required
                                            onChange={(e) => handleInputChange2(e)}

                                            value={form2.college}
                                        />
                                    </div>
                                    <div className="mx-1 my-2">
                                        <InputBox
                                            label="Country"
                                            name={"country"}
                                            type="text"
                                            placeholder="country"
                                            disabled={form2.isInternational === "0"}
                                            required
                                            onChange={(e) => handleInputChange2(e)}

                                            value={form2.isInternational === '0' ? 'India' : form2.country}
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
                                            />
                                        </div>
                                    </div>
                                    <Dropdown
                                        label="Localtiy"
                                        options={local_arr}
                                        name={"locality"}
                                        state={form2}
                                        setState={setForm2}
                                        required
                                    />
                                    <RadioButtons
                                        label='  Preferred mode of presentation'
                                        options={mode_arr}
                                        state={form2}
                                        setState={setForm2}
                                        name='mode' required />

                                    {form2.mode === "0" && (
                                        <div>
                                            <InputBox
                                                type="textarea"
                                                label={"Reason for Online"}
                                                name={"reason_of_mode"}
                                                placeholder={"reason"}

                                                required
                                                onChange={(e) => handleInputChange2(e)}
                                                value={form2.reason_of_mode}
                                            ></InputBox>
                                        </div>
                                    )}
                                    <InputBox
                                        type="text"
                                        label="Referral"
                                        name="referral"
                                        placeholder="Referral ID given by Campus Ambassador"
                                        required
                                        onChange={(e) => handleInputChange2(e)}
                                        value={form2.referral}
                                    />
                                </>
                            )}


                        </>
                    )}
                    <div className="flex justify-between">
                        {formStep > 0 && formStep < 3 ? (
                            <Buttons
                                className="mx-2 my-2"
                                value=" Previous Step"
                                onClick={prevForm}
                                loading={registerUserMutationForm0.isLoading}
                            />
                        ) : (
                            ""
                        )}

                        {formStep === 2 ? (
                            <Buttons
                                className=" mx-2 my-2 "
                                value="Submit"
                                onClick={nextForm}
                                loading={registerUserMutationForm0.isLoading}
                            />
                        ) : (
                            formStep < 2 && (
                                <Buttons
                                    className=" mx-2 my-2  "
                                    value="Next Step"
                                    onClick={nextForm}
                                    loading={registerUserMutationForm0.isLoading}
                                />
                            )
                        )}

                        {formStep === 3 && <h1 className=" text-gold text-3xl">Thank you for registering for InC'23 Concepts !</h1>}
                    </div>
                </form>
                {/* <Buttons
                value="submit"
                onClick={submit}
                classNames='mx-2 my-2'
            /> */}
            </div>
        </MainContainer>
    );
}

export default TeamConcepts;