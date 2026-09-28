export interface Weather {
  temperature: string;
  text: string;
  humidity: number;
  wind: number;
  uvIndex: number;
}

export interface DailyForecast {
  current: Weather;
  date: Date;
}

export interface WeeklyForecast {
  week: {
    weather: Weather;
    date: Date;
  }[];
}
