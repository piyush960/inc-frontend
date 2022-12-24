import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Loader } from './components';
import { Homepage, EventDetails, Auth, Forms, Dashboard, InCTeams } from './pages';
import ProtectedRoutes from './routes/ProtectedRoutes';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {loading ? <Loader /> : <></>}
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/event-details' element={<EventDetails />} />
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
