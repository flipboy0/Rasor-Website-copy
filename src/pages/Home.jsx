import React from 'react';
import Announcement from '../components/Announcement/Announcement';
import Vision from '../components/Vision/Vision';
import Events from '../components/Events/Events';
import CounterSection from '../components/Counter/Counter';
import RecentEvents from '../components/Events/RecentEvents';
import Collaborate from '../components/Collaborate/Collaborate';
import Navbar from '../components/Navbar/Nvbar';
import Hero from '../components/Hero/Hero';



const Home = () => {
  return (
    <div>
      
      <Hero/>
    <Announcement />
    <Vision />
    <Events />
    <RecentEvents />
    <Collaborate />
    <CounterSection />
    </div>
  )
}

export default Home

