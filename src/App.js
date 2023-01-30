import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './routes/ProtectedRoutes';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Loader from './components/loader';
import EventDetails from './pages/eventDetails';
import Forms from './pages/forms';
import Dashboard from './pages/dashboard';
import InCTeams from './pages/incTeams';
import Homepage from './pages/homepage';
import Auth from './pages/auth';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {loading ? <Loader /> : <></>}
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/event-details/:eventName' element={<EventDetails />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/forms/:eventName' element={<ProtectedRoutes children={<Forms />} />} />
          <Route path='/dashboard' element={<ProtectedRoutes children={<Dashboard />} />} />
          <Route path='/inc-teams' element={<InCTeams />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
