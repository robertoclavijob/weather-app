import CardForecast from "../card-forecast";
import "./WeeklyForecast.css";

function WeeklyForecast() {
  const forecastItems = [
    { day: "Today", degrees: 30, unit: "F" },
    { day: "Tomorrow", degrees: 35, unit: "F" },
    { day: "Wednesday", degrees: 40, unit: "F" },
    { day: "Thursday", degrees: 20, unit: "F" },
    { day: "Friday", degrees: 25, unit: "F" },
    { day: "Saturday", degrees: 25, unit: "F" },
    { day: "Sunday", degrees: 25, unit: "F" },
  ];
  return (
    <div className="WeeklyForecast">
      <span>The weekly forecast</span>
      {forecastItems.map((item, index) => (
        <CardForecast
          key={index}
          day={item.day}
          degrees={item.degrees}
          unit={item.unit}
        ></CardForecast>
      ))}
    </div>
  );
}

export default WeeklyForecast;
