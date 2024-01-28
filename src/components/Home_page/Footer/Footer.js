import React from 'react';
import logo from "./img_src/main_logo.png";
import instagramIcon from "./img_src/instagram.png";
import youtubeIcon from "./img_src/youtube.png";
import linkedinIcon from "./img_src/linkedin.png";
import twitterIcon from "./img_src/twitter.png";
import facebookIcon from "./img_src/facebook.png";

const Footer = (props) => {
  return (
    <footer className="text-gray-600 body-font bg-red-100">
      <div className="container px-5 py-10 mx-auto">
<div className="flex flex-wrap md:text-left text-center order-first">
  {/* About Us Section */}
  <div className="w-[70%] flex flex-wrap md:text-left text-center order-first">
  <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md mb-3">About Us</h2>
    <nav className="list-none mb-5">
      <li>
        <a href="#about-rasor" className="text-gray-600 hover:text-gray-800">About RaSoR</a>
      </li>
      <li>
        <a href="#join-us" className="text-gray-600 hover:text-gray-800">Join Us</a>
      </li>
      <li>
        <a href="#teams" className="text-gray-600 hover:text-gray-800">Teams</a>
      </li>
      <li>
        <a href="#faqs" className="text-gray-600 hover:text-gray-800">FAQs</a>
      </li>
    </nav>
  </div>


  {/* Publications Section */}
  <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md mb-3">Publications</h2>
    <nav className="list-none mb-5">
      <li>
        <a href="#about-publications" className="text-gray-600 hover:text-gray-800">About Publications</a>
      </li>
      <li>
        <a href="#digital-library" className="text-gray-600 hover:text-gray-800">Digital Library</a>
      </li>
      <li>
        <a href="#journals" className="text-gray-600 hover:text-gray-800">Journals</a>
      </li>
      <li>
        <a href="#blogs" className="text-gray-600 hover:text-gray-800">Blogs</a>
      </li>
    </nav>
  </div>

  {/* Research Section */}
  <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md mb-3">Research</h2>
    <nav className="list-none mb-5">
      <li>
        <a href="#current-research" className="text-gray-600 hover:text-gray-800">Current Research Areas</a>
      </li>
      <li>
        <a href="#innovation" className="text-gray-600 hover:text-gray-800">Innovation</a>
      </li>
      <li>
        <a href="#collaboration" className="text-gray-600 hover:text-gray-800">Collaboration</a>
      </li>
    </nav>
  </div>

  {/* Important Links Section */}
  <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 className="title-font font-semibold  text-gray-900 tracking-widest text-md mb-3">Important Links</h2>
    <nav className="list-none mb-5">
      <li>
        <a href="#privacy-policy" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
      </li>
      <li>
        <a href="#accessibility" className="text-gray-600 hover:text-gray-800">Accessibility</a>
      </li>
      <li>
        <a href="#terms-of-use" className="text-gray-600 hover:text-gray-800">Terms of Use</a>
      </li>
      <li>
        <a href="#rti" className="text-gray-600 hover:text-gray-800">RTI</a>
      </li>
      <li>
        <a href="#tenders" className="text-gray-600 hover:text-gray-800">Tenders</a>
      </li>
    </nav>
  </div>
  </div>
  <div className="md:w-[30%] w-full px-4">
  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
  <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
    <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
      <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
      <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    </div>
    <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
  </div>
  <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
    <br className="lg:block hidden" />waistcoat green juice
  </p>
</div>

</div>
      </div>
      <div className="bg-black">
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
