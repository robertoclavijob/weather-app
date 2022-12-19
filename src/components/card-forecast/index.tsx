import "./CardForecast.css";
interface CardForecastProps {
  day: string;
  degrees: number;
  unit: string;
}
function CardForecast(props: CardForecastProps) {
  return (
    <div className="CardForecast">
      <span>{props.day}</span>
      <span>
        {props.degrees}°{props.unit}
      </span>
    </div>
  );
}

export default CardForecast;
