import "../styles/event_registrations.css";
import React, { useRef } from "react";
import { useState } from "react";
import InputBox from "../../inputBox";
import Buttons from "../../buttons";
import styled from 'styled-components';
import FileInputBox from "../../fileInputBox";

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

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 100px;
`

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
  },
  {
    label: 'Step4',
    step: 4,
  },
]
const totalSteps = steps.length


function TeamConcepts() {

    //form0
    const [activeStep, setActiveStep] = React.useState(1);
    const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`
    const [form0, setForm0] = useState(                      
        [
            {
                title: "",
                domain: "",
                type: "",
                guide_name: "",
                guide_email: "",
                guide_phone: "",
                company_name: "",
                abstract: "",
                nda : "",
                sponsor : "",
                mode : "",


            }
        ]
    )

    const handleInputChange0 = (e) => {
        const { name, value } = e.target;
        setForm0({ ...form0, [name]: value });
        console.log(form0);
        

    }

    const handleSelectChange0 = (e) => {
        const { name, value } = e.target;
        setForm0({ ...form0, [name]: value });
        console.log(form0);
        //setForm0(form0);

    }

    //form1

    const [formfields, setformfields] = useState([                 
        {

            name: "",
            email: "",
            phoneno: "",
            gender: "",
            

        },
    ]);

    const handleFormChange = (event, index) => {
        let data = [...formfields];
        data[index][event.target.name] = event.target.value;
        console.log(formfields);
        setformfields(data);
    };

    const handleSelectChange1 =(event , index) =>
    {
        let data = [...formfields];
        console.log(event.target.value)
        data[index][event.target.name] = event.target.value;
        console.log(formfields);
        setformfields(data);
    }

    const addfields = () => {
        let object = {
            name: "",
            email: "",
            phoneno: "",
            gender: "",
        };

        setformfields([...formfields, object]);
    };

    const removefields = (index) => {
        let data = [...formfields];
        data.splice(index, 1);
        setformfields(data);
    };

    //form 2

    const [form2 , setForm2] = useState (
        [
            {
                college : "Pune Institue of Computer Technology",
                country : "India",
                state : "Maharashtra",
                district : "Pune",
                locality : "dhankwadi"

            }
        ]
    )

    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setForm2({ ...form2, [name]: value });
        console.log(form2);
        

    }

    const handleSelectChange2 = (e) =>
    {
        const { name, value } = e.target;
        setForm2({ ...form2, [name]: value });
        console.log(form2);
    }

    //steps for whole form
    const [formStep, setFormStep] = React.useState(0);

    const prevForm = (e) => {
        // e.preventDefault();
        setFormStep((currentStep) => currentStep - 1);
        setActiveStep(activeStep - 1)
    };

    const nextForm = (e) => {
        e.preventDefault();
        console.log(formfields);
        console.log(form0);
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
        <div className=" mx-16 my-6">
            <form className="rounded-lg px-8 pt-6 pb-8 mb-4 border">
                {/* form 0 */}
                {formStep === 0 && (
                    <>
                        <InputBox
                            type="text"
                            label={"Project Title"}
                            name = {"title"}
                            placeholder={"Project title"}
                            classNames=""
                            required
                            onChange={(e) => handleInputChange0(e)}
                            value={form0.title}
                        ></InputBox>
                        <div className="relative z-0  w-full group">
                            <p className="input-label font-medium mb-3 text-white text-lg">
                                Domain Of Project
                            </p>
                            <div className="relative w-full lg:w-full block px-0  text-sm">
                                <select
                                    name = {"domain"}
                                    onChange = {(e)=>handleSelectChange0(e)}
                                    // onChange={handleChange}
                                    className="w-full h-14 bg-faint_blue font-gilroy text-gold text-lg px-3 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20"
                                >
                                    <option value="Application Development">Application Development</option>
                                    <option value="Communication Networks And Security Systems">Communication Networks And Security Systems</option>
                                    <option value="Digital/ Image/ Speech/ Video Processing">Digital/ Image/ Speech/ Video Processing</option>
                                    <option value="Embedded/ VLSI System">Embedded/ VLSI System</option>
                                    <option value="Machine Learning and Pattern Recognition">Machine Learning and Pattern Recognition</option>
                                    <option value="" selected className="text-white">
                                        Select
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="relative z-0  w-full group">
                            <p className="input-label font-medium mb-3 text-white text-lg">
                                Project Type
                            </p>
                            <div className="relative w-full lg:w-full block px-0  text-sm">
                                <select
                                    name = {"type"}
                                    onChange = {(e)=>handleSelectChange0(e)}
                                    className="w-full h-14 bg-faint_blue font-gilroy text-gold text-lg px-3 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20"
                                >
                                    <option value="Open Hardware">Open Hardware</option>
                                    <option value="Open Software">Open Software</option>
                                    <option value="" selected className="text-white">
                                        Select
                                    </option>
                                </select>
                            </div>
                        </div>
                        <InputBox
                            type="text"
                            label={"Guide_Name"}
                            name = {"guide_name"}
                            placeholder={"Name"}
                            classNames=""
                            required
                            onChange={(e) => handleInputChange0(e)}
                            value={form0.guide_name}
                        ></InputBox>
                        <InputBox
                            type="email"
                            label={"Guide_Email"}
                            name = {"guide_email"}
                            placeholder={"Email"}
                            classNames=""
                            required
                            onChange={(e) => handleInputChange0(e)}
                            value={form0.guide_email}
                        ></InputBox>
                        <InputBox
                            type="number"
                            label={"Guide_Phone"}
                            name = {"guide_phone"}
                            placeholder={"Phone"}
                            classNames=""
                            required
                            onChange={(e) => handleInputChange0(e)}
                            value={form0.guide_phone}
                        ></InputBox>
                        <div className="my-5">
                            <p className="input-label font-medium mb-3 text-white text-lg">
                                Is the project sponsored or not?
                            </p>
                            <input type="radio" value="Yes" name="sponsor" onChange = {handleInputChange0} /> Yes
                            <input
                                type="radio"
                                value="No"
                                name="sponsor"
                                className="ml-10"
                                onChange = {handleInputChange0}
                            />{" "}
                            No
                        </div>
                        <InputBox
                            type="text"
                            label={"If yes, then name of company?"}
                            placeholder={"Company name"}
                            name = {"company_name"}
                            classNames=""
                            required
                            onChange={(e) => handleInputChange0(e)}
                            value={form0.company_name}
                        ></InputBox>
                        <div className="my-5">
                            <p className="input-label font-medium mb-3 text-white text-lg">
                                NDA signed or not?
                            </p>
                            <input type="radio" value="Yes" name="nda" onChange = {handleInputChange0} /> Yes
                            <input type="radio" value="No" name="nda" className="ml-10 " onChange = {handleInputChange0} /> No
                        </div>
                        <InputBox
                            type="textarea"
                            label={"Abstract"}
                            name = {"abstract"}
                            placeholder={"In 300 words or less"}
                            classNames=""
                            required
                            onChange={(e) => handleInputChange0(e)}
                            value={form0.abstract}
                        ></InputBox>
                        <div className="my-5">
                            <p className="input-label font-medium mb-3 text-white text-lg">
                                Preferred mode of presentation
                            </p>
                            <input type="radio" value="Online" name="mode" onChange = {handleInputChange0} /> Online
                            <input
                                type="radio"
                                value="Offline"
                                name="mode"
                                className="ml-10"
                                onChange = {handleInputChange0}
                            />{" "}
                            Offline
                        </div>
                    </>
                )}
                {/* form 1 */}
                {formStep === 1 && (
                    <>
                        <Buttons
                            value="add members"
                            onClick={addfields}
                            classNames=" my-2"
                        />

                        {formfields.map((form, index) => {
                            return (
                                <div key={index}>
                                    <InputBox
                                        label="name"
                                        name = "name"
                                        type="text"
                                        placeholder="name "
                                        required
                                        onChange={(event) => handleFormChange(event, index)}
                                        value={form.name}
                                    />
                                    <InputBox
                                        label="email"
                                        name = "email"
                                        type="text"
                                        placeholder="email "
                                        required
                                        onChange={(event) => handleFormChange(event, index)}
                                        value={form.email}
                                    />
                                    <div className="flex">
                                        <div className="mr-1 w-1/2">
                                            <InputBox
                                                label="phoneno"
                                                name = "phoneno"
                                                type="number"
                                                placeholder="phone number"
                                                required
                                                onChange={(event) => handleFormChange(event, index)}
                                                value={form.phoneno}
                                            />
                                        </div>
                                        <div className="ml-1 w-1/2">
                                            <p className="input-label font-medium  text-white text-lg">
                                                Gender
                                            </p>
                                            <div className="relative w-full lg:w-full block px-0  text-sm">
                                                <select
                                                    name = "gender"
                                                    onChange = {(event)=>handleSelectChange1(event,index)}
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
                                    <FileInputBox accept="image/png, image/jpeg" type="file" label="Upload Screenshot of ID" required/>

                                       <Buttons
                                        value="remove member"
                                        onClick={() => removefields(index)}
                                        classNames=" my-2"
                                    />
                                </div>
                            );
                        })}
                    </>
                )}

                {/* form 2 */}
                {formStep === 2 && (
                    <>
                        <div className=" mx-1 my-2">
                            <InputBox
                                label="college"
                                name = {"college"}
                                type="text"
                                placeholder="college name"
                                required
                                onChange={(e) => handleInputChange2(e)}
                                value={form2.college}
                            />
                        </div>
                        <div className="mx-1 my-2">
                            <InputBox
                                label="country"
                                name = {"country"}
                                type="text"
                                placeholder="country"
                                required
                                onChange={(e) => handleInputChange2(e)}
                                value={form2.country}
                            />
                        </div>
                        <div className="flex mx-1 ">
                            <div className="mr-1 w-1/2">
                                <InputBox
                                    label="state"
                                    type="text"
                                    name = {"state"}
                                    placeholder="state"
                                    required
                                    onChange={(e) => handleInputChange2(e)}
                                    value={form2.state}
                                />
                            </div>
                            <div className="ml-1 w-1/2">
                                <InputBox
                                    label="district"
                                    name = {"district"}
                                    type="text"
                                    placeholder="district"
                                    required
                                    onChange={(e) => handleInputChange2(e)}
                                    value={form2.district}
                                />
                            </div>
                        </div>
                        <div className=" mx-1 my-2">
                            <p className="input-label font-medium mb-3 text-white text-lg">
                                Locality
                            </p>
                            <div className="relative w-full lg:w-full block px-0  text-sm">
                                <select 
                                name = {"locality"}
                                onChange = {(e)=>handleSelectChange2(e)}
                                className="w-full h-14 bg-faint_blue font-gilroy text-gold text-lg px-3 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20">
                                    <option value = "Rural">Rural</option>
                                    <option value = "Urban">Urban</option>
                                    <option selected className="text-white">
                                        Select
                                    </option>
                                </select>
                            </div>
                        </div>
                    </>
                )}
                <div className="flex justify-between">
                    {formStep > 0 && formStep < 3 ? (
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

                    {formStep === 3 && <h1 className=" text-gold text-3xl">Thank you for registering for concepts!!!</h1>}
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

export default TeamConcepts;