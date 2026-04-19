'use client';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useUserContext } from '../Context/UserContext';

export default function Error({ message }) {
  const { errorMessage, setErrorMessage } = useUserContext();

  useEffect(() => {
    const msg = errorMessage || message;
    if (!msg) return;
    toast.error(msg);
    const timer = setTimeout(() => setErrorMessage(null), 5000);
    return () => clearTimeout(timer);
  }, [errorMessage, message]);

  return null;
}
