import React from 'react';
import Form from './Form';
import styles from './Form.module.css';

export default function CollaborationPage() {
  return (
    <div className={styles.formbg}>
      <div className="flex justify-center items-center h-screen">
        <div className="flex w-screen mx-autoshadow-lg rounded-lg overflow-hidden">
          <div className="w-1/2 p-4">
            <Form bgColor="bg-[#A11D19]" formType="collaboration" />
          </div>
          <div className="w-1/2 p-4 flex justify-center items-center"> 
              <p className="text-7xl font-faustina font-bold text-white">Collaboration<br/>Form</p>
          </div>
        </div>
      </div>
    </div>
  );
}