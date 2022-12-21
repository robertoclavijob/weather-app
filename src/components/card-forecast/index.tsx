import { CardForecastStyle } from "./CardForecastStyle";
interface CardForecastProps {
  day: string;
  degrees: number;
  unit: string;
  backgroundImage: string;
  description: string;
}
function CardForecast(props: CardForecastProps) {
  return (
    <div style={CardForecastStyle(props.backgroundImage)} title={props.description}>
      <span>{props.day}</span>
      <span>
        {props.degrees}°{props.unit}
      </span>
    </div>
  );
}

export default CardForecast;
