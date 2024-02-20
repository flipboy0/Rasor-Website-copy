import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Home_page/Footer/Footer';
import Hero from './components/Home_page/Hero/hero';
import Update from './components/Home_page/Announcements/update';
import Blog from './components/Home_page/Blogs/Blog';
import Newsletter from './components/Home_page/Newsletter/Newsletter';
import Teams from './components/Home_page/Teams/Teams';
import Research from './components/Home_page/Research/research';
import Collaborate from './components/Home_page/Collaborate/collaborate';
import ContactPage from './components/Home_page/ContactCollaboration/ContactPage';
import CollaborationPage from './components/Home_page/ContactCollaboration/CollaborationPage';
import EventTabs from './components/Events/Index';

import '@fontsource-variable/faustina';
import '@fontsource/roboto-condensed';
import '@fontsource-variable/inter';
import '@fontsource-variable/roboto-slab';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<>
    <Hero/>
    <Update />
    <Research />
    <Blog/>
    <Newsletter/>
    <Collaborate />
    </>} />
          <Route path='/events-section' element={<EventTabs />} />
          <Route path="/update-section" element={<Update />} />
          <Route path="/research-sectiion" element={<Research />} />
          <Route path="/blog-section" element={<Blog />} />
          <Route path="/teams-section" element={<Teams />} />
          <Route path="/newsletter-section" element={<Newsletter />} />
          <Route path="/collaborate-section" element={<Collaborate />} />
          <Route path="/contact-section" element={<ContactPage />} />
          <Route path="/collaboration-section" element={<CollaborationPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
