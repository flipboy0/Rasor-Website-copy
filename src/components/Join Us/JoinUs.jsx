import './JoinUs.css';
import React, { useState } from 'react';

const Button = ({ children, type = 'button', onClick }) => (
  <button type={type} onClick={onClick} className="submit-button">
    {children}
  </button>
);

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNumber: '',
    department: '',
    levelInDegree: '',
    whyJoin: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="join-us-container">
      <div className="join-us-header">
        <h1>Join Ramanujan Society of Research</h1>
        <p>Be part of IITM BS Degree Society's research community</p>
      </div>
      
      <form className="join-us-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rollNumber">Roll Number</label>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="levelInDegree">Level in Degree</label>
          <input
            type="text"
            id="levelInDegree"
            name="levelInDegree"
            value={formData.levelInDegree}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="whyJoin">Why do you want to join the society?</label>
          <textarea
            id="whyJoin"
            name="whyJoin"
            value={formData.whyJoin}
            onChange={handleChange}
            required
            rows={4}
          />
        </div>

        <div className="google-form-link">
          <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer">
            Click here to fill the form
          </a>
        </div>
        <Button type="submit">Submit Application</Button>
      </form>
    </div>
  );
}

