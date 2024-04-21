import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between h-[75vh]  w-full bg-white">
      <div className="flex flex-col w-2/5 text-black font-semibold self-center mx-[5vw]">
        <div>
          <h1 className="text-7xl flex-col">Ramanujan</h1>
          <span className="text-7xl flex my-3"> Society <img className="rounded-full h-[10vh] my-auto px-5" src="/logorasor.svg" alt="Logo" /></span>
          <h1 className="text-7xl"> of Research</h1>
        </div>
        <h1 className="text-4xl font-thin mt-5">AN IITM BS DEGREE SOCIETY </h1>
      </div>
      <div className="flex w-2/5">
      <div className="absolute  right-1/5 z-[-1]  h-[55vh] w-[55vh] rounded-full self-center -rotate-90  bg-gradient-to-r from-[#DFA43A] to-white opacity-55  blur-md"></div>
        <img className="h-4/6 my-auto bg-white" alt="glass" src="/magnifyingglass.svg"/>
      </div>
    </div>
  );
}

export default Hero;
