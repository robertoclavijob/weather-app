import { useState } from "react";
import { getCoordsByAddress } from "../../services/geocoding-service";
import { getWeeklyForecast } from "../../services/weather-service";

interface AddressSearchProps{
  onUpdateForecast: (lat: number, long: number) => void;
  stations: any[];
}

function AddressSearch(props: AddressSearchProps) {
  const [address, setAddress] = useState('');

  const searchAddress = async (searchTerm: React.ChangeEvent<HTMLSelectElement>) => {
    let station = props.stations[Number(searchTerm.target.value)];
    let [long, lat] = station.geometry.coordinates;
    setAddress(searchTerm.target.value);
    props.onUpdateForecast(lat, long);

    //TODO The next code calls the geocoding api (geocoding.geo.census.gov), but it is causing CORS issues

    // const geocodeResult = await getCoordsByAddress(station.properties.name);
    // const addressMatches = geocodeResult.data.result.addressMatches;
    // const firstMatch = addressMatches[0] || null;
    // if (firstMatch) {
    //   let { x, y } = firstMatch.coordinates;
    //   props.onUpdateForecast(x,y);
    // }
  };

  return (
    <>
      <h1>Select a Weather Station</h1>
      <select
        placeholder="Search for an address"
        onChange={searchAddress}
        value={address}
      >
        {props.stations.map((stationItem, index) => (
          <option key={index} value={index}>
            {stationItem.properties.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default AddressSearch;
