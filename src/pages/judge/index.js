import { Route, Routes } from 'react-router-dom';
import JudgeAllocation from './judgeAllocation';
import ResultForms from './resultConcept';

function Judge() {

    return (
        <Routes>
            <Route path='/allocations' element={<JudgeAllocation />} />
            <Route path='/evaluate/:jid/:pid' element={<ResultForms />} />
        </Routes>
    );
}

export default Judge;