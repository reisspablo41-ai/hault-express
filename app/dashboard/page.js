'use client';
import { MdOutlinePets } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { FaBox } from 'react-icons/fa6';
import { CiBoxes } from 'react-icons/ci';
import { TiTick } from 'react-icons/ti';
import { MdIncompleteCircle } from 'react-icons/md';
import { useUserContext } from '../Context/UserContext';
import { fetchShipmentByEmail, fetchUser } from '../api/supabaseapi';
import { Suspense, useEffect, useState } from 'react';
import Table from './Components/Table';
import { DashboardSkeleton, TableRowsSkeleton } from '../Components/SkeletonLoader';
function Page() {
  const [shipment, setShipment] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { email } = useUserContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (email) {
      async function fetchUserData() {
        try {
          const { data } = await fetchUser(email);
          setUser(data);

          if (data && data.user_id) {
            const { shipmentData, error: shipError } = await fetchShipmentByEmail(data.user_id);
            setShipment(shipmentData);
            if (shipError && Object.keys(shipError).length > 0) {
              setError(shipError);
            }
          }
        } catch (error) {
          console.error('Error fetching dashboard data:', error);
          setError(error);
        } finally {
          setLoading(false);
        }
      }

      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [email]);

  if (loading) {
    return <DashboardSkeleton />;
  }

  // Handle purely empty states gracefully without crashing
  const totalShipments = Array.isArray(shipment) ? shipment.length : (shipment ? 1 : 0);
  const shipmentList = Array.isArray(shipment) ? shipment : (shipment ? [shipment] : []);

  const stats = shipmentList.reduce((acc, curr) => {
    const status = curr?.status_id?.status?.toLowerCase();
    const isCompleted = status === 'completed' || status === 'delivered';
    const isCanceled = status === 'canceled' || status === 'cancelled';

    if (isCompleted) acc.completed++;
    else if (isCanceled) acc.canceled++;
    else acc.active++;

    acc.totalFreight += parseFloat(curr?.totalfreight || 0);
    acc.pets += parseInt(curr?.shipment_pet_id?.petNumber || 0);
    acc.goods += parseInt(curr?.shipment_good_id?.Item_number || 0);

    return acc;
  }, { active: 0, completed: 0, canceled: 0, totalFreight: 0, pets: 0, goods: 0 });

  return (
    <div className="min-h-screen bg-[#F4F5F7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between bg-white p-8 rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Welcome back, {user?.name || email?.split('@')[0] || 'Guest'}
            </h1>
            <p className="text-gray-500 mt-2 text-lg">
              Here's a summary of your activity across <span className="text-blue-600 font-bold">{totalShipments}</span> {totalShipments === 1 ? 'shipment' : 'shipments'}.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-semibold border border-blue-100">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span>Live Sync</span>
          </div>
        </div>

        {totalShipments === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <div className="mx-auto w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <CiBoxes className="text-5xl text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Active Shipments</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any shipments linked to your account. When you place an order, the tracking details will appear here automatically.
            </p>
          </div>
        ) : (
          <>
            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center space-x-4 hover:shadow-md transition-shadow">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                  <CiBoxes className="text-3xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Total Shipments</p>
                  <p className="text-3xl font-extrabold text-gray-900">{totalShipments}</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center space-x-4 hover:shadow-md transition-shadow">
                <div className="p-4 bg-amber-50 text-amber-500 rounded-2xl">
                  <MdIncompleteCircle className="text-3xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Active</p>
                  <p className="text-3xl font-extrabold text-gray-900">{stats.active}</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center space-x-4 hover:shadow-md transition-shadow">
                <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
                  <TiTick className="text-3xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Completed</p>
                  <p className="text-3xl font-extrabold text-gray-900">{stats.completed}</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-600"></div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Total Freight Charge</p>
                <div className="flex items-baseline space-x-1">
                  <span className="text-lg font-semibold text-emerald-600">$</span>
                  <span className="text-3xl font-extrabold text-gray-900">{stats.totalFreight.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>

            {/* Bottom Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center space-x-4">
                <div className="p-4 bg-pink-50 text-pink-500 rounded-2xl">
                  <MdOutlinePets className="text-3xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Pets Shipped</p>
                  <p className="text-2xl font-extrabold text-gray-900">{stats.pets}</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center space-x-4">
                <div className="p-4 bg-indigo-50 text-indigo-500 rounded-2xl">
                  <FaBox className="text-3xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Goods Shipped</p>
                  <p className="text-2xl font-extrabold text-gray-900">{stats.goods}</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center space-x-4">
                <div className="p-4 bg-red-50 text-red-500 rounded-2xl">
                  <RxCross2 className="text-3xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Canceled</p>
                  <p className="text-2xl font-extrabold text-gray-900">{stats.canceled}</p>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden">
              <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-xl font-bold text-gray-900">Shipment Details</h2>
              </div>
              <div className="p-6">
                <Suspense fallback={<TableRowsSkeleton rows={3} cols={5} />}>
                  <Table shipment={shipmentList} error={error} loading={loading} />
                </Suspense>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Page;
