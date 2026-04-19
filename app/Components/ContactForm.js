'use client';
import { useState } from 'react';
import { toast } from 'sonner';
import ButtonBig from './ButtonBig';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Email sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        toast.error('Failed to send email. Please try again.');
      }
    } catch (err) {
      toast.error('Something went wrong.');
    }

    setLoading(false);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            name="firstName"
            placeholder="First Name"
            className="w-full bg-white rounded-xl px-4 py-3 focus:outline-none border border-slate-200 focus:border-secondary transition-colors text-sm"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            placeholder="Last Name"
            className="w-full bg-white rounded-xl px-4 py-3 focus:outline-none border border-slate-200 focus:border-secondary transition-colors text-sm"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full bg-white rounded-xl px-4 py-3 focus:outline-none border border-slate-200 focus:border-secondary transition-colors text-sm"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full bg-white rounded-xl px-4 py-3 focus:outline-none border border-slate-200 focus:border-secondary transition-colors text-sm"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <textarea
            name="message"
            placeholder="How can we help you?"
            className="w-full bg-white rounded-xl px-4 py-4 focus:outline-none border border-slate-200 focus:border-secondary transition-colors text-sm h-40 resize-none"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-center lg:justify-start">
          <button
            type="submit"
            className="px-12 py-4 bg-secondary text-primary-dark font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Sending Message...' : 'Send Inquiry'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
