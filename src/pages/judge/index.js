import { Route, Routes } from 'react-router-dom';
import ResultImpetus from "./resultImpetus";
import JudgeAllocation from './judgeAllocation';
import ResultForms from './resultConcept';
//import ViewJudges from './viewJudges';


function Judge() {

    return (
        <Routes>
            <Route path='/resultImpetus' element={<ResultImpetus />} />
            <Route path='/allocations' element={<JudgeAllocation />} />
            <Route path='/evaluate/:jid/:pid' element={<ResultForms />} /> 
            
        </Routes>
    );
}

export default Judge;