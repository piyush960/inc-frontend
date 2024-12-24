import { Routes, Route } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

import { BackgroundLines } from './components/ui/background-lines'

const App = () => {
  return (
    <>
      <Navbar />
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