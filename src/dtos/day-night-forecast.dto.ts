import { ForecastItemDto } from "./forecast-item.dto";

export interface DayNightForecastDto {
  name: string;
  day: ForecastItemDto;
  night: ForecastItemDto;
}
