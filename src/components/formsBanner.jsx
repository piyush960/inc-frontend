function FormsBanner(props) {
    return (
        <div className="flex mx-20 my-10 shadow-md bg-[#a8d2ff] rounded-lg">
            <div className="mt-10 h-32 w-32 shadow-white"><img src={props.logo} alt="" /></div>
            <div>
            <h1 className="mt-12 ml-10 text-2xl md:text-3xl font-poppins">{props.eventName}</h1>
            <h2 className="ml-10 mt-5 text-xl md:2xl">{props.eventDescription}</h2>
            </div>
        </div>
    );
}

export default FormsBanner;