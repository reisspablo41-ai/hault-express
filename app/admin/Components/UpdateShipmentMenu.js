'use client';
import ButtonBig from '@/app/Components/ButtonBig';
import MessageLog from './MessageLog';
import { useEffect, useState } from 'react';
import { SlClose } from 'react-icons/sl';
import { updateGoods, updatePet, updateShipment } from '@/app/api/supabaseActions';
import { fetchAllUsers } from '@/app/api/supabaseapi';
import { supabase } from '@/app/supabaseClient';
import { triggerShipmentNotifications } from '@/app/api/notificationUtility';

function UpdateShipmentMenu({
  editMenuOpen,
  setEditMenuOpen,
  setActiveUser,
  activeShipment,
  users,
  transittimes,
  transitError,
  allPackageType,
  packageError,
  statuses,
  statusError,
  shippingError,
  shippingtype,
}) {
  const [countries, setCountries] = useState([]);
  const [originSelectedCountry, setOriginSelectedCountry] = useState('');
  const [destinationSelectedCountry, setdestinationSelectedCountry] =
    useState('');
  const [packageStatus, setPackageStatus] = useState(6);
  const [shippingType, setShippingType] = useState(1);
  const [packageType, setPackageType] = useState(1);
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [transitTimes, setTransitTimes] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [shipmentType, setShipmentType] = useState('');
  const [localUsers, setLocalUsers] = useState(users || []);
  const [localTransittimes, setLocalTransittimes] = useState(transittimes || []);

  useEffect(() => {
    supabase.from('transittimes').select('*').then(({ data }) => {
      if (data && data.length > 0) setLocalTransittimes(data);
    });
  }, []);

  // Dynamically fetch users when the menu opens to ensure the sender/receiver list is up-to-date
  useEffect(() => {
    if (editMenuOpen) {
      const getLatestUsers = async () => {
        const { data, error } = await fetchAllUsers();
        if (data) setLocalUsers(data);
      };
      getLatestUsers();
    }
  }, [editMenuOpen]);

  // Initialize formData with default empty strings to prevent React 'uncontrolled input' warnings
  const [formData, setFormData] = useState({
    trackingNumber: '',
    percentage: '',
    origin_street_address: '',
    origin_city: '',
    origin_state: '',
    origin_postal_code: '',
    origin_country: '',
    destination_street_address: '',
    destination_city: '',
    destination_state: '',
    destination_postal_code: '',
    destination_country: '',
    status_id: 0,
    shipping_type_id: '',
    packageType: '',
    shipment_pet_id: {
      name: '',
      breed: '',
      age: '',
      weight: '',
      petNumber: '',
    },
    shipment_good_id: {
      Item_number: '',
      item_name: '',
      dimensions: '',
      weight: '',
    },
    depatureTime: '',
    pickupTime: '',
    pickupDate: '',
    depatureDate: '',
    expectedDeliveryDate: '',
    shipper: '',
    receiver: '',
    totalFreight: '',
    transit_times_id: '',
    intermediate_path1: '',
    intermediate_path2: '',
  });

  useEffect(() => {
    if (activeShipment) {
      setFormData({
        trackingNumber: activeShipment.trackingnumber || '',
        percentage: activeShipment.percentage || '',
        origin_street_address: activeShipment.origin_street_address || '',
        origin_city: activeShipment.origin_city || '',
        origin_state: activeShipment.origin_state || '',
        origin_postal_code: activeShipment.origin_postal_code || '',
        origin_country: activeShipment.origin_country || '',
        destination_street_address:
          activeShipment.destination_street_address || '',
        destination_city: activeShipment.destination_city || '',
        destination_state: activeShipment.destination_state || '',
        destination_postal_code: activeShipment.destination_postal_code || '',
        destination_country: activeShipment.destination_country || '',
        status_id: activeShipment.status_id.status_id || 0,
        shipping_type_id: activeShipment.shipping_type_id || '',
        packageType: activeShipment.package_type?.item_id || '',
        shipment_pet_id: {
          name: activeShipment.shipment_pet_id?.name || '',
          breed: activeShipment.shipment_pet_id?.breed || '',
          age: activeShipment.shipment_pet_id?.age,
          weight: activeShipment.shipment_pet_id?.weight || '',
          petNumber: activeShipment.shipment_pet_id?.petNumber || '',
        },
        shipment_good_id: {
          Item_number: activeShipment.shipment_good_id?.Item_number || '',
          item_name: activeShipment.shipment_good_id?.item_name || '',
          dimensions: activeShipment.shipment_good_id?.dimensions,
          weight: activeShipment.shipment_good_id?.weight || '',
        },
        depatureTime: activeShipment.depaturetime || '',
        pickupTime: activeShipment.pickuptime || '',
        pickupDate: activeShipment.pickupdate || '',
        depatureDate: activeShipment.depaturedate || '',
        expectedDeliveryDate: activeShipment.expecteddeliverydate || '',
        shipper: activeShipment.shipper || '',
        receiver: activeShipment.receiver || '',
        totalFreight: activeShipment.totalfreight || '',
        transit_times_id: activeShipment.transit_times_id || '',
        intermediate_path1: activeShipment.intermediate_path1 || '',
        intermediate_path2: activeShipment.intermediate_path2 || '',
      });
    }
  }, [activeShipment]);

  const handleInputChange = (e) => {
    const { name, value, tagName } = e.target; // Get tagName to identify the type of element

    // Check if the field name contains dot notation for nested fields
    if (name.includes('.')) {
      const keys = name.split('.'); // Split the name into parts (e.g., ['shipment_pet_id', 'name'])

      setFormData((prev) => {
        // Create a deep copy of the previous state to prevent mutation
        const updatedFormData = { ...prev };
        let current = updatedFormData;

        // Iterate through all keys except the last one to navigate the nested object
        for (let i = 0; i < keys.length - 1; i++) {
          const key = keys[i];
          current[key] = current[key] || {}; // Initialize the object if it doesn't exist
          current = current[key];
        }

        // Set the value of the final key, converting if it's a select
        current[keys[keys.length - 1]] =
          tagName === 'SELECT' ? Number(value) : value;

        return updatedFormData;
      });
    } else {
      // Handle flat fields
      setFormData((prev) => ({
        ...prev,
        [name]: tagName === 'SELECT' ? Number(value) : value, // Convert to number only for select
      }));
    }

    // Clear any previous error/success message when user types
    setSuccessMessage('');
    setErrMessage('');
  };

  console.log(activeShipment);

  // const handleSaveChanges = async (e) => {
  //   e.preventDefault();
  //   const { formdata, formerror } = await updateShipment(
  //     activeShipment.shipment_id,
  //     formData.duration
  //   );

  //   if (formerror) {
  //     console.error('Error updating shipment:', formerror);
  //     setErrMessage('Failed to save changes.');
  //   } else {
  //     console.log('Shipment updated successfully:', formdata);
  //     setSuccessMessage('Changes saved successfully!');
  //   }
  // };
  const testUpdateShipment = async (e) => {
    e.preventDefault();

    const { error } = await updateShipment(
      activeShipment.shipment_id,
      {
        percentage: formData.percentage,
        trackingnumber: formData.trackingNumber,
        origin_street_address: formData.origin_street_address,
        origin_city: formData.origin_city,
        origin_state: formData.origin_state,
        origin_postal_code: formData.origin_postal_code,
        origin_country: formData.origin_country,
        destination_street_address: formData.destination_street_address,
        destination_city: formData.destination_city,
        destination_state: formData.destination_state,
        destination_postal_code: formData.destination_postal_code,
        destination_country: formData.destination_country,
        status_id: formData.status_id,
        depaturetime: formData.depatureTime,
        pickuptime: formData.pickupTime,
        pickupdate: formData.pickupDate,
        depaturedate: formData.depatureDate,
        expecteddeliverydate: formData.expectedDeliveryDate,
        shipper: formData.shipper,
        receiver: formData.receiver,
        totalfreight: formData.totalFreight,
        transit_times_id: formData.transit_times_id,
        package_type: formData.packageType,
        intermediate_path1: formData.intermediate_path1,
        intermediate_path2: formData.intermediate_path2,
      }
    );

    if (activeShipment.package_type.item_id === 1) {
      const { petdata, peterror } = await updatePet(
        activeShipment.shipment_pet_id.pet_id,
        {
          name: formData.shipment_pet_id.name,
          breed: formData.shipment_pet_id.breed,
          age: formData.shipment_pet_id.age,
          weight: formData.shipment_pet_id.weight,
          petnumber: formData.shipment_pet_id.petNumber,
        }
      );
    }
    if (activeShipment.package_type.item_id !== 1) {
      const { gooddata, gooderror } = await updateGoods(
        activeShipment.shipment_good_id.goods_id,
        {
          item_number: formData.shipment_good_id.Item_number,
          item_name: formData.shipment_good_id.item_name,
          dimensions: formData.shipment_good_id.dimensions,
          weight: formData.shipment_good_id.weight,
        }
      );
    }

    if (error) {
      setErrMessage('Shipment update has failed');
    } else {
      setSuccessMessage('Shipment Has Updated Succesfully');

      // Trigger consolidated notifications (Email & SMS)
      triggerShipmentNotifications(activeShipment.shipment_id);

      setTimeout(() => {
        setEditMenuOpen(false);
      }, 1500);
    }
  };
  console.log(formData);

  // Separate handlers for select fields (updating the value as the user selects)
  const handleCountrySelectUpate = (e) => {
    setOriginSelectedCountry(e.target.value);
    handleInputChange(e);
  };

  const handleCountryDestinationSelectUpate = (e) => {
    setdestinationSelectedCountry(e.target.value);
    handleInputChange(e);
  };

  const handlePackageStatusUpdate = (e) => {
    setPackageStatus(e.target.value);
    handleInputChange(e);
  };

  const handleShippingUpdate = (e) => {
    setShippingType(e.target.value);
    handleInputChange(e);
  };

  const handlePackageTypeUpdate = (e) => {
    setPackageType(e.target.value);
    handleInputChange(e);
  };

  const handleSenderUpdate = (e) => {
    setSender(e.target.value);
    handleInputChange(e);
  };

  const handleReceiverUpdate = (e) => {
    setReceiver(e.target.value);
    handleInputChange(e);
  };

  const handleTransitTimesUpdate = (e) => {
    setTransitTimes(e.target.value);
    handleInputChange(e);
  };
  console.log(successMessage);

  // Fetch countries for the dropdown
  useEffect(() => {
    // Static country list — no external API dependency
    const COUNTRIES = [
      { name: 'Afghanistan', code: 'AF' }, { name: 'Albania', code: 'AL' }, { name: 'Algeria', code: 'DZ' },
      { name: 'Andorra', code: 'AD' }, { name: 'Angola', code: 'AO' }, { name: 'Antigua and Barbuda', code: 'AG' },
      { name: 'Argentina', code: 'AR' }, { name: 'Armenia', code: 'AM' }, { name: 'Australia', code: 'AU' },
      { name: 'Austria', code: 'AT' }, { name: 'Azerbaijan', code: 'AZ' }, { name: 'Bahamas', code: 'BS' },
      { name: 'Bahrain', code: 'BH' }, { name: 'Bangladesh', code: 'BD' }, { name: 'Barbados', code: 'BB' },
      { name: 'Belarus', code: 'BY' }, { name: 'Belgium', code: 'BE' }, { name: 'Belize', code: 'BZ' },
      { name: 'Benin', code: 'BJ' }, { name: 'Bhutan', code: 'BT' }, { name: 'Bolivia', code: 'BO' },
      { name: 'Bosnia and Herzegovina', code: 'BA' }, { name: 'Botswana', code: 'BW' }, { name: 'Brazil', code: 'BR' },
      { name: 'Brunei', code: 'BN' }, { name: 'Bulgaria', code: 'BG' }, { name: 'Burkina Faso', code: 'BF' },
      { name: 'Burundi', code: 'BI' }, { name: 'Cabo Verde', code: 'CV' }, { name: 'Cambodia', code: 'KH' },
      { name: 'Cameroon', code: 'CM' }, { name: 'Canada', code: 'CA' }, { name: 'Central African Republic', code: 'CF' },
      { name: 'Chad', code: 'TD' }, { name: 'Chile', code: 'CL' }, { name: 'China', code: 'CN' },
      { name: 'Colombia', code: 'CO' }, { name: 'Comoros', code: 'KM' }, { name: 'Congo', code: 'CG' },
      { name: 'Costa Rica', code: 'CR' }, { name: 'Croatia', code: 'HR' }, { name: 'Cuba', code: 'CU' },
      { name: 'Cyprus', code: 'CY' }, { name: 'Czech Republic', code: 'CZ' }, { name: 'Denmark', code: 'DK' },
      { name: 'Djibouti', code: 'DJ' }, { name: 'Dominica', code: 'DM' }, { name: 'Dominican Republic', code: 'DO' },
      { name: 'Ecuador', code: 'EC' }, { name: 'Egypt', code: 'EG' }, { name: 'El Salvador', code: 'SV' },
      { name: 'Equatorial Guinea', code: 'GQ' }, { name: 'Eritrea', code: 'ER' }, { name: 'Estonia', code: 'EE' },
      { name: 'Eswatini', code: 'SZ' }, { name: 'Ethiopia', code: 'ET' }, { name: 'Fiji', code: 'FJ' },
      { name: 'Finland', code: 'FI' }, { name: 'France', code: 'FR' }, { name: 'Gabon', code: 'GA' },
      { name: 'Gambia', code: 'GM' }, { name: 'Georgia', code: 'GE' }, { name: 'Germany', code: 'DE' },
      { name: 'Ghana', code: 'GH' }, { name: 'Greece', code: 'GR' }, { name: 'Grenada', code: 'GD' },
      { name: 'Guatemala', code: 'GT' }, { name: 'Guinea', code: 'GN' }, { name: 'Guinea-Bissau', code: 'GW' },
      { name: 'Guyana', code: 'GY' }, { name: 'Haiti', code: 'HT' }, { name: 'Honduras', code: 'HN' },
      { name: 'Hungary', code: 'HU' }, { name: 'Iceland', code: 'IS' }, { name: 'India', code: 'IN' },
      { name: 'Indonesia', code: 'ID' }, { name: 'Iran', code: 'IR' }, { name: 'Iraq', code: 'IQ' },
      { name: 'Ireland', code: 'IE' }, { name: 'Israel', code: 'IL' }, { name: 'Italy', code: 'IT' },
      { name: 'Jamaica', code: 'JM' }, { name: 'Japan', code: 'JP' }, { name: 'Jordan', code: 'JO' },
      { name: 'Kazakhstan', code: 'KZ' }, { name: 'Kenya', code: 'KE' }, { name: 'Kiribati', code: 'KI' },
      { name: 'Kuwait', code: 'KW' }, { name: 'Kyrgyzstan', code: 'KG' }, { name: 'Laos', code: 'LA' },
      { name: 'Latvia', code: 'LV' }, { name: 'Lebanon', code: 'LB' }, { name: 'Lesotho', code: 'LS' },
      { name: 'Liberia', code: 'LR' }, { name: 'Libya', code: 'LY' }, { name: 'Liechtenstein', code: 'LI' },
      { name: 'Lithuania', code: 'LT' }, { name: 'Luxembourg', code: 'LU' }, { name: 'Madagascar', code: 'MG' },
      { name: 'Malawi', code: 'MW' }, { name: 'Malaysia', code: 'MY' }, { name: 'Maldives', code: 'MV' },
      { name: 'Mali', code: 'ML' }, { name: 'Malta', code: 'MT' }, { name: 'Marshall Islands', code: 'MH' },
      { name: 'Mauritania', code: 'MR' }, { name: 'Mauritius', code: 'MU' }, { name: 'Mexico', code: 'MX' },
      { name: 'Micronesia', code: 'FM' }, { name: 'Moldova', code: 'MD' }, { name: 'Monaco', code: 'MC' },
      { name: 'Mongolia', code: 'MN' }, { name: 'Montenegro', code: 'ME' }, { name: 'Morocco', code: 'MA' },
      { name: 'Mozambique', code: 'MZ' }, { name: 'Myanmar', code: 'MM' }, { name: 'Namibia', code: 'NA' },
      { name: 'Nauru', code: 'NR' }, { name: 'Nepal', code: 'NP' }, { name: 'Netherlands', code: 'NL' },
      { name: 'New Zealand', code: 'NZ' }, { name: 'Nicaragua', code: 'NI' }, { name: 'Niger', code: 'NE' },
      { name: 'Nigeria', code: 'NG' }, { name: 'North Korea', code: 'KP' }, { name: 'North Macedonia', code: 'MK' },
      { name: 'Norway', code: 'NO' }, { name: 'Oman', code: 'OM' }, { name: 'Pakistan', code: 'PK' },
      { name: 'Palau', code: 'PW' }, { name: 'Palestine', code: 'PS' }, { name: 'Panama', code: 'PA' },
      { name: 'Papua New Guinea', code: 'PG' }, { name: 'Paraguay', code: 'PY' }, { name: 'Peru', code: 'PE' },
      { name: 'Philippines', code: 'PH' }, { name: 'Poland', code: 'PL' }, { name: 'Portugal', code: 'PT' },
      { name: 'Qatar', code: 'QA' }, { name: 'Romania', code: 'RO' }, { name: 'Russia', code: 'RU' },
      { name: 'Rwanda', code: 'RW' }, { name: 'Saint Kitts and Nevis', code: 'KN' }, { name: 'Saint Lucia', code: 'LC' },
      { name: 'Saint Vincent and the Grenadines', code: 'VC' }, { name: 'Samoa', code: 'WS' }, { name: 'San Marino', code: 'SM' },
      { name: 'Sao Tome and Principe', code: 'ST' }, { name: 'Saudi Arabia', code: 'SA' }, { name: 'Senegal', code: 'SN' },
      { name: 'Serbia', code: 'RS' }, { name: 'Seychelles', code: 'SC' }, { name: 'Sierra Leone', code: 'SL' },
      { name: 'Singapore', code: 'SG' }, { name: 'Slovakia', code: 'SK' }, { name: 'Slovenia', code: 'SI' },
      { name: 'Solomon Islands', code: 'SB' }, { name: 'Somalia', code: 'SO' }, { name: 'South Africa', code: 'ZA' },
      { name: 'South Korea', code: 'KR' }, { name: 'South Sudan', code: 'SS' }, { name: 'Spain', code: 'ES' },
      { name: 'Sri Lanka', code: 'LK' }, { name: 'Sudan', code: 'SD' }, { name: 'Suriname', code: 'SR' },
      { name: 'Sweden', code: 'SE' }, { name: 'Switzerland', code: 'CH' }, { name: 'Syria', code: 'SY' },
      { name: 'Taiwan', code: 'TW' }, { name: 'Tajikistan', code: 'TJ' }, { name: 'Tanzania', code: 'TZ' },
      { name: 'Thailand', code: 'TH' }, { name: 'Timor-Leste', code: 'TL' }, { name: 'Togo', code: 'TG' },
      { name: 'Tonga', code: 'TO' }, { name: 'Trinidad and Tobago', code: 'TT' }, { name: 'Tunisia', code: 'TN' },
      { name: 'Turkey', code: 'TR' }, { name: 'Turkmenistan', code: 'TM' }, { name: 'Tuvalu', code: 'TV' },
      { name: 'Uganda', code: 'UG' }, { name: 'Ukraine', code: 'UA' }, { name: 'United Arab Emirates', code: 'AE' },
      { name: 'United Kingdom', code: 'GB' }, { name: 'United States', code: 'US' }, { name: 'Uruguay', code: 'UY' },
      { name: 'Uzbekistan', code: 'UZ' }, { name: 'Vanuatu', code: 'VU' }, { name: 'Vatican City', code: 'VA' },
      { name: 'Venezuela', code: 'VE' }, { name: 'Vietnam', code: 'VN' }, { name: 'Yemen', code: 'YE' },
      { name: 'Zambia', code: 'ZM' }, { name: 'Zimbabwe', code: 'ZW' },
    ];
    setCountries(COUNTRIES);
  }, []);
  return editMenuOpen ? (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen py-10 px-4 flex items-center justify-center">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Header Section */}
          <div className="bg-gray-50 px-8 py-6 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                Update Shipment Details
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Modify tracking numbers, shipping paths, and addresses below
              </p>
            </div>
            <button
              onClick={() => setEditMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <SlClose className="text-2xl" />
            </button>
          </div>

          {errMessage ? (
            <MessageLog
              message={errMessage}
              setMessage={setErrMessage}
              value={false}
            />
          ) : (
            <MessageLog
              message={successMessage}
              setMessage={setSuccessMessage}
              value={true}
            />
          )}

          <div className="p-8">
            <form className="space-y-8">
              {/* Top Details Section */}
              <div className="bg-gray-50/50 p-6 md:p-8 rounded-2xl border border-gray-100 space-y-6">
                <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                  General Tracking
                </h3>
                <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Tracking Number <span className="text-accent">*</span>
                    </label>
                    <input
                      name="trackingNumber"
                      id="trackingNumber"
                      value={formData.trackingNumber}
                      placeholder="Ex AM123456789-LZ"
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Progress <span className="text-accent">*</span>
                    </label>
                    <input
                      name="percentage"
                      id="percentage"
                      placeholder="Total Progress (%)"
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      value={formData.percentage}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              {/* Origin Address Section */}
              <div className="bg-gray-50/50 p-6 md:p-8 rounded-2xl border border-gray-100 space-y-6">
                <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                  Origin Address
                </h3>
                <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                  <div className="flex flex-col md:w-1/3 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Address <span className="text-accent">*</span>
                    </label>
                    <input
                      name="origin_street_address"
                      id="originAddress"
                      value={formData.origin_street_address}
                      placeholder="Address"
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col md:w-1/6 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      City <span className="text-accent">*</span>
                    </label>
                    <input
                      name="origin_city"
                      id="originCity"
                      value={formData.origin_city}
                      placeholder="City"
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col md:w-1/6 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      State/Province <span className="text-accent">*</span>
                    </label>
                    <input
                      name="origin_state"
                      id="region"
                      value={formData.origin_state}
                      placeholder="State/Prov"
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col md:w-1/6 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Postal Code <span className="text-accent">*</span>
                    </label>
                    <input
                      name="origin_postal_code"
                      id="originPostalCode"
                      value={formData.origin_postal_code}
                      placeholder="Code"
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col md:w-1/5 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Country <span className="text-accent">*</span>
                    </label>
                    <select
                      name="origin_country"
                      value={formData.origin_country}
                      onChange={handleCountrySelectUpate}
                      required
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm appearance-none"
                    >
                      <option value="" disabled>-- Select Country --</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Destination Address Section */}
              <div className="bg-gray-50/50 p-6 md:p-8 rounded-2xl border border-gray-100 space-y-6">
                <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                  Destination Address
                </h3>
                <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                  <div className="flex flex-col md:w-1/3 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Address <span className="text-accent">*</span>
                    </label>
                    <input
                      name="destination_street_address"
                      id="destinationAddress"
                      value={formData.destination_street_address}
                      placeholder="Address"
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col md:w-1/6 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      City <span className="text-accent">*</span>
                    </label>
                    <input
                      name="destination_city"
                      id="destinationCity"
                      value={formData.destination_city}
                      placeholder="City"
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col md:w-1/6 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      State/Province <span className="text-accent">*</span>
                    </label>
                    <input
                      name="destination_state"
                      id="destination_state"
                      value={formData.destination_state}
                      placeholder="State/Prov"
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col md:w-1/6 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Postal Code <span className="text-accent">*</span>
                    </label>
                    <input
                      name="destination_postal_code"
                      id="destinationPostalCode"
                      value={formData.destination_postal_code}
                      placeholder="Code"
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col md:w-1/5 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Country <span className="text-accent">*</span>
                    </label>
                    <select
                      name="destination_country"
                      value={formData.destination_country}
                      required
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm appearance-none"
                      onChange={handleCountryDestinationSelectUpate}
                    >
                      <option value="" disabled>-- Select Country --</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              {/* Shipping Details Section */}
              <div className="bg-gray-50/50 p-6 md:p-8 rounded-2xl border border-gray-100 space-y-6">
                <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                  Shipping Details
                </h3>
                <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Package Status <span className="text-accent">*</span>
                    </label>
                    <select
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm appearance-none"
                      onChange={handlePackageStatusUpdate}
                      value={formData.status_id}
                      name="status_id"
                    >
                      {statuses.map((status) => (
                        <option key={status.status_id} value={status.status_id}>
                          {status.status}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Shipping type <span className="text-accent">*</span>
                    </label>
                    <select
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm appearance-none"
                      onChange={handleShippingUpdate}
                      name="shipping_type_id"
                      value={formData.shipping_type_id}
                    >
                      {shippingtype.map((shipping) => (
                        <option
                          key={shipping.shipping_type_id}
                          value={shipping.shipping_type_id}
                        >
                          {shipping.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Intermediate Path 1 <span className="text-accent">*</span>
                    </label>
                    <input
                      name="intermediate_path1"
                      id="intermediate_path1"
                      value={formData.intermediate_path1}
                      placeholder="Intermediate Path For Air Freight"
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Intermediate Path 2 <span className="text-accent">*</span>
                    </label>
                    <input
                      name="intermediate_path2"
                      id="intermediate_path2"
                      value={formData.intermediate_path2}
                      placeholder="Intermediate Path For Air Freight"
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Shipment Type <span className="text-accent">*</span>
                    </label>
                    <select
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm appearance-none"
                      onChange={(e) => setShipmentType(Number(e.target.value))}
                      value={activeShipment.package_type.item_id === 1 ? 1 : 2}
                      name=""
                    >
                      <option value={1}>Pets</option>
                      <option value={2}>Goods</option>
                    </select>
                  </div>
                </div>
              </div>
              {activeShipment.package_type.item_id === 1 ? (
                <div className="bg-gray-50/50 p-6 md:p-8 rounded-2xl border border-gray-100 space-y-6">
                  <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                    Pet Details
                  </h3>
                  <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                    <div className="flex flex-col md:w-1/2 xs:w-full">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                        Package Type <span className="text-accent">*</span>
                      </label>
                      <select
                        className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm appearance-none"
                        onChange={handlePackageTypeUpdate}
                        name="packageType"
                      >
                        <option value={1}>Crate</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                    <div className="flex flex-col md:w-1/2 xs:w-full">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                        Pet Name <span className="text-accent">*</span>
                      </label>
                      <input
                        name="shipment_pet_id.name"
                        id="shipment_pet_id.name"
                        placeholder="Pet Name"
                        className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                        value={formData?.shipment_pet_id?.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col md:w-1/2 xs:w-full">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                        Pet Breed <span className="text-accent">*</span>
                      </label>
                      <input
                        name="shipment_pet_id.breed"
                        id="petBreed"
                        placeholder="Pet Breed"
                        className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                        value={formData?.shipment_pet_id?.breed}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                    <div className="flex flex-col md:w-1/3 xs:w-full">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                        Pet Age (weeks) <span className="text-accent">*</span>
                      </label>
                      <input
                        name="shipment_pet_id.age"
                        id="petAge"
                        placeholder="Age in weeks"
                        className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                        value={formData?.shipment_pet_id?.age}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col md:w-1/3 xs:w-full">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                        Pet Weight <span className="text-accent">*</span>
                      </label>
                      <input
                        name="shipment_pet_id.weight"
                        id="petWeight"
                        placeholder="Pet Weight in lbs"
                        className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                        value={formData?.shipment_pet_id?.weight}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col md:w-1/3 xs:w-full">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                        Pet Number <span className="text-accent">*</span>
                      </label>
                      <input
                        name="shipment_pet_id.petNumber"
                        id="petNumber"
                        placeholder="Pet Number"
                        className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                        value={formData?.shipment_pet_id?.petNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50/50 p-6 md:p-8 rounded-2xl border border-gray-100 space-y-6">
                  <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                    Goods Details
                  </h3>
                  <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                    <div className="flex flex-col md:w-1/2 xs:w-full">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                        Package Type <span className="text-accent">*</span>
                      </label>
                      <select
                        className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm appearance-none"
                        onChange={handlePackageTypeUpdate}
                        name="packageType"
                        value={formData.packageType}
                      >
                        {allPackageType.map((packagetype) => (
                          <option
                            key={packagetype.item_id}
                            value={packagetype.item_id}
                          >
                            {packagetype.type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                    <div className="flex flex-col md:w-1/2 xs:w-full">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                        Item Name <span className="text-accent">*</span>
                      </label>
                      <input
                        name="shipment_good_id.item_name"
                        id="itemName"
                        value={formData?.shipment_good_id?.item_name || ''}
                        placeholder="Item Name"
                        className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col md:w-1/2 xs:w-full">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                        Item Number <span className="text-accent">*</span>
                      </label>
                      <input
                        name="shipment_good_id.Item_number"
                        id="itemNumber"
                        placeholder="Item Number"
                        value={formData?.shipment_good_id?.Item_number || ''}
                        className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                    <div className="flex flex-col md:w-1/2 xs:w-full">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                        Item Dimension <span className="text-accent">*</span>
                      </label>
                      <input
                        name="shipment_good_id.dimensions"
                        id="itemDimension"
                        value={formData?.shipment_good_id?.dimensions || ''}
                        placeholder="Item Dimension"
                        className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col md:w-1/2 xs:w-full">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                        Item Weight <span className="text-accent">*</span>
                      </label>
                      <input
                        name="shipment_good_id.weight"
                        id="itemWeight"
                        value={formData?.shipment_good_id?.weight || ''}
                        placeholder="Item Weight"
                        className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              )}
              {/* Dates & Times Section */}
              <div className="bg-gray-50/50 p-6 md:p-8 rounded-2xl border border-gray-100 space-y-6">
                <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                  Dates & Times
                </h3>
                <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Departure Date <span className="text-accent">*</span>
                    </label>
                    <input
                      type="date"
                      id="depatureDate"
                      value={formData.depatureDate}
                      name="depatureDate"
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Departure Time <span className="text-accent">*</span>
                    </label>
                    <input
                      type="time"
                      id="depatureTime"
                      name="depatureTime"
                      value={formData.depatureTime}
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Pickup Date <span className="text-accent">*</span>
                    </label>
                    <input
                      type="date"
                      id="pickupDate"
                      name="pickupDate"
                      value={formData.pickupDate}
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Pickup Time <span className="text-accent">*</span>
                    </label>
                    <input
                      type="time"
                      id="pickupTime"
                      value={formData.pickupTime}
                      name="pickupTime"
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                  <div className="flex flex-col w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Expected Delivery Date <span className="text-accent">*</span>
                    </label>
                    <input
                      type="date"
                      id="deliveryDate"
                      value={formData.expectedDeliveryDate}
                      name="expectedDeliveryDate"
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Logistics & Parties Section */}
              <div className="bg-gray-50/50 p-6 md:p-8 rounded-2xl border border-gray-100 space-y-6">
                <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                  Parties & Freight
                </h3>
                <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Sender <span className="text-accent">*</span>
                    </label>
                    <select
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm appearance-none"
                      onChange={handleSenderUpdate}
                      name="shipper"
                      value={formData.shipper}
                    >
                      <option value="" disabled>Select User</option>
                      {localUsers.map((user) => (
                        <option key={user.user_id} value={user.user_id}>
                          {user.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Receiver <span className="text-accent">*</span>
                    </label>
                    <select
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm appearance-none"
                      onChange={handleReceiverUpdate}
                      name="receiver"
                      value={formData.receiver}
                    >
                      <option value="" disabled>Select User</option>
                      {localUsers.map((user) => (
                        <option key={user.user_id} value={user.user_id}>
                          {user.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="w-full flex md:flex-row xs:flex-col justify-between gap-6">
                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Total Freight <span className="text-accent">*</span>
                    </label>
                    <input
                      name="totalFreight"
                      id="totalFreight"
                      value={formData.totalFreight}
                      placeholder="Total Freight"
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col md:w-1/2 xs:w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                      Transit Times <span className="text-accent">*</span>
                    </label>
                    <select
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm appearance-none"
                      name="transit_times_id"
                      onChange={handleTransitTimesUpdate}
                      value={formData.transit_times_id}
                    >
                      <option value="" disabled className="text-gray-400">
                        Select Transit Time
                      </option>
                      {localTransittimes?.map((time) => (
                        <option key={time.transit_id} value={time.transit_id} className="text-gray-900">
                          {time.transitTimes || time.transittimes}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {errMessage ? (
                <MessageLog
                  message={errMessage}
                  setMessage={setErrMessage}
                  value={false}
                />
              ) : (
                <MessageLog
                  message={successMessage}
                  setMessage={setSuccessMessage}
                  value={true}
                />
              )}

              <div className="pt-6 border-t border-gray-100 flex gap-4 pr-1 mt-10">
                <ButtonBig
                  type="button"
                  className="px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold rounded-xl shadow-sm transition-all duration-200 w-1/4 flex justify-center shrink-0"
                  onClick={() => setEditMenuOpen(false)}
                >
                  Cancel
                </ButtonBig>
                <ButtonBig
                  type="button"
                  className="px-8 py-3.5 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl shadow-lg shadow-accent/20 transition-all duration-200 w-3/4 flex justify-center"
                  onClick={(e) => testUpdateShipment(e)}
                >
                  Update Shipment Details
                </ButtonBig>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default UpdateShipmentMenu;
