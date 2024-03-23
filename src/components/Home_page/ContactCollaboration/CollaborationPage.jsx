import React from 'react';
import Form from './Form';
import styles from './Form.module.css';

export default function CollaborationPage() {
  return (
    <div className={styles.formbg}>
      <div className="flex justify-center items-center">
        <div className="md:flex-row flex items-center  flex-col-reverse w-full  mx-autoshadow-lg rounded-lg overflow-hidden">
          <div className="">
            <Form bgColor="bg-[#A11D19]" formType="collaboration" />
          </div>
          <div className="w-1/2 p-4 flex justify-center items-center"> 
              <p className="sm:text-6xl text-5xl px-5  lg:text-7xl md:text-left text-center font-faustina font-bold text-white">Collaboration<br/>Form</p>
          </div>
        </div>
      </div>
    </div>
  );
}