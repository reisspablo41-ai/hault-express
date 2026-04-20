"use server";
import { supabaseAdmin as supabase } from '../supabaseAdmin';

export const fetchShipmentByTrackingNumber = async (trackingNumber) => {
  const error = {};
  console.log(`[API] fetchShipmentByTrackingNumber starting for: "${trackingNumber}"`);

  const selectStr = `
    *,
    status_id(status, status_id),
    shipment_pet_id(name, breed, age, weight, petNumber:petnumber, pet_id),
    transit_times_id(transitTimes:transittimes),
    shipper_detail:shipper(name, email, phone_number, address),
    receiver_detail:receiver(name, email, phone_number, address),
    shipment_good_id(weight, dimensions, item_name, Item_number:item_number, goods_id),
    package_type(type, item_id)
  `.replace(/\s+/g, ' ').trim();

  const { data, error: err } = await supabase
    .from('shipments')
    .select(selectStr)
    .ilike('trackingnumber', trackingNumber)
    .single();

  if (err || !data) {
    console.error(`[API] fetchShipmentByTrackingNumber failure for [${trackingNumber}]:`, err?.message || 'No data', "Error:", JSON.stringify(err));
    error.message = 'Shipment could not be found. Please verify the tracking number.';
    error.code = err?.code;
  } else {
    if (data.shipper_detail) data.shipper = data.shipper_detail;
    if (data.receiver_detail) data.receiver = data.receiver_detail;
    if (data.trackingnumber) data.trackingNumber = data.trackingnumber;
  }

  return { data, error };
};

export const fetchAllShipments = async () => {
  let { data, error } = await supabase
    .from('shipments')
    .select(
      '*, status_id(status), shipper(name), receiver(name), package_type(type)'
    )
    .order('created_at', { ascending: false });
  return { data, error };
};

export const fetchAllShipmentsforUpdate = async () => {
  let { data, error } = await supabase
    .from('shipments')
    .select(
      '*, status_id(status, status_id), shipment_good_id(goods_id, weight, dimensions, Item_number:item_number, item_name), shipper_detail:shipper(name), receiver_detail:receiver(name), package_type(type, item_id), shipment_pet_id(name, breed, age, weight, petNumber:petnumber, pet_id)'
    )
    .order('created_at', { ascending: false });
  if (error) console.error('fetchAllShipmentsforUpdate error:', error);
  return { data, error };
};

export const fetchAllUsers = async () => {
  let { data, error } = await supabase.from('users').select('*');
  return { data, error };
};

export const addNewUser = async (data) => {
  try {
    const { data: existingUser, error: checkError } = await supabase
      .from('users')
      .select('*')
      .eq('email', data.email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing user:', checkError);
    }

    if (existingUser) {
      return existingUser;
    }

    const { data: responseData, error } = await supabase
      .from('users')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone_number: data.phone,
          address: data.address,
        },
      ])
      .select();

    if (error) {
      console.error('Error adding user in Supabase:', error);
      return null;
    }

    return responseData?.[0] || null;
  } catch (err) {
    console.error('Caught severe fetch/network error in addNewUser:', err.message, err.cause);
    return null;
  }
};

export const fetchAllStatus = async () => {
  let { data: statuses, error } = await supabase.from('statuses').select('*');
  return { statuses, error };
};

export const fetchAllTransitTimmes = async () => {
  let { data: transittimes, error } = await supabase
    .from('transittimes')
    .select('*');
  return { transittimes, error };
};

export const fetchAllItemTypes = async () => {
  let { data: packagetype, error } = await supabase
    .from('packagetype')
    .select('*');
  return { packagetype, error };
};

export const fetchAllShippingTypes = async () => {
  let { data: shippingtype, error } = await supabase
    .from('shippingtypes')
    .select('*');
  return { shippingtype, error };
};

export const fetchActivity = async (trackingNumber) => {
  const { data: activity, error } = await supabase
    .from('activity')
    .select('*, status(status)')
    .eq('trackingnumber', trackingNumber)
    .order('time', { ascending: false })
    .throwOnError();

  if (error) {
    console.error('Error fetching activities:', error);
    return null;
  }

  console.log('Fetched Activities:', activity);
  return activity;
};

export const fetchUser = async (email) => {
  const error = {};
  const { data, error: err } = await supabase
    .from('users')
    .select(`*`)
    .eq('email', email)
    .single();

  if (err) {
    error.message = 'Your Email has Not Loaded Correctly';
  }
  return { data, error };
};

export const fetchShipmentByEmail = async (receiver) => {
  const error = {};
  const { data: shipmentData, error: err } = await supabase
    .from('shipments')
    .select(
      `*, status_id(status), shipment_pet_id(name, breed, age, weight, petNumber:petnumber), transit_times_id(transitTimes:transittimes), shipper(name, email, phone_number, address), receiver(name, email, phone_number, address), shipment_good_id(weight, dimensions,  item_name, Item_number:item_number), package_type(type)`
    )
    .eq('receiver', receiver)
    .order('created_at', { ascending: false });

  if (err) {
    console.error('fetchShipmentByEmail error:', err);
    error.message = 'Shipments could not be loaded.';
  }
  return { shipmentData, error };
};

export const fetchRefundsById = async (receiver) => {
  const { data: refundsData, error } = await supabase
    .from('refunds')
    .select('*')
    .eq('user_id', receiver);
  console.log(refundsData);
  return { refundsData, error };
};

export const fetchRefunds = async () => {
  let { data: refunds, error } = await supabase
    .from('refunds')
    .select('*, user_id(name, email, user_id)');
  return { refunds, error };
};

export async function getCurrentUser() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
}

export async function resetPassword(email) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`,
  });

  if (error) {
    throw new Error(error.message);
  }

  return { success: true, message: 'Password reset link sent!' };
}

export async function fetchTrackingNumber(shipmentId) {
  const { data: shipmentData, error: shipmentError } = await supabase
    .from('shipments')
    .select(
      'shipper(email), receiver(email), trackingnumber, status_id(status)'
    )
    .eq('shipment_id', shipmentId)
    .single();

  if (shipmentData) {
    shipmentData.trackingNumber = shipmentData.trackingnumber;
  }

  return { shipmentData, shipmentError };
}

export async function fetchForSMS(shipmentId) {
  const { data: smsData, error: smsError } = await supabase
    .from('shipments')
    .select('receiver(name, phone_number), trackingnumber, status_id(status)')
    .eq('shipment_id', shipmentId)
    .single();

  if (smsData) {
    smsData.trackingNumber = smsData.trackingnumber;
  }

  return { smsData, smsError };
}

export async function fetchSystemSettings() {
  const { data, error } = await supabase
    .from('system_settings')
    .select('*');

  const settings = data?.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {}) || {};

  return { settings, error };
}
