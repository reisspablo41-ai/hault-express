'use client';

import { useEffect, useState } from 'react';
import { fetchActivity } from '../api/supabaseapi';
import Image from 'next/image';
import { ActivitySkeleton } from './SkeletonLoader';

function Activity({ trackingNumber }) {
  const [activities, setActivities] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!trackingNumber) return; // Avoid running if no tracking number

    const getActivities = async () => {
      try {
        setLoading(true);
        const data = await fetchActivity(trackingNumber);
        if (!data) {
          throw new Error('No activity data found.');
        }
        setActivities(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getActivities();
  }, [trackingNumber]); // Run effect when trackingNumber changes

  console.log(activities);

  if (loading) return <ActivitySkeleton />;
  if (error) return <p>Error: {error}</p>;
  if (!activities || activities.length === 0)
    return <p>No activities found.</p>;

  return (
    <ul className="h-full overflow-y-auto text-sm">
      {activities.map((activity, index) => (
        <li key={index} className="flex pl-5 mb-2">
          {' '}
          <Image
            src="/vertical-seperator.png"
            alt="seperator"
            height={20}
            width={10}
            className="mr-2"
          />
          <p>
            {' '}
            Your Delivery was{' '}
            {activity.status === 'In Transit' ? (
              <span className="text-green-600">{activity.status.status}</span>
            ) : (
              <span className="text-orange-600">{activity.status.status}</span>
            )}{' '}
            at{' '}
            <span className="text-blue-600"> {activity.present_address}</span>{' '}
            at {new Date(activity.time).toLocaleString()}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default Activity;
