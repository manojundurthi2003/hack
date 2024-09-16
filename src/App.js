import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddResearchesPage from './AddResearchesPage';
import OngoingProjectsPage from './OngoingProjectsPage';
import IPRPage from './ManagePatentsPage';
import ManagePatentsPage from './ManagePatentsPage';
import IPRStatusPage from './IPRStatusPage';
import InnovationPage from './InnovationPage';
import InnovationProjects from './InnovationProjects';
import InnovationForm from './InnovationForm';
import InnovationSupport from './InnovationSupport';
import InvestorForm from './InvestorForm';
import StartupsPage from './StartupsPage';
import WorkingStartups from './WorkingStartups';
import SupportPage from './SupportPage';
import FundingOpportunitiesPage from './FundingOpportunitiesPage';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/researches" element={<AddResearchesPage />} />
        <Route path="/ongoing projects" element={<OngoingProjectsPage />} />
        <Route path="/ipr" element={<IPRPage />} />
        <Route path="/manage patents" element={<ManagePatentsPage />} />
        <Route path="/ipr status" element={<IPRStatusPage />} />
        <Route path="/innovation" element={<InnovationPage />} />
        <Route path="/innovation projects" element={<InnovationProjects />} />
        <Route path="/new innovation" element={<InnovationForm />} />
        <Route path="/innovation support" element={<InnovationSupport />} />
        <Route path="/startups" element={<StartupsPage />} />
        <Route path="/working startups" element={<WorkingStartups />} />
        <Route path="/funds" element={<InvestorForm />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/funding opportunities" element={<FundingOpportunitiesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
