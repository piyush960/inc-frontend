// import { Hero, Schedule, EventCards, Sponsors, InCTeamsSection } from '../components';
import './styles/homepage.css';
import Hero from '../components/hero';
import Schedule from '../components/schedule';
import EventCards from '../components/eventCards';
import InCTeamsSection from '../pages/incTeams';
import Sponsors from '../components/sponsors';

function Homepage() {
    return (
        <div className='homepage'>
            <Hero />
            <Schedule />
            <EventCards />
            <Sponsors />
            <InCTeamsSection />
        </div>
    );
}

export default Homepage;
