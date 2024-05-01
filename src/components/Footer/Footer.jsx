import React from 'react'
import Logo from "./Assets/logo.svg"
import Mail from "./Assets/mail.svg"
import LinkedIn from "./Assets/Linkedin.svg"
import Insta from "./Assets/Insta.svg"
import Youtube from "./Assets/youtube.svg"


const Footer = () => {

    const data = [
    {"Home":["About us","Announcement","Vision", "Society's Message","Upcoming events","Collaborate", "Achievments"], 
    "About":["Journey so far","Our Vision","Society's Message","Team","Reports and Brochures"],
    "Events":["Research 101", "FireSide Chat", "Research Xplore", "Summit", "Project luminar","Carnivals","Others"],
    "Contacts us":["Student","Organization"],
    "Join us":["Volunteer","Member"]
    },]

  return (
    <div className='bg-[#231F20] flex flex-col pb-5'>
        <div className='flex justify-between px-10'>
            <div className='py-10 flex gap-10 items-center'>
                <img src={Logo} alt="logo" className='w-[100px]' />
                <h1 className='text-white text-2xl'>RAMANUJAN SOCIETY OF RESEARCH<br /><span className='font-thin'>IITM BS DEGREE</span></h1>
            </div>
            <div className='py-10 flex gap-10 items-center'>
                <div className='flex flex-col-reverse gap-y-2'>
                    <div className='pt-2 flex justify-center items-center gap-2'>
                        <img src={Mail} alt="logo" className='hover:scale-125 hover:duration-200 duration-200 h-[20px] cursor-pointer' />
                        <h1 className='font-thin text-white pr-2'>research.society@study.iitm.ac.in</h1>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={LinkedIn} alt="logo" className='hover:scale-125 hover:duration-200 duration-200 h-[20px] cursor-pointer' />
                        <img src={Insta} alt="logo" className='hover:scale-125 hover:duration-200 duration-200 h-[20px] cursor-pointer' />
                        <img src={Youtube} alt="logo" className='hover:scale-125 hover:duration-200 duration-200 h-[20px] cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
            <div className='py-5 border-b-[1px] border-t-[2px] border-white'>
                {data.map((item, index) => (
                    <div key={index} className='flex justify-around text-white'>
                        {Object.keys(item).map((key, index) => (
                            <div key={index}>
                                <h1 className='pb-2 font-semibold'>{key}</h1>
                                <ul>
                                    {item[key].map((item, index) => (
                                        <li key={index} className='font-thin py-1 cursor-pointer hover:scale-110 hover:duration-500 duration-500'>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className='pt-2 flex justify-center items-center'>
                <h1 className='font-thin text-[#bfb6b6] pr-2'>© 2024 | All Rights Reserved </h1>
            </div>
            
        </div>

  )
}

export default Footer