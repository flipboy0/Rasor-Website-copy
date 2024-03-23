import React from 'react';
import { useState, useEffect } from 'react';
import Form from './Form';
import arrowImage from './arrow.png';

export default function ContactPage() {

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 


  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex justify-center items-center">
        {windowSize>640 ? (<div className="flex w-screen mx-auto">
          <div className="w-2/3 flex flex-col justify-center items-center"> 
            <p className="text-7xl font-faustina font-bold text-black mb-4">Contact us</p>
            <p className="text-black text-base px-5 text-center font-normal">Need to get in touch with us? fill out the form with your inquiry and we will reach in your shortly</p>
            <p className="text-black text-base px-5 text-center font-normal">If you want to <span className='text-[#A11D19] font-bold'>COLLABORATE</span> with us, you can do so by filling the form below.</p>
            <img src={arrowImage} alt="Arrow" className="mt-5 mr-5"/>
          </div>
          <div className="w-1/2 mr-5 pt-[100px]">
            <Form bgColor="bg-[#DFA43A]" formType="contact" />
          </div>
        </div>) :
        (<div className="flex  items-center flex-col w-screen mx-auto pt-[150px]">
          <div className="w-2/3 flex flex-col justify-center items-center"> 
            <p className="sm:text-7xl text-center text-5xl font-faustina font-bold text-black mb-4">Contact us</p>
            <p className="text-black text-base pl-5 text-center font-normal">Need to get in touch with us? fill out the form with your inquiry and we will reach in your shortly</p>
          </div>
          <div className='w-full px-5'> 
            <Form bgColor="bg-[#DFA43A]" formType="contact" />
          </div>
          <p className="text-black text-base p-5 sm:pr-0 text-center font-normal">If you want to <span className='text-[#A11D19] font-bold'>COLLABORATE</span> with us, you can do so by filling the form below.</p>
        </div>)}
      </div>
    </div>
  );
}
