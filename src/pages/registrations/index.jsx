import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const JudgeForm = lazy(() => import('./judge.register'));
const EventsForm = lazy(() => import('./events.register'));
const AdminForm = lazy(() => import('./admin.register'));

function RegistrationsForms() {
    return (
        <div className='px-12 py-4 md:px-48 md:py-12 flex flex-col items-center gap-4 md:gap-8'>
            <Routes>
                <Route path='/judge' element={<JudgeForm />} />
                <Route path='/event/:eventName' element={<EventsForm />} />
                <Route path='/admin' element={<AdminForm />} />
            </Routes>
        </div>
    );
}

export default RegistrationsForms;