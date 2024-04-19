import React from 'react'
import Logo from "./Assets/logo.svg"
import Mail from "./Assets/mail.svg"
import LinkedIn from "./Assets/Linkedin.svg"
import Insta from "./Assets/Insta.svg"
import Youtube from "./Assets/youtube.svg"


const Footer = () => {

    const data = [
    {"Home":["About us","Announcement","Vision", "Leader's desk","Upcoming events","collaborate", "Achievments"], 
    "About":["Journey so far","Our Vision","Society's Message","Team","Reports and Brochures"],
    "Events":["Research 101", "FireSide Chat", "Research Xplore", "Summit", "Project luminar","Carnivals","Others"],
    "Contacts us":[],
    "Join us":["Volunteer","Member"]
    },]

  return (
    <div className='bg-[#231F20] flex flex-col pb-5'>
        <div className='py-10 flex gap-10 items-center border-b-2 border-white'>
            <img src={Logo} alt="logo" className='w-[100px]' />
            <h1 className='text-white text-2xl'>RAMANUJAN SOCIETY OF RESEARCH<br /><span className='font-thin'>IITM BS DEGREE</span></h1>
        </div>
        
            <div className='py-5 border-b-[1px] border-white'>
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
            <div className='pt-2 flex justify-center items-center gap-2 h-[40px]'>
               <img src={Mail} alt="logo" className='h-[50%] cursor-pointer' />
               <h1 className='font-thin text-white border-r-[1px] pr-2 border-white'>research.society@study.iitm.ac.in</h1>
                <img src={LinkedIn} alt="logo" className='h-[40%] cursor-pointer' />
                <img src={Insta} alt="logo" className='h-[40%] cursor-pointer' />
                <img src={Youtube} alt="logo" className='h-[40%] cursor-pointer' />
            </div>
        </div>

  )
}

export default Footer