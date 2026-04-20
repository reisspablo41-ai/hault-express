'use server';
import { revalidatePath } from 'next/cache';
import { supabaseAdmin as supabase } from '../supabaseAdmin';

export const createNewShipment = async (data) => {
  console.log(data);
  try {
    let relatedItemId = null;
    let relatedItemType = '';

    if (data.petName) {
      const { data: petData, error: petError } = await supabase
        .from('pets')
        .insert([
          {
            name: data.petName,
            breed: data.petBreed,
            age: data.petAge,
            weight: data.petWeight,
            petnumber: data.petNumber,
          },
        ])
        .select('pet_id')
        .single();

      if (petError)
        throw new Error(`Failed to insert pet: ${petError.message}`);

      relatedItemId = petData?.pet_id;
      relatedItemType = 'pet';
    } else if (data.itemName) {
      const { data: goodData, error: goodError } = await supabase
        .from('goods')
        .insert([
          {
            item_name: data.itemName,
            dimensions: data.itemDimension,
            weight: data.itemWeight,
            item_number: data.itemNumber,
          },
        ])
        .select('goods_id')
        .single();

      if (goodError)
        throw new Error(`Failed to insert good: ${goodError.message}`);

      relatedItemId = goodData?.goods_id;
      relatedItemType = 'good';
    } else {
      throw new Error(
        'No valid item data (pet or good) provided for insertion.'
      );
    }

    const { data: shipmentData, error: shipmentError } = await supabase
      .from('shipments')
      .insert([
        {
          trackingnumber: data.trackingNumber,
          shipping_type_id: data.shipmentType,
          origin_street_address: data.originAddress,
          origin_state: data.origin_state_province_region,
          origin_city: data.originCity,
          origin_postal_code: data.originPostalCode,
          origin_country: data.originSelectedCountry,
          destination_street_address: data.destinationAddress,
          destination_state: data.destination_state_province_region,
          destination_city: data.destinationCity,
          destination_postal_code: data.destinationPostalCode,
          destination_country: data.destinationSelectedCountry,
          status_id: data.packageStatus,
          package_type: data.packageType,
          depaturetime: data.depatureTime,
          pickuptime: data.pickupTime,
          expecteddeliverydate: data.deliveryDate,
          depaturedate: data.depatureDate,
          pickupdate: data.pickupDate,
          shipper: data.sender,
          receiver: data.receiver,
          totalfreight: data.totalFreight,
          transit_times_id: data.transitTimes,
          percentage: data.percentage,
          shipment_pet_id: relatedItemType === 'pet' ? relatedItemId : null,
          shipment_good_id: relatedItemType === 'good' ? relatedItemId : null,
          intermediate_path1: data.intermediatePath1 ?? null,
          intermediate_path2: data.intermediatePath2 ?? null,
        },
      ])
      .select()
      .single();

    if (shipmentError) {
      console.error('Error occurred while creating shipment:', shipmentError);
      throw new Error(`Failed to insert shipment: ${shipmentError.message}`);
    }

    revalidatePath('/admin/dashboard');
    revalidatePath('/dashboard');
    revalidatePath('/Track');
    return { relatedItemId, relatedItemType, shipmentData };
  } catch (error) {
    console.error('Error creating shipment:', error.message);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  console.log(userId);
  const { error } = await supabase.from('users').delete().eq('user_id', userId);
  if (!error) {
    revalidatePath('/admin/dashboard/all-users');
  }
  return error;
};

export const updateUser = async (userId, updatedFields) => {
  const { data, error } = await supabase
    .from('users')
    .update(updatedFields)
    .eq('user_id', userId)
    .select();
  if (!error) {
    revalidatePath('/admin/dashboard/all-users');
  }
  return { data, error };
};

export const updateShipment = async (shipmentId, updatedFields) => {
  const { data: formdata, error } = await supabase
    .from('shipments')
    .update(updatedFields)
    .eq('shipment_id', shipmentId)
    .select();
  if (!error) {
    revalidatePath('/admin/dashboard');
    revalidatePath('/dashboard');
    revalidatePath('/Track');
  } else {
    console.error('updateShipment error:', error);
  }
  return { formdata, error };
};

export const updatePet = async (petId, updatedFields) => {
  console.log(updatedFields);
  const { data: petdata, error: peterror } = await supabase
    .from('pets')
    .update(updatedFields)
    .eq('pet_id', petId)
    .select();
  if (!peterror) {
    revalidatePath('/admin/dashboard');
    revalidatePath('/dashboard');
    revalidatePath('/Track');
  }
  return { petdata, peterror };
};

export const updateGoods = async (goodId, updatedFields) => {
  console.log(updatedFields);
  const { data: gooddata, error: gooderror } = await supabase
    .from('goods')
    .update(updatedFields)
    .eq('goods_id', goodId)
    .select();
  if (!gooderror) {
    revalidatePath('/admin/dashboard');
    revalidatePath('/dashboard');
    revalidatePath('/Track');
  }
  return { gooddata, gooderror };
};

export const deleteShipment = async (shipmentId) => {
  console.log(shipmentId);
  const { error } = await supabase
    .from('shipments')
    .delete()
    .eq('shipment_id', shipmentId);
  if (!error) {
    revalidatePath('/admin/dashboard');
    revalidatePath('/dashboard');
    revalidatePath('/Track');
  }
  return error;
};

export const updateShipmentLocation = async (shipmentId, newLocation) => {
  const { data, error } = await supabase
    .from('shipments')
    .update({ present_address: newLocation })
    .eq('shipment_id', shipmentId);

  if (error) {
    console.error('Error updating location:', error.message);
    return null;
  }

  console.log('Location updated successfully:', data);
  revalidatePath('/admin/dashboard');
  revalidatePath('/dashboard');
  revalidatePath('/Track');
  return data;
};

export const updateStatusShipment = async (shipmentId, updatedFields) => {
  const { data: formdata, error } = await supabase
    .from('shipments')
    .update(updatedFields)
    .eq('shipment_id', shipmentId)
    .select();
  if (!error) {
    revalidatePath('/admin/dashboard');
    revalidatePath('/dashboard');
    revalidatePath('/Track');
  } else {
    console.error('updateStatusShipment error:', error);
  }
  return { formdata, error };
};

export const createNewActivity = async (activityData) => {
  const { data: dataActivity, error } = await supabase.from('activity').insert([
    {
      trackingnumber: activityData.trackingNumber,
      status: activityData.packageStatus,
      present_address: activityData.presentAddress,
      time: activityData.time,
    },
  ]);

  if (error) {
    console.error('Error inserting activity:', error);
    return { error };
  }

  if (!error) {
    revalidatePath('/admin/dashboard');
    revalidatePath('/dashboard');
    revalidatePath('/Track');
  }
  return { dataActivity };
};

export const deleteRefunds = async (id) => {
  const { error } = await supabase.from('refunds').delete().eq('id', id);
  if (!error) {
    revalidatePath('/admin/dashboard/refunds');
  }
  return error;
};

export const createRefund = async (data) => {
  const { data: result } = await supabase
    .from('refunds')
    .insert([
      {
        user_id: data.user,
        purpose: data.purpose,
        amount_paid: data.amount_paid,
        refundable_amount: data.refundable_amount,
      },
    ])
    .select();
  revalidatePath('/admin/dashboard/refunds');
  return result;
};

export async function updateSystemSetting(key, value) {
  const { data, error } = await supabase
    .from('system_settings')
    .update({ value, updated_at: new Date() })
    .eq('key', key)
    .select();

  revalidatePath('/admin/dashboard/settings');
  revalidatePath('/Track');
  revalidatePath('/dashboard');
  return { data, error };
}
