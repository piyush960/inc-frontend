import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import { About, Register, Timeline, Navbar, Sponsors, StarsCanvas } from './components';

import { BackgroundLines } from './components/ui/background-lines'
import NotificationStrip from "./components/ui/notification-strip";
import { notifications } from './constants/index'
import { HeroParallax } from "./components/HeroParallax";
import { AuroraHero } from "./components/AuroraHero";
import { AboutParallax } from "./components/AboutParallax";
import Footer from "./components/Footer";
import Events from "./components/Events";
import SwipeGallery from "./components/Gallery";
import EventDetails from "./components/EventDetails";
import Notification from './components/ui/modal';


// import { Stars } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
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
    <>
      <div className={`fixed top-0 z-20 w-full transition-transform duration-300 ${!isVisible ? 'transform-none' : '-translate-y-16'}`}>
        <Navbar />
        {/* <NotificationStrip words={notifications} /> */}
      </div>
      <Routes>
          <Route path="/" element={
            <>
            <div className="relative z-0 bg-primary">
              <HeroParallax />
              <Notification />
              <About />
              <Events />
              <SwipeGallery />
              <Sponsors />
              <Footer />
            </div>
            </>
            } />
          <Route path="/register" element={
            <div className="relative z-0">
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
    </>
  )
}

export default App
