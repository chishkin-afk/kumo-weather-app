import { clientApi } from '@/shared/api/instance';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { DailyForecast, WeeklyForecast } from '../model/types';

type DailyForecastDto = Omit<DailyForecast, 'date'> & { date: string };
type WeeklyForecastDto = Omit<WeeklyForecast, 'week'> & {
  week: Array<Omit<WeeklyForecast['week'][number], 'date'> & { date: string }>;
};

const FORECAST_STALE_TIME = 1000 * 60 * 30;

export const useDailyForecast = (
  locationKey: number,
): UseQueryResult<DailyForecast, Error> => {
  return useQuery({
    queryKey: ['daily', 'forecast', locationKey],
    queryFn: async () => {
      const response = await clientApi.get<DailyForecastDto>(
        `/weather/daily/${locationKey}`,
      );

      const convertedData: DailyForecast = {
        current: response.data.current,
        date: new Date(response.data.date),
      };

      return convertedData;
    },
    enabled: locationKey != null && !Number.isNaN(locationKey),
    staleTime: FORECAST_STALE_TIME,
  });
};

export const useWeeklyForecast = (
  locationKey: number,
): UseQueryResult<WeeklyForecast, Error> => {
  return useQuery({
    queryKey: ['weekly', 'forecast', locationKey],
    queryFn: async () => {
      const response = await clientApi.get<WeeklyForecastDto>(
        `/weather/weekly/${locationKey}`,
      );

      const convertedData: WeeklyForecast = {
        week: response.data.week.map(week => ({
          weather: week.weather,
          date: new Date(week.date),
        })),
      };

      return convertedData;
    },
    enabled: locationKey != null && !Number.isNaN(locationKey),
    staleTime: FORECAST_STALE_TIME,
  });
};
