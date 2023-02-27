import './styles/buttons.css';

function Buttons({ value, type, onClick, classNames, disabled }) {
    onClick = onClick || function () { console.error('Error: No onClick event listener function passed to <Buttons /> , Expected <Buttons onClick={someFunction} />') };

    return (
        <button
            className={`px-6 py-4 text-white font-semibold border border-transparent focus:outline-0 rounded-xl bg-faint_blue/30 transition-all duration-300 hover:text-gold hover:border-light_blue hover:bg-faint_blue/10 ${classNames}`}
            onClick={(e) => onClick(e)}
            value={value}
            disabled={disabled}
            type={type || 'button'}
        >
            {value}
        </button>
    );
}

export default Buttons;