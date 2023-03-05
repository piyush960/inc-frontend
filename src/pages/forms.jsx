import { useNavigate, useParams } from 'react-router-dom';
import ConceptsForms from './conceptsForms';
import PradnyaForm from './pradnyaForms';

function Forms() {
    let { eventName } = useParams();
    const _404Navigator = useNavigate();

    switch (eventName) {
        case 'concepts':
            return <ConceptsForms />;
        case 'pradnya' :
            return <PradnyaForm />;
        default:
            _404Navigator('/404');
            return
    }
}

export default Forms;