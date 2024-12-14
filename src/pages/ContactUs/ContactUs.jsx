import React, { useState } from 'react';
import './ContactUs.css';
import { FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Watermark from '../../components/Watermark/Watermark';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    queryType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
      <div>
            <Watermark
            message = "CONTACT US"
            />

            <div className='flex justify-center items-center py-0'><h1 className='text-50xxl font-medium '>CONTACT US</h1></div>
            
        </div>
        <div className="divider"></div>
        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="queryType">Query Type</label>
              <select
                id="queryType"
                name="queryType"
                value={formData.queryType}
                onChange={handleChange}
                required
              >
                <option value="">Choose an Option</option>
                <option value="collaboration">Collaboration Request</option>
                <option value="grievance">Student Grievance</option>
                <option value="feedback">Feedback and Ideas</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="submit-button-container">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
          <div className="contact-info">
            <div className="email-section">
              <h4>Write to us</h4>
              <div className="email-container">
                <MdEmail className="email-icon" />
                <a href="mailto:research.society@study.iitm.ac.in">
                  research.society@study.iitm.ac.in
                </a>
              </div>
            </div>
            <div className="social-section">
              <h4>Follow us on</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/rasor-iitm" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon linkedin" />
                </a>
                <a href="https://www.youtube.com/@rasor_iitm" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="social-icon youtube" />
                </a>
                <a href="https://www.instagram.com/rasor_iitm/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-icon instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


