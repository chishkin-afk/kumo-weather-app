import { clientApi } from '@/shared/api/instance';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Note } from '../model/types';

type NoteDto = Omit<Note, 'createdAt'> & { createdAt: string };

const NOTE_STALE_TIME = 1000 * 60 * 30;

export const useAllSelfNotes = (): UseQueryResult<Note[], Error> => {
  return useQuery({
    queryKey: ['all', 'notes'],
    queryFn: async () => {
      const response = await clientApi.get<NoteDto[]>('/notes');

      const convertedData: Note[] = response.data.map(note => ({
        id: note.id,
        title: note.title,
        weather: { ...note.weather },
        createdAt: new Date(note.createdAt),
      }));

      return convertedData;
    },
    staleTime: NOTE_STALE_TIME,
  });
};
