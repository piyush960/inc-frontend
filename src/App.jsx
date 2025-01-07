import { Routes, Route } from "react-router-dom"
import { About, Register, Navbar, Sponsors, StarsCanvas, Committee } from './components';

import Hero from "./components/HeroParallax";
import Footer from "./components/Footer";
import Events from "./components/Events";
import SwipeGallery from "./components/Gallery";
import EventDetails from "./components/EventDetails";
import Notification from './components/Modal';
import useDimension from "./hooks/useDimension";
import MobileContext from './hooks/MobileContext'
import RegisterHome from "./components/RegisterHome";
import Test from "./components/Test";
import AnimatedCounter from "./components/AnimatedCounter";
import { ToastContainer, Zoom } from "react-toastify";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  
  const isMobile = useDimension();


  return (
    <MobileContext.Provider value={isMobile}>
      <ToastContainer
      position="top-right"
      autoClose={5000}
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
              <Hero />
              <About />
              <AnimatedCounter />
              <Events />
              {/* <SwipeGallery /> */}
              <Sponsors />
              <Notification />
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
          <Route path="/committee" element={
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
