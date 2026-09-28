import { clientApi } from '@/shared/api/instance';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { User } from '../model/types';

const USER_STALE_TIME = 1000 * 60 * 30;

export const useUser = (id: string): UseQueryResult<User, Error> => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: async () => {
      const response = await clientApi.get<User>(`/users/${id}`);
      return response.data;
    },
    enabled: !!id,
    staleTime: USER_STALE_TIME,
  });
};
