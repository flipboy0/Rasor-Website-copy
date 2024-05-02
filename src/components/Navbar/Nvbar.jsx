import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = () => {
    const NavRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(NavRef.current, {
            position: "relative",
            display: "block",
            ease: "circ.inOut",
            paddingLeft: 0,
            duration: 8, // Start with opacity 0 and transition to opacity 1
            scrollTrigger: {
                trigger: NavRef.current,
                toggleActions: "restart pause reverse pause",
                scrub: true, // Smoothly animate based on scroll
                start: "clamp(bottom top)", // Pin starts when the top of the trigger hits the top of the viewport
                end: "clamp(+=1000)",
                markers: true, // Pinning ends when the top of the next div hits the top of the viewport
            },
        });
    }, []);

    const [activeLink, setActiveLink] = useState("Home");

    const handleItemClick = (item) => {
        setActiveLink(item);
    };

    return (
        <div className="sticky top-0 z-50 bg-white w-full">
            <div className="flex flex-row justify-around shadow-sm shadow-red-100 w-full h-[13vh] py-auto">
                <img
                    ref={NavRef}
                    className="rounded-full h-[10vh] my-auto p-[-10vw] absolute top-0 left-0"
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
                    <div>
                        <a
                            className={`hover:text-red-800 ${
                                activeLink === "Event" ? "text-red-800 font-bold underline underline-offset-8" : ""
                            }`}
                            href="example.com"
                            onClick={() => handleItemClick("Event")}
                        >
                            Event
                        </a>
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
                                activeLink === "Join Us" ? "text-red-800 font-bold underline underline-offset-8" : ""
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

