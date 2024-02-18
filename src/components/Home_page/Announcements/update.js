import React from 'react';
import Announcement from './component/announcement';
import Event from './component/event';
import 'animate.css'

function Update() {
  return (
    <section id="update" className="flex flex-col md:flex-row">
      <div className="md:w-3/4 w-full bg-[#F6F6F6]">
        <Announcement />
      </div>
      <div className="md:w-1/4 w-full bg-black">
        <Event />
      </div>
    </section>
  );
}

export default Update;

