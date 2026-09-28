import { clientApi } from '@/shared/api/instance';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { NoteList } from '../model/types';

type NoteListDto = Omit<NoteList, 'list'> & {
  week: Array<
    Omit<NoteList['notes'][number], 'createdAt'> & { createdAt: string }
  >;
};

const NOTE_STALE_TIME = 1000 * 60 * 30;

export const useAllSelfNotes = (): UseQueryResult<NoteList[], Error> => {
  return useQuery({
    queryKey: ['all', 'notes'],
    queryFn: async () => {
      const response = await clientApi.get<NoteListDto>('/notes');

      const convertedData: NoteList = {
        notes: response.data.notes.map(note => ({
          id: note.id,
          title: note.title,
          weather: { ...note.weather },
          createdAt: new Date(note.createdAt),
        })),
      };

      return convertedData;
    },
    staleTime: NOTE_STALE_TIME,
  });
};
