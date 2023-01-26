import './styles/incTeams.css';
import { Link } from "react-router-dom";

function InCTeamsSection() {
    return (
        <><h2 className="title">MEET OUR TEAM</h2><div className="container">
           
            <div className="btn btn-border-4"><Link to="./pages/inc-teams">OUR TEAM</Link></div>
            <a className="btn btn-border-5" href="">I'm a button</a>
        </div></>
    );
}

export default InCTeamsSection;