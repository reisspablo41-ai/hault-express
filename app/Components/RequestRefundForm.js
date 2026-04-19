'use client';
import { useState } from 'react';
import { toast } from 'sonner';
import ButtonBig from './ButtonBig';

function RequestRefundForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    packagename: '',
    trackingNumber: '',
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
      const response = await fetch('/api/request-refund', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();
      if (data.success) {
        toast.success('Refund request submitted successfully!');
      } else {
        toast.error('Failed to submit the request.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('There was an error with the form submission.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 pb-20">
      <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden">
        <div className="bg-primary px-8 py-10 text-center">
          <h3 className="text-3xl font-extrabold text-white mb-2">Request Refund</h3>
          <p className="text-slate-400 text-sm">Please provide the details below to process your request.</p>
        </div>

        <form className="p-8 md:p-12 space-y-8" onSubmit={handleSubmit}>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Package Name</label>
              <input
                name="packagename"
                value={formData.packagename}
                onChange={handleChange}
                placeholder="Electronic Goods"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                required
              />
            </div>
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
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Proof of Purchase or Photo ID</label>
            <div className="relative group">
              <input
                type="file"
                id="file-upload"
                name="file"
                onChange={handleChange}
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-primary file:text-white hover:file:bg-primary/90 transition-all cursor-pointer bg-slate-50 border border-slate-200 rounded-2xl p-2"
                required
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90 text-primary-dark font-extrabold py-5 rounded-2xl shadow-lg shadow-secondary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Submit Refund Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestRefundForm;
