import React from 'react';
import Form from './Form';
import arrowImage from './arrow.png';

export default function ContactPage() {
  return (
    <div className="bg-[#F6F6F6] pt-[60px]">
      <div className="flex justify-center items-center h-screen">
        <div className="flex w-screen mx-auto">
        <div className="w-2/3 flex flex-col justify-center items-center"> 
          <p className="text-7xl font-faustina font-bold text-black mb-4">Contact us</p>
          <p className="text-black text-base font-normal">Need to get in touch with us? fill out the form with your inquiry and we will reach in your shortly</p>
          <p className="text-black text-base font-normal">If you want to <span className='text-[#A11D19] font-bold'>COLLABORATE</span> with us, you can do so by filling the form below.</p>
          <img src={arrowImage} alt="Arrow" className="mt-5 mr-5"/>
        </div>
          <div className="w-1/2 p-4">
            <Form bgColor="bg-[#DFA43A]" formType="contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
