import "../styles/event_registrations.css";
import React from "react";
import { useState } from "react";
import InputBox from "../../inputBox";
import Buttons from "../../buttons";
import styled from 'styled-components';
import FileInputBox from "../../fileInputBox";
import { RadioButtons, toast } from "../../../components";
import Dropdown from "../../dropdown";

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
    const addfields = () => {
        console.log(form1.at(-1))
        for (const property in form1.at(-1)) {
            console.log(form1.at(-1)[property])
            if (form1.at(-1)[property] == '') {
                console.log("error")
                return
            }
        }

        let object = {
            name: "",
            email: "",
            phoneno: "",
            gender: "",
            member_id: "",
        };

        setForm1([...form1, object]);
    };
    
    const removefields = (index) => {
    
            let data = [...form1];
            data.splice(index, 1);
            setForm1(data);
    
    };

    const handleInputChange1 = (e) => {
        const { name, value } = e.target;
        setForm1({ ...form1, [name]: value });
        console.log(form1);
    }

    //form 2

    const [form2, setForm2] = useState(

        {
            college: "",
            country: "",
            state: "",
            district: "",
            city: "",
            locality: "1",
            leader: "",
            year:"",

        }
    )
    const handleFormChange = (event, index) => {
        const { name, value } = event.target;
        setForm1((prevState) => {
            // errors1[name] !== "" &&
            //     setErrors1((prevState) => ({ ...prevState, [name]: "" }));
            let data = [...prevState];
            data[index][name] = value;
            return data;
        });
    };
    const handleImageChange = (event, index) => {
        let data = [...form1];
        data[index][event.target.name] = event.target.files[0];
        console.log(event.target.files);
        setForm1(data);
    };
    const handleInputChange2 = (e) => {

        const { name, value } = e.target;
        if (name === "pict" && value === "1") {
            setForm2((form2) => ({
                ...form2,
                college: "Pune Institute Of Computer Technology",
                country: "India",
                state: "Maharashtra",
                district: "Pune",
                city: "Pune",
                locality: "1",
                leader: "test1@gmail.com"
            }));
        } else if (name === "pict" && value === "0") {
            setForm2((form2) => ({
                ...form2,
                college: "",
                country: "",
                state: "",
                district: "",
                city: "",
                locality: "",
                leader: ""
            }));
        }
        else {
            setForm2({ ...form2, [name]: value });
            console.log(form2);
        }
    }


    //steps for whole form
    const [formStep, setFormStep] = React.useState(1);

    const prevForm = (e) => {
        // e.preventDefault();
        setFormStep((currentStep) => currentStep - 1);
        setActiveStep(activeStep - 1)
    };

    const nextForm = (e) => {
        e.preventDefault();
        if (formStep === 1) {
            for (const property in form1) {
                console.log(form1.length)
                if(form1.length == 1)
                    {toast.warn("Atleast one member needed!")
                    return}
                if (form1[property] == "") {
                    
                    toast.warn("Please enter all fields!")
                    console.log("error")
                    return

                }
            }
        }
        if (formStep === 2) {
            for (const property in form2) {

                if (form2[property] == "") {
                    toast.warn("Please enter all fields!")
                    console.log("error")
                    return

                }
            }
        }
        console.log(form2);
        setFormStep((currentStep) => currentStep + 1);
        setActiveStep(activeStep + 1)


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
                        {form1.length<2 &&(<>
                            <Buttons
                                value="add members"
                                onClick={addfields}
                                classNames=" my-2"
                            />
                        </>)}
                            {form1.map((form, index) => {
                                return (
                                    <div key={index}>
                                        <InputBox label="Name"  name="name"  type="text"  placeholder="name "  required  onChange={(event) => handleFormChange(event, index)}  value={form.name} />
                                        <InputBox label="Email ID"  name="email" type="text"  placeholder="email " required  onChange={(event) => handleFormChange(event, index)}  value={form.email} />
                                        <div className="flex">
                                            <div className="mr-1 w-1/2">
                                                <InputBox label="Phone No"   name="phoneno"  type="number"  placeholder="phone number" required onChange={(event) => handleFormChange(event, index)} value={form.phoneno} />
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

                                       {form1.length>1 &&
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
                                <input type="radio" value="1" name="pict" onChange={handleInputChange2} /> Yes
                                <input
                                    type="radio"
                                    value="0"
                                    name="pict"
                                    className="ml-10"
                                    onChange={handleInputChange2}
                                />{" "}
                                No
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
                            <div className="flex mx-1 ">
                                <div className="mx-1 my-2">
                                    <InputBox
                                        label="Country"
                                        name={"country"}
                                        type="text"
                                        placeholder="country"
                                        required
                                        onChange={(e) => handleInputChange2(e)}

                                        value={form2.country}
                                    />
                                </div>

                            </div>

                            <div className="flex mx-1 ">
                                <div className="mr-1 w-1/2">
                                    <InputBox
                                        label="City"
                                        name={"city"}
                                        type="text"
                                        placeholder="city"
                                        required
                                        onChange={(e) => handleInputChange2(e)}

                                        value={form2.city}
                                    />
                                </div>
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