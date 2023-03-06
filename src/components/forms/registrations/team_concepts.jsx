import "../styles/event_registrations.css";
import { useRef, useState } from "react";
import styled from 'styled-components';
import { InputBox, Buttons, FileInputBox, toast, NoteBox } from "../../index.js";
import { useRegisterStep1, useRegisterStep2, useRegisterStep3, useRegisterStep4 } from "../../../hooks/events.hooks";
import { domains, paymentLinks } from "../../../static/data";

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

const initialErrorsForm3 = {
    payment_id: "",
}

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
                        member_id: "",
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
        setFormFields(data => data.slice(index, 1));
    };

    //form 2

    const [form2, setForm2] = useState(

        {
            isPICT: "0",
            isInternational: "0",
            college: "",
            country: "",
            state: "",
            district: "",
            city: "",
            locality: "1",
            mode: "1",
            reason_of_mode: "",
            referral: ""
        }

    )
    const [errors2, setErrors2] = useState(initialErrorsForm2);
    const registerUserMutationForm2 = useRegisterStep3(setErrors2, 'concepts');

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
                isInternational: "0"
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
                isInternational: ""
            }));
        } else if (name === 'isInternational' && value === '0') {
            setForm2((form2) => ({
                ...form2,
                country: "India",
                isPICT: "0",
                [name]: value
            }));
            setPaymentStatus(false);
        } else if (name === 'isInternational' && value === '1') {
            setForm2((form2) => ({
                ...form2,
                country: "",
                isPICT: "0",
                [name]: value
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
    }

    const handleSelectChange2 = (e) => {
        const { name, value } = e.target;
        setForm2((prevState) => {
            errors2[name] !== "" &&
                setErrors2((prevState) => ({ ...prevState, [name]: "" }));
            return { ...prevState, [name]: value };
        });
    };

    //form 3
    const [paymentStatus, setPaymentStatus] = useState(true)
    const paymentRef = useRef('')
    const [errors3, setErrors3] = useState(initialErrorsForm3)
    const registerUserMutationForm3 = useRegisterStep4(setErrors3, 'concepts')

    //steps for whole form
    const [formStep, setFormStep] = useState(2);

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
            for (const property in form2) {
                if (form2[property] === "") {
                    if (property === "reason_of_mode" && form2["mode"] === "1")
                        continue;
                    else if (property === "referral") continue
                    toast.warn("Please enter all fields!")
                    return
                }
            }
            registerUserMutationForm2.mutate(form2, {
                onSuccess: () => {
                    setErrors2(initialErrorsForm2);
                    if (form2.isPICT === '1' || form2.isInternational === '1') {
                        const temp = form2.isPICT === '1' ? { isPICT: '1' } : { isInternational: '1' }
                        registerUserMutationForm3.mutate(temp, {
                            onSuccess: () => {
                                toast.success("Completed Registration !", { icon: "✅" });
                                setPaymentStatus(true)
                                setFormStep(currentStep => currentStep + 1);
                                setActiveStep(activeStep => activeStep + 1);
                            }
                        })
                    } else {
                        toast.success("Completed Step 3️⃣ !", { icon: "✅" });
                        const win = window.open(paymentLinks.get('test'), "_blank")
                        setFormStep(currentStep => currentStep + 1);
                        setActiveStep(activeStep => activeStep + 1);
                        win.focus();
                    }
                },
            });
        }
        if (formStep === 3) {
            if (paymentRef.current.value.length < 8) {
                toast.warn("Please enter valid Transaction ID !")
                return
            }
            registerUserMutationForm3.mutate({ payment_id: paymentRef.current.value?.trim() }, {
                onSuccess: () => {
                    toast.success("Completed Step 4️⃣ !", { icon: "✅" });
                    setActiveStep(activeStep => activeStep + 1);
                    setPaymentStatus(true)
                }
            })
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
                    {/* form 0 */}
                    {formStep === 0 && (
                        <>
                            <NoteBox title='Note' text='Please complete the payment within 60 minutes before your session expires.' />
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
                            <div className="relative z-0  w-full group">
                                <p className="input-label font-medium mb-3 text-white text-lg after:content-['*'] after:ml-0.5 after:text-gold">
                                    Domain Of Project
                                </p>
                                <div className="relative w-full lg:w-full block px-0  text-sm">
                                    <select
                                        name={"domain"}
                                        onChange={(e) => handleSelectChange0(e)}
                                        // onChange={handleChange}
                                        className="w-full h-14 bg-faint_blue/20 font-gilroy text-gold text-lg px-3 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue/30 focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20"
                                    >
                                        {domains.map(domain => (
                                            <option value={domain.value} key={domain.value} className="bg-faint_blue">{domain.label}</option>
                                        ))}
                                        <option value="" selected className="text-white">
                                            Select
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="relative z-0  w-full group">
                                <p className="input-label font-medium mb-3 text-white text-lg after:content-['*'] after:ml-0.5 after:text-gold">
                                    Project Type
                                </p>
                                <div className="relative w-full lg:w-full block px-0  text-sm">
                                    <select
                                        name={"project_type"}
                                        onChange={(e) => handleSelectChange0(e)}
                                        className="w-full h-14 bg-faint_blue font-gilroy text-gold text-lg px-3 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20"
                                    >
                                        <option value="Open Hardware/Firmware">Open Hardware/Firmware</option>
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
                            <div className="my-5">
                                <p className="input-label font-medium mb-3 text-white text-lg after:content-['*'] after:ml-0.5 after:text-gold">
                                    Is the project sponsored or not?
                                </p>
                                <input type="radio" value="1" name="sponsored" onChange={handleInputChange0} /> Yes
                                <input
                                    type="radio"
                                    value="0"
                                    name="sponsored"
                                    className="ml-10"
                                    onChange={handleInputChange0}
                                />{" "}
                                No
                            </div>
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
                                    <div className="my-5">
                                        <p className="input-label font-medium mb-3 text-white text-lg after:content-['*'] after:ml-0.5 after:text-gold">
                                            NDA signed or not?
                                        </p>
                                        <input type="radio" value="1" name="nda" onChange={handleInputChange0} /> Yes
                                        <input type="radio" value="0" name="nda" className="ml-10 " onChange={handleInputChange0} /> No
                                    </div>
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
                            <NoteBox title='Note' text='Please complete the payment within 60 minutes before your session expires.' />
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
                                            <div className="ml-1 w-1/2">
                                                <p className="input-label font-medium  text-white text-lg after:content-['*'] after:ml-0.5 after:text-gold">
                                                    State
                                                </p>
                                                <div className="relative w-full lg:w-full block px-0  text-sm">
                                                    <select
                                                        name="gender"
                                                        onChange={(event) => handleSelectChange1(event, index)}
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

                                        {/* {membersCount <= index && (<Buttons
                                            value="remove member"
                                            onClick={removefields(index)}
                                            classNames=" my-2"
                                            disabled={true}
                                        />)} */}
                                    </div>
                                );
                            })}
                        </>
                    )}
                    {/* form 2 */}
                    {formStep === 2 && (
                        <>
                            <NoteBox title='Note' text='Please complete the payment within 60 minutes before your session expires.' />
                            <div className="my-5">
                                <p className="input-label font-medium mb-3 text-white text-lg after:content-['*'] after:ml-0.5 after:text-gold">
                                    Are you PICTian or not?
                                </p>
                                <input type="radio"
                                    value="1"
                                    name="isPICT"
                                    onChange={handleInputChange2} /> Yes
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
                                        <input type="radio" value="0" name="isInternational" onChange={e => handleInputChange2(e)} /> No
                                        <input
                                            type="radio"
                                            value="1"
                                            name="isInternational"
                                            className="ml-10"
                                            onChange={e => handleInputChange2(e)}
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
                                            readonly={form2.isInternational === "0"}
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
                                    <div className="flex mx-1 gap-2">
                                        <div className="w-1/2">
                                            <p className="input-label font-medium text-white text-lg after:content-['*'] after:ml-0.5 after:text-gold">
                                                Locality
                                            </p>
                                            <select
                                                name={"locality"}
                                                onChange={(e) => handleInputChange2(e)}
                                                className="w-full h-12 bg-faint_blue font-gilroy text-gold text-lg px-4 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20">
                                                <option value="0" selected={form2.locality === "0"}>Rural</option>
                                                <option value="1" selected={form2.locality === "1"}>Urban</option>
                                                <option disabled selected className="text-white">Select</option>
                                            </select>
                                        </div>
                                        <div className="w-1/2">
                                            <InputBox
                                                label="City"
                                                name={"city"}
                                                type="text"
                                                placeholder="City"
                                                required
                                                onChange={(e) => handleInputChange2(e)}
                                                value={form2.city}
                                            />
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <p className="input-label font-medium mb-3 text-white text-lg after:content-['*'] after:ml-0.5 after:text-gold">
                                            Preferred mode of presentation
                                        </p>
                                        <input type="radio" value="0" name="mode" onChange={e => handleInputChange2(e)}
                                            disabled={form2.city.includes("Pune")} checked={form2.mode === "0"} /> Online
                                        <input
                                            type="radio"
                                            value="1"
                                            name="mode"
                                            className="ml-10"
                                            onChange={e => handleInputChange2(e)}
                                            checked={form2.city.includes("Pune") || form2.mode === "1"}
                                            disabled={form2.city.includes("Pune")}
                                        />{" "}
                                        Offline
                                    </div>
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
                                        onChange={(e) => handleInputChange2(e)}
                                        value={form2.referral}
                                    />
                                </>
                            )}
                        </>
                    )}
                    {formStep === 3 && ( paymentStatus ? (
                        <div className="shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:p-8 border border-light_blue w-full">
                            <p className="text-xl text-center text-gold font-bold mb-3">Thank you for registering in InC'23. Looking forward to have you in person</p>
                            <NoteBox title='Note' text='Registration payment will be verified and will be informed by email.' />
                        </div>
                    ) : (
                        <div className="mb-6 shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:p-8 border border-light_blue w-full">
                            <NoteBox title='Note' text='Please complete the payment within 60 minutes before your session expires.' />
                            <InputBox label='Transaction ID' type='text' name='payment_id' placeholder='Enter Transaction ID' inputref={paymentRef} minlenght='8' error={errors3.payment_id} className='tracking-widest' required />
                        </div>
                    ))}
                    <div className="flex justify-between">
                        {(formStep > 0 && formStep < 4) && (
                            <Buttons
                                className="mx-2 my-2"
                                value=" Previous Step"
                                onClick={prevForm}
                                loading={registerUserMutationForm1.isLoading || registerUserMutationForm2.isLoading}
                            />
                        )}
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
                            formStep === 2 && (paymentStatus ? (
                                <Buttons
                                    className=" mx-2 my-2  "
                                    value="Submit"
                                    onClick={nextForm}
                                    loading={registerUserMutationForm0.isLoading || registerUserMutationForm1.isLoading || registerUserMutationForm2.isLoading}
                                />
                            ) : (
                                <Buttons
                                    className=" mx-2 my-2  "
                                    value="Pay (Rs.300)"
                                    onClick={nextForm}
                                    loading={registerUserMutationForm0.isLoading || registerUserMutationForm1.isLoading || registerUserMutationForm2.isLoading}
                                />
                            )
                        ))
                        }
                        {formStep < 2 && (
                            <Buttons
                                className=" mx-2 my-2  "
                                value="Next Step"
                                onClick={nextForm}
                                loading={registerUserMutationForm0.isLoading || registerUserMutationForm1.isLoading || registerUserMutationForm2.isLoading}
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
        </MainContainer>
    );
}

export default TeamConcepts;