import React from 'react';
import Announcement from './component/announcement';
import Event from './component/event';

function Update() {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="md:w-2/3 w-full bg-[#F6F6F6]">
        <Announcement />
      </div>
      <div className="md:w-1/3 w-full bg-black">
        <Event />
      </div>
    </section>
  );
}

export default Update;

