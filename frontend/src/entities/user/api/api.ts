import { clientApi } from '@/shared/api/instance';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { User } from '../model/types';

const USER_STALE_TIME = 1000 * 60 * 30;

export const useUser = (): UseQueryResult<User, Error> => {
  return useQuery({
    queryKey: ['user', 'self'],
    queryFn: async () => {
      const response = await clientApi.get<User>(`/me`);
      return response.data;
    },
    staleTime: USER_STALE_TIME,
  });
};
