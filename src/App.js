import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Home_page/Footer/Footer';
import Navbar from './components/Home_page/Hero/navbar';


function App() {
  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
      
  );
}

export default App;
