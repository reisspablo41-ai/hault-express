export const dynamic = 'force-dynamic';
import {
  fetchAllItemTypes,
  fetchAllShipmentsforUpdate,
  fetchAllShippingTypes,
  fetchAllStatus,
  fetchAllTransitTimmes,
  fetchAllUsers,
} from '@/app/api/supabaseapi';
import ShipmentTable from '../Components/ShipmentTable';

async function Page() {
  const { data, error } = await fetchAllShipmentsforUpdate();
  const { data: users, error: usersError } = await fetchAllUsers();
  const { transittimes, error: transitError } = await fetchAllTransitTimmes();
  const { packagetype, error: packageError } = await fetchAllItemTypes();
  const { statuses, error: statusError } = await fetchAllStatus();
  const { shippingtype, error: shippingError } = await fetchAllShippingTypes();
  if (error) error.message = 'Error Occured While Trying to  Fetch Data';

  // Calculate some basic stats for a premium dashboard feel
  const totalShipments = data ? data.length : 0;
  const activeShipments = data ? data.filter(s => s.status !== 'delivered' && s.status !== 'cancelled').length : 0;
  const totalUsers = users ? users.length : 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-gray-500 mt-2 text-sm">Monitor shipments, users, and overall system performance.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 text-sm font-medium text-gray-700">
            System Status: <span className="text-green-500 ml-1">● Operational</span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 flex items-center space-x-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Shipments</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{totalShipments}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 flex items-center space-x-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Active Shipments</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{activeShipments}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 flex items-center space-x-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Registered Users</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{totalUsers}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_5px_20px_-5px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Recent Shipments</h2>
        </div>
        <div className="p-6">
          <ShipmentTable
            error={error}
            data={data}
            users={users}
            transittimes={transittimes}
            transitError={transitError}
            allPackageType={packagetype}
            packageError={packageError}
            statuses={statuses}
            statusError={statusError}
            shippingError={shippingError}
            shippingtype={shippingtype}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
