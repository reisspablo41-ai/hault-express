'use server';
export async function getCoordinates(address) {
  if (!address) return { lat: null, lng: null };
  const apiKey = process.env.OPENCAGE_API_KEY;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry;
      return { lat, lng };
    }
  } catch (err) {
    console.error('Geocoding error for address:', address, err);
  }
  return { lat: null, lng: null };
}

export async function getAddressFromCoordinates(lat, lng) {
  const apiKey = process.env.OPENCAGE_API_KEY;
  try {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`
    );
    const data = await response.json();

    if (data && data.results.length > 0) {
      return data.results[0].formatted; // ✅ Full address
    } else {
      throw new Error('No address found');
    }
  } catch (error) {
    console.error('Error fetching address:', error);
    return null;
  }
}
