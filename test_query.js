const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://hngmxhcldpsshqjksnko.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseKey) {
  console.log("No Supabase key found in env, testing failed");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  let { data, error } = await supabase
    .from('shipments')
    .select(
      '*, status_id(status, status_id), shipment_good_id(goods_id, weight, dimensions, Item_number, item_name), shipper(name, user_id), receiver(name, user_id), package_type(type, item_id), shipment_pet_id(name, breed, age, weight, petNumber, pet_id)'
    );

  if (error) {
    console.error("Supabase Error:", JSON.stringify(error, null, 2));
  } else {
    console.log("Success, data length:", data.length);
  }
}

main();
