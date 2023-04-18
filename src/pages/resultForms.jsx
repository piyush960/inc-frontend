import { react, useState } from "react";
import { FormsBanner, InputBox, RadioButtons, Buttons, Dropdown, NoteBox } from "../components";
import { projectDomains } from "../static/data";


const score_arr = [{ value: 0, label: "0" }, { value: 1, label: "1" }, { value: 2, label: "2" }, { value: 3, label: "3" }, { value: 4, label: "4" }, { value: 5, label: "5" }, { value: 6, label: "6" }, { value: 7, label: "7" }, { value: 8, label: "8" }, { value: 9, label: "9" }, { value: 10, label: "10" }];
function ResultForms() {
    const [form, setForm] = useState({
        judgeName:"",
        category:"",
        escortName:"",
        escortPhone:"",
        innoIdeas: "",
        judgeName:"",
        // projectID: "",
        apprIdeas:"",
        apprImple:"",
        impleEngg:"",
        presentation:"",
        // total:"",

    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
      };
    return (

        <>
            <FormsBanner  eventName='Results' eventDescription='Enter Results for Concepts' />
            <div className=" md:mx-24 mx-2 my-6">
                
                <form className="rounded-lg px-8 pt-6 pb-8 mb-4 border">
                    <InputBox
                        type="text"
                        label={"Judge Name"}
                        name={"judgeName"}
                        placeholder={"Name"}
                        classNames=""
                        required
                        onChange={(e) => handleInputChange(e)}
                        value={form.judgeName}
                        // error={errors.title}
                        tip={"Name of the judge"} />
                    
                    <Dropdown
                    label="Project's Category"
                    options={[
                      { value: "SEL", label: "Select", selected: true },
                      ...projectDomains,
                    ]}
                    name={"category"}
                    state={form}
                    setState={setForm}
                    required
                    // error={errors.domain}
                  />
                  <InputBox
                        type="text"
                        label={"Escort's Name"}
                        name={"escortName"}
                        placeholder={"Name of the Escort"}
                        classNames=""
                        required
                        onChange={(e) => handleInputChange(e)}
                        value={form.escortName}
                        // error={errors.title}
                        tip={"Name of the escort"} />
                    
                    <InputBox
                        type="number"
                        label={"Escort's Number"}
                        name={"escortPhone"}
                        placeholder={"Contact number of the Escort"}
                        classNames=""
                        required
                        onChange={(e) => handleInputChange(e)}
                        value={form.escortPhone}
                        // error={errors.title}
                        tip={"10 digits contact number of the escort"} />

                    <RadioButtons
                        label="Innovative Ideas Involved"
                        options={score_arr}
                        state={form.innoIdeas}
                        setState={setForm}
                        name="innoIdeas"
                        required
                    // error={errors.innoIdeas}
                    />
                    <RadioButtons
                        label="Approach To Exploit Ideas"
                        options={score_arr}
                        state={form.apprIdeas}
                        setState={setForm}
                        name="apprIdeas"
                        required
                    // error={errors.innoIdeas}
                    />
                    <RadioButtons
                        label="Approach Towards Implementing The System And Future Applications"
                        options={score_arr}
                        state={form.apprImple}
                        setState={setForm}
                        name="apprImple"
                        required
                    // error={errors.innoIdeas}
                    />
                    <RadioButtons
                        label="Implementation Of Engineering Principles"
                        options={score_arr}
                        state={form.impleEngg}
                        setState={setForm}
                        name="impleEngg"
                        required
                    // error={errors.innoIdeas}
                    />
                    <RadioButtons
                        label="Presentation And Q & A"
                        options={score_arr}
                        state={form.presentation}
                        setState={setForm}
                        name="presentation"
                        required
                    // error={errors.innoIdeas}
                    />
                    {/* <InputBox
                        type="number"
                        label={"Total"}
                        name={"total"}
                        placeholder={"Total"}
                        classNames=""
                        required
                        onChange={(e) => handleInputChange(e)}
                        value={form.total}
                        // error={errors.title}
                        tip={"Enter Total"} /> */}

                        <Buttons 
                         className="mx-2 my-2"
                         onClick={(e) => handleSubmit(e)}
                        value="Submit" />
                        <br />
                        <NoteBox title="Note"
                    text="Please do not disclose marks to the participants" />
                </form>
            </div>
        </>
    );
};
export default ResultForms;