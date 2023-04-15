import { useState } from "react";

function Accordian({ value, names }) {
    const [open, setOpen] = useState(false);
    function toggleAccordian() {
        setOpen(prevState => !prevState)
    }
    return (
        <>
            {/* <div class="m-5 rounded-lg flex flex-wrap justify-start overflow-hidden bg-faint_blue text-white">
                <label class="grow px-4 py-3 font-medium" for="collapse">{value}</label>
                <input class="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-gold accent-white opacity-0" type="checkbox" name="collapse" id="collapse" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                </div> */}
                
            <div onClick={toggleAccordian} className="mx-10 mt-5 flex justify-between rounded-lg pl-2 md:pl-10 md:pr-5 pr-2 py-4 bg-faint_blue ">
                <label className="overflow-clip w-[80%]">{value}</label>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-1.5em ">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

            </div>
            {open && (
                <>
                    <div class="">
                        {names.map(name => {
                            return (
                                <div className="bg-light_blue block mx-10">
                                    <h1 className="text-gold pl-4">{name.value}</h1>
                                </div>
                            )
                        })}
                    </div>
                </>)}
           

        </>
    );
}
export default Accordian;