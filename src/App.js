import { useState, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastUtils, Navbar, Loader, Footer } from './components';
import { EventDetails, RegistrationsForms, Payment, Dashboard, InCTeams, Homepage, Auth } from './pages';
import ProtectedRoutes from './routes/ProtectedRoutes';
import './App.css';
import JudgeForm from './pages/registrations/judge.register';

const Test = lazy(() => import('./test/test.jsx'))

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      <ToastUtils />
      <Navbar />
      {loading ? <Loader /> : <></>}
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/event-details/:eventName' element={<EventDetails />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/register*' element={<RegistrationsForms />} />
        <Route path='/payment/:id' element={<Payment />} />
        <Route path='/dashboard' element={<ProtectedRoutes children={<Dashboard />} />} />
        <Route path='/inc-teams' element={<InCTeams />} />
        <Route path='/judge' element={<ProtectedRoutes children={<JudgeForm />} />} />
        {process.env.REACT_APP_ENVIRONMENT === 'development' &&
          <Route path='/test' element={
            <Suspense fallback={<>...</>}>
              <Test />
            </Suspense>
          } />
        }
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;