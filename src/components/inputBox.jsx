import './styles/inputBox.css';

function InputBox({ label, placeholder, value, onChange, classNames }) {
    return (
        <div className='input-box'>
            <label for={label} className='input-label'>{label}</label>
            <input className={`input ${classNames}`} onChange={onChange} value={value} placeholder={placeholder} name={label} />
        </div>
    );
}

export default InputBox;
