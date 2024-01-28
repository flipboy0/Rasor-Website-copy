import React from 'react';

const Event = () => {
  const event = {
    img: '/students/Mia_Williams.jpg', 
  };

  return (
    <div className="flex-col">
      <header className="flex flex-wrap pt-8 Heading-header">
  <div className="w-full md:w-[15%] shrink h-8 xl:w-1/5 bg-[#DFA23A] p-4 self-center">
    {/* Content for the colored block */}
  </div>

  <div className="w-2/3 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
    {/* Content for the title */}
    <h1 className="text-xl font-bold text-white">Event</h1>
  </div>

  <div className="w-1/4 sm:w-2/5 md:w-1/3 lg:w-2/5 xl:w-1/3 py-4 place-items-end shrink ">
  {/* Content for the link */}
  <div className="text-right place-content-end">
    <a
      href="www.google.com"
      target="_blank"
      rel="noreferrer noopener"
      className="relative bg-[#DFA23A] text-black hover:bg-red-800 px-4 py-2 rounded-full before:rounded-full transition-colors before:absolute before:bg-red-400 before:inset-0 before:-z-[1] before:h-full before:w-full before:border-4 before:border-transparent before:transition-all before:content-[''] before:hover:top-1 before:hover:left-1 before:hover:border-red-300"
    >
      📅
    </a>
  </div>
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