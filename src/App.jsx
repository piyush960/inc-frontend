import { Routes, Route } from "react-router-dom"
import { About, Register, Navbar, Sponsors, StarsCanvas } from './components';

import Hero from "./components/HeroParallax";
import Footer from "./components/Footer";
import Events from "./components/Events";
import SwipeGallery from "./components/Gallery";
import EventDetails from "./components/EventDetails";
import Notification from './components/Modal';
import useDimension from "./hooks/useDimension";
import MobileContext from './hooks/MobileContext'

const App = () => {
  
  const isMobile = useDimension(); // Assuming useDimension is already implemented

  console.log('in app', isMobile)

  return (
    <MobileContext.Provider value={isMobile}>
      <Navbar />
      <Routes>
          <Route path="/" element={
            <div className="relative z-0 bg-primary">
              <Hero />
              <About />
              <Events />
              <SwipeGallery />
              <Sponsors />
              <Footer />
              <Notification />
            </div>
            } />
          <Route path="/register/:event" element={
            <div className="relative z-0 bg-primary">
              <Register />
              <StarsCanvas />
            </div>
          }/>
          <Route path="/events/:id" element={
            <div className="relative z-0 bg-primary">
              <EventDetails />
            </div> 
          }
          />
      </Routes>
    </MobileContext.Provider>
  )
}

export default App
