// app/api/send-sms/route.js

import Twilio from 'twilio/lib/rest/Twilio';

// Named export for POST method
export async function POST(req) {
  const smsData = await req.json(); // Parse the incoming JSON body
  console.log('Received request:', req.method);
  console.log('Request body:', smsData);

  if (
    !smsData ||
    !smsData.trackingNumber ||
    !smsData.status_id ||
    !smsData.receiver ||
    !smsData.receiver.phone_number ||
    !smsData.receiver.name
  ) {
    console.error('Missing required fields in SMS data');
    return new Response(
      JSON.stringify({ error: 'Missing required shipment data' }),
      { status: 400 }
    );
  }

  const { trackingNumber, status_id, receiver } = smsData;

  // Initialize Twilio client
  const client = new Twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  const message = `Dear ${receiver.name},\n\nYour shipment with tracking number ${trackingNumber} has been updated.\n\nCurrent Status: ${status_id.status}\nThank you for choosing Hault Express Delivery.`;

  try {
    // Send the SMS
    const smsResponse = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: receiver.phone_number,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'SMS sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending SMS with Twilio:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to send SMS' }),
      { status: 500 }
    );
  }
}
