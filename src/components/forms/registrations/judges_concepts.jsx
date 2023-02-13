import React from "react";
import InputBox from "../../inputBox";
import Buttons from "../../buttons";
import { Checkbox } from "@material-tailwind/react";
const handleSubmit = (e) => {

}

function JudgesConcepts() {
    return (
        <div className='mx-32 my-6'>
            <form className="border rounded-lg px-8 pt-6 pb-8 mb-4" action="">

                <InputBox label="Name" type="text" placeholder="name" required />
                <InputBox label="Industry Experience(In years) " type="number" placeholder="Eg-3,5" required />
                <InputBox label="Email" type="email" placeholder="email" required />
                <InputBox label="Phone" type="number" placeholder="number" required />
                <div>
                    <p className="input-label font-medium my-3 text-white text-lg">Domain of Work</p>
                    <div className="font-medium  text-white text-lg">
                    <Checkbox label="Application Development" />
                        <Checkbox label="Communication Networks And Security Systems" />
                        <Checkbox label="Digital/ Image/ Speech/ Video Processing" />
                        <Checkbox label="Machine Learning and Pattern Recognition" />
                        <Checkbox label="Embedded/ VLSI System" />
                        <Checkbox label="Others" />
                    </div>
                </div>
                <div>
                    <p className="input-label font-medium my-3 text-white text-lg">Availability</p>
                    <div className="font-medium  text-white text-lg">
                        <Checkbox label="24th March 9-11 AM" />
                        <Checkbox label="25th March 9-11 AM" />
                        <Checkbox label="24th March 2-5 PM" />
                        <Checkbox label="25th March 2-5 PM" />
                    </div>
                </div>
                <div className="relative z-0  w-full group">
                    <p className="input-label font-medium mb-3 text-white text-lg">Address Locality</p>
                    <div className="relative w-full lg:w-full block px-0  text-sm">
                        <select

                            className="w-full h-14 bg-faint_blue font-gilroy text-gold text-lg px-3 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20"
                        >
                            <option>Aundh</option>
                            <option>Baner</option>
                            <option>Camp</option>
                            <option>Chakan</option>
                            <option>Hinjewadi</option>
                            <option>Kalyani Nagar</option>
                            <option>Koregaon Park</option>
                            <option>Pimpri-Chichwad</option>
                            <option>Pune Station</option>
                            <option>Viman Nagar</option>
                            <option>Wakad</option>
                            <option selected className='text-white'>Select</option>
                        </select>
                    </div>
                </div>
                <Buttons value="Submit" onClick={handleSubmit} classNames="" />
            </form>

        </div>

    );
}
export default JudgesConcepts;