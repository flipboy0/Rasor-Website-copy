import React from 'react';
import Announcement from '../components/Announcement/Announcement';
import Vision from '../components/Vision/Vision';
import Events from '../components/Events/Events';
import CounterSection from '../components/Counter/Counter';
import RecentEvents from '../components/Events/RecentEvents';
import Collaborate from '../components/Collaborate/Collaborate';



const Home = () => {
  return (
    <div>
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

