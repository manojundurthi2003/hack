import React, { useState } from 'react';

const InnovationForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    keywords: '',
    dateOfInnovation: '',
    researchStage: '',
    image: null,
    documents: null,
    contactName: '',
    contactEmail: '',
    organization: '',
    collaborators: '',
    fundingSupport: '',
    impactBenefits: '',
    iprStatus: '',
    demoLink: '',
    approvalStatus: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Post a New Innovation</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="title">Innovation Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="keywords">Keywords/Tags</label>
          <input
            type="text"
            name="keywords"
            id="keywords"
            value={formData.keywords}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="dateOfInnovation">Date of Innovation</label>
          <input
            type="date"
            name="dateOfInnovation"
            id="dateOfInnovation"
            value={formData.dateOfInnovation}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="researchStage">Research/Development Stage</label>
          <input
            type="text"
            name="researchStage"
            id="researchStage"
            value={formData.researchStage}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="image">Innovation Image</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="documents">Supporting Documents</label>
          <input
            type="file"
            name="documents"
            id="documents"
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="contactName">Contact Name</label>
          <input
            type="text"
            name="contactName"
            id="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="contactEmail">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            id="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="organization">Organization</label>
          <input
            type="text"
            name="organization"
            id="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="collaborators">Collaborators</label>
          <input
            type="text"
            name="collaborators"
            id="collaborators"
            value={formData.collaborators}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="fundingSupport">Funding/Support</label>
          <input
            type="text"
            name="fundingSupport"
            id="fundingSupport"
            value={formData.fundingSupport}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="impactBenefits">Impact and Benefits</label>
          <textarea
            name="impactBenefits"
            id="impactBenefits"
            value={formData.impactBenefits}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="iprStatus">IPR Status</label>
          <input
            type="text"
            name="iprStatus"
            id="iprStatus"
            value={formData.iprStatus}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="demoLink">Demo/Link</label>
          <input
            type="url"
            name="demoLink"
            id="demoLink"
            value={formData.demoLink}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="approvalStatus">Approval Status</label>
          <input
            type="text"
            name="approvalStatus"
            id="approvalStatus"
            value={formData.approvalStatus}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="additionalNotes">Additional Notes</label>
          <textarea
            name="additionalNotes"
            id="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit Innovation
        </button>
      </form>
    </div>
  );
};

export default InnovationForm;