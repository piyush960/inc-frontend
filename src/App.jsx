import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import { About, Register, Timeline, Hero, Navbar, Sponsors, StarsCanvas } from './components';

import { BackgroundLines } from './components/ui/background-lines'
import NotificationStrip from "./components/ui/notification-strip";
import { notifications } from './constants/index'

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
        <NotificationStrip words={notifications} />
      </div>
      <Routes>
          <Route path="/" element={
            <>
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <div className="relative z-0">
                  <Hero />
                  <BackgroundLines className={`max-sm:hidden`}/>
                </div>  
              </div>
              <About />
              <Timeline />
              <Sponsors />
            </div>
            </>
            } />
          <Route path="/register" element={
            <div className="relative z-0">
              <Register />
              <StarsCanvas />
            </div>
          }/>
      </Routes>
    </>
  )
}

export default App