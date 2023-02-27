import './styles/inputBox.css';

function InputBox({ label, name, type, value, placeholder, inputRef, onChange, classNames, required, error }) {
    return (
        <div className='input-box w-full mb-4 relative'>
            <label htmlFor={label.toLowerCase().replace(/ /g, "_")} className={`input-label font-medium mb-3 text-white text-lg before: ${required && 'after:content-["*"] after:ml-0.5 after:text-gold'}`}>{label}</label>
            <input
                value={value}
                type={type}
                id={label.toLowerCase().replace(/ /g, "_")}
                name={name}
                placeholder={placeholder}
                ref={inputRef}
                onChange={onChange}
                className={`input w-full bg-faint_blue/30 font-gilroy text-gold text-lg px-4 py-2 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20 ${classNames}`}
                autoComplete='off'
                required={required}
            />
            {error && <span className='text-red-500 bg-black px-2 py-1 rounded-lg absolute right-3 mt-10'>{error}</span>}
        </div>
    );
}

export default InputBox;