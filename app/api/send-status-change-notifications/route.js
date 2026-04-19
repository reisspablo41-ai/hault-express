import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(req) {
  try {
    const shipmentData = await req.json();

    if (
      !shipmentData.trackingNumber ||
      !shipmentData.shipper?.email ||
      !shipmentData.receiver?.email ||
      !shipmentData.status_id?.status
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
    const trackUrl = `https://haultexpress.com/Track/${shipmentData.trackingNumber}`;
    const status = shipmentData.status_id.status;

    // Pick accent colour based on status
    const isDelivered = /delivered|completed/i.test(status);
    const isCancelled = /cancel|hold|delayed/i.test(status);
    const accentColor = isDelivered ? '#22c55e' : isCancelled ? '#ef4444' : '#f59e0b';
    const accentBg = isDelivered ? '#f0fdf4' : isCancelled ? '#fef2f2' : '#fffbeb';
    const accentBorder = isDelivered ? '#bbf7d0' : isCancelled ? '#fecaca' : '#fde68a';
    const accentText = isDelivered ? '#15803d' : isCancelled ? '#b91c1c' : '#92400e';
    const statusIcon = isDelivered ? '✅' : isCancelled ? '⚠️' : '🚚';

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Shipment Update – Hault Express Delivery</title>
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
          <td style="background-color:#1e293b;padding:24px 40px;text-align:center;border-bottom:3px solid ${accentColor};">
            <p style="color:#94a3b8;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 6px;">Shipment Update</p>
            <p style="color:#f1f5f9;font-size:22px;font-weight:800;margin:0;letter-spacing:1px;">${shipmentData.trackingNumber}</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background-color:#ffffff;padding:40px 40px 32px;">
            <p style="color:#1e293b;font-size:16px;line-height:1.6;margin:0 0 28px;">
              Hello, <strong>valued customer</strong> 👋<br />
              We have an update on your shipment. Here's what's happening right now.
            </p>

            <!-- Big status card -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="background-color:${accentBg};border:1px solid ${accentBorder};border-radius:12px;padding:24px 28px;text-align:center;">
                  <p style="font-size:36px;margin:0 0 8px;">${statusIcon}</p>
                  <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:${accentText};text-transform:uppercase;letter-spacing:2px;">Status Updated To</p>
                  <p style="margin:0;font-size:26px;font-weight:900;color:${accentText};">${status}</p>
                </td>
              </tr>
            </table>

            <!-- Tracking number pill -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px 20px;">
                  <table cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td>
                        <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">Tracking Number</p>
                        <p style="margin:0;font-size:17px;font-weight:800;color:#0f172a;letter-spacing:1px;">${shipmentData.trackingNumber}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Parties -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td colspan="2" style="padding-bottom:12px;">
                  <p style="margin:0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1.5px;border-bottom:1px solid #e2e8f0;padding-bottom:8px;">Shipment Parties</p>
                </td>
              </tr>
              <tr>
                <td width="50%" style="padding-right:10px;vertical-align:top;padding-top:12px;">
                  <table cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="background-color:#f8fafc;border-radius:10px;padding:14px 16px;">
                        <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">📦 Sender</p>
                        <p style="margin:0;font-size:13px;color:#1e293b;font-weight:600;word-break:break-all;">${shipmentData.shipper.email}</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td width="50%" style="padding-left:10px;vertical-align:top;padding-top:12px;">
                  <table cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="background-color:#f8fafc;border-radius:10px;padding:14px 16px;">
                        <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">📬 Recipient</p>
                        <p style="margin:0;font-size:13px;color:#1e293b;font-weight:600;word-break:break-all;">${shipmentData.receiver.email}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Info note -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="background-color:#fffbeb;border-left:4px solid #f59e0b;border-radius:0 10px 10px 0;padding:16px 20px;">
                  <p style="margin:0;font-size:13px;color:#78350f;line-height:1.7;">
                    Track your shipment in real time using the button below. If you have any questions about this update, our support team is always ready to help.
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
            <p style="color:#94a3b8;font-size:13px;margin:0 0 8px;">Need help? Reach our support team</p>
            <a href="mailto:haultexpressdelivery@gmail.com" style="color:#f59e0b;font-size:13px;font-weight:600;text-decoration:none;">haultexpressdelivery@gmail.com</a>
            <p style="color:#475569;font-size:12px;margin:16px 0 0;">
              © ${new Date().getFullYear()} Hault Express Delivery ·
              <a href="https://haultexpress.com" style="color:#64748b;text-decoration:none;">Hault Express Delivery</a>
            </p>
            <p style="color:#334155;font-size:11px;margin:8px 0 0;">You received this because your email is linked to shipment ${shipmentData.trackingNumber}.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

    console.log(`[Email] Sending status change notification for tracking: ${shipmentData.trackingNumber} via Resend`);

    const { data, error } = await resend.emails.send({
      from: 'Hault Express Delivery <noreply@haultexpress.com>',
      to: [shipmentData.shipper.email, shipmentData.receiver.email],
      bcc: 'haultexpressdelivery@gmail.com',
      subject: `${statusIcon} Shipment Update — #${shipmentData.trackingNumber} is now ${status}`,
      html,
    });

    if (error) {
      throw new Error(error.message);
    }

    console.log(`[Email] Status change notification sent successfully:`, data.id);

    return new Response(JSON.stringify({ success: true, id: data.id }), { status: 200 });
  } catch (error) {
    console.error(`[Email] Failed to send status change notification:`, error);
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Failed to send email' }),
      { status: 500 }
    );
  }
}
