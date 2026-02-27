
export type FestivalSubitem = {
  name: string;
  details: string[];
};

export type Festival = {
  id: string;
  name: string;
  location: [number, number]; // [latitude, longitude]
  city: string;
  startDate: string;
  endDate: string;
  description: string;
  subitems: FestivalSubitem[];
};

export const FESTIVALS: Record<string, Festival> = {
  tanabata: {
    id: 'tanabata',
    name: '七夕祭り',
    location: [38.2682, 140.8694],
    city: 'Sendai',
    startDate: '2026-08-06',
    endDate: '2026-08-08',
    description: 'The Sendai Tanabata Festival (Sendai Tanabata Matsuri) is one of the three great festivals of the Tohoku region. It features thousands of large, colorful streamers decorating the downtown shopping arcades, creating a vibrant and festive atmosphere to celebrate the star-crossed lovers Orihime and Hikoboshi.',
    subitems: [
      { name: 'Paper Decorations', details: ['Elaborate washi paper crafts', 'Seven types of decorations each with specific meanings'] },
      { name: 'Fireworks', details: ['Over 16,000 fireworks on the eve of the festival', 'Viewable along the Hirosegawa River'] }
    ]
  },
  gion: {
    id: 'gion',
    name: '祇園祭',
    location: [35.0037, 135.7680],
    city: 'Kyoto',
    startDate: '2026-07-01',
    endDate: '2026-07-31',
    description: 'The Gion Matsuri takes place annually in Kyoto and is one of the most famous festivals in Japan. It spans the entire month of July and is crowned by a parade, the Yamaboko Junko. The festival originated during an epidemic in 869 as a way to appease the gods.',
    subitems: [
      { name: 'Yamaboko Floats', details: ['Enormous, elaborate floats up to 25 meters tall', 'Decorated with beautiful tapestries from around the world'] },
      { name: 'Yoiyama', details: ['Festive street parties leading up to the main parade', 'Nighttime viewing of the lit-up floats'] }
    ]
  },
  nebuta: {
    id: 'nebuta',
    name: 'ねぶた祭り',
    location: [40.8246, 140.7400],
    city: 'Aomori',
    startDate: '2026-08-02',
    endDate: '2026-08-07',
    description: 'Aomori Nebuta Matsuri is a Japanese summer festival characterized by the parade of enormous, illuminated paper floats (nebuta) accompanied by traditional flute and taiko drum music. Spectators are encouraged to join the dancing as "haneto".',
    subitems: [
      { name: 'Nebuta Floats', details: ['Giant, illuminated papier-mâché floats depicting historical and mythical figures', 'Constructed by master craftsmen (nebuta-shi)'] },
      { name: 'Haneto Dancers', details: ["Anyone can join the parade by wearing the official haneto costume", "Chanting the energetic 'Rassera' call"] }
    ]
  },
  yodogawa: {
    id: 'yodogawa',
    name: 'なにわ淀川花火大会',
    location: [34.7164, 135.4918],
    city: 'Osaka',
    startDate: '2026-08-08',
    endDate: '2026-08-08',
    description: 'The Naniwa Yodogawa Fireworks Festival is Osaka\'s largest summer fireworks display, launched from the banks of the Yodo River. It is entirely funded and organized by local volunteers and features an incredible array of starmines and massive aerial shells.',
    subitems: [
      { name: 'Spectacular Display', details: ['Features immense "Starmine" rapid-fire sequences', 'Synchronized to music with vibrant colors'] },
      { name: 'Food Stalls', details: ["Hundreds of yatai (food stalls) lining the riverbanks", "Serving local favorites like takoyaki and okonomiyaki"] }
    ]
  },
  edogawa: {
    id: 'edogawa',
    name: '江戸川区花火大会',
    location: [35.6959, 139.8828],
    city: 'Tokyo (Edogawa)',
    startDate: '2026-08-01',
    endDate: '2026-08-01',
    description: 'The Edogawa Fireworks Festival is one of Tokyo\'s most spectacular events, jointly held with the city of Ichikawa across the Edogawa River. It is famous for its dramatic opening sequence where thousands of fireworks are launched in just a few seconds.',
    subitems: [
      { name: 'Eight Themes', details: ['The show is divided into eight different acts with distinct music and colors'] },
      { name: 'Grand Opening', details: ["1,000 fireworks launched in just 5 seconds to kick off the event"] }
    ]
  },
  nagaoka: {
    id: 'nagaoka',
    name: '長岡まつり大花火大会',
    location: [37.4465, 138.8487],
    city: 'Nagaoka',
    startDate: '2026-08-02',
    endDate: '2026-08-03',
    description: 'The Nagaoka Matsuri Grand Fireworks Festival in Niigata Prefecture is widely considered one of the top three fireworks festivals in Japan. Originally started to commemorate the rebuilding of the city after WWII, it features incredibly immense fireworks, including the massive "Sanjakudama".',
    subitems: [
      { name: 'Sanjakudama', details: ['Massive fireworks shells measuring 90cm wide', 'Explosions span up to 650 meters across the sky'] },
      { name: 'Phoenix Display', details: ["A massive, wide-spanning display symbolizing recovery and hope"] }
    ]
  },
  akita: {
    id: 'akita',
    name: '秋田竿燈まつり',
    location: [39.7195, 140.1025],
    city: 'Akita',
    startDate: '2026-08-03',
    endDate: '2026-08-06',
    description: 'The Akita Kanto Matsuri is a dramatic festival where performers balance incredibly tall, heavy bamboo poles (kanto) adorned with dozens of paper lanterns. It is held to pray for a good harvest and to ward off summer diseases.',
    subitems: [
      { name: 'Kanto Poles', details: ['Up to 12 meters tall and weighing 50 kilograms', 'Carrying up to 46 lit paper lanterns resembling ears of rice'] },
      { name: 'Performances', details: ["Performers balance the poles on their palms, foreheads, shoulders, and lower backs", "Accompanied by traditional festival music"] }
    ]
  },
  hakata: {
    id: 'hakata',
    name: '博多祇園山笠',
    location: [33.5902, 130.4017],
    city: 'Fukuoka (Hakata)',
    startDate: '2026-07-01',
    endDate: '2026-07-15',
    description: 'Hakata Gion Yamakasa is a fast-paced and thrilling festival in Fukuoka where teams of men race through the streets carrying one-ton floats (Kakiyama). The festival culminates in the Oiyama race in the early hours of July 15.',
    subitems: [
      { name: 'Kakiyama Floats', details: ['Heavy, beautifully decorated floats carried by teams', 'Teams represent different neighborhoods (nagare)'] },
      { name: 'Oiyama Race', details: ["The thrilling climax starting at 4:59 AM", "Teams race a 5-kilometer course through the city"] }
    ]
  },
  kumamoto: {
    id: 'kumamoto',
    name: '火の国まつり',
    location: [32.8031, 130.7079],
    city: 'Kumamoto',
    startDate: '2026-08-07',
    endDate: '2026-08-09',
    description: 'The Hinokuni Matsuri (Fire Country Festival) in Kumamoto features the massive "Otemoyan Sō-Odori" dance parade where thousands of people dance through the downtown streets to traditional folk songs.',
    subitems: [
      { name: 'Otemoyan Dance', details: ['Thousands of participants dancing to the beloved local folk song Otemoyan', 'A joyful and colorful street parade'] },
      { name: 'Festive Atmosphere', details: ["Numerous events and food stalls throughout the city center"] }
    ]
  },
  yosakoi: {
    id: 'yosakoi',
    name: 'よさこい祭り',
    location: [33.5597, 133.5311],
    city: 'Kochi',
    startDate: '2026-08-09',
    endDate: '2026-08-12',
    description: 'The Yosakoi Matsuri in Kochi is a highly energetic dance festival where thousands of dancers in brightly colored costumes perform dynamic routines using wooden clappers called naruko. The dance style has become so popular it has spread across the country and the world.',
    subitems: [
      { name: 'Naruko Clappers', details: ['Small wooden instruments clapped in rhythm with the dance', 'Originally used to scare birds away from rice fields'] },
      { name: 'Dynamic Performances', details: ['Modern arrangements of the traditional Yosakoi Naruko Dancing song', 'Elaborate costumes and impressive choreography'] }
    ]
  },
  awaodori: {
    id: 'awaodori',
    name: '阿波おどり',
    location: [34.0704, 134.5548],
    city: 'Tokushima',
    startDate: '2026-08-12',
    endDate: '2026-08-15',
    description: 'The Awa Odori is Japan\'s largest traditional dance festival, drawing over a million spectators to Tokushima. Dancers, known as "ren", parade through the streets performing the "Fool\'s Dance," characterized by its distinct two-beat rhythm and the famous chant: "The dancing fool and the watching fool are both fools, so why not dance!"',
    subitems: [
      { name: 'Ren Groups', details: ['Organized dance troupes, each with their own unique style and costumes', 'Performances range from elegant to highly energetic'] },
      { name: 'Musical Accompaniment', details: ['Features shamisen, taiko drums, shinobue flutes, and kane bells'] }
    ]
  },
  jidai: {
    id: 'jidai',
    name: '時代祭',
    location: [35.0268, 135.7824], // Heian Shrine
    city: 'Kyoto',
    startDate: '2026-10-22',
    endDate: '2026-10-22',
    description: 'The Jidai Matsuri (Festival of Ages) is one of Kyoto\'s three great festivals. It features a spectacular procession of over 2,000 people dressed in historically accurate costumes representing different eras of Japanese history, marching from the Imperial Palace to Heian Shrine.',
    subitems: [
      { name: 'Historical Procession', details: ['Costumes spanning from the Meiji Restoration back to the Enryaku period', 'Meticulous attention to historical detail'] },
      { name: 'Heian Shrine', details: ['The grand conclusion of the parade', 'Dedicated to the first and last emperors who resided in Kyoto'] }
    ]
  },
  shoryonagashi: {
    id: 'shoryonagashi',
    name: '精霊流し',
    location: [32.7503, 129.8777],
    city: 'Nagasaki',
    startDate: '2026-08-15',
    endDate: '2026-08-15',
    description: 'The Shoro Nagashi (Spirit Boat Procession) is a traditional event during Obon in Nagasaki where families pull elaborately decorated boats (shorobune) through the streets to the harbor, symbolizing the sending off of the spirits of deceased loved ones. The event is characterized by the deafening sound of millions of firecrackers.',
    subitems: [
      { name: 'Spirit Boats', details: ['Handcrafted boats decorated with lanterns and family crests', 'Carrying the spirits of those who passed away during the past year'] },
      { name: 'Firecrackers', details: ['Lit continuously to ward off evil spirits and purify the path', 'Creates an incredibly loud and smoky atmosphere'] }
    ]
  },
  kishiwada: {
    id: 'kishiwada',
    name: '岸和田だんじり祭',
    location: [34.4601, 135.3741],
    city: 'Kishiwada',
    startDate: '2026-09-19',
    endDate: '2026-09-20',
    description: 'The Kishiwada Danjiri Matsuri is renowned as one of Japan\'s most thrilling and dangerous festivals. Giant wooden floats (danjiri) are pulled through narrow city streets by hundreds of people at breakneck speeds, turning corners rapidly in a maneuver called "yarimawashi".',
    subitems: [
      { name: 'Danjiri Floats', details: ['Intricately carved wooden floats weighing up to 4 tons', 'Pulled by massive teams using long ropes'] },
      { name: 'Daiku-gata', details: ['The brave individual who dances atop the speeding float', 'Guides the team through treacherous corners'] }
    ]
  },
  sapporosnow: {
    id: 'sapporosnow',
    name: 'さっぽろ雪まつり',
    location: [43.0611, 141.3564],
    city: 'Sapporo',
    startDate: '2026-02-04',
    endDate: '2026-02-11',
    description: 'The Sapporo Snow Festival is one of Japan\'s largest winter events, featuring hundreds of massive snow and ice sculptures spread across Odori Park, Susukino, and Tsudome. Millions of visitors come to see these intricate, temporary masterpieces and enjoy winter activities.',
    subitems: [
      { name: 'Giant Snow Sculptures', details: ['Some sculptures measure up to 15 meters high and 25 meters wide', 'Often depicting famous buildings or popular characters'] },
      { name: 'Illuminations', details: ['Stunning light and projection mapping shows on the sculptures at night'] }
    ]
  }
};
