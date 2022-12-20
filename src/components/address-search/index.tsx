import { useState } from "react";
import { getCoordsByAddress } from "../../services/geocoding-service";
import { getWeeklyForecast } from "../../services/weather-service";

interface AddressSearchProps{
  onUpdateForecast: (lat: number, long: number) => void;
}

function AddressSearch(props: AddressSearchProps) {
  const [address, setAddress] = useState('');

  const getBrowserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
        // Uncomment the next code to use browser location
        // getWeeklyForecast(position.coords.latitude, position.coords.longitude);
    });
  };

  const searchAddress = async (searchTerm: React.ChangeEvent<HTMLSelectElement>) => {
    setAddress(searchTerm.target.value);
    const geocodeResult = await getCoordsByAddress(searchTerm.target.value);

    const addressMatches = geocodeResult.data.result.addressMatches;
    const firstMatch = addressMatches[0] || null;
    if (firstMatch) {
      const { x, y } = firstMatch.coordinates;

      props.onUpdateForecast(x, y);
    }
  };

  return (
    <>
      <select
        placeholder="Search for an address"
        onChange={searchAddress}
        value={address}
      >
        <option>4600 Silver Hill Rd, Washington, DC 20233</option>
        <option>200 Dogwood Dr, Gaithersburg, MD 20877, USA</option>
      </select>
      <button onClick={getBrowserLocation}>Use Current location</button>
    </>
  );
}

export default AddressSearch;