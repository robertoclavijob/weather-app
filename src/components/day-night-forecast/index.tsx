import CardForecast from "../card-forecast";
import { DayNightForecastDto } from "../../dtos/day-night-forecast.dto";
import "./DayNightForecast.css";

function DayNightForecast(props: DayNightForecastDto) {
  return (
    <div className="DayNightForecast">
      <span>{props.name}</span>
      <div className='DayNightForecast__Periods'>
        <CardForecast
          key={props.day.number}
          day={props.day.name}
          degrees={props.day.temperature}
          unit={props.day.temperatureUnit}
          backgroundImage={props.day.icon}
          description={props.day.detailedForecast}
        ></CardForecast>
        <CardForecast
          key={props.night.number}
          day={props.night.name}
          degrees={props.night.temperature}
          unit={props.night.temperatureUnit}
          backgroundImage={props.night.icon}
          description={props.night.detailedForecast}
        ></CardForecast>
      </div>
    </div>
  );
}

export default DayNightForecast;
