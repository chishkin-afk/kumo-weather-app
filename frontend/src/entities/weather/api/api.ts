import { clientApi } from '@/shared/api/instance';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { DailyForecast, WeeklyForecast } from '../model/types';

export const useDailyForecast = (
  locationKey: number,
): UseQueryResult<DailyForecast, Error> => {
  return useQuery({
    queryKey: ['daily', 'forecast', locationKey],
    queryFn: async () => {
      const response = await clientApi.get<DailyForecast>(
        `/weather/daily/${locationKey}`,
      );

      const convertedData: DailyForecast = {
        current: response.data.current,
        date: new Date(response.data.date),
      };

      return convertedData;
    },
    enabled: !!locationKey,
    staleTime: 1000 * 60 * 30,
  });
};

export const useWeeklyForecast = (
  locationKey: number,
): UseQueryResult<WeeklyForecast, Error> => {
  return useQuery({
    queryKey: ['weekly', 'forecast', locationKey],
    queryFn: async () => {
      const response = await clientApi.get<WeeklyForecast>(
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
    enabled: !!locationKey,
    staleTime: 1000 * 60 * 30,
  });
};
