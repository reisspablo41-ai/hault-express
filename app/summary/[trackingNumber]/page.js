export const dynamic = 'force-dynamic';
import {
    fetchShipmentByTrackingNumber,
    fetchSystemSettings,
} from '@/app/api/supabaseapi';
import ErrorBox from '@/app/dashboard/Components/ErrorBox';
import DownloadPdfAction from './DownloadPdfAction';

export default async function SummaryPage({ params }) {
    const { trackingNumber } = await params;
    const { data, error } = await fetchShipmentByTrackingNumber(trackingNumber);
    const { settings } = await fetchSystemSettings();
    const currencySymbol = settings?.currency_symbol || '$';

    if (error || !data) {
        console.error("Summary Page Error: Shipment not found for", trackingNumber, error);
        return (
            <div className="min-h-screen bg-[#F4F5F7] py-12 px-4 flex items-center justify-center">
                <ErrorBox
                    message={`Shipment "${trackingNumber}" could not be found.`}
                    details={error?.message || "Verify the tracking number and try again."}
                />
            </div>
        );
    }

    const originAddress = `${data.origin_street_address}, ${data.origin_city}, ${data.origin_state}, ${data.origin_country}`;
    const destinationAddress = `${data.destination_street_address}, ${data.destination_city}, ${data.destination_state}, ${data.destination_country}`;
    const formattedDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    const trackingNum = data.trackingnumber || data.trackingNumber;

    return (
        <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
            {/* Action Buttons Container */}
            <div className="w-[800px] flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-700">Shipment Preview</h2>
                <DownloadPdfAction trackingNumber={trackingNum} />
            </div>

            {/* Printable Area */}
            <div
                id="pdf-summary-content"
                className="p-10 bg-white text-gray-800 shadow-lg rounded-xl origin-top"
                style={{ width: '800px', minHeight: '1100px', fontFamily: 'Arial, sans-serif' }}
            >
                {/* Header */}
                <div className="flex justify-between items-center border-b-2 border-primary pb-6 mb-6">
                    <div>
                        <img src="/hault-logo.png" alt="Hault Express Delivery Logo" style={{ height: '50px' }} />
                    </div>
                    <div className="text-right flex flex-col items-end">
                        <h1 className="text-2xl font-bold text-primary uppercase">Shipment Summary</h1>
                        <p className="text-gray-500 text-sm mt-1">haultexpressdelivery@gmail.com</p>
                        <p className="text-gray-500 text-sm">{formattedDate}</p>
                    </div>
                </div>

                {/* Core Info */}
                <div className="mb-6 bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Tracking Number</p>
                            <p className="text-xl font-bold font-mono">{trackingNum}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Status</p>
                            <p className="text-xl font-bold text-blue-600">{data.status_id?.status}</p>
                        </div>
                    </div>
                </div>

                {/* Routing */}
                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className="border border-gray-200 p-5 rounded-lg">
                        <p className="text-sm text-blue-600 font-bold uppercase mb-3 flex items-center">Origin</p>
                        <p className="font-semibold">{originAddress}</p>
                        <p className="text-sm text-gray-500 mt-2">Departure Date: {data.depaturedate}</p>
                        <p className="text-sm text-gray-500">Departure Time: {data.depaturetime}</p>
                    </div>
                    <div className="border border-gray-200 p-5 rounded-lg">
                        <p className="text-sm text-blue-600 font-bold uppercase mb-3 flex items-center">Destination</p>
                        <p className="font-semibold">{destinationAddress}</p>
                        <p className="text-sm text-gray-500 mt-2">Expected Delivery: {data.pickupdate}</p>
                        <p className="text-sm text-gray-500">Expected Time: {data.pickuptime}</p>
                    </div>
                </div>

                {/* People */}
                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                        <p className="border-b border-gray-300 pb-2 font-bold mb-4 uppercase text-gray-600 text-sm">Shipper Details</p>
                        <p className="font-semibold">{data.shipper?.name}</p>
                        <p className="text-sm text-gray-600 mt-1">{data.shipper?.email}</p>
                        <p className="text-sm text-gray-600">{data.shipper?.phone_number}</p>
                        <p className="text-sm text-gray-600 mt-2">{data.shipper?.address}</p>
                    </div>
                    <div>
                        <p className="border-b border-gray-300 pb-2 font-bold mb-4 uppercase text-gray-600 text-sm">Receiver Details</p>
                        <p className="font-semibold">{data.receiver?.name}</p>
                        <p className="text-sm text-gray-600 mt-1">{data.receiver?.email}</p>
                        <p className="text-sm text-gray-600">{data.receiver?.phone_number}</p>
                        <p className="text-sm text-gray-600 mt-2">{data.receiver?.address}</p>
                    </div>
                </div>

                {/* Freight Details */}
                <div>
                    <p className="border-b border-gray-300 pb-2 font-bold mb-4 uppercase text-gray-600 text-sm">Freight Details</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-500">Package Type:</span>
                                <span className="font-medium">{data.package_type?.type || (data.shipment_pet_id ? 'Crate' : 'N/A')}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-500">{data.shipment_good_id ? 'Item Name:' : 'Pet Name:'}</span>
                                <span className="font-medium">{data.shipment_good_id?.item_name || data.shipment_pet_id?.name}</span>
                            </div>
                            {data.shipment_pet_id && (
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-gray-500">Breed:</span>
                                    <span className="font-medium">{data.shipment_pet_id.breed}</span>
                                </div>
                            )}
                            {data.shipment_good_id && (
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-gray-500">Dimensions:</span>
                                    <span className="font-medium">{data.shipment_good_id.dimensions}</span>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-500">{data.shipment_good_id ? 'Item Number:' : 'Pet Number:'}</span>
                                <span className="font-medium">{data.shipment_good_id?.Item_number || data.shipment_pet_id?.petNumber}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-500">Weight:</span>
                                <span className="font-medium">{data.shipment_good_id?.weight || data.shipment_pet_id?.weight} lbs</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-500">Total Freight:</span>
                                <span className="font-medium">{currencySymbol}{data.totalfreight}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-xs text-gray-400">
                    <p>This is a system generated document. For inquiries, contact haultexpressdelivery@gmail.com.</p>
                </div>
            </div>
        </div>
    );
}
