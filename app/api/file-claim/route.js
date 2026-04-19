import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.formData();

    // Extract fields
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const packagename = formData.get('packagename');
    const trackingNumber = formData.get('trackingNumber');
    const claimType = formData.get('claimType');
    const message = formData.get('message');
    const packageType = formData.get('packageType');
    const file = formData.get('file');

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_123456789') {
      console.warn('Email notifications skipped: RESEND_API_KEY not configured in .env');
      return new Response(JSON.stringify({ success: true, skipped: true }), { status: 200 });
    }

    // Handle attachment
    const attachments = [];
    if (file && file instanceof File) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Hault Express Delivery <haultexpressdelivery@gmail.com>',
      to: process.env.EMAIL_TO || 'haultexpressdelivery@gmail.com',
      replyTo: email,
      subject: `Claim Request from ${firstName} ${lastName}`,
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Package Name: ${packagename}
        Package Type: ${packageType}
        Tracking Number: ${trackingNumber}
        Claim Type: ${claimType}
        Message: ${message}
        File: ${file ? 'File attached' : 'No file uploaded'}
      `,
      attachments,
    });

    if (error) {
      throw new Error(error.message);
    }

    // Response on success
    return new Response(
      JSON.stringify({ success: true, message: 'Claim request submitted successfully!', id: data.id }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    // Response on failure
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to submit claim request' }),
      { status: 500 }
    );
  }
}
