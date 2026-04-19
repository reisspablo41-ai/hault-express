'use client';
import { useState } from 'react';
import ButtonBig from '@/app/Components/ButtonBig';
import MessageLog from './MessageLog';
import { addNewUser } from '@/app/api/supabaseapi';
import Success from './Success';

function AddUserForm() {
  const [errMessage, setErrMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form data
    const formData = new FormData(event.target);

    // Convert form data to an object
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
    };

    // Reset the error message and success message before validation
    setErrMessage('');
    setSuccessMessage('');

    // Guard clauses to prevent form submission if any field is empty or has invalid format
    if (!data.name || !data.email || !data.phone || !data.address) {
      setErrMessage('All Fields are Required');
      return; // Stop form submission if any field is empty
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setErrMessage('Invalid email format');
      return; // Stop form submission if email is invalid
    }

    // Validate address format
    if (data.address.length < 5) {
      setErrMessage('Address must be at least 5 characters long');
      return; // Stop form submission if address is invalid
    }

    try {
      // Await the result of addNewUser to handle success or failure
      const result = await addNewUser(data);

      if (result) {
        setSuccessMessage('User was added successfully');
      } else {
        setErrMessage('An error occurred while adding the user');
      }
    } catch (error) {
      // Handle any unexpected errors that occur during the API call
      console.error(error);
      setErrMessage('An error occurred while adding the user');
    }
    console.log(successMessage);

    // Clear form fields
    event.target.reset();
  };

  return (
    <form className="w-full max-w-4xl mx-auto" onSubmit={handleSubmit}>
      <div className="bg-gray-50/50 p-6 md:p-10 rounded-2xl border border-gray-100 shadow-sm space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2" htmlFor="name">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              name="name"
              id="name"
              placeholder="e.g. John Doe"
              className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200 shadow-sm"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2" htmlFor="email">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="john@example.com"
              className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200 shadow-sm"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2" htmlFor="phone">
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              name="phone"
              id="phone"
              type="tel"
              placeholder="+61 412 345 678"
              className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200 shadow-sm"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2" htmlFor="address">
              Address <span className="text-red-400">*</span>
            </label>
            <input
              name="address"
              id="address"
              placeholder="Full Street Address"
              className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200 shadow-sm"
              required
            />
          </div>
        </div>
      </div>

      {/* Conditionally render Error or Success messages */}
      {errMessage && (
        <div className="mt-6">
          <MessageLog
            message={errMessage}
            setMessage={setErrMessage}
            value={false}
          />
        </div>
      )}

      {successMessage && (
        <div className="mt-6">
          <MessageLog
            message={successMessage}
            setMessage={setSuccessMessage}
            value={true}
          />
        </div>
      )}

      <div className="mt-8">
        <ButtonBig
          type="submit"
          className="px-8 py-3.5 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl shadow-lg shadow-accent/20 transition-all duration-200 w-full md:w-auto flex justify-center"
        >
          Add New User
        </ButtonBig>
      </div>
    </form>
  );
}

export default AddUserForm;
