import React, { useState } from "react";
import { Buttons, Dropdown, FormsBanner, InputBox, toast } from "../../components";
import { departments } from "../../static/data";
import { useReferralConcepts } from "../../hooks/referral.hooks";

function ReferralConcepts() {
    // State variables for form fields
    const [formValues, setFormValues] = useState({
        name_faculty: "",
        organization_faculty: "",
        department_faculty: "",
        phone_faculty: "",
        email_faculty: "",
        designation: "",
    });

    const [judgeDetails, setJudgeDetails] = useState([
        {
            name_judge: "",
            phone_judge: "",
            email_judge: "",
            organization_judge: "",
            location_judge: "",
            experience_judge: 3,
            relation_judge: "",
        },
        {
            name_judge: "",
            phone_judge: "",
            email_judge: "",
            organization_judge: "",
            location_judge: "",
            experience_judge: 3,
            relation_judge: "",
        },
        {
            name_judge: "",
            phone_judge: "",
            email_judge: "",
            organization_judge: "",
            location_judge: "",
            experience_judge: 3,
            relation_judge: "",
        },
    ]);

    const referralConcepts = useReferralConcepts()

    // console.log(judgeDetails, judgeDetails.length);

    const mode = [
        {
            value: "1",
            label: "Offline",
        },
        {
            value: "0",
            label: "Online",
        },
    ];

    // State variable for errors
    const [errors, setErrors] = useState({});

    // Event handler for form field changes
    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
        // console.log(name, value);
        setJudgeDetails((prevState) => {
            let data = [...prevState];
            data[index][name] = value;
            return data;
        });
        // console.log(judgeDetails);
    };

    const handleFacultyChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // const newErrors = {};
        // if (formValues.name_faculty=== "") {
        //     newErrors.name_faculty = "Name is required";
        // }

        // if (formValues.organization_faculty === "") {
        //     newErrors.organization_faculty = "Organization is required";
        // }


        // if (!formValues.phone_faculty.match(/^\d{10}$/)) {
        //     newErrors.phone_faculty = "Phone number must be 10 digits";
        // }

        // if (!/^\S+@\S+\.\S+$/.test(formValues.email_faculty)) {
        //     newErrors.email_faculty = "Enter a valid email address";
        // }
        // if (formValues.designation.trim() === "") {
        //     newErrors.designation = "Designation is required";
        // }


        const referralDetails = {
            ...formValues,
            judges: [...judgeDetails],
        };
        console.log(referralDetails)
        referralConcepts.mutate(referralDetails, {
            onSuccess: (res) => {
                console.log(res)
                toast.success('Successfully Registered!', { icon: '💐' });

            },
        });
        // console.log(formValues);
        // console.log(judgeDetails);

        // Form submission logic here (e.g., make an API call)
        console.log("Form submitted:", formValues);
    };

    return (
        <>
            <FormsBanner
                eventName="Judges Referral InC 2024 - Concepts"
                eventDescription="- Your Requested to reffer respective Judge by filling the following Form.<br/><br/> - Please provide atleast one Refernce of the potential Judge. It is really appreciable if judge is made aware about InC-2024 event"
            />
            <div className="md:mx-auto md:my-6 md:flex md:justify-center mt-8">
                <form
                    className="md:w-6/12 w-full rounded-lg px-6 pt-6 pb-8 mb-4 border"
                    onSubmit={handleSubmit}
                >
                    <div className="flex justify-center items-center md:w-full mb-4">
                        <div className="bg-faint_blue text-white p-4 rounded-lg w-3/12 border border-blue-900 shadow-md">
                            <h2 className="text-center text-lg">Referred By</h2>
                        </div>
                    </div>

                    {/* Faculty fields */}
                    <InputBox
                        label="Name of Faculty / Employee (Full Name)"
                        type="text"
                        name="name_faculty"
                        placeholder="First Name    Last Name"
                        value={formValues.name_faculty}
                        onChange={(e) => handleFacultyChange(e)}
                        required
                        error={errors.name_faculty}
                    />
                    <InputBox
                        label="Organization of Faculty/Employee"
                        type="text"
                        name="organization_faculty"
                        placeholder="Enter Organization"
                        value={formValues.organization_faculty}
                        onChange={(e) => handleFacultyChange(e)}
                        required
                        error={errors.organization_faculty}
                    />
                    <div className="md:flex md:flex-wrap md:-mx-2">
                        <div className="md:w-1/2 md:px-2">
                            <Dropdown
                                label="Department of Faculty (Optional)"
                                options={[
                                    { value: "", label: "Select", selected: true },
                                    ...departments,
                                ]}
                                name="department_faculty"
                                state={formValues.department_faculty}
                                setState={setFormValues}
                                error={errors.department_faculty}
                            />
                        </div>
                        <div className="md:w-1/2 md:px-2">
                            <InputBox
                                label="Designation"
                                type="text"
                                name="designation"
                                placeholder="Enter Designation"
                                value={formValues.designation}
                                onChange={(e) => handleFacultyChange(e)}
                                required
                                error={errors.designation}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:flex-wrap md:-mx-2">
                        <div className="md:w-1/2 md:px-2">
                            <InputBox
                                label="Phone"
                                type="tel"
                                name="phone_faculty"
                                placeholder="Enter Phone no."
                                maxLength={10}
                                value={formValues.phone_faculty}
                                onChange={(e) => handleFacultyChange(e)}
                                required
                                error={errors.phone_faculty}
                            />
                        </div>
                        <div className="md:w-1/2 md:px-2">
                            <InputBox
                                label="Email"
                                type="email"
                                name="email_faculty"
                                placeholder="Enter Email"
                                value={formValues.email_faculty}
                                onChange={(e) => handleFacultyChange(e)}
                                required
                                error={errors.email_faculty}
                            />
                        </div>
                    </div>
                    <br />
                    <br />

                    {/* Judge 1 fields */}
                    {Array.isArray(judgeDetails) &&
                        judgeDetails.map((judge, index) => {
                            return (
                                <div key={index}>
                                    <div className="flex justify-center items-center md:w-full mt-2 mb-4">
                                        <div className="bg-faint_blue text-white p-4 rounded-lg w-3/12 border border-blue-900 shadow-md">
                                            <h2 className="text-center text-lg">Judge {index + 1}</h2>
                                        </div>
                                    </div>
                                    <InputBox
                                        label={`Name of Judge ${index + 1}`}
                                    type="text"
                                    name="name_judge"
                                    placeholder="First Name    Last Name"
                                    value={judgeDetails[index].name_judge}
                                    onChange={(e) => handleInputChange(e, index)}
                                    {...(index !== 0 ? {} : { required: true })}
                                    error={errors.name_judge_1}
                      />

                                    <div className="md:flex md:flex-wrap md:-mx-2">
                                        <div className="md:w-1/2 md:px-2">
                                            <InputBox
                                                label="Phone"
                                                type="tel"
                                                name="phone_judge"
                                                placeholder="Enter Phone no."
                                                maxLength={10}
                                                value={judgeDetails[index].phone_judge}
                                                onChange={(e) => handleInputChange(e, index)}
                                                {...(index !== 0 ? {} : { required: true })}
                                                error={errors.phone_judge_1}
                                            />
                                        </div>
                                        <div className="md:w-1/2 md:px-2">
                                            <InputBox
                                                label="Email"
                                                type="email"
                                                name="email_judge"
                                                placeholder="Enter Email"
                                                value={judgeDetails[index].email_judge}
                                                onChange={(e) => handleInputChange(e, index)}
                                                {...(index !== 0 ? {} : { required: true })}
                                                error={errors.email_judge_1}
                                            />
                                        </div>
                                    </div>
                                    <InputBox
                                        label={`Company / Organization of Judge ${index + 1}`}
                                    type="text"
                                    name="organization_judge"
                                    placeholder="Enter Organization Name"
                                    value={judgeDetails[index].organization_judge}
                                    onChange={(e) => handleInputChange(e, index)}
                                    {...(index !== 0 ? {} : { required: true })}
                                    error={errors.organization_judge}
                      />

                                    <div className="md:flex md:flex-wrap md:-mx-2">
                                        <div className="md:w-1/2 md:px-2">
                                            <InputBox
                                                label={`Location of Judge ${index + 1} (City)`}
                                            type="text"
                                            name="location_judge"
                                            placeholder="Enter Location"
                                            value={judgeDetails[index].location_judge}
                                            onChange={(e) => handleInputChange(e, index)}
                                            {...(index !== 0 ? {} : { required: true })}
                                            error={errors.location_judge}
                          />
                                        </div>
                                        <div className="md:w-1/2 md:px-2">
                                            <InputBox
                                                label="Experience (No of Years)"
                                                type="number"
                                                name="experience_judge"
                                                placeholder="Enter Experience in Years "
                                                value={judgeDetails[index].experience_judge}
                                                onChange={(e) => handleInputChange(e, index)}
                                                {...(index !== 0 ? {} : { required: true })}
                                                min={3}
                                                error={errors.experience_judge_1}
                                            />
                                        </div>
                                    </div>
                                    <InputBox
                                        label="Relation To judge (Friend, Family Friend, Other)"
                                        type="text"
                                        name="relation_judge"
                                        placeholder="Enter Relation"
                                        value={judgeDetails[index].relation_judge}
                                        onChange={(e) => handleInputChange(e, index)}
                                        {...(index !== 0 ? {} : { required: true })}
                                        error={errors.name_judge_1}
                                    />
                                    {/* <div className="md:w-1/2 md:px-2">
      <Dropdown
        label="Relation To Judge"
        options={[
          { value: "", label: "Select", selected: true },
          { value: "Friend", label: "Friend" },
          { value: "FamilyFriend", label: "Family Friend" },
          { value: "Other", label: "Other" },
          // Add more options as needed
        ]}
        name="relation_judge"
        value={judgeDetails[index].relation_judge}
        onChange={(value) => handleInputChange({ target: { name: "relation_judge", value } }, index)}
        // Add any additional props you need (e.g., error handling)
      />
    </div> */}
                                </div>
                            );
                        })}

                    <Buttons value="Submit" type="submit" />
                </form>
            </div>
        </>
    );


}

export default ReferralConcepts;