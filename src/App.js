import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Loader, Footer } from './components';
import { EventDetails, Forms, Dashboard, InCTeams, Homepage, Auth } from './pages';
import ProtectedRoutes from './routes/ProtectedRoutes';
import './App.css';

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
        <Route path='/forms/:eventName' element={<ProtectedRoutes children={<Forms />} />} />
        <Route path='/dashboard' element={<ProtectedRoutes children={<Dashboard />} />} />
        <Route path='/inc-teams' element={<InCTeams />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;