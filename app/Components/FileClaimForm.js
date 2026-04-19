'use client';
import { useState } from 'react';
import ButtonBig from './ButtonBig';

function FileClaimForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    packagename: '',
    trackingNumber: '',
    claimType: '',
    message: '',
    packageType: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        file: files[0], // Store the selected file
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      if (value) {
        if (key === 'file') {
          formDataToSend.append(key, value);
        } else {
          formDataToSend.append(key, value);
        }
      }
    }

    try {
      const response = await fetch('/Api/file-claim', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();
      if (data.success) {
        alert('Claim request submitted successfully!');
      } else {
        alert('Failed to submit the request.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error with the form submission.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 pb-20">
      <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden">
        <div className="bg-primary px-8 py-10 text-center text-white">
          <h3 className="text-3xl font-extrabold mb-2">File A Claim</h3>
          <p className="text-slate-400 text-sm">Our team will investigate and contact you regarding your claim.</p>
        </div>

        <form className="p-8 md:p-12 space-y-8" onSubmit={handleSubmit}>
          {/* Section 1: Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              required
            />
          </div>

          <div className="w-full h-px bg-slate-100 my-4"></div>

          {/* Section 2: Shipment Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Package Name</label>
              <input
                name="packagename"
                value={formData.packagename}
                onChange={handleChange}
                placeholder="Shipment Title"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Package Type</label>
              <select
                name="packageType"
                value={formData.packageType}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all appearance-none bg-[url('https://www.svgrepo.com/show/445037/chevron-down.svg')] bg-[length:16px_16px] bg-[right_1.25rem_center] bg-no-repeat"
                required
              >
                <option value="standard">Standard Packages</option>
                <option value="specialized">Specialized Options</option>
                <option value="freight">Freight Packaging</option>
                <option value="customized">Customized Packaging</option>
                <option value="crate">Crate</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Tracking Number</label>
              <input
                name="trackingNumber"
                value={formData.trackingNumber}
                onChange={handleChange}
                placeholder="AMX12345678"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Claim Type</label>
              <select
                name="claimType"
                value={formData.claimType}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all appearance-none bg-[url('https://www.svgrepo.com/show/445037/chevron-down.svg')] bg-[length:16px_16px] bg-[right_1.25rem_center] bg-no-repeat"
                required
              >
                <option value="lost">Lost</option>
                <option value="damaged">Damaged</option>
                <option value="broken">Broken</option>
                <option value="injured">Sick or Injured</option>
                <option value="other">Other</option>
                <option value="return">Return Delivery</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Description of Issue</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Provide as much detail as possible..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-primary font-medium min-h-[150px] focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              required
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Supporting Documentation (Image/ID)</label>
            <div className="block w-full bg-slate-50 border border-slate-200 rounded-2xl p-2">
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-primary file:text-white hover:file:bg-primary/90 transition-all cursor-pointer"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90 text-primary-dark font-extrabold py-5 rounded-2xl shadow-lg shadow-secondary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Submit Official Claim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FileClaimForm;
