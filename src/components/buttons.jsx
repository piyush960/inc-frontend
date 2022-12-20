import './styles/buttons.css';

function Buttons({ name, onClick, classNames }) {
    return (
        <div className='buttons'>
            <button className={`button ${classNames}`} onClick={onClick}>{name}</button>
        </div>
    );
}

export default Buttons;
