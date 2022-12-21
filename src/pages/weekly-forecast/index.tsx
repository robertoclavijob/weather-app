import { useEffect, useState } from "react";
import AddressSearch from "../../components/address-search";
import PeriodsForecast from "../../components/periods-forecast";
import { PeriodForecastDto } from "../../dtos/period-forecast.dto";
import { getStations, getWeeklyForecast } from "../../services/weather-service";
import "./WeeklyForecast.css";

function WeeklyForecast() {
  
  const [periodForecast, setPeriodForecast] = useState<PeriodForecastDto[]>([]);
  const [stations, setStations] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateStations();
  }, []);

  const updateStations = async () => {
    setLoading(true);
    let stationsResult = await getStations();
    setStations(stationsResult.data.features);
    setLoading(false);
  };
  const updateForecast = async (lat: number, long: number) => {
    setLoading(true);
    setError("");
    setPeriodForecast([]);

    try {
      const weatherResult = await getWeeklyForecast(lat, long);
      const forecastByDayList = groupByDayNumber(
        weatherResult.data.properties.periods
      );

      setPeriodForecast(forecastByDayList);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  const groupByDayNumber = (periods: any) => {
    let periodsForecastByDay: PeriodForecastDto[] = [];
    let forecastByDayNumber = new Map<string, any>();

    for (let forecastItem of periods) {
      let startTime = new Date(forecastItem.startTime);

      let mapIndex = `${startTime.getFullYear()}-${
        startTime.getMonth() + 1
      }-${startTime.getDate()}`;

      let periodsByDayNumber = forecastByDayNumber.get(mapIndex) || [];
      periodsByDayNumber.push(forecastItem);
      forecastByDayNumber.set(mapIndex, periodsByDayNumber);
    }

    forecastByDayNumber.forEach((value, key) => {
      let periodForecastItem: PeriodForecastDto = {} as PeriodForecastDto;
      periodForecastItem.name = `${new Date(key).getDay()}`;
      periodForecastItem.periods = value;
      periodForecastItem.startDate = key;
      periodsForecastByDay.push(periodForecastItem);
    });

    return periodsForecastByDay;
  };

  return (
    <div className="WeeklyForecast">
      <span className="WeeklyForecast__SelectTitle">
        Select a Weather Station
      </span>
      <AddressSearch
        onUpdateForecast={updateForecast}
        stations={stations}
      ></AddressSearch>

      {loading ? (
        <span className="WeeklyForecast__Loading">Loading...</span>
      ) : null}
      <span className="WeeklyForecast__Error">{error}</span>

      {periodForecast.map((item: any, index) => (
        <PeriodsForecast
          name={item.name}
          periods={item.periods}
        ></PeriodsForecast>
      ))}
    </div>
  );
}

export default WeeklyForecast;
