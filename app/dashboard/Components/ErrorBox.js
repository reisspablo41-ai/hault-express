'use client';
import { useEffect } from 'react';
import { toast } from 'sonner';

function handleReload() {
  window.location.reload();
}

export default function ErrorBox({ message }) {
  useEffect(() => {
    if (!message) return;
    toast.error(message, {
      action: {
        label: 'Try Again',
        onClick: handleReload,
      },
      duration: Infinity,
    });
  }, [message]);

  return null;
}
