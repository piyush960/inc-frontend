import './styles/buttons.css';

function Buttons({ value, onClick, classNames, disabled }) {
    onClick = onClick || function () { console.error('Error: No onClick event listener function passed to <Buttons /> , Expected <Buttons onClick={someFunction} />') };

    return (
        <button
            className={`p-4 text-white font-semibold border border-transparent rounded-xl bg-faint_blue transition-all duration-300 hover:text-gold hover:border-light_blue hover:bg-faint_blue/10 ${classNames}`}
            onClick={(e) => onClick(e)}
            value={value}
            disabled={disabled}
        >
            {value}
        </button>
    );
}

export default Buttons;