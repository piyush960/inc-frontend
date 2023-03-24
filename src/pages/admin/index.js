import { Route, Routes } from 'react-router-dom';
import Dashboard from '../dashboard';
import VerifyEventRegistration from './verifyEventRegistrations';
import ViewEventRegistrations from './viewEventRegistrations';

function Admin() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/events/registrations/verify' element={<VerifyEventRegistration />} />
            <Route path='/events/registrations/view' element={<ViewEventRegistrations />} />
        </Routes>
    );
}

export default Admin;