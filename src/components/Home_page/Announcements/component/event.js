import React from 'react';

const Event = () => {
  const event = {
    img: '/students/Mia_Williams.jpg', 
  };

  return (
    <div className="flex-col pt-8">
      <div className="flex items-center ml-0">
        <div className="box w-20 h-8 bg-yellow-500 ml-0 m-2"></div>
        <div className="w-40">
          <h2 className="text-white text-2xl font-bold">Events</h2>
        </div>
        <div className="w-40">
          <a href="https://www.w3schools.com" className="block text-yellow-500 underline p-2 mb-2">Calendar</a>
        </div>
      </div>
      <div className='h-20'></div>
      <a href="https://example.com" className="pt-10">
        <div className="w-60 h-80 m-auto bg-[#851815] flex justify-center items-center rounded-xl hover:ring-2 hover:ring-yellow-500 hover:ring-8">
          <img src={event.img} alt="" className="object-cover object-center h-full w-full rounded-xl" />
        </div>
      </a>
    </div>
  );
};

export default Event;
