import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Nvbar';
import Home from './pages/Home';
import JoinUs from './components/Join Us/JoinUs';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import SubEvent from './pages/SubEvent';
import Team from './pages/Team';

function App() {
  useEffect(() => {
    let locomotiveScroll;
  
    const initializeScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      locomotiveScroll = new LocomotiveScroll();
    };
  
    initializeScroll();
  
    // Cleanup function
    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []); // Empty dependency array means this effect will only run once after the initial render
  
  return (
   <> 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:eventId" element={<SubEvent />} />
        <Route path="/team" element={<Team />} />
        <Route path="/Join Us" element={<JoinUs />} />
      </Routes>
      <JoinUs />
      <Footer />
    </BrowserRouter>
   </>
  );
}

export default App;
