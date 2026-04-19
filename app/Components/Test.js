'use client';
import { useState } from 'react';

export default function FetchDataComponent() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={fetchData}
        className="px-4 py-2 bg-blue-600 text-white rounded"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>

      {loading && (
        <div className="mt-4">
          <div className="w-8 h-8 border-4 border-t-4 border-gray-300 rounded-full animate-spin"></div>
        </div>
      )}

      {data && <pre className="mt-4">{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
