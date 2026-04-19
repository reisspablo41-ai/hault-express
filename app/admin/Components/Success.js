'use client';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function Success({ successMessage, setSuccessMessage }) {
  useEffect(() => {
    if (!successMessage) return;
    toast.success(successMessage);
    const timer = setTimeout(() => {
      if (setSuccessMessage) setSuccessMessage('');
    }, 2000);
    return () => clearTimeout(timer);
  }, [successMessage]);

  return null;
}
