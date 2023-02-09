import { Hero, Schedule, EventCards, Sponsors, InCTeamsSection } from '../components';
import ConceptsForm from './conceptsForms';
import './styles/homepage.css';

function Homepage() {
    return (
        <div className='homepage'>
            <Hero />
            <Schedule />
            <EventCards />
            <Sponsors />
            <InCTeamsSection />
            <ConceptsForm />
        </div>
    );
}

export default Homepage;
