
export type Festival = {
  name: string;
  location: [number, number]; // [latitude, longitude]
  city: string;
};

export const FESTIVALS: Record<string, Festival> = {
  tanabata: {
    name: '七夕祭り',
    location: [38.2682, 140.8694],
    city: 'Sendai',
  },
  gion: {
    name: '祇園祭',
    location: [35.0037, 135.7680],
    city: 'Kyoto',
  },
  nebuta: {
    name: 'ねぶた祭り',
    location: [40.8246, 140.7400],
    city: 'Aomori',
  },
};
