import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastUtils, Navbar, Loader, Footer } from './components';
import { EventDetails, RegistrationsForms, Payment, Admin, InCTeams, WebTeam, Homepage, Auth, Gallery, FacultyTeam, ProjectsLabsAllocations } from './pages';
import Test from './test/test.jsx';
import ProtectedRoutes from './routes/ProtectedRoutes';
import './App.css';
import Judge from './pages/judge';
import winners_inc23 from './pages/winners_inc23.jsx';
// const Test = lazy(() => import('./test/test.jsx'))

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <BrowserRouter>
      <ToastUtils />
      <Navbar />
      {loading ? <Loader /> : <></>}
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/event-details/:eventName' element={<EventDetails />} />
        <Route path='/allocations/labs' element={<ProjectsLabsAllocations />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/register/*' element={<RegistrationsForms />} />
        {/* <Route path='/gallery' element={<Gallery />} /> */}
        <Route path='/payment/:id' element={<Payment />} />
        <Route path='/admin/*' element={<ProtectedRoutes children={<Admin />} />} />
        <Route path='/judge/*' element={<ProtectedRoutes children={<Judge />} />} />
        <Route path= '/winners' element={<winners_inc23 />} />
        <Route path='/inc-teams' element={<InCTeams />} />
        <Route path='/web-teams' element={<WebTeam />} />
        <Route path='/faculty-teams' element={<FacultyTeam />} />


        {process.env.REACT_APP_ENVIRONMENT === 'development' &&
          <Route path='/test' element={
            <Suspense fallback={<>...</>}>
              <Test />
            </Suspense>
          } />
        }
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
