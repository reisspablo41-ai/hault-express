export const dynamic = 'force-dynamic';
import { format } from 'date-fns';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { MdOutlinePets } from 'react-icons/md';
import { RxActivityLog, RxCross2 } from 'react-icons/rx';
import {
  fetchActivity,
  fetchShipmentByTrackingNumber,
  fetchSystemSettings,
} from '@/app/api/supabaseapi';
import MapWrapper from '@/app/Components/Functions/MapWrapper';
import FullSeperator from '@/app/Components/FullSeperator';
import TimerStatusBar from '../Components/StatusBar';
import ErrorBox from '../Components/ErrorBox';
import { FaBoxesStacked } from 'react-icons/fa6';
import { getCoordinates } from '@/app/Components/FetchCoords';
import UserName from '../Components/UserName';
import PdfExportButton from '@/app/Components/PdfExportButton';
import Activity from '@/app/Components/Activity';
import { FiUser } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { CiBoxes } from 'react-icons/ci';
import { PiDog } from 'react-icons/pi';
import { CgMenuHotdog } from 'react-icons/cg';
import { LiaBoxSolid } from 'react-icons/lia';
import { TbNumber } from 'react-icons/tb';
import { PiDogFill } from 'react-icons/pi';
import { CiRuler } from 'react-icons/ci';
import { CiCalendarDate } from 'react-icons/ci';
import { MdScale } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';
import { BsClockHistory } from 'react-icons/bs';
import { CiClock1 } from 'react-icons/ci';
import { SlCalender } from 'react-icons/sl';
import { BsMapFill } from 'react-icons/bs';

async function Page({ params }) {
  const { trackingNumber } = await params;
  const { data, error } = await fetchShipmentByTrackingNumber(trackingNumber);
  const { settings } = await fetchSystemSettings();
  const currencySymbol = settings?.currency_symbol || '$';

  if (error || !data) {
    return (
      <div className="min-h-screen bg-[#F4F5F7] py-12 px-4 flex items-center justify-center">
        <ErrorBox message={error?.message || "Shipment could not be found."} />
      </div>
    );
  }

  const now = new Date();
  const formattedDate = format(now, 'EEEE, MMMM dd, yyyy');
  const originAddress = `${data.origin_street_address}, ${data.origin_city}, ${data.origin_state}, ${data.origin_country}`;
  const destinationAddress = `${data.destination_street_address}, ${data.destination_city}, ${data.destination_state}, ${data.destination_country}`;
  const { lat: olat, lng: olng } = await getCoordinates(originAddress);
  const { lat: dlat, lng: dlng } = await getCoordinates(destinationAddress);
  const { lat: ilat1, lng: ilng1 } = await getCoordinates(
    data.intermediate_path1
  );
  const { lat: ilat2, lng: ilng2 } = await getCoordinates(
    data.intermediate_path2
  );
  const shipmentType = await data.shipping_type_id;

  const isCompleted = data.status_id?.status?.toLowerCase() === 'completed' || data.status_id?.status?.toLowerCase() === 'delivered';
  const isCanceled = data.status_id?.status?.toLowerCase() === 'canceled' || data.status_id?.status?.toLowerCase() === 'cancelled';
  const statusColorCls = isCanceled ? 'text-red-600' : isCompleted ? 'text-emerald-600' : 'text-blue-600 animate-pulse';

  return (
    <div className="min-h-screen bg-[#F4F5F7] py-8 px-4 sm:px-6 lg:px-8 space-y-8">

      {/* Top Welcome / User Name area */}
      <div className="max-w-7xl mx-auto">
        <UserName />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column (Main Tracking Info) */}
        <div className="lg:col-span-2 space-y-6">

          {/* Main Status Card */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 relative overflow-hidden">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-blue-50 text-blue-700 border border-blue-100 tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                  {data.trackingNumber}
                </span>
                {/* Replaced the original div with formattedDate and PdfExportButton with the new structure */}
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-400">{formattedDate}</span>
                    <PdfExportButton data={data} formattedDate={formattedDate} />
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 font-medium text-sm mr-2">Total Freight:</span>
                    <span className="text-gray-900 font-extrabold text-base">{currencySymbol}{data.totalfreight}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-8">
                <div className={`p-5 rounded-2xl ${isCanceled ? 'bg-red-50 text-red-500' : isCompleted ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'} shadow-inner`}>
                  {isCanceled ? (
                    <RxCross2 className="text-4xl" />
                  ) : (
                    <MdOutlineLocalShipping className="text-4xl" />
                  )}
                </div>
                <div>
                  <h2 className={`text-3xl font-extrabold tracking-tight ${statusColorCls} capitalize`}>
                    {data.status_id?.status || 'Unknown Status'}
                  </h2>
                  <div className="flex items-center gap-2 mt-2 text-gray-600">
                    <CiLocationOn className="text-lg text-gray-400" />
                    <p className="text-sm font-medium">
                      {data.percentage === 0 ? 'Currently at Origin Warehouse' : (data.present_address || 'Scanning location...')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <TimerStatusBar
                  goodWeight={data.shipment_good_id?.weight}
                  percentage={data.percentage}
                />
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100">
            <div className="px-8 py-6 border-b border-gray-50 flex items-center gap-4 bg-gray-50/50">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <BsMapFill className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Live Map</h3>
            </div>
            <div className="w-full h-[400px]">
              <MapWrapper
                status={data.status_id?.status}
                duration={data.duration}
                olat={olat}
                olng={olng}
                dlat={dlat}
                dlng={dlng}
                ilat1={ilat1}
                ilng1={ilng1}
                ilat2={ilat2}
                ilng2={ilng2}
                inter1={data.intermediate_path1}
                inter2={data.intermediate_path2}
                shipmentId={data.shipment_id}
                percentage={data.percentage}
                shipmentType={shipmentType}
              />
            </div>
          </div>

          {/* Shipment Details Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100">
            <div className="px-8 py-6 border-b border-gray-50 flex items-center gap-4 bg-gray-50/50">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                {data.shipment_good_id?.weight ? (
                  <FaBoxesStacked className="text-2xl" />
                ) : (
                  <MdOutlinePets className="text-2xl" />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900">Shipment Details</h3>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">

                {data.shipment_good_id?.weight ? (
                  <>
                    <DetailItem icon={CiBoxes} label="Item Name" value={data.shipment_good_id.item_name || data.shipment_good_id.name} />
                    <DetailItem icon={LiaBoxSolid} label="Package Type" value={data.shipment_good_id.item_id?.type || data.package_type?.type} />
                    <DetailItem icon={TbNumber} label="Item Number" value={data.shipment_good_id.Item_number} />
                    <DetailItem icon={CiRuler} label="Dimensions" value={data.shipment_good_id.dimensions} />
                    <DetailItem icon={MdScale} label="Weight" value={`${data.shipment_good_id.weight} lbs`} />
                  </>
                ) : (
                  <>
                    <DetailItem icon={MdOutlinePets} label="Pet Name" value={data.shipment_pet_id?.name} />
                    <DetailItem icon={PiDog} label="Breed" value={data.shipment_pet_id?.breed} />
                    <DetailItem icon={PiDogFill} label="Pet Number" value={data.shipment_pet_id?.petNumber} />
                    <DetailItem icon={CiCalendarDate} label="Age" value={`${data.shipment_pet_id?.age} Weeks`} />
                    <DetailItem icon={MdScale} label="Weight" value={`${data.shipment_pet_id?.weight} lbs`} />
                  </>
                )}

                <DetailItem icon={FaMoneyBillWave} label="Total Freight" value={`${currencySymbol}${data.totalfreight}`} />
                <DetailItem icon={BsClockHistory} label="Transit Time" value={data.transit_times_id?.transitTimes} />

                <div className="md:col-span-2 border-t border-gray-100 pt-8 mt-4"></div>

                <DetailItem icon={CiClock1} label="Departure Time" value={data.depaturetime} />
                <DetailItem icon={CiClock1} label="Pickup Time" value={data.pickuptime} />
                <DetailItem icon={SlCalender} label="Departure Date" value={data.depaturedate} />
                <DetailItem icon={SlCalender} label="Pickup Date" value={data.pickupdate} />

              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2"><CiLocationOn /> Origin</p>
                  <p className="text-sm text-gray-700 font-medium">
                    {`${data.origin_street_address}, ${data.origin_city}, ${data.origin_state}, ${data.origin_country}, ${data.origin_postal_code}`}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2"><CiLocationOn /> Destination</p>
                  <p className="text-sm text-gray-700 font-medium">
                    {`${data.destination_street_address}, ${data.destination_city}, ${data.destination_state}, ${data.destination_country}, ${data.destination_postal_code}`}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right Column (Parties & Activity) */}
        <div className="space-y-6">

          {/* Shipper Details */}
          <div className="bg-white rounded-3xl p-6 shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-lg border border-emerald-100">
                Shipper Info
              </span>
            </div>
            <div className="space-y-4">
              <ContactRow icon={FiUser} label="Name" value={data.shipper?.name} colorCls="text-emerald-500" />
              <ContactRow icon={MdEmail} label="Email" value={data.shipper?.email} colorCls="text-emerald-500" />
              <ContactRow icon={FaPhoneAlt} label="Phone" value={data.shipper?.phone_number} colorCls="text-emerald-500" />
              <ContactRow icon={CiLocationOn} label="Address" value={data.shipper?.address} colorCls="text-emerald-500" />
            </div>
          </div>

          {/* Receiver Details */}
          <div className="bg-white rounded-3xl p-6 shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider rounded-lg border border-amber-100">
                Receiver Info
              </span>
            </div>
            <div className="space-y-4">
              <ContactRow icon={FiUser} label="Name" value={data.receiver?.name} colorCls="text-amber-500" />
              <ContactRow icon={MdEmail} label="Email" value={data.receiver?.email} colorCls="text-amber-500" />
              <ContactRow icon={FaPhoneAlt} label="Phone" value={data.receiver?.phone_number} colorCls="text-amber-500" />
              <ContactRow icon={CiLocationOn} label="Address" value={data.receiver?.address} colorCls="text-amber-500" />
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-white rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden flex flex-col h-[500px]">
            <div className="px-6 py-5 border-b border-gray-50 flex items-center gap-3 bg-gray-50/50 shrink-0">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <RxActivityLog className="text-xl" />
              </div>
              <h3 className="font-bold text-gray-900">Shipment Log</h3>
            </div>
            <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
              <Activity trackingNumber={trackingNumber} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Helper Components for Cleaner JSX
const DetailItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 p-2 bg-gray-50 text-gray-400 rounded-lg border border-gray-100 shadow-sm">
      <Icon className="text-xl" />
    </div>
    <div className="flex flex-col">
      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{label}</span>
      <span className="text-sm font-semibold text-gray-900">{value || 'N/A'}</span>
    </div>
  </div>
);

const ContactRow = ({ icon: Icon, label, value, colorCls }) => (
  <div className="flex items-start gap-3">
    <Icon className={`mt-0.5 ${colorCls} text-lg shrink-0`} />
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</p>
      <p className="text-sm font-medium text-gray-800 break-words">{value || 'N/A'}</p>
    </div>
  </div>
);

export default Page;
