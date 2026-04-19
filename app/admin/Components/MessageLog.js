'use client';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function MessageLog({ message, setMessage, value }) {
  useEffect(() => {
    if (!message) return;
    if (value) {
      toast.success(message);
    } else {
      toast.error(message);
    }
    const timer = setTimeout(() => {
      if (setMessage) setMessage('');
    }, 2000);
    return () => clearTimeout(timer);
  }, [message]);

  return null;
}
