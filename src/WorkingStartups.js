import React, { useState } from 'react';
  import './WorkingStartups.css'; // Import the CSS

  // Example data for all industries
  const startupsData = [
      {
        name: "Smart Water Management System",
        teamMembers: ["Harsh Patel", "Priya Shah"],
        startDate: "2023-09-01",
        industry: "Water Technology",
        location: "Ahmedabad, Gujarat",
        mission: "To address water scarcity and wastage in urban and rural areas using IoT and AI technologies.",
        description: "Developing a smart water management system that monitors water usage in households and industries, reduces water wastage by detecting leaks, and optimizes consumption patterns.",
        progress: [
          "Deployed IoT sensors in 500 homes in Ahmedabad",
          "Reduced water wastage by 20% in pilot tests",
        ],
        nextMilestone: "Expand deployment to 2,000 homes by Q1 2025",
        challenge: "Scaling sensor production and integrating AI for predictive analysis",
        opportunities: "Collaborating with the Gujarat government for statewide deployment in rural areas",
      },
      {
        name: "Renewable Energy Solutions",
        teamMembers: ["Ravi Desai", "Suman Patel"],
        startDate: "2022-03-15",
        industry: "Renewable Energy",
        location: "Surat, Gujarat",
        mission: "To make renewable energy more affordable and accessible in both rural and urban areas.",
        description: "Working on solar panels that provide energy-efficient solutions for small-scale industries.",
        progress: ["Installed 150 solar panels across 20 villages", "Generated 500 kWh of clean energy"],
        nextMilestone: "Expand installation to 50 more villages",
        challenge: "Overcoming technical obstacles in the terrain",
        opportunities: "Expand to neighboring states with similar terrain challenges",
      },
      {
        name: "AgriTech Innovations",
        teamMembers: ["Ankit Mehta", "Neha Patel"],
        startDate: "2023-01-10",
        industry: "Agriculture Technology",
        location: "Vadodara, Gujarat",
        mission: "To enhance agricultural productivity using advanced technologies and data analytics.",
        description: "Developing precision farming tools and sensors to optimize irrigation, fertilization, and pest control.",
        progress: ["Piloted precision irrigation in 50 farms", "Improved crop yield by 15%"],
        nextMilestone: "Implement across 200 farms by mid-2024",
        challenge: "Integrating technology with traditional farming practices",
        opportunities: "Partnerships with agricultural cooperatives",
      },
      {
        name: "Healthcare AI Solutions",
        teamMembers: ["Pooja Shah", "Raj Kumar"],
        startDate: "2022-07-20",
        industry: "Healthcare",
        location: "Rajkot, Gujarat",
        mission: "To improve patient outcomes through AI-powered diagnostic tools and health monitoring systems.",
        description: "Creating AI-driven tools for early diagnosis of diseases and personalized treatment plans.",
        progress: ["Developed AI model for early cancer detection", "Validated model in clinical trials"],
        nextMilestone: "Launch commercial product by Q4 2024",
        challenge: "Ensuring data privacy and regulatory compliance",
        opportunities: "Collaborations with healthcare providers and research institutions",
      },
      {
        name: "Fintech Solutions",
        teamMembers: ["Kiran Rao", "Amit Patel"],
        startDate: "2023-06-01",
        industry: "Fintech",
        location: "Gandhinagar, Gujarat",
        mission: "To revolutionize financial transactions and banking with innovative fintech solutions.",
        description: "Developing a blockchain-based platform for secure and transparent financial transactions.",
        progress: ["Completed beta testing with 100 users", "Secured regulatory approval"],
        nextMilestone: "Scale up to 1,000 users by end of 2024",
        challenge: "Navigating complex financial regulations",
    opportunities: "Potential partnerships with banks and financial institutions",
      },
    
      {
        name: "Automotive Innovations",
        teamMembers: ["Rajeev Kumar", "Simran Patel"],
        startDate: "2022-09-10",
        industry: "Automotive",
        location: "Baroda, Gujarat",
        mission: "To advance automotive technology with smart, eco-friendly solutions.",
        description: "Developing electric vehicle components and autonomous driving technologies.",
        progress: ["Completed prototype testing", "Received funding for next development phase"],
        nextMilestone: "Launch first commercial product by Q2 2025",
        challenge: "Meeting safety and regulatory standards",
        opportunities: "Collaboration with automotive manufacturers",
      },
      {
        name: "AI & Machine Learning Labs",
        teamMembers: ["Sanya Rao", "Aditya Shah"],
        startDate: "2023-04-21",
        industry: "AI & Machine Learning",
        location: "Ahmedabad, Gujarat",
        mission: "To innovate and implement AI and ML solutions across various industries.",
        description: "Building AI models for predictive analytics and machine learning applications.",
        progress: ["Developed AI model for retail analytics", "Conducted successful pilot programs"],
        nextMilestone: "Expand model applications to healthcare and finance sectors",
        challenge: "Handling large datasets and ensuring model accuracy",
        opportunities: "Partnerships with tech companies for model integration",
      },
      {
        name: "Textile Tech Solutions",
        teamMembers: ["Meera Patel", "Nikhil Desai"],
        startDate: "2022-11-25",
        industry: "Textile",
        location: "Surat, Gujarat",
        mission: "To revolutionize the textile industry with innovative and sustainable solutions.",
        description: "Developing eco-friendly textiles and smart fabric technologies.",
        progress: ["Introduced biodegradable fabric", "Collaborated with 5 major brands"],
        nextMilestone: "Scale production and expand to international markets",
        challenge: "Maintaining fabric quality while ensuring sustainability",
        opportunities: "Growing demand for eco-friendly textiles",
      },
      {
        name: "Biotech Innovations",
        teamMembers: ["Amit Mehta", "Rina Shah"],
        startDate: "2023-05-30",
        industry: "Biotechnology",
        location: "Gandhinagar, Gujarat",
        mission: "To advance biotechnological research and applications for health and agriculture.",
        description: "Developing biotechnological solutions for disease treatment and crop improvement.",
        progress: ["Completed research on gene editing for crops", "Initiated clinical trials for new treatments"],
        nextMilestone: "Commercialize new biotech products by Q3 2024",
        challenge: "Regulatory approvals and ethical considerations",
        opportunities: "Collaboration with research institutions and biotech firms",
      },
      {
        name: "Tourism Tech Ventures",
        teamMembers: ["Nisha Patel", "Arjun Sharma"],
        startDate: "2023-07-15",
        industry: "Tourism",
        location: "Vadodara, Gujarat",
        mission: "To enhance tourism experiences through innovative technology solutions.",
        description: "Developing a platform for personalized travel recommendations and smart booking systems.",
        progress: ["Launched alpha version with 200 users", "Partnered with local travel agencies"],
        nextMilestone: "Expand user base and integrate with more travel services",
        challenge: "Creating a seamless user experience across platforms",
        opportunities: "Partnerships with tourism boards and travel agencies",
      },
      {
        name: "E-Commerce Solutions",
        teamMembers: ["Siddharth Patel", "Kavya Sharma"],
        startDate: "2023-03-01",
        industry: "E-Commerce",
        location: "Rajkot, Gujarat",
        mission: "To transform online shopping experiences with innovative e-commerce solutions.",
        description: "Building a platform with advanced features like AI-driven recommendations and secure payment systems.",
        progress: ["Beta launched with 1,000 active users", "Integrated with major payment gateways"],
        nextMilestone: "Increase user base to 5,000 by Q4 2024",
        challenge: "Ensuring platform security and handling high traffic",
        opportunities: "Expanding to international markets and exploring new product categories",
      },
    ];
    


  const WorkingStartups = () => {
    const [selectedIndustry, setSelectedIndustry] = useState('All');

    const industries = [
      'All',
      'Water Technology',
      'Renewable Energy',
      'Agriculture Technology',
      'Healthcare',
      'Fintech',
      'Automotive',
      'AI & Machine Learning',
      'Textile',
      'Biotechnology',
      'Tourism',
      'E-Commerce',
    ];

    const filteredStartups = selectedIndustry === 'All'
      ? startupsData
      : startupsData.filter(startup => startup.industry === selectedIndustry);

    return (
      <div className="container">
        <h1>Working Startups in Gujarat</h1>

        {/* Industry Filter */}
        <div className="filter-container">
          <label htmlFor="industry">Filter by Industry: </label>
          <select
            id="industry"
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
          >
            {industries.map((industry, index) => (
              <option key={index} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div className="startup-list">
          {filteredStartups.map((startup, index) => (
            <div key={index} className="startup-card">
              <div className="startup-info">
                <h2>{startup.name}</h2>
                <p className="mission"><strong>Mission:</strong> {startup.mission}</p>
              </div>
              <div className="additional-info">
                <div className="info-row">
                  <span className="info-label">Team Members:</span>
                  <span>{startup.teamMembers.join(', ')}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Start Date:</span>
                  <span>{startup.startDate}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Location:</span>
                  <span>{startup.location}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Description:</span>
                  <span>{startup.description}</span>
                </div>
                <div className="progress-section">
                  <h3>Progress:</h3>
                  <ul>
                    {startup.progress.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="info-row">
                  <span className="info-label">Next Milestone:</span>
                  <span>{startup.nextMilestone}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Current Challenge:</span>
                  <span>{startup.challenge}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Future Opportunities:</span>
                  <span>{startup.opportunities}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default WorkingStartups;