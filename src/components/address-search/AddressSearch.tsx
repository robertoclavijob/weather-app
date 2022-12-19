import { useState } from "react";
import { getCoordsByAddress } from "../../services/geocoding-service";
import { getWeeklyForecast } from "../../services/weather-service";

function AddressSearch() {
  const [address, setAddress] = useState('');

  const getBrowserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      getWeeklyForecast(position.coords.latitude, position.coords.longitude);
    });
  };

  const searchAddress = async (searchTerm: React.ChangeEvent<HTMLSelectElement>) => {
    setAddress(searchTerm.target.value);
    const result = await getCoordsByAddress(searchTerm.target.value);

    const addressMatches = result.data.result.addressMatches;
    const firstMatch = addressMatches[0] || null;
    if (firstMatch) {
      const { x, y } = firstMatch.coordinates;
      getWeeklyForecast(x, y);
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
