import { useParams } from 'react-router-dom';
import './styles/eventDetails.css';
import EventCards from '../components/eventCards';

function EventDetails() {
    const { eventName } = useParams();

    return (
        <div className='event-details'>
            <h1>{eventName}</h1>
            <EventCards />
        </div>
    );
}

export default EventDetails;
