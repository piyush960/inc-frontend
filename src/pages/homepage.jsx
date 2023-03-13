import { Hero, Schedule, EventCards, Sponsors, InCTeamsSection } from '../components';
import AboutUs from '../components/aboutUs';
import './styles/homepage.css';

function Homepage() {
    return (
        <div className='homepage'>
            <Hero />
            <AboutUs/>
            <Schedule />
            <EventCards />
            <Sponsors />
            <InCTeamsSection />
        </div>
    );
}

export default Homepage;
