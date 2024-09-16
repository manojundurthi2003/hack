import React, { useState } from 'react';
import './AddResearchPage.css';

const AddResearchesPage = () => {
  const [researchData, setResearchData] = useState({
    title: '',
    category: '',
    abstract: '',
    keywords: '',
    researchers: '',
    institution: '',
    startDate: '',
    endDate: '',
    status: '',
    funding: '',
    researchUrl: ''
  });

  const handleChange = (e) => {
    setResearchData({
      ...researchData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/submit-research', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(researchData)
      });
      
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Research Title</label>
      <input type="text" name="title" onChange={handleChange} placeholder="Enter the research title" required />

      <label>Research Category</label>
      <select name="category" onChange={handleChange} required>
        <option value="">Select a category</option>
        <option value="Science">Science</option>
        <option value="Technology">Technology</option>
        <option value="Health">Health</option>
        <option value="Engineering">Engineering</option>
        <option value="Environment">Environment</option>
      </select>

      <label>Research Abstract</label>
      <textarea name="abstract" rows="5" onChange={handleChange} placeholder="Provide a brief description" required />

      <label>Keywords</label>
      <input type="text" name="keywords" onChange={handleChange} placeholder="Add relevant keywords" />

      <label>Researcher(s) Name</label>
      <input type="text" name="researchers" onChange={handleChange} placeholder="Enter the name(s) of researcher(s)" required />

      <label>Institution/Organization</label>
      <input type="text" name="institution" onChange={handleChange} placeholder="Enter affiliated institution" required />

      <label>Start Date</label>
      <input type="date" name="startDate" onChange={handleChange} required />

      <label>End Date</label>
      <input type="date" name="endDate" onChange={handleChange} />

      <label>Research Status</label>
      <select name="status" onChange={handleChange} required>
        <option value="">Select research status</option>
        <option value="Ongoing">Ongoing</option>
        <option value="Completed">Completed</option>
        <option value="Published">Published</option>
        <option value="In Review">In Review</option>
      </select>

      <label>Funding</label>
      <input type="text" name="funding" onChange={handleChange} placeholder="Enter funding details" />

      <label>Research URL</label>
      <input type="url" name="researchUrl" onChange={handleChange} placeholder="Provide a URL link" />

      <button type="submit">Submit Research</button>
    </form>
  );
};

export default AddResearchesPage;
