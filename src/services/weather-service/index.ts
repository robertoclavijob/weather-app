import axios from "axios";
const config = {
  headers: {
    "User-Agent": `(${process.env.REACT_APP_WEATHER_APP}, ${process.env.REACT_APP_WEATHER_EMAIL})`,
  },
};

export const getWeeklyForecast = async (lat: number, long: number) => {
  const gridPointsResult = await getGridpoints(lat, long);
  const gridPointsUrl = gridPointsResult.data?.properties?.forecast;

  const forecast = await getForecast(gridPointsUrl);
  return forecast;
};

export const getForecast = (gridEndpoint: string) => {
  return axios.get(gridEndpoint, config);
};

export const getGridpoints = (lat: number, long: number) => {
  return axios.get(`${process.env.REACT_APP_WEATHER_API}/points/${lat},${long}`, config);
};

export const getStations = ()=>{
    return axios.get(`${process.env.REACT_APP_WEATHER_API}/stations/`, config);
}
