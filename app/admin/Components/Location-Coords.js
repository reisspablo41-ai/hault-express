const apiKey = '28e7fadeff944313b73b838ce0566731';
const address = '1 Apple Park Way, Cupertino, CA';

export const convertAddress = () => {
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      address
    )}&key=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        console.log('Latitude:', lat, 'Longitude:', lng);
      } else {
        console.error('No results found for the provided address.');
      }
    })
    .catch((error) => console.error('Error:', error));
};
