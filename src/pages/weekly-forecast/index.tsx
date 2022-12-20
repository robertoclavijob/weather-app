import { useState } from "react";
import AddressSearch from "../../components/address-search";
import DayNightForecast from "../../components/day-night-forecast";
import { DayNightForecastDto } from "../../dtos/day-night-forecast.dto";
import { DayEnum } from "../../enums/day.enum";
import { getWeeklyForecast } from "../../services/weather-service";
import "./WeeklyForecast.css";

function WeeklyForecast() {
  const [forecast, setForecast] = useState<DayNightForecastDto[]>([]);

  const updateForecast = async (lat: number, long: number) => {
    const weatherResult = await getWeeklyForecast(lat, long);
    let forecastByDay: DayNightForecastDto = {} as DayNightForecastDto;

    const forecastByDayList = [];
    for (let forecastItem of weatherResult.data.properties.periods) {
      const nameFirstWord = forecastItem.name.split(" ").shift();
      if (!forecastByDay.name) {
        if (forecastItem.number < 2) {
          forecastByDay.name = DayEnum.TODAY;
        } else {
          forecastByDay.name = nameFirstWord;
        }
      }

      if (!forecastByDay.day) {
        forecastByDay.day = forecastItem;
        continue;
      }

      if (!forecastByDay.night) {
        forecastByDay.night = forecastItem;
      }

      if (forecastByDay.name) {
        forecastByDayList.push(forecastByDay);
        forecastByDay = {} as DayNightForecastDto;
      }
    }
    setForecast(forecastByDayList);
  };

  return (
    <div className="WeeklyForecast">
      <AddressSearch onUpdateForecast={updateForecast}></AddressSearch>
      <span>The weekly forecast</span>
      {forecast.map((item: DayNightForecastDto, index) => (
        <DayNightForecast {...item}></DayNightForecast>
      ))}
    </div>
  );
}

export default WeeklyForecast;
