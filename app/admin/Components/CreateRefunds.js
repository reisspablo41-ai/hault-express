'use client';

import { useEffect, useState } from 'react';
import MessageLog from './MessageLog';
import ButtonBig from '@/app/Components/ButtonBig';
import { createRefund } from '@/app/api/supabaseapi';

function CreateRefunds({ data, error }) {
  const [user, setUser] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form data
    const formData = new FormData(event.target);
    console.log(formData);

    // Convert form data to an object
    const data = {
      user: formData.get('user'),
      purpose: formData.get('purpose'),
      amount_paid: formData.get('amount_paid'),
      refundable_amount: formData.get('refundable_amount'),
    };

    console.log(data);
    // Reset the error message and success message before validation
    setErrMessage('');
    setSuccessMessage('');

    try {
      // Await the result of addNewUser to handle success or failure
      const result = await createRefund(data);

      if (result) {
        setSuccessMessage('Refunds was added successfully');
        event.target.reset();
      } else {
        setErrMessage('An error occurred while creating the shipment');
      }
    } catch (error) {
      // Handle any unexpected errors that occur during the API call
      console.error(error);
      setErrMessage('An error occurred while adding the shipment');
    }
    console.log(successMessage);

    // Clear form fields
  };

  return (
    <div className="h-full w-full overflow-y-auto bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Create Refund</h2>
        <p className="text-gray-500 mt-2 text-sm">Process a new refund transaction for a customer.</p>
      </div>

      <form className="w-full max-w-4xl" onSubmit={handleSubmit}>
        {errMessage ? (
          <MessageLog
            message={errMessage}
            setMessage={setErrMessage}
            value={false}
          />
        ) : (
          <MessageLog
            message={successMessage}
            setMessage={setSuccessMessage}
            value={true}
          />
        )}

        <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Amount Paid <span className="text-red-400">*</span>
              </label>
              <input
                id="amount_paid"
                name="amount_paid"
                className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200 shadow-sm"
                placeholder="e.g. 150.00"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Refundable Amount <span className="text-red-400">*</span>
              </label>
              <input
                id="refundable_amount"
                name="refundable_amount"
                className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200 shadow-sm"
                placeholder="e.g. 150.00"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Purpose <span className="text-red-400">*</span>
              </label>
              <input
                id="purpose"
                name="purpose"
                className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200 shadow-sm"
                placeholder="Reason for refund"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Customer <span className="text-red-400">*</span>
              </label>
              <select
                className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200 shadow-sm appearance-none"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                name="user"
                required
              >
                <option value="" disabled>Select User</option>
                {data.map((user) => (
                  <option key={user.user_id} value={user.user_id}>
                    {user.name} ({user.email})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

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
            Process Refund
          </ButtonBig>
        </div>
      </form>
    </div>
  );
}

export default CreateRefunds;
