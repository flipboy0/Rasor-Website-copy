import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Navbar from './navbar';
import background from "./img_src/rasor_hero_bg.png";
import scrollDownIcon from "./img_src/scroll down sign.png";
import 'animate.css';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="home" className="relative">
      <div className={`sticky top-0 z-50 w-full ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-100 transition-opacity duration-500'}`}>
        <Navbar isScrolled={isScrolled} />
      </div>
      <div
        className={`bg-cover bg-center -z-20 h-screen flex flex-col items-center justify-center relative ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-100 transition-opacity duration-500'}`}
        style={{
          backgroundImage: `url(${background})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="text-center w-4/5 fixed top-2/5 text-white">
          <h1 className="text-3xl md:text-5xl font-bold m-4 animate__animated animate__fadeInDown"            >
            Ramanujan Society of Research
          </h1>
          <p className="lg:text-lg text-sm mb-8 max-w-2xl mx-auto animate__animated animate__fadeInUp border-t-[3px] border-yellow-500/45 pt-6">
            Lorem ipsum dolor sit amet consectetur. Cras turpis lectus morbi
            lobortis at fermentum nisl consequat urna. Lorem diam est semper sed
            purus tellus volutpat varius mattis. Adipiscing eget r
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
