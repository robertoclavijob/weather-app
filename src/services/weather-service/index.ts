import axios from "axios";

export const getWeeklyForecast = async (lat: number, long: number) => {
  //TODO Remove hard-coded coordinates
  lat = 39.7456;
  long = -97.0892;
  console.log(`Fetching forecast for coordinates: ${lat},${long}`);
  const gridPointsResult = await getGridpoints(lat, long);
  const gridPointsUrl = gridPointsResult.data?.properties?.forecast;

  const forecast = await getForecast(gridPointsUrl);
  return forecast;
};

export const getForecast = (gridEndpoint: string) => {
  return axios.get(gridEndpoint);
};

export const getGridpoints = (lat: number, long: number) => {
  return axios.get(`https://api.weather.gov/points/${lat},${long}`);
};
