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
import RegisterHome from "./RegisterHome";
import Test from "./components/Test";
import AnimatedCounter from "./components/AnimatedCounter";
import { section_bg } from "./assets";

const App = () => {
  
  const isMobile = useDimension();

  console.log('in app', isMobile)

  return (
    <MobileContext.Provider value={isMobile}>
      <Navbar />
      <div className="relative z-0 bg-primary">
      <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <AnimatedCounter />
              <Events />
              <SwipeGallery />
              <Sponsors />
              <Footer />
              <Notification />
            </>
            } />
          <Route path="/register" element={
            <>
              <RegisterHome />
              <StarsCanvas />
            </>
          }/>
          <Route path={`/register/:event`} element={
            <Register />
          }/>
          <Route path="/events/:id" element={
            <EventDetails />
          }
          />
          <Route path="/test" element={
            <Test />
          }
          />
      </Routes>
      </div>
    </MobileContext.Provider>
  )
}

export default App
