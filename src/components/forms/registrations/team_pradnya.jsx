import "../styles/event_registrations.css";
import React from "react";
import { useState } from "react";
import { InputBox, Buttons, FileInputBox, toast } from "../../index.js";
import { useRegisterStep1, useRegisterStep2, useRegisterStep3 } from "../../../hooks/events.hooks";
import styled from 'styled-components';

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

function TeamPradnya() {

    const [activeStep, setActiveStep] = React.useState(1);
    const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`

    //form1
    const genderopt = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Other', label: 'Other' }
    ]
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
                leader:"abc@gmail.com",
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
                                        <InputBox label="Name" name="name" type="text" placeholder="name " required onChange={(event) => handleFormChange(event, index)} value={form.name} />
                                        <InputBox label="Email ID" name="email" type="text" placeholder="email " required onChange={(event) => handleFormChange(event, index)} value={form.email} />
                                        <div className="flex">
                                            <div className="mr-1 w-1/2">
                                                <InputBox label="Phone No" name="phoneno" type="number" placeholder="phone number" required onChange={(event) => handleFormChange(event, index)} value={form.phoneno} />
                                            </div>
                                            <div className="ml-1 w-1/2">
                                                <p className="input-label font-medium  text-white text-lg after:content-['*'] after:ml-0.5 after:text-gold">
                                                    Gender
                                                </p>
                                                <div className="relative w-full lg:w-full block px-0  text-sm">
                                                    <select
                                                        name="gender"
                                                        onChange={(event) => handleFormChange(event, index)}
                                                        // onChange={handleChange}
                                                        className="w-full h-14 bg-faint_blue font-gilroy text-gold text-lg px-3 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20"
                                                    >
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Other">Other</option>
                                                        <option value="" selected className="text-white">
                                                            Select
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <FileInputBox name="member_id" accept="image/png, image/jpeg" type="file" onChange={(e) => handleImageChange(e, index)} label="Upload Screenshot of ID" required />

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
                            <div className="my-5">
                                <p className="input-label font-medium mb-3 text-white text-lg after:content-['*'] after:ml-0.5 after:text-gold">
                                    Are you PICTian or not?
                                </p>
                                <input type="radio" value="1" name="isPICT" onChange={handleInputChange2} /> Yes
                                <input
                                    type="radio"
                                    value="0"
                                    name="isPICT"
                                    className="ml-10"
                                    onChange={handleInputChange2}
                                />{" "}
                                No
                            </div>
                            {form2.isPICT === "0" && (
                                <>
                                    <div className="my-5">
                                        <p className="input-label font-medium mb-3 text-white text-lg after:content-['*'] after:ml-0.5 after:text-gold">
                                            Is International ?
                                        </p>
                                        <input type="radio" value="0" name="isInternational" onChange={handleInputChange2}
                                            selected={form2.isPICT === '1'} /> No
                                        <input
                                            type="radio"
                                            value="1"
                                            name="isInternational"
                                            className="ml-10"
                                            onChange={handleInputChange2}
                                        />{" "}
                                        Yes
                                    </div>
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
                                        <div className="ml-1 w-1/2">
                                            
                                            <div className="relative w-full lg:w-full block px-0  text-sm">
                                            <p className="input-label font-medium  text-white text-lg after:content-['*'] after:ml-0.5 after:text-gold">
                                                    State
                                                </p>
                                                    <div className="relative w-full lg:w-full block px-0  text-sm">
                                                    <select
                                                        name="gender"
                                                        onChange={(event) => handleSelectChange2(event)}
                                                        // onChange={handleChange}
                                                        className="w-full h-12 bg-faint_blue font-gilroy text-gold text-lg px-3 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20"
                                                    >
                                                            <option value="">State</option>
                                                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                            <option value="Assam">Assam</option>
                                                            <option value="Bihar">Bihar</option>
                                                            <option value="Chhattisgarh">Chhattisgarh</option>
                                                            <option value="Delhi">Delhi</option>
                                                            <option value="Goa">Goa</option>
                                                            <option value="Gujarat">Gujarat</option>
                                                            <option value="Haryana">Haryana</option>
                                                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                            <option value="Jammu &amp; Kashmir">Jammu &amp; Kashmir</option>
                                                            <option value="Jharkhand">Jharkhand</option>
                                                            <option value="Karnataka">Karnataka</option>
                                                            <option value="Kerala">Kerala</option>
                                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                            <option value="Maharashtra">Maharashtra</option>
                                                            <option value="Manipur">Manipur</option>
                                                            <option value="Meghalaya">Meghalaya</option>
                                                            <option value="Mizoram">Mizoram</option>
                                                            <option value="Nagaland">Nagaland</option>
                                                            <option value="Orissa">Orissa</option>
                                                            <option value="Punjab">Punjab</option>
                                                            <option value="Rajasthan">Rajasthan</option>
                                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                                            <option value="Telangana">Telangana</option>
                                                            <option value="Tripura">Tripura</option>
                                                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                            <option value="Uttarakhand">Uttarakhand</option>
                                                            <option value="West Bengal">West Bengal</option>

                                                        </select>
                                                    </div>
                                                </div>
                                            
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
                                    <div className=" mx-1 my-2">
                                        <p className="input-label font-medium mb-3 text-white text-lg after:content-['*'] after:ml-0.5 after:text-gold">
                                            Locality
                                        </p>
                                        <div className="relative w-full lg:w-full block px-0  text-sm">
                                            <select
                                                name={"locality"}
                                                onChange={(e) => handleInputChange2(e)}
                                                className="w-full h-14 bg-faint_blue font-gilroy text-gold text-lg px-3 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20">
                                                <option value="0" selected={form2.locality == "0"}>Rural</option>
                                                <option value="1" selected={form2.locality == "1"}>Urban</option>
                                                <option disabled selected className="text-white">
                                                    Select
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                            
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
                            <div className="relative z-0  w-full group">
                                <p className="input-label font-medium mb-3 text-white text-lg after:content-['*'] after:ml-0.5 after:text-gold">
                                    Which year are you in?
                                </p>
                                <div className="relative w-full lg:w-full block px-0 my-3 text-sm">
                                    <select
                                        name={"year"}
                                        onChange={(e) => handleInputChange2(e)}
                                        // onChange={handleChange}
                                        className="w-full h-14 bg-faint_blue font-gilroy text-gold text-lg px-3 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20"
                                    >
                                        <option value="1">1st</option>
                                        <option value="2">2nd</option>
                                        <option value="3">3rd</option>
                                        <option value="" selected className="text-white">
                                            Select
                                        </option>
                                    </select>
                                </div>
                            </div>
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