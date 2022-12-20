import { useState } from "react";
import AddressSearch from "../../components/address-search";
import CardForecast from "../../components/card-forecast";
import { ForecastItemDto } from "../../dto/forecast-item.dto";
import { getWeeklyForecast } from "../../services/weather-service";
import "./WeeklyForecast.css";

function WeeklyForecast() {
  const [forecast, setForecast] = useState([]);

  const updateForecast = async (lat: number, long: number) => {
    const weatherResult = await getWeeklyForecast(lat, long);
    setForecast(weatherResult.data.properties.periods);
  };

  return (
    <div className="WeeklyForecast">
      <AddressSearch onUpdateForecast={updateForecast}></AddressSearch>
      <span>The weekly forecast</span>
      {forecast.map((item: ForecastItemDto, index) => (
        <CardForecast
          key={item.number}
          day={item.name}
          degrees={item.temperature}
          unit={item.temperatureUnit}
          backgroundImage={item.icon}
        ></CardForecast>
      ))}
    </div>
  );
}

export default WeeklyForecast;
