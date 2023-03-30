import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import JudgeForm from './judge.register';
import EventsForm from './events.register';
import AdminForm from './admin.register';
import scrollToTop from '../../utils/scrollToTop';
import { NoteBox } from '../../components';
// const JudgeForm = lazy(() => import('./judge.register'));
// const EventsForm = lazy(() => import('./events.register'));
// const AdminForm = lazy(() => import('./admin.register'));

function RegistrationsForms() {
    useEffect(() => {
        scrollToTop();
    }, [])

    return (
        <div className=''>
            <Routes>
                <Route path='/judge/:eventName' element={<JudgeForm />} />
                <Route path='/events/:eventName' element={<EventsForm />} />
                <Route path='/admin' element={<AdminForm />} />
            </Routes>
            <div className='md:mx-32 px-8'>
            <NoteBox title="Contact"
                    text="For any technical queries please contact Abhishek Jadhav : +91 70304 05299" />
            </div>

        </div>
    );
}

export default RegistrationsForms;