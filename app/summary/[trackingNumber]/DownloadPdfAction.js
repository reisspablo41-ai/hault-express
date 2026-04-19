'use client';

import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { FiDownload } from 'react-icons/fi';

export default function DownloadPdfAction({ trackingNumber }) {
    const [isExporting, setIsExporting] = useState(false);

    const handleDownload = async () => {
        setIsExporting(true);
        try {
            const element = document.getElementById('pdf-summary-content');
            if (!element) return;

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
            });
            const imgData = canvas.toDataURL('image/png');

            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`Hault Express Delivery_Shipment_${trackingNumber}.pdf`);
        } catch (error) {
            console.error('Failed to generate PDF:', error);
        } finally {
            setIsExporting(false);
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('autodownload') === 'true') {
            handleDownload();
        }
    }, []);

    return (
        <button
            onClick={handleDownload}
            disabled={isExporting}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white transition-colors duration-200 px-6 py-3 rounded-lg font-bold shadow-md disabled:opacity-50"
        >
            <FiDownload className="text-xl" />
            {isExporting ? 'Generating PDF...' : 'Download PDF'}
        </button>
    );
}
