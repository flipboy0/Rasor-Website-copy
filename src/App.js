import './App.css';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import JoinUs from './components/Join Us/JoinUs';
import { useEffect } from 'react';

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
    <Home />
    <Footer />
    <JoinUs />
   </>
  );
}

export default App;
