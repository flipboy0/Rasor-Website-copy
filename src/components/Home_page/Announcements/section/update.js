// Update.jsx
// Update.jsx
import React from 'react';
import Announcement from '../component/announcement';
import Event from '../component/event';

function Update() {
  return (
    <section className="flex m-4">
      <div className='h-8 bg-yellow' />
      <div className="w-3/4 bg-[#F6F6F6]">
        <Announcement />
      </div>
      <div className="w-1/4 bg-black">
        <Event />
      </div>
    </section>
  );
}

export default Update;

