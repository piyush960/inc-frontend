import { Hero, Schedule, EventCards, Sponsors, InCTeamsSection } from '../components';
import './styles/homepage.css';

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
