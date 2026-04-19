'use client';

import { deleteUser } from '@/app/api/supabaseapi';
import ErrorBox from '@/app/dashboard/Components/ErrorBox';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import UpdateUsersMenu from './UpdateUsersMenu';
import MessageLog from './MessageLog';

function UsersTable({ data, error }) {
  const [editMenuOpen, setEditMenuOpen] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const [errMessage, setErrMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  async function handleDeleteUser(userId) {
    console.log(userId);
    const error = await deleteUser(userId);

    if (error) {
      setErrMessage('This User Failed to Delete, Try Again');
    } else {
      setSuccessMessage('User has been deleted successfully');
    }
  }

  function handleEditUser(user) {
    setEditMenuOpen(true);
    setActiveUser(user);
  }

  return (
    <div className="bg-white mt-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Manage Users</h2>
      </div>

      <div className="p-6">
        {errMessage ? (
          <div className="mb-6">
            <MessageLog
              message={errMessage}
              setMessage={setErrMessage}
              value={false}
            />
          </div>
        ) : (
          <MessageLog
            message={successMessage}
            setMessage={setSuccessMessage}
            value={true}
          />
        )}
        {editMenuOpen && (
          <UpdateUsersMenu
            editMenuOpen={editMenuOpen}
            setEditMenuOpen={setEditMenuOpen}
            activeUser={activeUser}
          />
        )}

        <div className="w-full overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full whitespace-nowrap text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold tracking-wider border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">Full Name</th>
                <th className="px-6 py-4">Email Address</th>
                <th className="px-6 py-4">Phone Number</th>
                <th className="px-6 py-4">Address</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 bg-white">
              {error ? (
                <tr>
                  <td colSpan="5" className="py-10 text-center">
                    <div className="flex justify-center">
                      <ErrorBox message={error.message} />
                    </div>
                  </td>
                </tr>
              ) : (
                data.map((user) => (
                  <tr key={user.user_id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-blue-600">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{user.email}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {user.phone_number}
                    </td>
                    <td className="px-6 py-4 text-gray-600 truncate max-w-[200px]" title={user.address}>
                      {user.address}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <button
                          onClick={() => handleEditUser(user)}
                          className="p-1.5 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                          title="Edit User"
                        >
                          <FaEdit size={16} />
                        </button>
                        <div className="w-px h-4 bg-gray-300 mx-1"></div>
                        <button
                          onClick={() => handleDeleteUser(user.user_id)}
                          className="p-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                          title="Delete User"
                        >
                          <MdDelete size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;
