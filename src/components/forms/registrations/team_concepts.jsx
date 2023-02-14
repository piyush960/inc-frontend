import "../styles/event_registrations.css";
import React, { useRef } from "react";
import { useState } from "react";
import InputBox from "../../inputBox";
import Buttons from "../../buttons";
function TeamConcepts() {

    //form0

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

            }
        ]
    )

    const handleInputChange0 = (e) => {
        const { label, value } = e.target;
        setForm0({ ...form0, [label]: value });
        console.log(form0);
       //    setForm0(form0);

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
        setformfields(formfields);
    };

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
                college : "",
                country : "",
                state : "",
                district : "",
                locality : ""

            }
        ]
    )

    const handleInputChange2 = (e) => {
        // const { title, value } = e.target;
        // setForm0({ ...form0, [title]: value });
        console.log(form2);
        setForm2(form2);

    }

    //steps for whole form
    const [formStep, setFormStep] = React.useState(0);

    const prevForm = () => {
        setFormStep((currentStep) => currentStep - 1);
    };

    const nextForm = (e) => {
        e.preventDefault();
        console.log(formfields);
        setFormStep((currentStep) => currentStep + 1);
    };

    //dropdown

    const [option, setOption] = useState();

    function handleChange(event) {
        setOption(event.target.value);
    }

    return (
        <div className=" mx-16 my-6">
            <form className="rounded-lg px-8 pt-6 pb-8 mb-4 border">
                {/* form 0 */}
                {formStep === 0 && (
                    <>
                        <InputBox
                            type="text"
                            label={"Title"}
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
                                    // value = {option.domain}
                                    // onChange={handleChange}
                                    className="w-full h-14 bg-faint_blue font-gilroy text-gold text-lg px-3 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20"
                                >
                                    <option value="Application Development">Application Development</option>
                                    <option value="Communication Networks And Security Systems">Communication Networks And Security Systems</option>
                                    <option value="Digital/ Image/ Speech/ Video Processing">Digital/ Image/ Speech/ Video Processing</option>
                                    <option value="Embedded/ VLSI System">Embedded/ VLSI System</option>
                                    <option value="Machine Learning and Pattern Recognition">Machine Learning and Pattern Recognition</option>
                                    <option value="Select" selected className="text-white">
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
                                    // value = {option.domain}
                                    // onChange={handleChange}
                                    className="w-full h-14 bg-faint_blue font-gilroy text-gold text-lg px-3 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20"
                                >
                                    <option value="Open Hardware">Open Hardware</option>
                                    <option value="Open Software">Open Software</option>
                                    <option value="Select" selected className="text-white">
                                        Select
                                    </option>
                                </select>
                            </div>
                        </div>
                        <InputBox
                            type="text"
                            label={"Guide_Name"}
                            placeholder={"Name"}
                            classNames=""
                            required
                            onChange={(e) => handleInputChange0(e)}
                            value={form0.guide_name}
                        ></InputBox>
                        <InputBox
                            type="email"
                            label={"Guide_Email"}
                            placeholder={"Email"}
                            classNames=""
                            required
                            onChange={(e) => handleInputChange0(e)}
                            value={form0.guide_email}
                        ></InputBox>
                        <InputBox
                            type="number"
                            label={"Guide_Phone"}
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
                            <input type="radio" value="Yes" name="sponsor" /> Yes
                            <input
                                type="radio"
                                value="No"
                                name="sponsor"
                                className="ml-10"
                            />{" "}
                            No
                        </div>
                        <InputBox
                            type="text"
                            label={"If yes, then name of company?"}
                            placeholder={"Company name"}
                            classNames=""
                            required
                            onChange={(e) => handleInputChange0(e)}
                            value={form0.company_name}
                        ></InputBox>
                        <div className="my-5">
                            <p className="input-label font-medium mb-3 text-white text-lg">
                                NDA signed or not?
                            </p>
                            <input type="radio" value="Yes" name="nda" /> Yes
                            <input type="radio" value="No" name="nda" className="ml-10" /> No
                        </div>
                        <InputBox
                            type="textarea"
                            label={"Abstract"}
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
                            <input type="radio" value="Yes" name="mode" /> Online
                            <input
                                type="radio"
                                value="No"
                                name="mode"
                                className="ml-10"
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
                                        type="text"
                                        placeholder="name "
                                        required
                                        onChange={(event) => handleFormChange(event, index)}
                                        value={form.name}
                                    />
                                    <InputBox
                                        label="email"
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
                                                type="text"
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
                                                    // name="option"
                                                    // onChange={handleChange}
                                                    className="w-full h-14 bg-faint_blue font-gilroy text-gold text-lg px-3 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20"
                                                >
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                    <option value="Select" selected className="text-white">
                                                        Select
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
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
                                    placeholder="state"
                                    required
                                    onChange={(e) => handleInputChange2(e)}
                                    value={form2.state}
                                />
                            </div>
                            <div className="ml-1 w-1/2">
                                <InputBox
                                    label="district"
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
                                <select className="w-full h-14 bg-faint_blue font-gilroy text-gold text-lg px-3 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20">
                                    <option>Rural</option>
                                    <option>Urban</option>
                                    <option selected className="text-white">
                                        Select
                                    </option>
                                </select>
                            </div>
                        </div>
                    </>
                )}
                <div className="flex">
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

                    {formStep === 3 && <h1>Thank you for registering for concepts!!!</h1>}
                </div>
            </form>
            {/* <Buttons
                value="submit"
                onClick={submit}
                classNames='mx-2 my-2'
            /> */}
        </div>
    );
}

export default TeamConcepts;
