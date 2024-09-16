import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MentorList.css';


// Updated mentor data
const mentors = [
  
  { id: 1, name: 'Anamika Dey', expertise: 'CEO, Gujarat Grassroots Innovation Augmentation Network (GIAN)', profilePic: 'https://via.placeholder.com/150', bio: 'CEO of GIAN with extensive experience in grassroots innovation.' },
  { id: 2, name: 'Dr. Shrinivas Savale', expertise: 'AIC-LMCP Foundation', profilePic: 'https://via.placeholder.com/150', bio: 'Expert in various aspects of business and innovation with AIC-LMCP Foundation.' },
  { id: 3, name: 'Sudeep Ambare', expertise: 'International Automobile Centre of Excellence', profilePic: 'https://via.placeholder.com/150', bio: 'Specialist in automobile engineering and innovation.' },
  { id: 4, name: 'Ravin Bhadja', expertise: 'RB Corporation, Value Plus Group', profilePic: 'https://via.placeholder.com/150', bio: 'Experienced professional in corporate development and value addition.' },
  { id: 5, name: 'Harishwar Suru', expertise: 'Kalatvam', profilePic: 'https://via.placeholder.com/150', bio: 'Expert in innovation and creative development.' },
  { id: 6, name: 'Dr. Raju Shanmugam', expertise: 'Unitedworld School of Computational Intelligence, Karnavati', profilePic: 'https://via.placeholder.com/150', bio: 'Professor specializing in computational intelligence and advanced research.' },
  { id: 7, name: 'Dr. Raashid Saiyed', expertise: 'R&A Advisory', profilePic: 'https://via.placeholder.com/150', bio: 'Consultant with expertise in advisory services and innovation.' },
  { id: 8, name: 'LALITKUMAR', expertise: 'Nikseam Consultancy Pvt Ltd', profilePic: 'https://via.placeholder.com/150', bio: 'Consultant with a focus on business solutions and consultancy.' },
  { id: 9, name: 'CHINTAN SHAH', expertise: 'CHINTAN D SHAH & ASSOCIATES', profilePic: 'https://via.placeholder.com/150', bio: 'Legal expert in business and financial solutions.' },
  { id: 10, name: 'Sandip Nair', expertise: 'Rupay Vidya', profilePic: 'https://via.placeholder.com/150', bio: 'Specialist in educational and technological development.' },
  { id: 11, name: 'Dr. Ripal Ranpara', expertise: 'ATMIYA UNIVERSITY', profilePic: 'https://via.placeholder.com/150', bio: 'Academic with a focus on educational advancement and research.' },
  { id: 12, name: 'HEURISTIC CAPITAL SERVICES PRIVATE LIMITED', expertise: 'HEURISTIC CAPITAL SERVICES PRIVATE LIMITED', profilePic: 'https://via.placeholder.com/150', bio: 'Financial services expert with extensive industry experience.' },
  { id: 13, name: 'Ministry of Commerce and Industry, (APEDA) Govt. of India.', expertise: 'Government of India', profilePic: 'https://via.placeholder.com/150', bio: 'Government body specializing in agricultural and industrial development.' },
  { id: 14, name: 'Sanghi Industries', expertise: 'Sanghi Industries', profilePic: 'https://via.placeholder.com/150', bio: 'Industry expert with a focus on industrial growth and development.' },
  { id: 15, name: 'Parul University', expertise: 'Educational Institution', profilePic: 'https://via.placeholder.com/150', bio: 'Institution providing education and research opportunities.' },
  { id: 16, name: 'Canara Bank', expertise: 'Banking Sector', profilePic: 'https://via.placeholder.com/150', bio: 'Banking expert with experience in financial services and solutions.' },
  { id: 17, name: 'DN Castech', expertise: 'DN Castech', profilePic: 'https://via.placeholder.com/150', bio: 'Technology expert with focus on engineering and development.' },
  { id: 18, name: 'Mechatronics Systems Private Limited', expertise: 'Mechatronics', profilePic: 'https://via.placeholder.com/150', bio: 'Specialist in mechatronics and integrated systems.' },
  { id: 19, name: 'AASHARA STPC', expertise: 'AASHARA STPC', profilePic: 'https://via.placeholder.com/150', bio: 'Expert in project management and technical consultancy.' },
  { id: 20, name: 'Manubhai & Shah LLP, Chartered Accountants', expertise: 'Chartered Accountancy', profilePic: 'https://via.placeholder.com/150', bio: 'Financial experts specializing in accountancy and business consulting.' },
  { id: 21, name: 'Grocap Advisory Services Pvt. Ltd.', expertise: 'Advisory Services', profilePic: 'https://via.placeholder.com/150', bio: 'Consultancy services expert with a focus on business advisory.' },
  { id: 22, name: 'Electronics Department Saurashtra University', expertise: 'Electronics Research', profilePic: 'https://via.placeholder.com/150', bio: 'Academic department specializing in electronics and technology.' },
  { id: 23, name: 'Finotive', expertise: 'Financial Technology', profilePic: 'https://via.placeholder.com/150', bio: 'Expert in financial technology solutions and innovations.' },
  { id: 24, name: 'GIDC DEGREE ENGINEERING COLLEGE, NAVSARI', expertise: 'Engineering Education', profilePic: 'https://via.placeholder.com/150', bio: 'Educational institution focusing on engineering and technical education.' }
];

const expertiseOptions = [
  'All',
  'CEO, Gujarat Grassroots Innovation Augmentation Network (GIAN)',
  'AIC-LMCP Foundation',
  'International Automobile Centre of Excellence',
  'RB Corporation, Value Plus Group',
  'Kalatvam',
  'Unitedworld School of Computational Intelligence, Karnavati',
  'R&A Advisory',
  'Nikseam Consultancy Pvt Ltd',
  'CHINTAN D SHAH & ASSOCIATES',
  'Rupay Vidya',
  'ATMIYA UNIVERSITY',
  'HEURISTIC CAPITAL SERVICES PRIVATE LIMITED',
  'Government of India',
  'Sanghi Industries',
  'Educational Institution',
  'Banking Sector',
  'DN Castech',
  'Mechatronics',
  'AASHARA STPC',
  'Chartered Accountancy',
  'Advisory Services',
  'Electronics Research',
  'Financial Technology',
  'Engineering Education'
];

const MentorList = () => {
  const [selectedExpertise, setSelectedExpertise] = useState('All');

  // Filter mentors based on the selected expertise
  const filteredMentors = selectedExpertise === 'All'
    ? mentors
    : mentors.filter(mentor => mentor.expertise === selectedExpertise);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-6">Mentor Profiles</h1>
      <div className="filter-container">
        <label htmlFor="expertise-filter" className="text-lg font-semibold">Filter by Expertise:</label>
        <select
          id="expertise-filter"
          value={selectedExpertise}
          onChange={(e) => setSelectedExpertise(e.target.value)}
          className="filter-select"
        >
          {expertiseOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="mentor-list">
        {filteredMentors.map((mentor) => (
          <div key={mentor.id} className="mentor-card">
            <img src={mentor.profilePic} alt={mentor.name} className="mentor-profile-pic" />
            <h2>{mentor.name}</h2>
            <p className="mentor-expertise">{mentor.expertise}</p>
            <p className="mentor-bio">{mentor.bio}</p>
            <Link to={`/mentors/${mentor.id}`} className="view-details-btn">View Details</Link>
          </div>
        ))}
      </div>
      <Link to="/add-mentor" className="add-mentor-btn">Add New Mentor</Link>
    </div>
  );
};

export default MentorList;
