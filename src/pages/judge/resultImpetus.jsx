import { useState } from "react";
import { FormsBanner, InputBox, RadioButtons, Buttons, Dropdown, NoteBox } from "../../components/";
import { projectDomains } from "../../static/data";
import { toast } from "../../components/";


const score_arr = [{ value: 0, label: "0" }, { value: 1, label: "1" }, { value: 2, label: "2" }, { value: 3, label: "3" }, { value: 4, label: "4" }, { value: 5, label: "5" }, { value: 6, label: "6" }, { value: 7, label: "7" }, { value: 8, label: "8" }, { value: 9, label: "9" }, { value: 10, label: "10" }, { value: 11, label: "11" }, { value: 12, label: "12" }, { value: 13, label: "13" }, { value: 14, label: "14" }, { value: 15, label: "15" }, { value: 16, label: "16" }, { value: 17, label: "17" }, { value: 18, label: "18" }, { value: 19, label: "19" }, { value: 20, label: "20" }];


function ResultImpetus() {
    const [form, setForm] = useState({
        startUp: "",
        impact: "",
        original: "",
        patent: "",
        presentation: "",
        relevance: "",
        test: "",
    });


    const handleInputChange1 = (e) => {
        const { name, value } = e.target;

        if ((value >= 0 && value <= 20)) {

            setForm((prevState) => {
                return { ...prevState, [name]: value };
            });

            console.log(form);
        }
        else {
            toast.warn("Please enter marks in given range!")
            return;
        }
        // setForm((prevState) => {
        //     return { ...prevState, [name]: value };

        // });

    }

    // const regex = new RegExp(/^(?:[0-9]|1[0-9]|15)?(?:\b|\x7F)*$/);
    const handleInputChange2 = (e) => {
        let { name, value, min, max } = e.target
        const validValue = Math.max(min, Math.min(max, Number(value)))
        setForm((prevState) => ({ ...prevState, [name]: validValue }))
        // toast.warn("Please enter marks in given range!")
    }

    const handleInputChange3 = (e) => {
        const { name, value } = e.target;

        if ((value >= 0 && value <= 10)) {

            setForm((prevState) => {
                return { ...prevState, [name]: value };
            });

            console.log(form);
        }
        else {
            toast.warn("Please enter marks in given range!")
            return;
        }
        // setForm((prevState) => {
        //     return { ...prevState, [name]: value };

        // });

    }
    const handleSubmit = (e) => {

        e.preventDefault();
        for (const property in form) {
            if (form[property] === "") {
                toast.warn("Please enter all fields!");
                return;
            }
        }
        console.log(form);
    };
    return (

        <>
            <FormsBanner eventName='Impetus Results' eventDescription='Enter Results for Impetus' />
            <div className=" md:mx-24 mx-3 my-6">
                <form className="flex flex-col shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border border-light_blue items-center p-4 md:p-8 mt-10 w-full">
                    <InputBox
                        type="number"
                        label={"Ability to Execute projects as a Startups or Startup Enrollment (score: 0-15)"}
                        name={"startUp"}
                        placeholder={"Score"}
                        classNames=""
                        required
                        onChange={(e) => handleInputChange2(e)}
                        maxLength={2}
                        min={0}
                        max={15}
                        tip={"Enter Score"} />
                    <InputBox
                        type="number"
                        label={"Impact and Applications (score: 0-20)"}
                        name={"impact"}
                        placeholder={"Score"}
                        classNames=""
                        required
                        onChange={(e) => handleInputChange1(e)}
                        value={form.impact}
                        maxLength={2}
                        min={0}
                        max={20}
                        // error={errors.title}
                        tip={"Enter Score"} />

                    <InputBox
                        type="number"
                        label={"Originality, Creativity, Clarity, and Innovation in Project (score: 0-20)"}
                        name={"original"}
                        placeholder={"Score"}
                        classNames=""
                        required
                        onChange={(e) => handleInputChange1(e)}
                        value={form.original}
                        maxLength={2}
                        min={0}
                        max={20}
                        // error={errors.title}
                        tip={"Enter Score"} />

                    <InputBox
                        type="number"
                        label={"Patent or Product readiness from Project (score: 0-10)"}
                        name={"patent"}
                        placeholder={"Score"}
                        classNames=""
                        required
                        onChange={(e) => handleInputChange3(e)}
                        value={form.patent}
                        //maxLength={2}
                        min={0}
                        max={10}
                        tip={"Enter Score"} />

                    <InputBox
                        type="number"
                        label={"Presentation, and Q&A  (score: 0-15)"}
                        name={"presentation"}
                        placeholder={"Score"}
                        classNames=""
                        required
                        onChange={(e) => handleInputChange2(e)}
                        value={form.presentation}
                        maxLength={2}
                        min={0}
                        max={15}
                        tip={"Enter Score"} />

                    <InputBox
                        type="number"
                        label={"Relevance to Society (score: 0-10)"}
                        name={"relevance"}
                        placeholder={"Score"}
                        classNames=""
                        required
                        onChange={(e) => handleInputChange3(e)}
                        value={form.relevance}
                        maxLength={2}
                        min={0}
                        max={10}
                        tip={"Enter Score"} />

                    <InputBox
                        type="number"
                        label={"Testing or Demonstration (score: 0-10)"}
                        name={"test"}
                        placeholder={"Score"}
                        classNames=""
                        required
                        onChange={(e) => handleInputChange3(e)}
                        value={form.test}
                        maxLength={2}
                        min={0}
                        max={10}
                        tip={"Enter Score"} />

                    <Buttons
                        className="mx-2 my-2"
                        onClick={(e) => handleSubmit(e)}
                        value="Submit" />
                    <br />
                    <br />
                    <NoteBox title="Note"
                        text="Please do not disclose marks to the participants" />
                </form>
            </div>
        </>
    );
};
export default ResultImpetus;