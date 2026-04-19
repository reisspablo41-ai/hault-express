'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useUserContext } from '../Context/UserContext';
import { toast } from 'sonner';
import LoadingSpinner from './LoadingSpinner';
import { IoIosArrowForward } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';

export function TrackingForm({ className }) {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useUserContext();
  const router = useRouter();

  const handleTrackShipment = async () => {
    if (!trackingNumber) {
      toast.error('Please enter a valid tracking number.');
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase
        .from('shipments')
        .select('*')
        .eq('trackingnumber', trackingNumber)
        .single();

      if (error) {
        throw new Error('Shipment not found. Please check the tracking number.');
      }

      if (user) {
        router.push(`/dashboard/${trackingNumber}`);
      } else {
        router.push(`/Track/${trackingNumber}`);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${className} w-full`}>
      <div className="">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none" />
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleTrackShipment()}
              className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-4 text-primary-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition shadow-sm text-base"
              placeholder="Enter tracking number (e.g. AML6KASMUVJ-LZ)"
            />
          </div>
          <button
            type="button"
            onClick={handleTrackShipment}
            disabled={loading}
            className={`flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-primary-dark font-extrabold px-8 py-4 rounded-xl text-base whitespace-nowrap transition-all duration-200 shadow-lg active:scale-95 ${loading ? 'opacity-60 cursor-not-allowed' : ''
              }`}
          >
            {loading ? (
              <>Tracking... <LoadingSpinner /></>
            ) : (
              <>Track Now <IoIosArrowForward className="text-xl" /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrackingForm;
