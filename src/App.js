import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Nvbar';
import Home from './pages/Home';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
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
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   </>
  );
}

export default App;
