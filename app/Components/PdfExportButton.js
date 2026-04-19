'use client';

import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import JsBarcode from 'jsbarcode';
import { FiFileText } from 'react-icons/fi';

const generateBarcodeDataUrl = (value) => {
    const canvas = document.createElement('canvas');
    JsBarcode(canvas, value, {
        format: 'CODE128',
        width: 2,
        height: 40,
        displayValue: true,
        fontSize: 18,
        textMargin: 4,
        margin: 4,
        background: '#ffffff',
        lineColor: '#000000',
    });
    return canvas.toDataURL('image/png');
};

const PdfExportButton = ({ data, formattedDate, currencySymbol = '$' }) => {
    const [isGenerating, setIsGenerating] = useState(false);
    const trackingNum = data?.trackingNumber || data?.trackingnumber;

    if (!trackingNum) return null;

    const handlePreview = async () => {
        setIsGenerating(true);
        // Open window synchronously before any await — required by Safari's
        // popup blocker which rejects window.open() after async operations.
        const pdfWindow = window.open('', '_blank');
        try {
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pageWidth = pdf.internal.pageSize.getWidth();
            const margin = 15;
            const contentWidth = pageWidth - 2 * margin;
            let y = 0;

            // ── Header bar ──────────────────────────────────────────────
            const headerH = 48;
            pdf.setFillColor(124, 58, 237); // primary #7c3aed
            pdf.rect(0, 0, pageWidth, headerH, 'F');

            // Logo image (left side, vertically centered)
            try {
                const res = await fetch('/hault-logo.png');
                const blob = await res.blob();
                const dataUrl = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.readAsDataURL(blob);
                });
                pdf.addImage(dataUrl, 'PNG', margin, 8, 42, 16);
            } catch {
                pdf.setTextColor(255, 255, 255);
                pdf.setFontSize(14);
                pdf.setFont('helvetica', 'bold');
                pdf.text('Hault Express Delivery', margin, 20);
            }

            // Right column: title + email + date (top half of header)
            pdf.setTextColor(255, 255, 255);
            pdf.setFontSize(14);
            pdf.setFont('helvetica', 'bold');
            pdf.text('SHIPMENT RECEIPT', pageWidth - margin, 12, { align: 'right' });
            pdf.setFontSize(8);
            pdf.setFont('helvetica', 'normal');
            pdf.text('haultexpressdelivery@gmail.com', pageWidth - margin, 19, { align: 'right' });
            pdf.text(formattedDate || new Date().toLocaleDateString(), pageWidth - margin, 25, { align: 'right' });

            // Barcode (bottom of header, full-width white strip)
            try {
                const barcodeDataUrl = generateBarcodeDataUrl(trackingNum);
                pdf.setFillColor(255, 255, 255);
                pdf.rect(0, headerH - 18, pageWidth, 18, 'F');
                // 20% narrower than before (88mm wide), centered
                const barcodeW = 88;
                pdf.addImage(barcodeDataUrl, 'PNG', pageWidth / 2 - barcodeW / 2, headerH - 17, barcodeW, 16);
            } catch (e) {
                // barcode generation failed silently
            }

            y = headerH + 8;

            // ── Tracking + Status band ───────────────────────────────────
            pdf.setFillColor(241, 245, 249); // slate-100
            pdf.roundedRect(margin, y, contentWidth, 22, 3, 3, 'F');

            pdf.setTextColor(100, 116, 139); // slate-500
            pdf.setFontSize(7);
            pdf.setFont('helvetica', 'bold');
            pdf.text('TRACKING NUMBER', margin + 5, y + 7);
            pdf.setTextColor(15, 23, 42); // slate-900
            pdf.setFontSize(13);
            pdf.setFont('helvetica', 'bold');
            pdf.text(trackingNum, margin + 5, y + 16);

            const statusText = data.status_id?.status || 'N/A';
            pdf.setTextColor(100, 116, 139);
            pdf.setFontSize(7);
            pdf.setFont('helvetica', 'bold');
            pdf.text('STATUS', pageWidth - margin - 55, y + 7);
            pdf.setTextColor(37, 99, 235); // blue-600
            pdf.setFontSize(12);
            pdf.setFont('helvetica', 'bold');
            pdf.text(statusText, pageWidth - margin - 55, y + 16);

            y += 30;

            // ── Section helper ───────────────────────────────────────────
            const sectionHeader = (title) => {
                pdf.setDrawColor(226, 232, 240);
                pdf.setLineWidth(0.3);
                pdf.line(margin, y, margin + contentWidth, y);
                pdf.setTextColor(124, 58, 237); // primary #7c3aed
                pdf.setFontSize(8);
                pdf.setFont('helvetica', 'bold');
                pdf.text(title, margin, y + 6);
                y += 10;
            };


            // ── Routing ──────────────────────────────────────────────────
            sectionHeader('ROUTING');

            const originAddr = [
                data.origin_street_address,
                data.origin_city,
                data.origin_state,
                data.origin_country,
            ].filter(Boolean).join(', ');
            const destAddr = [
                data.destination_street_address,
                data.destination_city,
                data.destination_state,
                data.destination_country,
            ].filter(Boolean).join(', ');

            const colW = contentWidth / 2 - 3;

            // Origin box
            pdf.setFillColor(239, 246, 255); // blue-50
            pdf.roundedRect(margin, y, colW, 32, 2, 2, 'F');
            pdf.setTextColor(37, 99, 235);
            pdf.setFontSize(7.5);
            pdf.setFont('helvetica', 'bold');
            pdf.text('ORIGIN', margin + 4, y + 6);
            pdf.setTextColor(15, 23, 42);
            pdf.setFontSize(8);
            pdf.setFont('helvetica', 'normal');
            const originLines = pdf.splitTextToSize(originAddr, colW - 8);
            pdf.text(originLines, margin + 4, y + 12);
            pdf.setTextColor(100, 116, 139);
            pdf.setFontSize(7.5);
            pdf.text(`Dep: ${data.depaturedate || 'N/A'}  ${data.depaturetime || ''}`, margin + 4, y + 26);

            // Destination box
            const dx = margin + colW + 6;
            pdf.setFillColor(239, 246, 255);
            pdf.roundedRect(dx, y, colW, 32, 2, 2, 'F');
            pdf.setTextColor(37, 99, 235);
            pdf.setFontSize(7.5);
            pdf.setFont('helvetica', 'bold');
            pdf.text('DESTINATION', dx + 4, y + 6);
            pdf.setTextColor(15, 23, 42);
            pdf.setFontSize(8);
            pdf.setFont('helvetica', 'normal');
            const destLines = pdf.splitTextToSize(destAddr, colW - 8);
            pdf.text(destLines, dx + 4, y + 12);
            pdf.setTextColor(100, 116, 139);
            pdf.setFontSize(7.5);
            pdf.text(`ETA: ${data.pickupdate || 'N/A'}  ${data.pickuptime || ''}`, dx + 4, y + 26);

            y += 40;

            // ── Parties ──────────────────────────────────────────────────
            sectionHeader('PARTIES');

            const shipperY = y;
            // Shipper
            pdf.setTextColor(100, 116, 139);
            pdf.setFontSize(7.5);
            pdf.setFont('helvetica', 'bold');
            pdf.text('SHIPPER', margin, y);
            y += 5;
            pdf.setTextColor(15, 23, 42);
            pdf.setFontSize(8.5);
            pdf.text(data.shipper?.name || 'N/A', margin, y); y += 5;
            pdf.setFontSize(8); pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(100, 116, 139);
            pdf.text(data.shipper?.email || '', margin, y); y += 4;
            pdf.text(data.shipper?.phone_number || '', margin, y); y += 4;
            const shipperAddrLines = pdf.splitTextToSize(data.shipper?.address || '', colW - 4);
            pdf.text(shipperAddrLines, margin, y);

            // Receiver (same starting Y)
            let ry = shipperY;
            pdf.setTextColor(100, 116, 139);
            pdf.setFontSize(7.5);
            pdf.setFont('helvetica', 'bold');
            pdf.text('RECEIVER', dx, ry); ry += 5;
            pdf.setTextColor(15, 23, 42);
            pdf.setFontSize(8.5);
            pdf.text(data.receiver?.name || 'N/A', dx, ry); ry += 5;
            pdf.setFontSize(8); pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(100, 116, 139);
            pdf.text(data.receiver?.email || '', dx, ry); ry += 4;
            pdf.text(data.receiver?.phone_number || '', dx, ry); ry += 4;
            const recvAddrLines = pdf.splitTextToSize(data.receiver?.address || '', colW - 4);
            pdf.text(recvAddrLines, dx, ry);

            y = Math.max(y + shipperAddrLines.length * 4, ry + recvAddrLines.length * 4) + 10;

            // ── Freight Details ──────────────────────────────────────────
            sectionHeader('FREIGHT DETAILS');

            const isGood = !!data.shipment_good_id;
            const isPet = !!data.shipment_pet_id;

            const freightRows = [
                ['Package Type', data.package_type?.type || (isPet ? 'Crate' : 'N/A')],
                isGood
                    ? ['Item Name', data.shipment_good_id?.item_name]
                    : ['Pet Name', data.shipment_pet_id?.name],
                isGood
                    ? ['Item Number', data.shipment_good_id?.Item_number]
                    : ['Pet Number', data.shipment_pet_id?.petNumber],
                isGood
                    ? ['Dimensions', data.shipment_good_id?.dimensions]
                    : ['Breed', data.shipment_pet_id?.breed],
                ['Weight', `${data.shipment_good_id?.weight || data.shipment_pet_id?.weight || 'N/A'} lbs`],
                ['Transit Time', data.transit_times_id?.transitTimes],
                ['Total Freight', `${currencySymbol}${data.totalfreight || '0'}`],
            ];

            const cellW = contentWidth / 3;
            freightRows.forEach(([label, value], i) => {
                const col = i % 3;
                const xPos = margin + col * (cellW + 2);
                if (col === 0 && i > 0) y += 14;
                pdf.setTextColor(100, 116, 139);
                pdf.setFontSize(7.5);
                pdf.setFont('helvetica', 'normal');
                pdf.text(label, xPos, y);
                pdf.setTextColor(15, 23, 42);
                pdf.setFontSize(8.5);
                pdf.setFont('helvetica', 'bold');
                pdf.text(String(value || 'N/A'), xPos, y + 5);
            });

            y += 20;

            // ── Footer ───────────────────────────────────────────────────
            const footerY = pdf.internal.pageSize.getHeight() - 12;
            pdf.setDrawColor(226, 232, 240);
            pdf.setLineWidth(0.3);
            pdf.line(margin, footerY - 4, margin + contentWidth, footerY - 4);
            pdf.setTextColor(148, 163, 184);
            pdf.setFontSize(7);
            pdf.setFont('helvetica', 'normal');
            pdf.text('System generated document. For inquiries contact haultexpressdelivery@gmail.com', pageWidth / 2, footerY, { align: 'center' });

            // ── Open in browser ──────────────────────────────────────────
            const blob = pdf.output('blob');
            const url = URL.createObjectURL(blob);
            pdfWindow.location.href = url;
        } catch (err) {
            console.error('Failed to generate PDF:', err);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <button
            onClick={handlePreview}
            disabled={isGenerating}
            className="ml-4 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white transition-colors duration-200 px-4 py-2 rounded-md text-sm shadow-sm disabled:opacity-50"
        >
            <FiFileText />
            {isGenerating ? 'Generating...' : 'Preview Shipment Receipt'}
        </button>
    );
};

export default PdfExportButton;
