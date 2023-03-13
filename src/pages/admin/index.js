import { Route, Routes } from 'react-router-dom';
import Dashboard from '../dashboard';
import VerifyEventRegistration from './verifyEventRegistrations';

function Admin() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/verify/events/registrations' element={<VerifyEventRegistration />} />
        </Routes>
    );
}

export default Admin;