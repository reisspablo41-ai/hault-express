export const dynamic = 'force-dynamic';
import { fetchRefunds } from '@/app/api/supabaseapi';
import { MdDelete } from 'react-icons/md';
import Delete from '../../Components/Delete';

async function Page() {
  const { refunds, error } = await fetchRefunds();
  const validRefunds = Array.isArray(refunds) ? refunds : [];

  const totalAmountPaid = validRefunds.reduce(
    (accumulator, refund) => accumulator + refund.amount_paid,
    0
  );
  const totalRefunds = validRefunds.reduce(
    (accumulator, refund) => accumulator + refund.refundable_amount,
    0
  );
  console.log(validRefunds);
  return (
    <div className="bg-white mt-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900">All Processed Refunds</h2>
          <p className="text-gray-500 mt-1 text-sm">Review total amount paid versus amount refunded</p>
        </div>
        <div className="flex gap-4 text-sm">
          <div className="px-4 py-2 bg-green-50 text-green-700 rounded-lg border border-green-100 font-medium">
            Total Paid: ${totalAmountPaid.toFixed(2)}
          </div>
          <div className="px-4 py-2 bg-red-50 text-red-700 rounded-lg border border-red-100 font-medium">
            Total Refunded: ${totalRefunds.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="w-full overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full whitespace-nowrap text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold tracking-wider border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">User Name</th>
                <th className="px-6 py-4">User Email</th>
                <th className="px-6 py-4">Purpose</th>
                <th className="px-6 py-4">Amount Paid</th>
                <th className="px-6 py-4">Refundable Amount</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {validRefunds.length > 0 ? (
                validRefunds.map((refund) => (
                  <tr
                    key={refund.id}
                    className="hover:bg-gray-50/50 transition duration-200"
                  >
                    <td className="px-6 py-4 font-bold text-blue-600">{refund.user_id.name}</td>
                    <td className="px-6 py-4 text-gray-600">{refund.user_id.email}</td>
                    <td className="px-6 py-4 text-gray-600 truncate max-w-[200px]" title={refund.purpose}>{refund.purpose}</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">
                      ${refund.amount_paid.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-red-500 font-semibold">
                      ${refund.refundable_amount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Delete id={refund.id} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-10 text-center text-gray-500">
                    <div className="flex flex-col items-center justify-center">
                      <p className="mt-2 text-sm font-medium">No records found</p>
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

export default Page;
