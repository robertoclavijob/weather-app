import { getCoordsByAddress } from "../../services/geocoding-service";
import { getWeeklyForecast } from "../../services/weather-service";

function AddressSearch() {
  const getBrowserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      getWeeklyForecast(position.coords.latitude, position.coords.longitude);
    });
  };

  const searchAddress = (searchTerm: React.ChangeEvent<HTMLInputElement>) =>{
    getCoordsByAddress(searchTerm.target.value);
  }

  return (
    <>
      <input type="text" placeholder="Search for an address" onChange={searchAddress}></input>
      <button onClick={getBrowserLocation}>Use Current location</button>
    </>
  );
}

export default AddressSearch;
