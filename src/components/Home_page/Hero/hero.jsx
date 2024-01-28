import React from "react";
import logo from "./img_src/Rasor_Logo.png";
import background from "./img_src/rasor_hero_bg.png";
import scroll_down from "./img_src/scroll down sign.png";
import hamburger from "./img_src/hamburger menu brown.png";
//Change Paths//

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-screen"
    >
      <div className="flex justify-between w-full lg:p-8 lg:px-18 p-4 relative">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={logo}
            alt="Ramanujan Society of Research Logo"
            className="w-16 md:w-[96px] md:h-[102px]"
          />
          <div>
            <p className="font-bold md:text-3xl text-2xl text-white md:pl-2 pl-1 text-center hidden md:block font-faustina">
              RAMANUJAN SOCIETY OF RESEARCH
            </p>
            <p className="font-light md:text-xl text-white md:pl-2 pl-1 text-center md:text-start hidden md:block font-faustina">
              IIT MADRAS BS
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button>
            <img
              src={hamburger}
              alt="Hamburger Menu"
              className="w-8 lg:w-[50px] lg:h-[30px]"
            />
          </button>
        </div>
      </div>
      <div className="md:h-[45%] h-[50%] w-full"></div>
      <div className="border solid border-y-0 border-r-0 border-l-8 border-l-[#DFA23A] ">
        <p className=" text-white lg:text-2xl md:text-xl text-l md:w-10/12 px-4 lg:px-8 font-serif">
          Lorem ipsum dolor sit amet consectetur. Cras turpis lectus morbi
          lobortis at fermentum nisl consequat urna. Lorem diam est semper sed
          purus tellus volutpat varius mattis. Adipiscing eget r
        </p>
      </div>
      <div className="h-[10%] w-full flex flex-col items-center justify-center">
        <button className="md:pt-8 pt-4">
          <img
            src={scroll_down}
            alt="Scroll down symbol"
            className="w-[80%] h-[80%]"
            sizes="20%"
          />
        </button>
      </div>
      <hr className="border-4 border-[#DFA23A] absolute bottom-0 w-full" />
    </div>
  );
};

export default Hero;
