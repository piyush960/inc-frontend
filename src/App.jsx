import { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom"
import { About, Register, Navbar, Sponsors, StarsCanvas } from './components';

import { HeroParallax } from "./components/HeroParallax";
import Footer from "./components/Footer";
import Events from "./components/Events";
import SwipeGallery from "./components/Gallery";
import EventDetails from "./components/EventDetails";
import Notification from './components/Modal';
import useDimension from "./hooks/useDimension";
import MobileContext from './hooks/MobileContext'

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isMobile = useDimension();

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <MobileContext.Provider value={isMobile}>
      <div className={`fixed top-0 z-20 w-full transition-transform duration-300 ${!isVisible ? 'transform-none' : '-translate-y-16'}`}>
        <Navbar />
        {/* <NotificationStrip words={notifications} /> */}
      </div>
      <Routes>
          <Route path="/" element={
            <div className="relative z-0 bg-primary">
              <Notification />
              <HeroParallax />
              <About />
              <Events isMobile={isMobile} />
              <SwipeGallery />
              <Sponsors />
              <Footer />
            </div>
            } />
          <Route path="/register" element={
            <div className="relative z-0 bg-primary">
              <Register />
              <StarsCanvas />
            </div>
          }/>
          <Route path="/events/:id" element={
            <div className="relative z-0 bg-primary">
              <EventDetails />
              <StarsCanvas />
            </div>
          }/>
      </Routes>
    </MobileContext.Provider>
  )
}

export default App
