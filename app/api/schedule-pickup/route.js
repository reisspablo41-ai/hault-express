import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // Extract form data from the request
    const {
      firstName,
      lastName,
      streetAddress,
      apt,
      state,
      zipCode,
      phoneNumber,
      email,
    } = await req.json();

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_123456789') {
      console.warn('Email notifications skipped: RESEND_API_KEY not configured in .env');
      return new Response(JSON.stringify({ success: true, skipped: true }), { status: 200 });
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Hault Express Delivery <haultexpressdelivery@gmail.com>',
      to: process.env.EMAIL_TO || 'haultexpressdelivery@gmail.com',
      replyTo: email,
      subject: `Schedule a Pickup Request from ${firstName} ${lastName}`,
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Street Address: ${streetAddress}
        Apt/Suite/Order: ${apt}
        State/Province: ${state}
        Zip Code: ${zipCode}
        Phone Number: ${phoneNumber}
        Email: ${email}
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    // Response on success
    return new Response(
      JSON.stringify({ success: true, message: 'Pickup request submitted successfully!', id: data.id }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    // Response on failure
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to submit pickup request' }),
      { status: 500 }
    );
  }
}
