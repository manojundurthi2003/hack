import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './IPRDashboard.css'; // Your CSS file for styling

const IPRDashboard = () => {
  const [iprData, setIprData] = useState([]);

  useEffect(() => {
    // Fetch IPR statuses from the backend
    axios.get('/ipr-status')
      .then(response => {
        setIprData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the IPR data!', error);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <h2>IPR Tracking Dashboard</h2>
      <table className="ipr-table">
        <thead>
          <tr>
            <th>Patent Title</th>
            <th>Applicant Name</th>
            <th>Filing Date</th>
            <th>Status</th>
            <th>Last Updated</th>
            <th>Next Due</th>
          </tr>
        </thead>
        <tbody>
          {iprData.map((ipr) => (
            <tr key={ipr.ipr_id}>
              <td>{ipr.patent_title}</td>
              <td>{ipr.applicant_name}</td>
              <td>{new Date(ipr.filing_date).toLocaleDateString()}</td>
              <td>{ipr.status}</td>
              <td>{new Date(ipr.last_updated).toLocaleDateString()}</td>
              <td>{new Date(ipr.next_due).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPRDashboard;
