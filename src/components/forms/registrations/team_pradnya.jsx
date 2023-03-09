import "../styles/event_registrations.css";
import React from "react";
import { useState } from "react";
import { InputBox, Buttons, FileInputBox, toast } from "../../index.js";
import { useRegisterStep1, useRegisterStep2, useRegisterStep3 } from "../../../hooks/events.hooks";
import styled from 'styled-components';
import Dropdown from "../../dropdown";
import RadioButtons from "../../radioButtons";

const MainContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
`

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
  position: relative;
  :before {
    content: '';
    position: absolute;
    background: #f3e7f3;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: '';
    position: absolute;
    background: #155e75;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`

const StepStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid
    ${({ step }) => (step === 'completed' ? '#075985' : '#155e75')};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StepCount = styled.span`
  font-size: 19px;
  color: #000000;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StepLabel = styled.span`
  font-size: 19px;
  color: #155e75;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const CheckMark = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #155e75;
  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
  transform: scaleX(-1) rotate(-46deg);
`

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
    }

]
const totalSteps = steps.length
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
    year: "",
};

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
const year_arr = [
    { value: 'SEL', label: "Select" },
    { value: 'F', label: "1st year" },
    { value: 'S', label: "2nd year" },
    { value: 'T', label: "3rd year" },
]

function TeamPradnya() {

    const [activeStep, setActiveStep] = React.useState(1);
    const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`

    //form1

    const [form1, setForm1] = useState([
        {

            name: "",
            email: "",
            phoneno: "",
            gender: "",
            member_id: "",

        },
    ]);
    const [errors1, setErrors1] = useState(initialErrorsForm1);
    const handleFormChange = (event, index) => {
        const { name, value } = event.target;
        setForm1((prevState) => {
            errors1[name] !== "" &&
                setErrors1((prevState) => ({ ...prevState, [name]: "" }));
            let data = [...prevState];
            data[index][name] = value;
            return data;
        });
    };
    const registerUserMutationForm1 = useRegisterStep2(setErrors1, 'concepts');
    const addfields = () => {
        if (form1.length < 3) {
            for (const property in form1.at(-1)) {
                if (form1.at(-1)[property] === '') {
                    toast.warn("Please fill all the fields")
                    return
                }
            }

            const memberFormData = new FormData()
            memberFormData.append('member_id', form1.at(-1).member_id)
            const tempMemberDetails = { ...form1.at(-1) }
            delete tempMemberDetails.member_id
            memberFormData.append('body', JSON.stringify(tempMemberDetails))
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
                    setForm1([...form1, object]);
                }
            })
            return
        }
        toast.warn("Maximum 2 members are allowed")
    };

    const removefields = (index) => {

        let data = [...form1];
        data.splice(index, 1);
        setForm1(data);

    };

    //form 2

    const [form2, setForm2] = useState(

        {
            isPICT: "",
            isInternational: "0",
            college: "",
            country: "",
            state: "",
            district: "",
            city: "",
            locality: "1",
            leader: "",
            year: "",

        }
    )
    const [errors2, setErrors2] = useState(initialErrorsForm2);
    const registerUserMutationForm2 = useRegisterStep3(setErrors2, 'concepts');


    const handleImageChange = (event, index) => {
        let data = [...form1];
        data[index][event.target.name] = event.target.files[0];
        console.log(event.target.files);
        setForm1(data);
    };
    const handleInputChange2 = (e) => {

        const { name, value } = e.target;
        if (name === "isPICT" && value === "1") {
            setForm2((form2) => ({
                ...form2,
                isPICT: "1",
                college: "Pune Institute Of Computer Technology",
                country: "India",
                state: "Maharashtra",
                district: "Pune",
                leader: "abc@gmail.com",
                city: "Pune",
                locality: "1",
                isInternational: "0"
            }));
        } else if (name === "isPICT" && value === "0") {
            setForm2((form2) => ({
                ...form2,
                isPICT: "0",
                college: "",
                country: "",
                state: "",
                district: "",
                city: "",
                locality: "",
                leader: "",
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


    //steps for whole form
    const [formStep, setFormStep] = React.useState(2);

    const prevForm = (e) => {
        // e.preventDefault();
        setFormStep((currentStep) => currentStep - 1);
        setActiveStep(activeStep - 1)
    };
    const handleSelectChange2 = (e) => {
        const { name, value } = e.target;
        setForm2((prevState) => {
            errors2[name] !== "" &&
                setErrors2((prevState) => ({ ...prevState, [name]: "" }));
            return { ...prevState, [name]: value };
        });
    };
    const nextForm = (e) => {
        e.preventDefault();
        if (formStep === 1) {
            if (form1.length == 1) {
                toast.warn("Atleast one member needed!")
                return
            }

            registerUserMutationForm1.mutate(form1, {
                onSuccess: () => {
                    setErrors1(initialErrorsForm1);
                    toast.success("Completed Step 1️⃣ !", { icon: "✅" });
                    setFormStep(currentStep => currentStep + 1);
                    setActiveStep(activeStep => activeStep + 1);
                    return
                }
            });
        }
        if (formStep === 2) {
            console.log(form2)
            for (const property in form2) {

                if (form2[property] == "") {
                    if (property == "referral")
                        continue;
                    toast.warn("Please enter all fields!")
                    return

                }
            }
            registerUserMutationForm2.mutate(form2, {
                onSuccess: (res) => {
                    setErrors2(initialErrorsForm2);
                    toast.success("Successfully Registered", { icon: "💐" });
                    setTimeout(() => {
                        console.log("nextForm");
                        // onSuccessNavigator('/')
                    }, 2000);
                },
            });
        }


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

                    {/* form 1 */}
                    {formStep === 1 && (
                        <>
                            {form1.length < 2 && (<>
                                <Buttons
                                    value="add members"
                                    onClick={addfields}
                                    classNames=" my-2"
                                />
                            </>)}
                            {form1.map((form, index) => {
                                return (
                                    <div key={index}>
                                        <InputBox label="Name" name="name" type="text" placeholder="name " required 
                                        error = {errors1.name}
                                        onChange={(event) => handleFormChange(event, index)} value={form.name} />
                                        <InputBox label="Email ID" name="email" type="text" placeholder="email " required 
                                         error = {errors1.email}
                                        onChange={(event) => handleFormChange(event, index)} value={form.email} />
                                        <div className="flex">
                                            <div className="mr-1 w-1/2">
                                                <InputBox label="Phone No" name="phoneno" type="number" placeholder="phone number" required 
                                                 error = {errors1.phone}
                                                onChange={(event) => handleFormChange(event, index)} value={form.phoneno} />
                                            </div>
                                            <Dropdown
                                                label=" Gender"
                                                options={gender_type}
                                                name={"gender"}
                                                state={form1}
                                                setState={setForm1}
                                                required
                                                error = {errors1.gender}
                                            />

                                        </div>
                                        <FileInputBox name="member_id" accept="image/png, image/jpeg" type="file" onChange={(e) => handleImageChange(e, index)} label="Upload Screenshot of ID" required 
                                         error = {errors1.member_id}
                                        />

                                        {form1.length > 1 &&
                                            (<><Buttons
                                                value="remove member"
                                                onClick={() => removefields(index)}
                                                classNames=" my-2"
                                                disabled={true}
                                            /></>)}
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
                                name='isPICT'
                                error = {errors2.isPICT}
                                required />
                            {form2.isPICT === "0" && (
                                <>
                                    <RadioButtons
                                        label='Is International ?'
                                        options={country_arr}
                                        state={form2}
                                        setState={setForm2}
                                        name='isInternational' required
                                        error = {errors2.isInternational} />
                                    <div className=" mx-1 my-2">
                                        <InputBox
                                            label="College"
                                            name={"college"}
                                            type="text"
                                            placeholder="college name"
                                            required
                                            error = {errors2.college}
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
                                            error = {errors2.country}
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
                                                error = {errors2.state}
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
                                                error = {errors2.district}
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
                                        error = {errors2.locality}
                                    />

                                    <InputBox
                                        type="text"
                                        label="Referral"
                                        name="referral"
                                        placeholder="Referral ID given by Campus Ambassador"
                                        required
                                        error = {errors2.referral}
                                        onChange={(e) => handleInputChange2(e)}
                                        value={form2.referral}
                                    />
                                </>
                            )}
                            <Dropdown
                                label=" Which year are you in?"
                                options={year_arr}
                                name={"year"}
                                state={form2}
                                setState={setForm2}
                                required
                                error = {errors2.year}
                            />
                        </>
                    )}
                    <div className="flex justify-between">
                        {formStep > 1 && formStep < 3 ? (
                            <Buttons
                                className="mx-2 my-2"
                                value=" Previous Step"
                                onClick={prevForm}
                            />
                        ) : (
                            ""
                        )}

                        {formStep === 2 ? (
                            <Buttons
                                className=" mx-2 my-2 p-1 "
                                value="Submit"
                                onClick={nextForm}
                            />
                        ) : (
                            formStep < 2 && (
                                <Buttons
                                    className=" mx-2 my-2 p-1 "
                                    value="Next Step"
                                    onClick={nextForm}
                                />
                            )
                        )}

                        {formStep === 3 && <h1 className=" text-gold text-3xl">Thank you for registering for Pradnya!!!</h1>}
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

export default TeamPradnya;
