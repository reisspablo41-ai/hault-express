import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || "no-key");

export async function POST(req) {
  try {
    // Extract form data from the request
    const { firstName, lastName, email, phone, message } = await req.json();

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_123456789') {
      console.warn('Email notifications skipped: RESEND_API_KEY not configured in .env');
      return new Response(JSON.stringify({ success: true, skipped: true }), { status: 200 });
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Hault Express Delivery <noreply@haultexpress.com>',
      to: process.env.EMAIL_TO || 'haultexpressdelivery@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    // Response on success
    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully!', id: data.id }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    // Response on failure
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to send email' }),
      { status: 500 }
    );
  }
}
