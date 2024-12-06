import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavRef = useRef(null);
  const dummyRef = useRef([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(NavRef.current, {
      position: "relative",
      display: "flex",
      paddingLeft: 0,
      duration: 8, // Start with opacity 0 and transition to opacity 1
      scrollTrigger: {
        trigger: NavRef.current,
        toggleActions: "restart pause reverse pause",
        scrub: true, // Smoothly animate based on scroll
        start: "clamp(bottom top)", // Pin starts when the top of the trigger hits the top of the viewport
        end: "clamp(+=1500)",
        marker: true,
      },
    });
    gsap.to(dummyRef.current, {
      display: "none",
      scrollTrigger: {
        trigger: NavRef.current,
        toggleActions: "restart pause reverse pause",
        scrub: true, // Smoothly animate based on scroll
        start: "clamp(bottom top)", // Pin starts when the top of the trigger hits the top of the viewport
        marker: true,
      },
    });
  }, {});

  const [activeLink, setActiveLink] = useState("Home");

  const handleItemClick = (item) => {
    setActiveLink(item);
  };

  return (
    <div className="sticky top-0 z-50 bg-white w-full">
      <div className="flex flex-row justify-between shadow-sm pl-[4vw] shadow-red-100 w-full h-[13vh] py-auto">
        <div
          ref={NavRef}
          className="absolute top-0 left-0 flex flex-row gap-4"
          style={{ display: "none" }}
        >
          <img
            className="rounded-full h-[10vh] my-auto"
            src="/logorasor.svg"
            alt="Logo"
          />
          <div className="flex-col self-center">
            <h1 className="font-bold text-3xl tracking-wider ">RaSoR </h1>
            <h1 className="text-lg font-light">IITM BS Degree</h1>
          </div>
        </div>
        <div></div>
        <div className="flex flex-row gap-[4vw] p-[2vh] font-thick text-2xl relative self-center pr-[4vw] ">

          <div>
            {/* <NavLink
              className={`hover:text-red-800 ${
                activeLink === "Home"
                  ? "text-red-800 font-bold underline underline-offset-8"
                  : ""
              }`}
              to="/"
              onClick={() => handleItemClick("Home")}
            > */}
            <NavLink
              className={({isActive}) => `hover:text-red-800 ${isActive && "text-red-800 font-bold underline underline-offset-8"}`}
              to="/"
              onClick={() => handleItemClick("Home")}
            >
              Home
            </NavLink>
          </div>

          <div>
            <NavLink
              className={({isActive}) => `hover:text-red-800 ${isActive && "text-red-800 font-bold underline underline-offset-8"}`}
              to={"/about-us"}
              onClick={() => handleItemClick("About")}
            >
              About
            </NavLink>
          </div>

          <div className="dropdown">
            <a
              className={`dropbtn hover:text-red-800 ${
                activeLink === "Event"
                  ? "text-red-800 font-bold underline underline-offset-8"
                  : ""
              }`}
              href="example.com"
              onClick={() => handleItemClick("Event")}
            >
              Event
            </a>

            <div class="dropdown-content border-t-[1vw] border-opacity-0 pt-4 rounded-md bg-white w-[14vw]">
              <a
                className="text-xl mx-2 rounded-lg border-red-800 border-t-4 hover:text-white"
                href="example.com"
              >
                Reseach 101
              </a>
              <a
                className="text-xl mx-2 rounded-lg hover:text-white"
                href="example.com"
              >
                Fireside Chat
              </a>
              <a
                className="text-xl mx-2 rounded-lg hover:text-white"
                href="example.com"
              >
                Summit
              </a>
              <a
                className="text-xl mx-2 rounded-lg hover:text-white"
                href="example.com"
              >
                Project Luminar
              </a>
              <a
                className="text-xl mx-2 rounded-lg border-b-4 border-red-800 hover:text-white"
                href="example.com"
              >
                Carnival
              </a>
            </div>
            
          </div>

          <div>
            <NavLink
              className={({isActive}) => `hover:text-red-800 ${isActive && "text-red-800 font-bold underline underline-offset-8"}`}
              to={"/team"}
              onClick={() => handleItemClick("Team")}
            >
              Our Team
            </NavLink>
          </div>

          <div>
            <a
              className={`hover:text-red-800 ${
                activeLink === "Contact Us"
                  ? "text-red-800 font-bold underline underline-offset-8"
                  : ""
              }`}
              href="example.com"
              onClick={() => handleItemClick("Contact Us")}
            >
              Contact Us
            </a>
          </div>

          <div>
            <a
              className={`hover:text-red-800 ${
                activeLink === "Join Us"
                  ? "text-red-800 font-bold underline underline-offset-8 "
                  : ""
              }`}
              href="example.com"
              onClick={() => handleItemClick("Join Us")}
            >
              Join Us
            </a>
          </div>
          
        </div>
        <div ref={dummyRef}></div>
      </div>
    </div>
  );
};

export default Navbar;
