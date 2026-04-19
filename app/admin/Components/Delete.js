'use client';
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import MessageLog from './MessageLog';
import { deleteRefunds } from '@/app/api/supabaseapi';

function Delete({ id }) {
  console.log(id);
  const [message, setMessage] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleDeleteUser() {
    if (!id) {
      console.error('Invalid id:', id);
      setMessage('Invalid Refunds ID.');
      return;
    }

    setLoading(true);
    const { error } = await deleteRefunds(id); // Await the function
    setLoading(false);

    if (error) {
      console.error('Error deleting refund:', error);
      setMessage('Failed to delete refund.');
    } else {
      setMessageSuccess('Refund deleted successfully.');
    }
  }

  return (
    <td className="py-5 border-b">
      {message && (
        <MessageLog message={message} setMessage={setMessage} value={false} />
      )}
      {messageSuccess && (
        <MessageLog
          messageSuccess={messageSuccess}
          setMessageSuccess={setMessageSuccess}
          value={true}
        />
      )}

      <MdDelete
        className={`text-red-600 cursor-pointer ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handleDeleteUser}
        disabled={loading} // Ensure button is disabled when loading
      />
    </td>
  );
}

export default Delete;
