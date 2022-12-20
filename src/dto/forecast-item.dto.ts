
export interface ForecastItemDto{
    number: number,                 //1
    name: string,                   //"Today"
    startTime: string,              //"2022-12-20T07:00:00-06:00"
    endTime: string,                //"2022-12-20T18:00:00-06:00"
    isDaytime: boolean,             //true
    temperature: number,            //20
    temperatureUnit: string,        //"F"
    temperatureTrend: string,       //null
    windSpeed: string,              //"5 to 10 mph"
    windDirection: string,          //"N"
    icon: string,                   //"https://api.weather.gov/icons/land/day/bkn?size=medium"
    shortForecast: string,          //"Partly Sunny"
    detailedForecast: string        //"Partly sunny, with a high near 20. Wind chill values as low as -4. North wind 5 to 10 mph."
  }