import { fetchTrackingNumber, fetchForSMS } from './supabaseapi';

/**
 * Triggers both email and SMS notifications for a shipment.
 * @param {string|number} shipmentId - The ID of the shipment.
 */
export async function triggerShipmentNotifications(shipmentId) {
    console.log(`[Notifications] Triggering notifications for shipment ID: ${shipmentId}`);

    try {
        // 1. Fetch data for Email
        const { shipmentData, shipmentError } = await fetchTrackingNumber(shipmentId);
        if (shipmentError) {
            console.error('[Notifications] Error fetching email data:', shipmentError);
        } else if (shipmentData) {
            // Send Email
            const emailResponse = await fetch('/api/send-status-change-notifications', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(shipmentData),
            });
            const emailResult = await emailResponse.json();
            if (emailResult.success) {
                console.log('[Notifications] Email sent successfully');
            } else {
                console.error('[Notifications] Email failed:', emailResult.error);
            }
        }

        // 2. Fetch data for SMS
        const { smsData, smsError } = await fetchForSMS(shipmentId);
        if (smsError) {
            console.error('[Notifications] Error fetching SMS data:', smsError);
        } else if (smsData) {
            // Send SMS
            const smsResponse = await fetch('/api/send-sms', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(smsData),
            });
            const smsResult = await smsResponse.json();
            if (smsResult.success) {
                console.log('[Notifications] SMS sent successfully');
            } else {
                console.error('[Notifications] SMS failed:', smsResult.error);
            }
        }
    } catch (error) {
        console.error('[Notifications] Unexpected error in notification flow:', error);
    }
}
