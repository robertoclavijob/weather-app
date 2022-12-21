import axios from "axios";
const config = {
  headers: {
    "User-Agent": "(weather-app-fb04a.web.app, claviro85@gmail.com)",
  },
};

export const getWeeklyForecast = async (lat: number, long: number) => {
  console.log(`Fetching forecast for coordinates: ${lat},${long}`);
  const gridPointsResult = await getGridpoints(lat, long);
  const gridPointsUrl = gridPointsResult.data?.properties?.forecast;

  const forecast = await getForecast(gridPointsUrl);
  return forecast;
};

export const getForecast = (gridEndpoint: string) => {
  return axios.get(gridEndpoint, config);
};

export const getGridpoints = (lat: number, long: number) => {
  return axios.get(`https://api.weather.gov/points/${lat},${long}`, config);
};

export const getStations = ()=>{
    return axios.get(`https://api.weather.gov/stations/`, config);
}
