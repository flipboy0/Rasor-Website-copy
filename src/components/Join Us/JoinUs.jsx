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
          <label htmlFor="Level in Degree">Year of Study</label>
          <select
            id="levelInDegree"
            name="levelInDegree"
            value={formData.levelInDegree}
            onChange={handleChange}
            required
          >
            <option value="">Select Year</option>
            <option value="1">Foundation</option>
            <option value="2">Diploma</option>
            <option value="3">Degree(BSc)</option>
            <option value="4">Degree(BS)</option>
          </select>
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

        <Button type="submit">Submit Application</Button>
      </form>
    </div>
  );
}

