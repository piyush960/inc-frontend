import { Routes, Route } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

import { BackgroundLines } from './components/ui/background-lines'
import NotificationStrip from "./components/ui/notification-strip";
import { notifications } from './constants/index'

const App = () => {
  return (
    <>
      <div className="fixed top-0 z-20 w-full">
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
              <Experience />
              <Tech />
            </div>
            </>
            } />
          <Route path="/register" element={
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          }/>
      </Routes>
    </>
  )
}

export default App