import { useState } from 'react';
import ButtonBig from '@/app/Components/ButtonBig';
import { SlClose } from 'react-icons/sl';
import { updateUser } from '@/app/api/supabaseapi'; // Import the API function
import MessageLog from './MessageLog';

function UpdateUsersMenu({ setEditMenuOpen, activeUser }) {
  const [errMessage, setErrMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  // Local state for form values
  const [formData, setFormData] = useState({
    name: activeUser.name || '',
    email: activeUser.email || '',
    phone_number: activeUser.phone_number || '',
    address: activeUser.address || '',
  });

  // Handle input change and call the API to update the user
  const handleInputChange = async (e) => {
    const { name, value } = e.target;

    // Update the local form state
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Call the API to update the user
    const { data, error } = await updateUser(activeUser.user_id, {
      [name]: value,
    });

    if (error) {
      setSuccessMessage('User Did Not Update Succesfully');
    }
  };

  return (
    <div className="w-[100%] fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-10">
      {!successMessage ? (
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
      <form className="w-[60%] mx-auto bg-white p-10">
        <h2>Edit user {activeUser.user_id}</h2>
        <SlClose
          className="ml-[97%] text-2xl cursor-pointer"
          onClick={() => setEditMenuOpen(false)}
        />
        <div className="w-[100%] flex justify-between mt-10">
          <input
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-[48%] rounded-sm p-2 focus:outline-none border border-primary"
          />
          <input
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-[48%] rounded-sm p-2 focus:outline-none border border-primary"
          />
        </div>
        <div className="w-[100%] flex justify-between mt-10">
          <input
            name="phone_number"
            id="phone"
            value={formData.phone_number}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="w-[48%] rounded-sm p-2 focus:outline-none border border-primary"
          />
          <input
            name="address"
            id="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="w-[48%] rounded-sm p-2 focus:outline-none border border-primary"
          />
        </div>

        {/* You can still add an optional "Save Changes" button for manual updates */}
        <div className="mt-10">
          <ButtonBig
            type="button"
            className="px-10 py-3 bg-accent rounded-full flex items-center"
            onClick={() => setSuccessMessage('User Succesfully Updated')}
          >
            Save Changes
          </ButtonBig>
        </div>
      </form>
    </div>
  );
}

export default UpdateUsersMenu;
