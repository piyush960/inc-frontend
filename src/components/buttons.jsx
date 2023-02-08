import './styles/buttons.css';

function Buttons({ name, onClick, classNames }) {
    return (
        <button className={`p-4  ${classNames}`} onClick={onClick}>{name}</button>
    );
}

export default Buttons;
