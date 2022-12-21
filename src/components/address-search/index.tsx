import { useEffect, useRef, useState } from "react";
import { getCoordsByAddress } from "../../services/geocoding-service";
import { getWeeklyForecast } from "../../services/weather-service";

interface AddressSearchProps{
  onUpdateForecast: (lat: number, long: number) => void;
  stations: any[];
}

function AddressSearch(props: AddressSearchProps) {
  const [stationIndex, setStationIndex] = useState<number>();

  const onSelectStation = async (selectedStation: React.ChangeEvent<HTMLSelectElement>) => {
    let index = Number(selectedStation.target.value);
    selectStationByIndex(index);
  };

  const selectStationByIndex = (index: number)=>{

    let station = props.stations[index];
    let [long, lat] = station.geometry.coordinates;
    setStationIndex(index);
    props.onUpdateForecast(lat, long);

    //TODO The next code calls the geocoding api (geocoding.geo.census.gov), but it is causing CORS issues

    // const geocodeResult = await getCoordsByAddress(station.properties.name);
    // const addressMatches = geocodeResult.data.result.addressMatches;
    // const firstMatch = addressMatches[0] || null;
    // if (firstMatch) {
    //   let { x, y } = firstMatch.coordinates;
    //   props.onUpdateForecast(x,y);
    // }
  }

  return (
    <>
      <h1>Select a Weather Station</h1>
      <select
        placeholder="Search for an address"
        onChange={onSelectStation}
        value={stationIndex}
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
