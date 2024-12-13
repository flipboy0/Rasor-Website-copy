import React, { useState } from 'react';
import './JoinUs.css';

export default function JoinUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: '',
    levelInDegree: '',
    whyJoin: ''
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
    <div className="join-us-wrapper">
      <div className="join-us-container">
        <h1>JOIN US</h1>
        <div className="divider"></div>
        <p className="join-us-intro">Be a part of RaSoR today! by filling your details in the form below</p>
        <div className="join-us-content">
          <form onSubmit={handleSubmit} className="join-us-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Your Full Name"
                value={formData.fullName}
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
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="Data Science">Data Science</option>
                <option value="Electronics Systems">Electronics Systems</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="levelInDegree">Level in Degree</label>
              <select
                id="levelInDegree"
                name="levelInDegree"
                value={formData.levelInDegree}
                onChange={handleChange}
                required
              >
                <option value="">Select Level</option>
                <option value="Foundation">Foundation</option>
                <option value="Diploma">Diploma</option>
                <option value="Degree(BSc.)">Degree(BSc.)</option>
                <option value="Degree(BS)">Degree(BS)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="whyJoin">Why do you want to be a part of RaSoR?</label>
              <textarea
                id="whyJoin"
                name="whyJoin"
                placeholder="Tell us why you want to join"
                value={formData.whyJoin}
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
        </div>
      </div>
    </div>
  );
}

