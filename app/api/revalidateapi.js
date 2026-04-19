'use server';
import { revalidatePath } from 'next/cache';

export const revalidateShipment = () => {
  // Trigger revalidation for the /Track path
  revalidatePath('/Track');
};
