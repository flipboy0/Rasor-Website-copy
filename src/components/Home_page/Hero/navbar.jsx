import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import logo from "./img_src/Rasor_Logo.png";
import 'animate.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavFocused, setIsNavFocused] = useState(false);
  const timeoutRef = useRef(null);
  let timeoutId;
  const navbarRef = useRef();

  const handleScroll = () => {
    setIsVisible(true);
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (!isNavFocused) {
        setIsVisible(false);
      }
    }, 2000);

    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0);
  };

  const handleMouseEnter = () => {
    setIsVisible(true);
    setIsNavFocused(true);
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    setIsNavFocused(false);
    if (!isScrolled) {
      setIsVisible(false);
    }
  };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${
      isScrolled ? ' bg-red-900 shadow-md' : ' bg-gradient-to-r from-brown to-white to-black'
    } fixed top-0 left-0 right-0 z-50 p-2 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full '
    }`}
    
    onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="home" smooth={true} duration={500}>
            <img src={logo} alt="Logo" className={`ml-2 rounded-full ${isScrolled ? "w-20 h-20" : "w-25 h-25"}`} />
          </Link>
          <div className={`ml-2 ${isScrolled ? 'opacity-100' : 'opacity-0 invisible'}`}>
            <p className="text-3xl font-bold hidden md:block text-white ">Ramanujan Society of Research</p>
            <p className="text-xl font-bold md:hidden text-white ">RaSoR</p>
            <p className="text-lg text-yellow-500">IITM BS</p>
          </div>
        </div>
        <div className={`flex flex-col md:flex-row items-center text-xl text-yellow-300/50 ${isScrolled ? " text-yellow-400" : ' rounded-lg'}`}>
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <Link to="home" smooth={true} duration={500} className="block p-2">Home</Link>
            <Link to="link1" smooth={true} duration={500} className="block p-2">Link 1</Link>
            <Link to="link2" smooth={true} duration={500} className="block p-2">Link 2</Link>
            <Link to="link3" smooth={true} duration={500} className="block p-2">Link 3</Link>
            <Link to="link4" smooth={true} duration={500} className="block p-2">Link 4</Link>
            <Link to="link5" smooth={true} duration={500} className="block p-2">Link 5</Link>
          </div>
          <div className="md:flex hidden items-center">
            <Link to="home" smooth={true} duration={500} className="hover:text-black hover:border-black-50 hover:bg-yellow-400/50 rounded-md transition-all duration-300 p-2 md:p-3">Home</Link>
            <Link to="link1" smooth={true} duration={500} className="hover:text-black hover:border-black-50 hover:bg-yellow-400/50 rounded-md transition-all duration-300 p-2 md:p-3">Link 1</Link>
            <Link to="link2" smooth={true} duration={500} className="hover:text-black hover:border-black-50 hover:bg-yellow-400/50 rounded-md transition-all duration-300 p-2 md:p-3">Link 2</Link>
            <Link to="link3" smooth={true} duration={500} className="hover:text-black hover:border-black-50 hover:bg-yellow-400/50 rounded-md transition-all duration-300 p-2 md:p-3">Link 3</Link>
            <Link to="link4" smooth={true} duration={500} className="hover:text-black hover:border-black-50 hover:bg-yellow-400/50 rounded-md transition-all duration-300 p-2 md:p-3">Link 4</Link>
            <Link to="link5" smooth={true} duration={500} className="hover:text-black hover:border-black-50 hover:bg-yellow-400/50 rounded-md transition-all duration-300 p-2 md:p-3">Link 5</Link>
          </div>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
