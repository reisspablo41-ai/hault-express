'use client';
import ButtonBig from '@/app/Components/ButtonBig';
import MessageLog from './MessageLog';
import { useEffect, useState } from 'react';
import { SlClose } from 'react-icons/sl';
import {
  updateStatusShipment,
  createNewActivity,
} from '@/app/api/supabaseActions';
import { triggerShipmentNotifications } from '@/app/api/notificationUtility';
import { supabase } from '@/app/supabaseClient';

function EditStatusForm({
  editStatusOpen,
  setStatusMenuOpen,
  activeShipment,
  statuses,
}) {
  const [packageStatus, setPackageStatus] = useState(6);
  const [errMessage, setErrMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    percentage: '',
    status_id: 0,
  });

  useEffect(() => {
    setFormData({
      percentage: activeShipment.percentage || '',
      status_id: activeShipment.status_id.status_id || 0,
    });
  }, [activeShipment]);

  const handleInputChange = (e) => {
    const { name, value, tagName } = e.target; // Get tagName to identify the type of element

    // Check if the field name contains dot notation for nested fields
    if (name.includes('.')) {
      const keys = name.split('.'); // Split the name into parts (e.g., ['shipment_pet_id', 'name'])

      setFormData((prev) => {
        // Create a deep copy of the previous state to prevent mutation
        const updatedFormData = { ...prev };
        let current = updatedFormData;

        // Iterate through all keys except the last one to navigate the nested object
        for (let i = 0; i < keys.length - 1; i++) {
          const key = keys[i];
          current[key] = current[key] || {}; // Initialize the object if it doesn't exist
          current = current[key];
        }

        // Set the value of the final key, converting if it's a select
        current[keys[keys.length - 1]] =
          tagName === 'SELECT' ? Number(value) : value;

        return updatedFormData;
      });
    } else {
      // Handle flat fields
      setFormData((prev) => ({
        ...prev,
        [name]: tagName === 'SELECT' ? Number(value) : value, // Convert to number only for select
      }));
    }

    // Clear any previous error/success message when user types
    setSuccessMessage('');
    setErrMessage('');
  };

  const testUpdateShipment = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Update the shipment status
      const { error: updateError } = await updateStatusShipment(
        activeShipment.shipment_id,
        {
          percentage: formData.percentage,
          status_id: formData.status_id,
        }
      );

      if (updateError) {
        console.error('Failed to update shipment status:', updateError);
        setErrMessage('Failed to update shipment status.');
        return;
      }

      // Step 2: Create an activity record for the status change
      await createNewActivity({
        trackingNumber: activeShipment.trackingnumber,
        packageStatus: formData.status_id,
        presentAddress: activeShipment.present_address || 'Warehouse',
        time: new Date().toISOString(),
      });

      setSuccessMessage('Shipment was successfully updated');
      setTimeout(() => setStatusMenuOpen(false), 1500);

      // Trigger consolidated notifications (Email & SMS)
      triggerShipmentNotifications(activeShipment.shipment_id);

    } catch (error) {
      console.error('Error during shipment update and notification:', error);
      alert('An error occurred during the shipment update.');
    }
  };
  // Separate handlers for select fields (updating the value as the user selects)

  const handlePackageStatusUpdate = (e) => {
    setPackageStatus(e.target.value);
    handleInputChange(e);
  };

  console.log(successMessage);

  // Fetch countries for the dropdown

  return editStatusOpen ? (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen py-10 px-4 flex items-center justify-center">
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Header Section */}
          <div className="bg-gray-50 px-8 py-6 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                Update Shipment Progress
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Modify completion percentage and current status
              </p>
            </div>
            <button
              onClick={() => setStatusMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <SlClose className="text-2xl" />
            </button>
          </div>

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

          <div className="p-8">
            <form className="space-y-8">
              {/* Progress & Status Section */}
              <div className="bg-gray-50/50 p-6 md:p-8 rounded-2xl border border-gray-100 space-y-6">
                <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                  Status Details
                </h3>
                <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Progress in Percentage <span className="text-accent">*</span>
                    </label>
                    <input
                      name="percentage"
                      id="percentage"
                      placeholder="Total Progress (%)"
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      value={formData.percentage}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Package Status <span className="text-accent">*</span>
                    </label>
                    <select
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm appearance-none"
                      onChange={handlePackageStatusUpdate}
                      value={formData.status_id}
                      name="status_id"
                    >
                      {statuses.map((status) => (
                        <option key={status.status_id} value={status.status_id}>
                          {status.status}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

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

              <div className="pt-6 border-t border-gray-100 flex gap-4 pr-1 mt-10">
                <ButtonBig
                  type="button"
                  className="px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold rounded-xl shadow-sm transition-all duration-200 w-1/4 flex justify-center shrink-0"
                  onClick={() => setStatusMenuOpen(false)}
                >
                  Cancel
                </ButtonBig>
                <ButtonBig
                  type="button"
                  className="px-8 py-3.5 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl shadow-lg shadow-accent/20 transition-all duration-200 w-3/4 flex justify-center"
                  onClick={(e) => testUpdateShipment(e)}
                >
                  Save Changes
                </ButtonBig>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default EditStatusForm;
