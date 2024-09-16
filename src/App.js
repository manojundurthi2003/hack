import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddResearchesPage from './AddResearchesPage';
import OngoingProjectsPage from './OngoingProjectsPage';
import IPRPage from './ManagePatentsPage';
import ManagePatentsPage from './ManagePatentsPage';
import IPRStatusPage from './IPRStatusPage';
import InnovationPage from './InnovationPage';
import SupportResources from './SupportResources';
import FundingOpportunitiesPage from './FundingOpportunitiesPage';
import InnovationProjects from './InnovationProjects';
import InvestorForm from './InvestorForm';
import StartupsPage from './StartupsPage';
import SupportPage from './SupportPage';
import Navbar from './Navbar';
import HomePage  from './HomePage';
import SignIn  from './Register';
import Chatbot from './Chatbot';  // Import the Chatbot
import IPRDashboard from './IPRDashboard';
import Login from './Login';
import InnovationSupport from './Innovationsupport';
import WorkingStartups from './WorkingStartups';
import ResearchProjects from './ResearchProjects';
import Register from './Register';
import StartupResourcesPage from './StartupResourcesPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="Login" element={<Login />} />
      <Route path="InnovationSupport" element={<InnovationSupport />} />
      <Route path="StartupResourcesPage" element={<StartupResourcesPage />} />
      <Route path="WorkingStartups" element={<WorkingStartups />} />
      <Route path="FundingOpportunitiesPage" element={<FundingOpportunitiesPage />} />
      <Route path="SupportResources" element={<SupportResources />} />
      <Route path="/Register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/IPRDashboard" element={<IPRDashboard />} />
        <Route path="/Chatbot" element={<Chatbot />} />
        <Route path="/researches" element={<AddResearchesPage />} />
        <Route path="/ongoing projects" element={<OngoingProjectsPage />} />
        <Route path="/ipr" element={<IPRPage />} />
        <Route path="/manage patents" element={<ManagePatentsPage />} />
        <Route path="/ipr status" element={<IPRStatusPage />} />
        <Route path="/innovation" element={<InnovationPage />} />
        <Route path="/innovation projects" element={<InnovationProjects />} />
        <Route path="/startups" element={<StartupsPage />} />
        <Route path="/funds" element={<InvestorForm />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/ResearchProjects" element={<ResearchProjects />} />

        
      </Routes>
    </Router>
  );
};

export default App;
