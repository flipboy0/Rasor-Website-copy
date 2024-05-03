import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Announcement.css"
import Button from '../Button/Button'
export const Announcement = () => {
  const announcementRef = useRef(null)
  useGSAP(() => {
    gsap.to(announcementRef.current, {
      x: "-=80vw",
      scrollTrigger: {
        trigger: announcementRef.current,
        start: "top 40%",
        end: "bottom 30%",
        scrub:3
      }
    })
  })
  return (
    <div ref={announcementRef} className='border-y-2 ring-black ring-1 left-[80vw] pr-10 flex items-center justify-between w-full h-[70px] mt-5 text-xl'>
      
        <div  className='flex w-[80%] bg-[#DFA43A] bg-opacity-40 h-full justify-around items-center pr-5'>
          <p class="marquee">
            <span className='text-[#C41E3A]'>
              <a className='' href='https://www.google.com/'>4. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta odio dolorem optio, quia ullam in?
              </a>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              <a href='https://www.youtube.com/'>1. Minima aliquid nemo perferendis facere corporis porro maxime.
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              <a className='' href='https://www.google.com/'>2. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta odio dolorem optio, quia ullam in?
              </a>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              <a href='https://www.youtube.com/'>3. Minima aliquid nemo perferendis facere corporis porro maxime.
              </a>
            </span>
          </p>  
        </div>
        <Button className=' flex w-[15%] justify-center text-2xl text-white h-full items-center bg-red-800 text-center' link='https://www.google.com/' label='Announcement' />
    </div>
  )
}

export default Announcement