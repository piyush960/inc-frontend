import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const JudgeForm = lazy(() => import('./judge.register'));
const EventsForm = lazy(() => import('./events.register'));
const AdminForm = lazy(() => import('./admin.register'));

function RegistrationsForms() {
    return (
        <div className=''>
            <Routes>
                <Route path='/judge' element={<JudgeForm />} />
                <Route path='/event/:eventName' element={<EventsForm />} />
                <Route path='/admin' element={<AdminForm />} />
            </Routes>
        </div>
    );
}

export default RegistrationsForms;