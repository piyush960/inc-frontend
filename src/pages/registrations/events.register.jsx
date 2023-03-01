import { useNavigate, useParams } from 'react-router-dom';
import { FormsBanner } from '../../components';
import ConceptsForms from '../conceptsForms';
import ImpetusForms from '../impetusForms';
import PradnyaForms from '../pradnyaForms';
const conlogo=require('../../assets/images/concepts_logo.png')
const implogo=require('../../assets/images/impetus_logo.png')
const pralogo=require('../../assets/images/pradnya_logo.png')


function EventsForms() {
    let { eventName } = useParams();
    const _404Navigator = useNavigate();

    switch (eventName) {
        case 'concepts':
            return (
                <>
                    <FormsBanner logo={conlogo} eventName='Concepts' eventDescription='Register for the most grand project exhibition event Concepts for final year student' />
                    <ConceptsForms />
                </>
            )

        case 'impetus':
            return (
                <>
                    <FormsBanner logo={implogo} eventName='Impetus' eventDescription='Register for the most grand project exhibition event impetus for all students from First to Third Year' />
                    <ImpetusForms />
                </>
            )

        case 'pradnya':
            return (
                <>
                    <FormsBanner logo={pralogo} eventName='Pradnya' eventDescription='Register for the most competitive live coding event Pradnya' />
                    <PradnyaForms />
                </>
            )

        default:
            _404Navigator('/404');
            return
    }
}

export default EventsForms;