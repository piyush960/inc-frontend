import { Route, Routes } from 'react-router-dom';
import ResultImpetus from "./resultImpetus";
import Dashboard from '../dashboard';
//import VerifyEventRegistration from './verifyEventRegistrations';
import ChooseProjects from './selectProjects';
//import ViewJudges from './viewJudges';



function Judge() {
    return (
        <Routes>
            <Route path='/resultImpetus' element={<ResultImpetus />} />

            {/* <Route path='/' element={<Dashboard />} />
            <Route path='/selectprojects' element={<ChooseProjects />} />  */}
            
        </Routes>
    );
}

export default Judge;