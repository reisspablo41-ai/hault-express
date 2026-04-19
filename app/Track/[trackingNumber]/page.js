export const dynamic = 'force-dynamic';
import { format } from 'date-fns';
import { MdOutlineLocalShipping, MdOutlinePets } from 'react-icons/md';
import { RxActivityLog } from 'react-icons/rx';
import MapWrapper from '@/app/Components/Functions/MapWrapper';
import TimerStatusBar from '@/app/dashboard/Components/StatusBar';
import { FaBoxesStacked } from 'react-icons/fa6';
import { getCoordinates } from '@/app/Components/FetchCoords';
import Activity from '@/app/Components/Activity';
import { FiUser } from 'react-icons/fi';
import { CiLocationOn, CiBoxes, CiRuler, CiClock1 } from 'react-icons/ci';
import { LiaBoxSolid } from 'react-icons/lia';
import { TbNumber } from 'react-icons/tb';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt, FaMoneyBillWave } from 'react-icons/fa';
import { PiDog, PiDogFill } from 'react-icons/pi';
import { CgMenuHotdog } from 'react-icons/cg';
import { CiCalendarDate } from 'react-icons/ci';
import { MdScale } from 'react-icons/md';
import { BsClockHistory } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import Link from 'next/link';
import Footer from '@/app/Components/Footer';
import { fetchShipmentByTrackingNumber, fetchSystemSettings } from '@/app/api/supabaseapi';
import PdfExportButton from '@/app/Components/PdfExportButton';
import { redirect } from 'next/navigation';

async function Page({ params }) {
  const { trackingNumber } = await params;
  const { data, error } = await fetchShipmentByTrackingNumber(trackingNumber);
  const { settings } = await fetchSystemSettings();
  const currencySymbol = settings?.currency_symbol || '$';

  if (!data) {
    const isError = error?.message;
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-primary pt-24 pb-16 px-4">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-secondary text-xs font-bold tracking-widest uppercase mb-3">Hault Express Delivery</p>
            <h1 className="text-3xl font-extrabold text-white mb-2">Track Your Shipment</h1>
            <p className="text-slate-400 text-sm">Enter your tracking number below</p>
          </div>
          <div className="max-w-xl mx-auto mt-8">
            <TrackForm defaultValue={trackingNumber} />
          </div>
        </div>
        <div className="max-w-xl mx-auto px-4 py-20 text-center">
          <div className="bg-white rounded-2xl shadow-card p-10">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MdOutlineLocalShipping className="text-3xl text-red-500" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {isError ? 'Error Loading Shipment' : 'Shipment Not Found'}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              {isError
                ? error.message
                : <>No shipment found for tracking number <span className="font-mono font-semibold text-primary">{trackingNumber}</span>. Please check the number and try again.</>}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const now = new Date();
  const formattedDate = format(now, 'EEEE, MMMM dd, yyyy');
  const originAddress = `${data.origin_street_address}, ${data.origin_city}, ${data.origin_state}, ${data.origin_country}`;
  const destinationAddress = `${data.destination_street_address}, ${data.destination_city}, ${data.destination_state}, ${data.destination_country}`;
  const { lat: olat, lng: olng } = await getCoordinates(originAddress);
  const { lat: dlat, lng: dlng } = await getCoordinates(destinationAddress);
  const { lat: ilat1, lng: ilng1 } = await getCoordinates(data.intermediate_path1);
  const { lat: ilat2, lng: ilng2 } = await getCoordinates(data.intermediate_path2);
  const shipmentType = data.shipping_type_id;

  const isPet = !data.shipment_good_id?.weight;
  const isOnHold = data.status_id.status === 'On Hold' || data.status_id.status === 'Cancelled';
  const isDelivered = /delivered|completed/i.test(data.status_id.status);

  const statusColor = isDelivered
    ? 'bg-green-100 text-green-700 border-green-200'
    : isOnHold
      ? 'bg-red-100 text-red-700 border-red-200'
      : 'bg-amber-100 text-amber-700 border-amber-200';

  const statusDot = isDelivered ? 'bg-green-500' : isOnHold ? 'bg-red-500' : 'bg-amber-500';

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero / Search Bar */}
      <div className="bg-primary pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-secondary text-xs font-bold tracking-widest uppercase mb-2">Hault Express Delivery</p>
          <h1 className="text-3xl font-extrabold text-white mb-1">Shipment Tracking</h1>
          <p className="text-slate-400 text-sm mb-8">{formattedDate}</p>
          <TrackForm defaultValue={trackingNumber} />
        </div>
      </div>

      {/* Tracking Number Banner */}
      <div className="bg-primary-light border-b border-white/5 px-4 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Tracking #</span>
            <span className="font-mono font-bold text-white text-lg">{data.trackingnumber || data.trackingNumber}</span>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${statusColor}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${statusDot} ${!isDelivered && !isOnHold ? 'animate-pulse' : ''}`}></span>
              {data.status_id.status}
            </span>
          </div>
          <PdfExportButton data={data} formattedDate={formattedDate} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">

        {/* Left — Main Shipment Card */}
        <div className="md:col-span-2 space-y-6">

          {/* Status Card */}
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="bg-primary px-6 py-4 flex items-center gap-3">
              <div className="w-9 h-9 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                <MdOutlineLocalShipping className="text-secondary text-lg" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Shipment Status</p>
                <p className="text-slate-400 text-xs">Live tracking information</p>
              </div>
            </div>
            <div className="px-6 py-5">
              <div className="flex items-start gap-4 mb-5">
                <div>
                  <p className="text-xs text-slate-400 mb-0.5 uppercase tracking-wide font-semibold">Current Status</p>
                  <p className={`text-xl font-extrabold ${isDelivered ? 'text-green-600' : isOnHold ? 'text-red-600' : 'text-amber-500 animate-blink'}`}>
                    {data.status_id.status}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 mb-5 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <CiLocationOn className="text-secondary text-lg mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Current Location</p>
                  <p className="text-sm font-semibold text-primary mt-0.5">
                    {data.percentage === 0 ? 'Currently at our Warehouse' : data.present_address || 'In Transit'}
                  </p>
                </div>
              </div>
              <TimerStatusBar goodWeight={data.shipment_good_id?.weight} percentage={data.percentage} />
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="bg-primary px-6 py-4 flex items-center gap-3">
              <div className="w-9 h-9 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                <CiLocationOn className="text-secondary text-lg" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Live Route Map</p>
                <p className="text-slate-400 text-xs">Real-time shipment route visualization</p>
              </div>
            </div>
            <MapWrapper
              status={data.status_id.status}
              duration={data.duration}
              olat={olat} olng={olng}
              dlat={dlat} dlng={dlng}
              ilat1={ilat1} ilng1={ilng1}
              ilat2={ilat2} ilng2={ilng2}
              inter1={data.intermediate_path1}
              inter2={data.intermediate_path2}
              shipmentId={data.shipment_id}
              percentage={data.percentage}
              shipmentType={shipmentType}
            />
          </div>

          {/* Shipment Details Card */}
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="bg-primary px-6 py-4 flex items-center gap-3">
              <div className="w-9 h-9 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                {isPet
                  ? <MdOutlinePets className="text-secondary text-lg" />
                  : <FaBoxesStacked className="text-secondary text-lg" />}
              </div>
              <div>
                <p className="text-white font-bold text-sm">Shipment Details</p>
                <p className="text-slate-400 text-xs">{isPet ? 'Pet shipping' : 'Goods shipping'}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-sm">

                {/* Row 1 — item/pet name & type/breed */}
                <InfoRow
                  icon={isPet ? <MdOutlinePets className="text-secondary" /> : <CiBoxes className="text-secondary" />}
                  label={isPet ? 'Pet Name' : 'Item Name'}
                  value={isPet ? data.shipment_pet_id?.name : data.shipment_good_id?.item_name}
                />
                <InfoRow
                  icon={isPet ? <PiDog className="text-secondary" /> : <CiBoxes className="text-secondary" />}
                  label={isPet ? 'Breed' : 'Item Type'}
                  value={isPet ? data.shipment_pet_id?.breed : 'Specialized'}
                />

                {/* Row 2 — package type & number */}
                <InfoRow
                  icon={isPet ? <CgMenuHotdog className="text-secondary" /> : <LiaBoxSolid className="text-secondary" />}
                  label="Package Type"
                  value={isPet ? 'Crate' : data.package_type?.type}
                />
                <InfoRow
                  icon={isPet ? <PiDogFill className="text-secondary" /> : <TbNumber className="text-secondary" />}
                  label={isPet ? 'Pet Number' : 'Item Number'}
                  value={isPet ? data.shipment_pet_id?.petnumber : data.shipment_good_id?.item_number}
                />

                {/* Row 3 — dimension/age & weight */}
                <InfoRow
                  icon={isPet ? <CiCalendarDate className="text-secondary" /> : <CiRuler className="text-secondary" />}
                  label={isPet ? 'Age' : 'Dimensions'}
                  value={isPet ? `${data.shipment_pet_id?.age} Weeks` : data.shipment_good_id?.dimensions}
                />
                <InfoRow
                  icon={<MdScale className="text-secondary" />}
                  label="Weight"
                  value={`${isPet ? data.shipment_pet_id?.weight : data.shipment_good_id?.weight} lbs`}
                />

                {/* Row 4 — freight & transit */}
                <InfoRow
                  icon={<FaMoneyBillWave className="text-secondary" />}
                  label="Total Freight"
                  value={`${currencySymbol}${data.totalfreight}`}
                />
                <InfoRow
                  icon={<BsClockHistory className="text-secondary" />}
                  label="Transit Times"
                  value={data.transit_times_id?.transitTimes}
                />
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 gap-4">
                {/* Origin & Destination */}
                <div className="grid grid-cols-2 gap-4">
                  <AddressRow icon={<CiLocationOn className="text-green-500" />} label="Origin" value={`${data.origin_street_address}, ${data.origin_city}, ${data.origin_state}, ${data.origin_country} ${data.origin_postal_code}`} />
                  <AddressRow icon={<CiLocationOn className="text-red-500" />} label="Destination" value={`${data.destination_street_address}, ${data.destination_city}, ${data.destination_state}, ${data.destination_country} ${data.destination_postal_code}`} />
                </div>

                {/* Times & Dates */}
                <div className="grid grid-cols-2 gap-4">
                  <AddressRow icon={<CiClock1 className="text-secondary" />} label="Departure Time" value={data.depaturetime} />
                  <AddressRow icon={<CiClock1 className="text-secondary" />} label="Delivery Time" value={data.pickuptime} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <AddressRow icon={<SlCalender className="text-secondary" />} label="Departure Date" value={data.depaturedate} />
                  <AddressRow icon={<SlCalender className="text-secondary" />} label="Pickup Date" value={data.pickupdate} />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-400">
                  For full shipment details,{' '}
                  <Link href="/auth" className="text-secondary font-semibold hover:underline">
                    sign in to your account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">

          {/* Shipper Card */}
          <ContactCard
            title="Shipper"
            accentClass="bg-primary"
            iconColor="text-secondary"
            name={data.shipper?.name}
            email={data.shipper?.email}
            address={data.shipper?.address}
            phone={data.shipper?.phone_number}
          />

          {/* Receiver Card */}
          <ContactCard
            title="Receiver"
            accentClass="bg-primary-light"
            iconColor="text-secondary"
            name={data.receiver?.name}
            email={data.receiver?.email}
            address={data.receiver?.address}
            phone={data.receiver?.phone_number}
          />

          {/* Activity Card */}
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="bg-primary px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                <RxActivityLog className="text-secondary text-base" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Shipment Activity</p>
                <p className="text-slate-400 text-xs">Timeline of updates</p>
              </div>
            </div>
            <div className="p-4 max-h-72 overflow-y-auto">
              <Activity trackingNumber={trackingNumber} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 text-base shrink-0">{icon}</span>
      <div>
        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-0.5">{label}</p>
        <p className="text-sm font-semibold text-primary">{value ?? '—'}</p>
      </div>
    </div>
  );
}

function AddressRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 text-base shrink-0">{icon}</span>
      <div>
        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-0.5">{label}</p>
        <p className="text-xs text-primary font-medium leading-relaxed">{value ?? '—'}</p>
      </div>
    </div>
  );
}

function ContactCard({ title, accentClass, iconColor, name, email, address, phone }) {
  const initials = name ? name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : '?';
  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden">
      <div className={`${accentClass} px-5 py-4 flex items-center gap-3`}>
        <div className="w-9 h-9 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
          <FiUser className={`${iconColor} text-base`} />
        </div>
        <p className="text-white font-bold text-sm">{title}</p>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
            <span className="text-xs font-bold text-secondary">{initials}</span>
          </div>
          <p className="font-bold text-sm text-primary">{name ?? '—'}</p>
        </div>
        <div className="space-y-2 pt-1">
          <div className="flex items-start gap-2 text-xs">
            <MdEmail className="text-slate-400 mt-0.5 shrink-0" />
            <span className="text-slate-600 break-all">{email ?? '—'}</span>
          </div>
          <div className="flex items-start gap-2 text-xs">
            <CiLocationOn className="text-slate-400 mt-0.5 shrink-0" />
            <span className="text-slate-600">{address ?? '—'}</span>
          </div>
          <div className="flex items-start gap-2 text-xs">
            <FaPhoneAlt className="text-slate-400 mt-0.5 shrink-0" />
            <span className="text-slate-600">{phone ?? '—'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackForm({ defaultValue }) {
  async function trackAction(formData) {
    'use server';
    const num = formData.get('q')?.toString().trim();
    if (num) redirect(`/Track/${num}`);
  }
  return (
    <form action={trackAction} className="flex gap-2">
      <div className="flex-1 relative">
        <MdOutlineLocalShipping className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none" />
        <input
          type="text"
          name="q"
          defaultValue={defaultValue}
          placeholder="Enter tracking number (e.g. AM1234567-XY)"
          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3.5 bg-secondary hover:bg-secondary/90 text-primary font-bold text-sm rounded-xl transition-colors shrink-0"
      >
        Track
      </button>
    </form>
  );
}

export default Page;
Page;
