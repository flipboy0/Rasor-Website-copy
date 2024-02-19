import React from 'react';

const Event = () => {
  const event = {
    img: '/students/Mia_Williams.jpg', 
  };

  return (
    <div className="flex-col">
      <header className="flex justify-between pt-8 Heading-header">

  
  <div className="border-l-8 border-l-[#DFA23A] md:border-l-[80px] px-2">
    {/* Content for the title */}
    <h1 className="text-xl font-bold text-white">Event</h1>
  </div>

  <div className="pr-6 self-center">
  <a
      href="www.google.com"
      target="_blank"
      rel="noreferrer noopener"
      className="relative self-center bg-[#DFA23A] text-black hover:bg-red-800 px-4 py-2 rounded-full before:rounded-full transition-colors before:absolute before:bg-red-400 before:inset-0 before:-z-[1] before:h-full before:w-full before:border-4 before:border-transparent before:transition-all before:content-[''] before:hover:top-1 before:hover:left-1 before:hover:border-red-300"
    >
      📅
    </a>
</div>
</header>
      <div className='h-20'></div>
      <a href="https://example.com" className="pt-10">
        <div className="w-3/4 h-80 m-auto bg-[#851815] flex justify-center items-center rounded-xl hover:ring-yellow-500 hover:ring-8">
          <img src={event.img} alt="" className="object-cover object-center h-full w-full rounded-xl" />
        </div>
      </a>
      <div className='h-20'></div>
    </div>
  );
};

export default Event;