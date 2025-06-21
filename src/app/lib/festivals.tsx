
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
  yodogawa: {
    name: 'なにわ淀川花火大会',
    location: [34.7164, 135.4918],
    city: 'Osaka',
  },
  edogawa: {
    name: '江戸川区花火大会',
    location: [35.6959, 139.8828],
    city: 'Tokyo (Edogawa)',
  },
  nagaoka: {
    name: '長岡まつり大花火大会',
    location: [37.4465, 138.8487],
    city: 'Nagaoka',
  },
  akita: {
    name: '秋田竿燈まつり',
    location: [39.7195, 140.1025],
    city: 'Akita',
  },
  hakata: {
    name: '博多祇園山笠',
    location: [33.5902, 130.4017],
    city: 'Fukuoka (Hakata)',
  },
  kumamoto: {
    name: '火の国まつり',
    location: [32.8031, 130.7079],
    city: 'Kumamoto',
  },
};
