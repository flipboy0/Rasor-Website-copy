import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "../Navbar/Nvbar";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const rightRef = useRef(null);
  const textbox1 =useRef(null);
  const textbox2 =useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
     gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 8,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 20%",
          end: () => "bottom 80%", // Use a function to dynamically set the end trigger
          pin: ".right",
          pinSpacing: false, // Disable automatic pin spacing

        },
      }
    );

    gsap.to(textbox1.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: textbox1.current,
        toggleActions: "restart pause reverse pause",
        scrub: true, // Smoothly animate based on scroll
        pin: true, // Pin the textbox while in view
        start: "top top", // Pin starts when the top of the trigger hits the top of the viewport
        endTrigger: "nextDiv", // The trigger that signals the end of pinning
        end: "top top", // Pinning ends when the top of the next div hits the top of the viewport
      },
    });
    
    gsap.to(textbox2.current, {
      opacity: 1, 
      ease: "power1.out",
      scrollTrigger: {
        trigger: textbox1.current,
        toggleActions: "restart pause reverse pause",
        scrub: true, // Smoothly animate based on scroll
        pin: true, // Pin the textbox while in view
        start: "top top",
        end: "+=100" ,// Pinning ends when the top of the next div hits the top of the viewport
      },
    });
  }, {});
  return (
    <><Navbar/>
    <div ref={triggerRef} className="gallery flex flex-row justify-around w-full bg-white ">
      <div className="flex flex-col w-2/5 text-black font-semibold self-center mx-[5vw]">
        <div ref={textbox1} className="h-[30vh] mt-[20vh]" >
          <h1 className="text-7xl flex-col">Ramanujan</h1>
          <span className="text-7xl flex my-3"> Society <img ref={imgRef} className="rounded-full h-[10vh] my-auto px-5" src="/logorasor.svg" alt="Logo" /></span>
          <h1 className="text-7xl"> of Research</h1>
          <h1 className="text-4xl font-thin mt-5">AN IITM BS DEGREE SOCIETY </h1>
        </div>
        <div  ref={textbox2} className=" mb-[20vh] opacity-0">
          <h1 className="text-5xl flex-col">About Us</h1>
          <h1 className="text-2xl font-normal py-[4vh] "> Lorem ipsum dolor sit amet consectetur. Felis volutpat scelerisque laoreet nunc adipiscing dignissim lacinia malesuada gravida. Eu tempor neque convallis volutpat quisque. Nisl neque morbi non nullam vel. Ac massa in mi lectus blandit.</h1>
        </div>
      </div>
      <div ref={rightRef} className="right lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex flex-col">
        <img className="object-cover object-center rounded mx-auto self-center" alt="hero" src="/MG-1.svg"/>
      </div>
    </div></>
  );
}

export default ScrollSection;




