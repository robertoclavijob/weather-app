import CardForecast from "../card-forecast";
import "./PeriodsForecast.css";

interface PeriodsForecastProps {
  name: string;
  periods: any[];
}
function PeriodsForecast(props: PeriodsForecastProps) {
  return (
    <div className="PeriodsForecast">
      <span>{props.name}</span>
      <div className="PeriodsForecast__Periods">
        {props.periods.map((item: any, index: number) => (
          <CardForecast
            key={item.number}
            day={item.name}
            degrees={item.temperature}
            unit={item.temperatureUnit}
            backgroundImage={item.icon}
            description={item.detailedForecast}
          ></CardForecast>
        ))}
      </div>
    </div>
  );
}

export default PeriodsForecast;
