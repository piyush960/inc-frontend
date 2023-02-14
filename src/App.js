import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Loader, Footer } from './components';
import { EventDetails, Forms, Payment, Dashboard, InCTeams, Homepage, Auth } from './pages';
import ProtectedRoutes from './routes/ProtectedRoutes';
import './App.css';
import Judges from './pages/judges';

const Test = lazy(() => import('./test/test.jsx'))

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      {loading ? <Loader /> : <></>}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/event-details/:eventName' element={<EventDetails />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/events/:eventName' element={<ProtectedRoutes children={<Forms />} />} />
        <Route path='/payment/:id' element={<Payment />} />
        <Route path='/dashboard' element={<ProtectedRoutes children={<Dashboard />} />} />
        <Route path='/inc-teams' element={<InCTeams />} />
        <Route path='/judges' element={<Judges />} />
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
