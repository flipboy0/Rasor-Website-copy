import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Footer from './components/Home_page/Footer/Footer';
import Navbar from './components/Navbar/Navbar';


function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';

  return (
    <>
      {!isHomePage && <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
