import { Routes, Route } from "react-router-dom"
import { About, Register, Navbar, Sponsors, Committee } from './components';

import Hero from "./components/HeroParallax";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";
import Notification from './components/Modal';
import useDimension from "./hooks/useDimension";
import MobileContext from './hooks/MobileContext'
import RegisterHome from "./components/RegisterHome";
import Test from "./components/Test";
import AnimatedCounter from "./components/AnimatedCounter";
import { ToastContainer, Zoom } from "react-toastify";
import PageNotFound from "./components/PageNotFound";
import Footer from './components/footer'
import { useState } from "react";

const App = () => {
  
  const isMobile = useDimension();
  const [lightOn, setLightOn] = useState(true);


  return (
    <MobileContext.Provider value={isMobile}>
      <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Zoom}
      />
      <Navbar />
      <div className="relative z-0 bg-primary">
      <Routes>
          <Route path="/" element={
            <>
              <Hero lightOn={lightOn} />
              <About />
              <Events />
              {/* <SwipeGallery /> */}
              <AnimatedCounter />
              <Sponsors />
              <Notification setLightOn={setLightOn} />
            </>
            } />
          <Route path="/register" element={
            <RegisterHome />
          }/>
          <Route path={`/register/:event`} element={
            <Register />
          }/>
          <Route path="/events/:id" element={
            <EventDetails />
          }
          />
          <Route path="/committee/:id" element={
            <Committee />
          }
          />
          <Route path="/test" element={
            <Test />
          }
          />
          <Route path="*" element={
            <PageNotFound />
          }
          />
      </Routes>
      <Footer />
      </div>
    </MobileContext.Provider>
  )
}

export default App
