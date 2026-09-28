export interface Note {
  id: string;
  title: string;
  weather: {
    temperature: string;
    text: string;
  };
  createdAt: Date;
}
