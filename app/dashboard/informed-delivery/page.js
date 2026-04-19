'use client';
import MessageLog from '@/app/admin/Components/MessageLog';
import ButtonBig from '@/app/Components/ButtonBig';
import Image from 'next/image';
import { useState } from 'react';
import { BsEnvelopePaper, BsShieldCheck, BsTruck } from 'react-icons/bs';

function Page() {
  const [message, setMessage] = useState('');

  function handleInformedDelivery() {
    setMessage(
      'You are now enrolled in Informed Delivery. We are setting up your personalized dashboard.'
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F5F7] py-12 px-4 sm:px-6 lg:px-8">
      {message && (
        <MessageLog message={message} setMessage={setMessage} value={true} />
      )}

      <div className="max-w-7xl mx-auto space-y-12">

        {/* Hero Section */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col lg:flex-row relative">
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 w-max border border-blue-100">
              Premium Feature
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Informed Delivery by <span className="text-accent">Hault Express Delivery</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 font-semibold mb-6">
              See Photos of Your Mail Before It Arrives, <span className="text-emerald-600">Free</span>
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Start your mornings with a high-resolution preview of your day&apos;s Hault Express Delivery letter-sized mail and track incoming packages automatically from a unified, secure dashboard.
            </p>

            <button
              onClick={handleInformedDelivery}
              className="bg-accent text-white font-bold py-4 px-8 rounded-xl hover:bg-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-max flex items-center gap-3 shadow-md"
            >
              <BsEnvelopePaper className="text-xl" />
              Enroll in Informed Delivery
            </button>
          </div>

          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white z-10 w-32"></div>
            <Image
              src="/infom-delivery.jpg"
              alt="Informed Delivery Preview"
              layout="fill"
              objectFit="cover"
              className="object-center"
              priority
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 relative overflow-hidden">
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
              Do More with Your Packages
            </h2>
            <p className="text-lg text-gray-500">
              Now that you can automatically see the status of your packages in one secure place, it&apos;s easier than ever to manage deliveries from your dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 relative z-10">

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <BsTruck className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Total Tracking Control</h3>
              <p className="text-gray-500 text-sm">See package details, full tracking history, and manually add other Hault Express Delivery tracking numbers instantly.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <BsShieldCheck className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Management</h3>
              <p className="text-gray-500 text-sm">Leave direct Delivery Instructions® for your carrier, schedule secure redeliveries, or request a shipment edit seamlessly.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <BsEnvelopePaper className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Sync</h3>
              <p className="text-gray-500 text-sm">Automatically track the status of Click-N-Ship® packages you send to others without entering any numbers.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Page;
