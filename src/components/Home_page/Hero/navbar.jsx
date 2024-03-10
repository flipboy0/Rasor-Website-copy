// Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import logo from "./img_src/Rasor_Logo.png";
import BlogLogo from "./img_src/icon/Blog.png"
import HomeLogo from "./img_src/icon/Home.png"
import ResearchLogo from "./img_src/icon/Research.png"
import UpdateLogo from "./img_src/icon/Update.png"
import NewsletterLogo from "./img_src/icon/Newsletter.png"
import ContactLogo from "./img_src/icon/Contact.png"



import 'animate.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavFocused, setIsNavFocused] = useState(false);
  const timeoutRef = useRef(null);

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
  },);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Define an array of section names for mobile menu
  const sectionNames = [
    {name:'Home',
     address: "/",
     logo: HomeLogo}, 

    {name:'Update',
     address: "/update",
     logo:UpdateLogo},

     {name:'Research',
     address: "/research",
     logo:ResearchLogo},

     {name:'Blog',
     address: "/blogs",
     logo:BlogLogo},

    ];

    const MobNavSection = [
      {name:'Home',
       address: "/",
       logo: HomeLogo}, 
  
       {name:'Research',
       address: "/research",
       logo:ResearchLogo},
  
       {name:'Blog',
       address: "/blogs",
       logo:BlogLogo},
  
      ];
    const navigate = useNavigate();

  return (
    <nav className={`${isScrolled ? ' bg-red-900 shadow-md' : ' bg-gradient-to-r from-brown to-white to-black'
      } fixed top-0 left-0 right-0 z-50 p-2 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full '
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="home" smooth={true} duration={500}>
            <img src={logo} alt="Logo" className={`ml-2 rounded-full  ${isScrolled ? "w-20 h-20" : "w-25 h-25"}`} />
          </Link>
          <div className={`ml-2 ${isScrolled ? 'opacity-100' : 'opacity-0 invisible'}`}>
            <p className="text-2xl lg:3xl font-bold hidden lg:block text-white ">Ramanujan Society of Research</p>
            <p className="text-xl font-bold lg:hidden text-white ">RaSoR</p>
            <p className="text-lg text-yellow-500">IITM BS</p>
          </div>
        </div>
        <div className={`flex flex-col md:flex-row items-center text-lg text-yellow-300/50 ${isScrolled ? " text-yellow-400" : ' rounded-lg'}`}>
          <div className="md:flex hidden items-center">
            {sectionNames.map((sectionName, index) => (
              <Link
                key={index}
                onClick={()=>navigate(sectionName.address)}
                smooth={true}
                duration={500}
                className="hover:text-black hover:border-black-50 hover:bg-yellow-400/50 rounded-md transition-all duration-300 p-2 md:p-3"
              >
                {sectionName.name}
              </Link>
            ))}
            <Link
              to='newsletter'
              
              smooth={true}
              duration={500}
              className="hover:text-black hover:border-black-50 hover:bg-yellow-400/50 rounded-md transition-all duration-300 p-2 md:p-3"
            >
              Newsletter
            </Link>
            <Link
              onClick={()=>navigate("/contact-us")}
              smooth={true}
              duration={500}
              className="hover:text-black hover:border-black-50 hover:bg-yellow-400/50 rounded-md transition-all duration-300 p-2 md:p-3"
            >
              Contact Us
            </Link>
          </div>

        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
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
      <div className='flex-row justify-between rounded-lg m-0 p-0 w-full shrink-0 overflow-x-auto'> {/* Add overflow-x-auto to enable horizontal scrolling if needed */}
      <div className={`md:hidden py-1 px-3 bg-white/50 ring-2 ring-yellow-400 ${isMobileMenuOpen ? 'block': 'hidden'} flex justify-between`}>

          {MobNavSection.map((MobNavSection, index) => (
            <Link
              key={index}
              onClick={()=>navigate(MobNavSection.address)}
              smooth={true}
              duration={500}
              className="block p-3 rounded-full hover:ring-2 ring-black hover:bg-red-900"
            >
              <img className='h-12 p-2' src={MobNavSection.logo} alt={MobNavSection.name} />
            </Link>
          ))}
          <Link
              
              onClick={()=>navigate("/")}
              to='newsletter'
              smooth={true}
              duration={500}
              className="block p-3 rounded-full hover:ring-2 ring-black hover:bg-red-900"
            >
              <img className='h-12 p-2' src={NewsletterLogo} alt="Newsletter" />
            </Link>
            <Link
              
              onClick={()=>navigate("/contact-us")}
       
              smooth={true}
              duration={500}
              className="block p-3 rounded-full hover:ring-2 ring-black hover:bg-red-900"
            >
              <img className='h-12 p-2' src={ContactLogo} alt="Contact Us" />
            </Link>
            
        </div>
      </div>
    </nav>
  );

};

export default Navbar;
