import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_for_build');

export async function POST(req) {
  try {
    const shipmentDetails = await req.json();

    if (
      !shipmentDetails.trackingNumber ||
      !shipmentDetails.shipper?.email ||
      !shipmentDetails.receiver?.email ||
      !shipmentDetails.status_id?.status
    ) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_123456789') {
      console.warn('Email notifications skipped: RESEND_API_KEY not configured in .env');
      return new Response(JSON.stringify({ success: true, skipped: true }), { status: 200 });
    }

    const logoUrl = 'https://haultexpress.com/hault-logo.png';
    const trackUrl = `https://haultexpress.com/Track/${shipmentDetails.trackingNumber}`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Shipment Confirmed – Hault Express Delivery</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f4f8;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f4f8;padding:40px 16px;">
    <tr><td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background-color:#0f172a;border-radius:16px 16px 0 0;padding:36px 40px;text-align:center;">
            <img src="${logoUrl}" alt="Hault Express Delivery" style="height:44px;display:inline-block;" />
            <p style="color:#94a3b8;font-size:13px;margin:12px 0 0;">Global Shipping &amp; Logistics</p>
          </td>
        </tr>

        <!-- Hero band -->
        <tr>
          <td style="background-color:#f59e0b;padding:20px 40px;text-align:center;">
            <p style="color:#0f172a;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 6px;">Shipment Confirmed</p>
            <p style="color:#0f172a;font-size:28px;font-weight:800;margin:0;letter-spacing:1px;">${shipmentDetails.trackingNumber}</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background-color:#ffffff;padding:40px 40px 32px;">
            <p style="color:#1e293b;font-size:16px;line-height:1.6;margin:0 0 24px;">
              Hello, <strong>valued customer</strong> 👋<br />
              Great news — your shipment has been successfully created and is now in our system. Below are the full details.
            </p>

            <!-- Status pill -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="background-color:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:16px 20px;">
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding-right:12px;">
                        <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:#22c55e;"></span>
                      </td>
                      <td>
                        <p style="margin:0;font-size:12px;color:#16a34a;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Current Status</p>
                        <p style="margin:4px 0 0;font-size:18px;font-weight:800;color:#15803d;">${shipmentDetails.status_id.status}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Details grid -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="padding-bottom:12px;">
                  <p style="margin:0 0 16px;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1.5px;border-bottom:1px solid #e2e8f0;padding-bottom:8px;">Shipment Parties</p>
                </td>
              </tr>
              <tr>
                <td width="50%" style="padding-right:12px;vertical-align:top;">
                  <table cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="background-color:#f8fafc;border-radius:10px;padding:16px;">
                        <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">📦 Sender</p>
                        <p style="margin:0;font-size:14px;color:#1e293b;font-weight:600;word-break:break-all;">${shipmentDetails.shipper.email}</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td width="50%" style="padding-left:12px;vertical-align:top;">
                  <table cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="background-color:#f8fafc;border-radius:10px;padding:16px;">
                        <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">📬 Recipient</p>
                        <p style="margin:0;font-size:14px;color:#1e293b;font-weight:600;word-break:break-all;">${shipmentDetails.receiver.email}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- What happens next -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="background-color:#fffbeb;border-left:4px solid #f59e0b;border-radius:0 10px 10px 0;padding:18px 20px;">
                  <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#92400e;">What happens next?</p>
                  <p style="margin:0;font-size:13px;color:#78350f;line-height:1.7;">
                    Our team will process your shipment and update the status as it moves. You'll receive an email notification at every major milestone.
                    Use your tracking number to check the real-time status of your shipment at any time.
                  </p>
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center">
                  <a href="${trackUrl}" style="display:inline-block;background-color:#f59e0b;color:#0f172a;font-size:15px;font-weight:800;text-decoration:none;padding:14px 36px;border-radius:8px;letter-spacing:0.5px;">
                    Track Your Shipment →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:#0f172a;border-radius:0 0 16px 16px;padding:28px 40px;text-align:center;">
            <p style="color:#94a3b8;font-size:13px;margin:0 0 8px;">Need help? Contact our support team</p>
            <a href="mailto:haultexpressdelivery@gmail.com" style="color:#f59e0b;font-size:13px;font-weight:600;text-decoration:none;">haultexpressdelivery@gmail.com</a>
            <p style="color:#475569;font-size:12px;margin:16px 0 0;">
              © ${new Date().getFullYear()} Hault Express Delivery ·
              <a href="https://haultexpress.com" style="color:#64748b;text-decoration:none;">Hault Express Delivery</a>
            </p>
            <p style="color:#334155;font-size:11px;margin:8px 0 0;">You received this email because a shipment was created under your email address.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

    console.log(`[Email] Sending shipment creation email for tracking: ${shipmentDetails.trackingNumber} via Resend`);

    const { data, error } = await resend.emails.send({
      from: 'Hault Express Delivery <noreply@haultexpress.com>',
      to: [shipmentDetails.shipper.email, shipmentDetails.receiver.email],
      bcc: 'haultexpressdelivery@gmail.com',
      subject: `✅ Shipment Confirmed — Tracking #${shipmentDetails.trackingNumber}`,
      html,
    });

    if (error) {
      throw new Error(error.message);
    }

    console.log(`[Email] Shipment creation email sent successfully:`, data.id);

    return new Response(JSON.stringify({ success: true, id: data.id }), { status: 200 });
  } catch (error) {
    console.error(`[Email] Failed to send shipment creation email:`, error);
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Failed to send email' }),
      { status: 500 }
    );
  }
}
