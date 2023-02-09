import { useState, useRef } from 'react';
import { FormsBanner, ProgressBar, Modals, Buttons, TeamConcepts } from '../components';
import './styles/forms.css';

function ConceptsForm() {
    const MAX_STEPS = 2;
    const [activeStep, setActiveStep] = useState(0)
    const [modalState, setModalState] = useState(false)
    const [team, setTeam] = useState([])
    const [groupDetails, setGroupDetails] = useState({})

    function toggleInstructionsModal() {
        setModalState(prevState => !prevState)
    }

    function nextStep() {
        if (activeStep < MAX_STEPS) setActiveStep(activeStep + 1)
    }

    function prevStep() {
        if (activeStep > 0)  setActiveStep(activeStep - 1)
    }
    //project_details {}

    return (
        <div className='forms'>
            <TeamConcepts  />
            <FormsBanner />
            <ProgressBar />
            <Modals modalState={modalState} toggleModal={toggleInstructionsModal} >
                <>
                </>
            </Modals>
            <Buttons onClick={toggleInstructionsModal} />
            
            {/* {team={} groupDetails={}} */}
            {/*ProjectDetails props=setProjectDetails*/}
            {/*Next Step btns*/}
        </div>
    );
}

export default ConceptsForm;