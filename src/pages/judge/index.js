import { Route, Routes } from 'react-router-dom';
import Dashboard from '../dashboard';
//import VerifyEventRegistration from './verifyEventRegistrations';
import ChooseProjects from './selectProjects';


function Judge() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/selectprojects' element={<ChooseProjects />} />
        </Routes>
    );
}

export default Judge;