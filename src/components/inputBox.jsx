import './styles/inputBox.css';

// function InputBox({ label, name, type, value, placeholder, min, max, inputRef, onChange, classNames, required, error }) {
function InputBox(props) {
    return (
        <div className='input-box w-full mb-4 relative'>
            <label htmlFor={props.label.toLowerCase().replace(/ /g, "_")} className={`input-label font-medium mb-3 text-white text-lg before: ${props.required && 'after:content-["*"] after:ml-0.5 after:text-gold'}`}>{props.label}</label>
            <input
                {...props}
                id={props.label.toLowerCase().replace(/ /g, "_")}
                className={`input w-full bg-faint_blue/30 font-gilroy text-gold text-lg px-4 py-2 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20 ${props.className}`}
                autoComplete='off'
                ref={props.inputref ?? null}
            />
            {props.error && <span className='text-red-500 bg-black px-2 py-1 rounded-lg absolute right-3 mt-8'>{props.error}</span>}
        </div>
    );
}

export default InputBox;