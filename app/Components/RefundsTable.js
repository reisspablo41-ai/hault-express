'use client';

import { useEffect, useState } from 'react';
import { fetchRefundsById, fetchUser } from '../api/supabaseapi';
import { useUserContext } from '../Context/UserContext';
import { RefundsSkeleton } from './SkeletonLoader';
import { HiOutlineCreditCard } from 'react-icons/hi2';

export default function RefundsTable() {
  const [refunds, setRefunds] = useState([]);
  const [error, setError] = useState(null);
  const { email } = useUserContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (email) {
      async function fetchRefundData() {
        try {
          const { data } = await fetchUser(email);

          if (data && data.user_id) {
            const { refundsData, error: refundError } = await fetchRefundsById(data.user_id);
            setRefunds(refundsData || []);
            if (refundError) setError(refundError);
          }
        } catch (err) {
          console.error('Error fetching refunds:', err);
          setError(err);
        } finally {
          setLoading(false);
        }
      }

      fetchRefundData();
    } else {
      setLoading(false);
    }
  }, [email]);

  const totalAmountPaid = refunds.reduce(
    (acc, refund) => acc + (refund.amount_paid || 0),
    0
  );

  const totalRefunds = refunds.reduce(
    (acc, refund) => acc + (refund.refundable_amount || 0),
    0
  );

  if (loading) {
    return <RefundsSkeleton />;
  }

  return (
    <div className="space-y-6">
      {/* Header Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 flex items-center space-x-4">
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
            <HiOutlineCreditCard className="text-3xl" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Total Amount Paid</p>
            <div className="flex items-baseline space-x-1 mt-1">
              <span className="text-lg font-semibold text-emerald-600">$</span>
              <p className="text-3xl font-extrabold text-gray-900">{totalAmountPaid.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 flex items-center space-x-4">
          <div className="p-4 bg-amber-50 text-amber-500 rounded-2xl">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Total Refundable Amount</p>
            <div className="flex items-baseline space-x-1 mt-1">
              <span className="text-lg font-semibold text-amber-500">$</span>
              <p className="text-3xl font-extrabold text-gray-900">{totalRefunds.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Refund History</h2>
          <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-100 uppercase tracking-wide">
            {refunds.length} Records
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-100 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                <th className="px-8 py-5">Purpose</th>
                <th className="px-8 py-5">Amount Paid</th>
                <th className="px-8 py-5">Refundable Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {refunds.length > 0 ? (
                refunds.map((refund) => (
                  <tr key={refund.id} className="hover:bg-gray-50/80 transition-colors duration-200">
                    <td className="px-8 py-5 text-gray-900 font-medium">
                      {refund.purpose}
                    </td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                        ${(refund.amount_paid || 0).toFixed(2)}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-amber-50 text-amber-700 border border-amber-100">
                        ${(refund.refundable_amount || 0).toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-8 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <HiOutlineCreditCard className="w-12 h-12 text-gray-300" />
                      <p className="text-lg font-medium text-gray-900">No refunds found</p>
                      <p className="text-sm">You do not have any active refund records at this time.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
