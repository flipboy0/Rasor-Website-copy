import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Navbar.css";

const Navbar = () => {
    const NavRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(NavRef.current, {
            position: "relative",
            display: "block",
            ease: "circ.inOut",
            rotate:360,
            paddingLeft: 0,
            duration: 8, // Start with opacity 0 and transition to opacity 1
            scrollTrigger: {
                trigger: NavRef.current,
                toggleActions: "restart pause reverse pause",
                scrub: true, // Smoothly animate based on scroll
                start: "clamp(bottom top)", // Pin starts when the top of the trigger hits the top of the viewport
                end: "clamp(+=1000)",
            },
        });
    }, {});

    const [activeLink, setActiveLink] = useState("Home");

    const handleItemClick = (item) => {
        setActiveLink(item);
    };

    return (
        <div className="sticky top-0 z-50 bg-white w-full">
            <div className="flex flex-row justify-around shadow-sm shadow-red-100 w-full h-[13vh] py-auto">
                <img
                    ref={NavRef}
                    className="rounded-full h-[10vh] my-auto absolute top-0 left-0"
                    style={{ display: "none" }}
                    src="/logorasor.svg"
                    alt="Logo"
                />
                <div className="flex flex-row gap-[4vw] p-[2vh] font-thick text-2xl relative self-center">
                    <div>
                        <a
                            className={`hover:text-red-800 ${
                                activeLink === "Home" ? "text-red-800 font-bold underline underline-offset-8" : ""
                            }`}
                            href="example.com"
                            onClick={() => handleItemClick("Home")}
                        >
                            Home
                        </a>
                    </div>
                    <div>
                        <a
                            className={`hover:text-red-800 ${
                                activeLink === "About" ? "text-red-800 font-bold underline underline-offset-8" : ""
                            }`}
                            href="example.com"
                            onClick={() => handleItemClick("About")}
                        >
                            About
                        </a>
                    </div>
                    <div className="dropdown">
                        <a
                            className={`dropbtn hover:text-red-800 ${
                                activeLink === "Event" ? "text-red-800 font-bold underline underline-offset-8" : ""
                            }`}
                            href="example.com"
                            onClick={() => handleItemClick("Event")}
                        >
                            Event
                        </a>
                        <div class="dropdown-content border-t-[1vw] border-opacity-0 pt-4 rounded-md bg-white w-[14vw]">
    <a className="text-xl mx-2 rounded-lg border-red-800 border-t-4 hover:text-white" href="#" >Reseach 101</a>
    <a className="text-xl mx-2 rounded-lg hover:text-white" href="#">Fireside Chat</a>
    <a className="text-xl mx-2 rounded-lg hover:text-white" href="#">Summit</a>
    <a className="text-xl mx-2 rounded-lg hover:text-white" href="#">Project Luminar</a>
    <a className="text-xl mx-2 rounded-lg border-b-4 border-red-800 hover:text-white" href="#">Carnival</a>
  </div>
                    </div>
                    <div>
                        <a
                            className={`hover:text-red-800 ${
                                activeLink === "Contact Us" ? "text-red-800 font-bold underline underline-offset-8" : ""
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
                                activeLink === "Join Us" ? "text-red-800 font-bold underline underline-offset-8 " : ""
                            }`}
                            href="example.com"
                            onClick={() => handleItemClick("Join Us")}
                        >
                            Join Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

