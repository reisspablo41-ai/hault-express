'use client';
import { useState } from 'react';
import ButtonBig from '../Components/ButtonBig';

function Page() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    apt: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/Api/schedule-pickup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        alert('Pickup request submitted successfully!');
      } else {
        alert('Failed to submit the request.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error with the form submission.');
    }
  };

  return (
    <div className="w-[100%] xs:mt-[30%] md:mt-[20%] lg:mt-[10%]">
      <form className="w-[70%] mx-auto" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold">Schedule a Pickup</h1>
        <p>
          You can schedule a package pickup. For faster, easier scheduling,
          create or sign in to an haultexpressdelivery.com account.
        </p>
        <h3 className="text-xl mt-10 font-bold">
          Where should we pick up your package(s)?
        </h3>

        <div className="w-[100%] flex justify-between mt-10">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-[48%] rounded-sm p-2 focus:outline-none border border-primary"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-[48%] rounded-sm p-2 focus:outline-none border border-primary"
          />
        </div>

        <div className="w-[100%] flex justify-between mt-10">
          <input
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            placeholder="Street Address"
            className="w-[48%] rounded-sm p-2 focus:outline-none border border-primary"
          />
          <input
            name="apt"
            value={formData.apt}
            onChange={handleChange}
            placeholder="Apt/Suite/Order"
            className="w-[48%] rounded-sm p-2 focus:outline-none border border-primary"
          />
        </div>

        <div className="w-[100%] flex justify-between mt-10">
          <input
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State/Province"
            className="w-[48%] rounded-sm p-2 focus:outline-none border border-primary"
          />
          <input
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            className="w-[48%] rounded-sm p-2 focus:outline-none border border-primary"
          />
        </div>

        <div className="w-[100%] flex justify-between mt-10">
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-[48%] rounded-sm p-2 focus:outline-none border border-primary"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-[48%] rounded-sm p-2 focus:outline-none border border-primary"
          />
        </div>

        <div className="mt-10">
          <ButtonBig className="px-10 py-3 bg-accent rounded-full flex items-center ">
            Submit
          </ButtonBig>
        </div>
      </form>
    </div>
  );
}

export default Page;
