import React from "react";

const EventHead = ({eventname}) => {
  return (
    <div className="text-center py-8">
      <div className="relative">
        <h1 className="tracking-wider text-center font-bold absolute inset-x-0 top-0 text-9xl bg-gradient-to-b from-black to-slate-50 inline-block text-transparent bg-clip-text opacity-5 pointer-events-none">
          {eventname}
        </h1>
      </div>
      <div className='flex justify-center items-center py-10 border-b-2 border-[#861e1d]'><h1 className='text-6xl font-medium '>{eventname}</h1></div>
    </div>
  );
};

export default EventHead;
