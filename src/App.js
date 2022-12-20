import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Loader } from './components';
import { Homepage, EventDetails, Forms, Dashboard, InCTeams } from './pages';
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
          <Route path='/' component={<Homepage />} />
          <Route path='/event-details' component={<EventDetails />} />
          <Route path='/forms/:eventName' component={<ProtectedRoutes children={<Forms />} />} />
          <Route path='/dashboard' component={<ProtectedRoutes children={<Dashboard />} />} />
          <Route path='/inc-teams' component={<InCTeams />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
