import { useNavigate, useParams } from 'react-router-dom';
import ConceptsForms from './conceptsForms';

function Forms() {
    let { eventName } = useParams();
    const _404Navigator = useNavigate();

    switch (eventName) {
        case 'concepts':
            return <ConceptsForms />;

        default:
            _404Navigator('/404');
            return
    }
}

export default Forms;