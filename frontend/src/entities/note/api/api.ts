import { clientApi } from '@/shared/api/instance';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Note } from '../model/types';

export const useAllSelfNotes = (): UseQueryResult<Note[], Error> => {
  return useQuery({
    queryKey: ['all', 'notes'],
    queryFn: async () => {
      const response = await clientApi.get<Note[]>('/notes');

      const convertedData: Note[] = response.data.map(note => ({
        id: note.id,
        title: note.title,
        weather: { ...note.weather },
        createdAt: new Date(note.createdAt),
      }));

      return convertedData;
    },
    staleTime: 1000 * 60 * 30,
  });
};
