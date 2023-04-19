import { Route, Routes, useParams } from 'react-router-dom';

import Dashboard from '../dashboard';
//import VerifyEventRegistration from './verifyEventRegistrations';
import ChooseProjects from './selectProjects';
import ViewJudges from './viewJudges';
import JudgeAllocation from './judgeAllocation';
import ResultForms from './resultConcept';


function Judge() {
    const { jid, pid } = useParams();
    return (
        <Routes>
            <Route path='/' element={<JudgeAllocation />} />
            <Route path='/selectprojects' element={<ChooseProjects />} />
            <Route path='/viewjudges' element={<ViewJudges />} />
            <Route path='/result-concepts/:jid/:pid' element={<ResultForms />} />

        </Routes>
    );
}

export default Judge;