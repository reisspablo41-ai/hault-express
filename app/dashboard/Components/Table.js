'use client';
import { useRouter } from 'next/navigation';

function Table({ shipment, error, loading }) {
  const router = useRouter();
  if (loading) {
    return <p>Loading shipments...</p>; // Optional additional fallback UI
  }

  if (!shipment || shipment.length === 0) {
    return <p>No shipments found.</p>; // Handle case where there are no shipments
  }
  const handleTrack = (num) => {
    router.push(`/dashboard/${num}`);
  };
  return (
    <div className="grid grid-cols-1 shadow-lg">
      <div className="bg-white rounded p-10 flex items-center ">
        {' '}
        All Shipments {shipment.length}
      </div>
      <div className="w-full overflow-x-auto p-10 ">
        <table className="w-[100%] overflow-x-scroll p-20">
          <thead>
            <tr className=" ">
              <th className="text-left pb-5 border-b border-primary">
                Tracking Number
              </th>
              <th className="text-left pb-5 border-b border-primary">
                Shipper&apos;s Name
              </th>
              <th className="text-left pb-5 border-b border-primary">
                Receiver&apos;s Name
              </th>
              <th className="text-left pb-5 border-b border-primary">
                Package Type
              </th>
              <th className="text-left pb-5 border-b border-primary">Status</th>
            </tr>
          </thead>
          <tbody>
            {shipment.map((item) => (
              <tr key={item.shipment_id}>
                <td
                  className="text-left font-bold text-blue-500 py-5 border-b cursor-pointer"
                  onClick={() => handleTrack(item.trackingNumber)}
                >
                  {item.trackingNumber}
                </td>
                <td className="text-left py-5 border-b">
                  {item.shipper?.name}
                </td>
                <td className="text-left py-5 border-b">
                  {item.receiver?.name}
                </td>
                <td className="text-left py-5 border-b">
                  {item.package_type?.type}
                </td>
                <td
                  className={`text-left ${item.status_id?.status === 'In Transit'
                      ? 'text-green-600'
                      : 'text-orange-400'
                    } py-5 border-b`}
                >
                  {item.status_id?.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
