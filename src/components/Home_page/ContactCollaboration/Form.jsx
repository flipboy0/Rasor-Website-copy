import React, { useState } from 'react';

export default function Form({ bgColor, formType }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    queryType: 'General Inquiry',
    message: '',
  });

  const formSettings = {
    collaboration: {
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSdZB6AbwAOBRuJMoV-msG913EeKf6ORx52PqGxyatMv23acew/formResponse',
      ids: {
        name: 'entry.1423259260', 
        email: 'entry.392781216',
        queryType: 'entry.1528523760',
        message: 'entry.86332082',
      },
    },
    contact: {
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSfqtRrfKroVtwu5KEFpNxB8b5J33ZawnBRXx3MBTymJ4stGUA/formResponse',
      ids: {
        name: 'entry.356627853', 
        email: 'entry.776752826',
        queryType: 'entry.1289814841',
        message: 'entry.1844881418',
      },
    },
  };

  // Adjusted to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentFormSettings = formSettings[formType]; // Use formType prop to get current form settings

    const formDataToSubmit = new URLSearchParams();
    Object.keys(formData).forEach(key => {
      formDataToSubmit.append(currentFormSettings.ids[key], formData[key]);
    });

    try {
      await fetch(currentFormSettings.url, {
        method: 'POST',
        mode: 'no-cors', // To avoid CORS issues
        body: formDataToSubmit,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was a problem submitting your form. Please try again.');
    }
  };
  return (
    <div className="flex justify-center sm:pt-10 pt-5 w-full bg=[#F6F6F6]">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name" 
              type="text"
              placeholder="Type your name"
              value={formData.name} 
              onChange={handleChange} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email" 
              type="email"
              placeholder="Type your email"
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="queryType">
              Query Type
            </label>
            <select
              className="block appearance-none w-full bg-white border hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="queryType"
              name="queryType" 
              value={formData.queryType} 
              onChange={handleChange} 
            >
              <option>General Inquiry</option>
              <option>Support Request</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message" 
              placeholder="Type your message"
              rows="8"
              value={formData.message} 
              onChange={handleChange} 
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className={`${bgColor} hover:bg-red-700 text-white w-4/6 font-bold py-2 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110`}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

