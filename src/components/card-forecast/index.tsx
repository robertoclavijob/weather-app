import { CardForecastStyle } from "./CardForecastStyle";
interface CardForecastProps {
  day: string;
  degrees: number;
  unit: string;
  backgroundImage: string;
}
function CardForecast(props: CardForecastProps) {
  return (
    <div style={CardForecastStyle(props.backgroundImage)}>
      <span>{props.day}</span>
      <span>
        {props.degrees}°{props.unit}
      </span>
    </div>
  );
}

export default CardForecast;
