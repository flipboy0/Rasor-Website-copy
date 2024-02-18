import React from 'react';
import logo from "./img_src/main_logo.png";
import instagramIcon from "./img_src/instagram.png";
import youtubeIcon from "./img_src/youtube.png";
import linkedinIcon from "./img_src/linkedin.png";
import twitterIcon from "./img_src/twitter.png";
import facebookIcon from "./img_src/facebook.png";

const Footer = (props) => {
  const backgroundImageUrl = '/welcome_bg.png';
  return (
    <footer className="text-gray-600 body-font border-t-4 border-red-800 " style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'left', }}>
      <div className="container bg-image  px-5 py-10 mx-auto">
<div className="flex flex-wrap justify-between md:text-left text-center order-first">
  {/* About Us Section */}
  <div className="w-11/12 md:w-[70%] bg-black/60 hover:bg-black/80 ring-2 ring-red-800 m-auto flex flex-wrap md:text-left text-center order-first pt-5">
  <div className="lg:w-1/4 w-1/2 px-4">
    <h2 className="title-font font-semibold text-red-800 tracking-widest text-md mb-3">About Us</h2>
    <nav className="list-none mb-5 text-white border-r-2 border-red-800 pr-2 lg:pr-0">
      <li>
        <a href="#about-rasor" className=" hover:text-yellow-200">About RaSoR</a>
      </li>
      <li>
        <a href="#join-us" className=" hover:text-yellow-200">Join Us</a>
      </li>
      <li>
        <a href="#teams" className=" hover:text-yellow-200">Teams</a>
      </li>
      <li>
        <a href="#faqs" className=" hover:text-yellow-200">FAQs</a>
      </li>
    </nav>
  </div>


  {/* Publications Section */}
  <div className="lg:w-1/4 w-1/2 px-4">
    <h2 className="title-font font-semibold text-red-800 tracking-widest text-md mb-3">Publications</h2>
    <nav className="list-none mb-5 text-white lg:border-r-2 border-red-800 lg:pr-0 pr-2">
      <li>
        <a href="#about-publications" className="hover:text-yellow-200">About Publications</a>
      </li>
      <li>
        <a href="#digital-library" className="hover:text-yellow-200">Digital Library</a>
      </li>
      <li>
        <a href="#journals" className="hover:text-yellow-200">Journals</a>
      </li>
      <li>
        <a href="#blogs" className="hover:text-yellow-200">Blogs</a>
      </li>
    </nav>
  </div>

  {/* Research Section */}
  <div className="lg:w-1/4 w-1/2 px-4">
    <h2 className="title-font font-semibold text-red-800 tracking-widest text-md mb-3">Research</h2>
    <nav className="list-none mb-5 text-white border-r-2 border-red-800">
      <li>
        <a href="#current-research" className="hover:text-yellow-200">Current Research Areas</a>
      </li>
      <li>
        <a href="#innovation" className="hover:text-yellow-200">Innovation</a>
      </li>
      <li>
        <a href="#collaboration" className="hover:text-yellow-200">Collaboration</a>
      </li>
      <li>
      &nbsp;
      </li>
    </nav>
  </div>

  {/* Important Links Section */}
  <div className="lg:w-1/4 w-1/2 px-4">
    <h2 className="title-font font-semibold  text-red-800 tracking-widest text-md mb-3">Important Links</h2>
    <nav className="list-none mb-5  text-white">
      <li>
        <a href="#privacy-policy" className="hover:text-yellow-200">Privacy Policy</a>
      </li>
      <li>
        <a href="#accessibility" className="hover:text-yellow-200">Accessibility</a>
      </li>
      <li>
        <a href="#terms-of-use" className="hover:text-yellow-200">Terms of Use</a>
      </li>
      <li>
        <a href="#rti" className="hover:text-yellow-200">RTI</a>
      </li>
      <li>
        <a href="#tenders" className="hover:text-yellow-200">Tenders</a>
      </li>
    </nav>
  </div>
  </div>

</div>
      </div>
      <div className="bg-black/90 border-t-2 border-red-800">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src={logo} alt="RaSoR Logo" className="w-10 h-10 rounded-full" />
            <span className="ml-3 text-xl">Ramanujan Society of Research</span>
          </div>
          <p className="text-sm text-red-200 sm:ml-6 sm:mt-0 mt-4">© {new Date().getFullYear()} RaSoR —
            <a href="mailto:research.society@study.iitm.ac.in" className="text-red-200 ml-1">research.society@study.iitm.ac.in</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="text-gray-500">
              <img src={twitterIcon} alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
              <img src={facebookIcon} alt="Facebook" className="w-5 h-5 " />
            </a>
            <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
              <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="https://youtube.com/example" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
              <img src={youtubeIcon} alt="YouTube" className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/example" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
