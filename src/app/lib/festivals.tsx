
export type FestivalSubitem = {
  name: string;
  name_ja?: string;
  details: string[];
  details_ja?: string[];
};

export type Festival = {
  id: string;
  name: string;
  name_ja?: string;
  location: [number, number]; // [latitude, longitude]
  city: string;
  city_ja?: string;
  startDate: string;
  endDate: string;
  shortDescription?: string;
  shortDescription_ja?: string;
  description: string;
  description_ja?: string;
  image?: string;
  subitems: FestivalSubitem[];
};

export const FESTIVALS: Record<string, Festival> = {
  tanabata: {
    id: 'tanabata',
    name: 'Sendai Tanabata Matsuri',
    name_ja: '仙台七夕まつり',
    location: [38.2682, 140.8694],
    city: 'Sendai',
    city_ja: '仙台',
    startDate: '2026-08-06',
    endDate: '2026-08-08',
    shortDescription: 'Tohoku’s largest star festival, famous for its grand and colorful washi paper streamers.',
    shortDescription_ja: '色鮮やかな和紙の吹き流しで有名な、東北最大級の七夕祭り。',
    image: 'https://images.unsplash.com/photo-1691238474268-2cc0b1be2a6d?q=80&w=600&auto=format&fit=crop', // Stock image representing tanabata/matsuri
    description: 'The Sendai Tanabata Festival (Sendai Tanabata Matsuri) is one of the three great festivals of the Tohoku region. It features thousands of large, colorful streamers decorating the downtown shopping arcades, creating a vibrant and festive atmosphere to celebrate the star-crossed lovers Orihime and Hikoboshi.',
    description_ja: '仙台七夕まつりは東北三大祭りの一つです。商店街のアーケードには何千もの大きく色鮮やかな吹き流しが飾られ、織姫と彦星を祝う活気に満ちたお祭り気分を盛り上げます。',
    subitems: [
      { name: 'Paper Decorations', name_ja: '和紙の笹飾り', details: ['Elaborate washi paper crafts', 'Seven types of decorations each with specific meanings'], details_ja: ['精巧な和紙細工', 'それぞれ意味を持つ七つ道具の飾り'] },
      { name: 'Fireworks', name_ja: '花火大会', details: ['Over 16,000 fireworks on the eve of the festival', 'Viewable along the Hirosegawa River'], details_ja: ['前夜祭で1万6千発以上の花火', '広瀬川沿いで観覧可能'] }
    ]
  },
  gion: {
    id: 'gion',
    name: 'Gion Matsuri',
    name_ja: '祇園祭',
    location: [35.0037, 135.7680],
    city: 'Kyoto',
    city_ja: '京都',
    startDate: '2026-07-01',
    endDate: '2026-07-31',
    shortDescription: 'A month-long Kyoto tradition crowned by parading majestic Yamaboko floats.',
    shortDescription_ja: '絢爛豪華な山鉾巡行がハイライトとなる、1ヶ月にわたる京都の伝統行事。',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop',
    description: 'The Gion Matsuri takes place annually in Kyoto and is one of the most famous festivals in Japan. It spans the entire month of July and is crowned by a parade, the Yamaboko Junko. The festival originated during an epidemic in 869 as a way to appease the gods.',
    description_ja: '祇園祭は京都で毎年開催される、日本で最も有名なお祭りの一つです。7月の1ヶ月間にわたって行われ、山鉾巡行がそのクライマックスとなります。869年の疫病流行時に神仏を鎮めるために始まりました。',
    subitems: [
      { name: 'Yamaboko Floats', name_ja: '山鉾', details: ['Enormous, elaborate floats up to 25 meters tall', 'Decorated with beautiful tapestries from around the world'], details_ja: ['高さ最大25メートルの巨大で精巧な山鉾', '世界中から集められた美しい懸装品で装飾されている'] },
      { name: 'Yoiyama', name_ja: '宵山', details: ['Festive street parties leading up to the main parade', 'Nighttime viewing of the lit-up floats'], details_ja: ['山鉾巡行の数日前から始まるお祭り騒ぎ', '提灯に照らされた山鉾の夜間拝観'] }
    ]
  },
  nebuta: {
    id: 'nebuta',
    name: 'Aomori Nebuta Matsuri',
    name_ja: '青森ねぶた祭',
    location: [40.8246, 140.7400],
    city: 'Aomori',
    city_ja: '青森',
    startDate: '2026-08-02',
    endDate: '2026-08-07',
    shortDescription: 'Giant illuminated paper lantern floats light up the northern summer nights.',
    shortDescription_ja: '北国の夏の夜を彩る、巨大で勇壮なねぶた（灯籠）のパレード。',
    image: 'https://images.unsplash.com/photo-1628178653229-2cd1681ab708?q=80&w=600&auto=format&fit=crop',
    description: 'Aomori Nebuta Matsuri is a Japanese summer festival characterized by the parade of enormous, illuminated paper floats (nebuta) accompanied by traditional flute and taiko drum music. Spectators are encouraged to join the dancing as "haneto".',
    description_ja: '青森ねぶた祭は、巨大な光る紙製の山車（ねぶた）が、伝統的な笛や太鼓の囃子とともに街を練り歩く日本の夏祭りです。観客は「ハネト」として踊りに参加することが推奨されています。',
    subitems: [
      { name: 'Nebuta Floats', name_ja: 'ねぶた', details: ['Giant, illuminated papier-mâché floats depicting historical and mythical figures', 'Constructed by master craftsmen (nebuta-shi)'], details_ja: ['歴史上の人物や神話を描いた巨大な張り子の山車', 'ねぶた師と呼ばれる職人によって作られる'] },
      { name: 'Haneto Dancers', name_ja: 'ハネト', details: ["Anyone can join the parade by wearing the official haneto costume", "Chanting the energetic 'Rassera' call"], details_ja: ['正装を着れば誰でも参加可能', '「ラッセラー」という活気ある掛け声'] }
    ]
  },
  yodogawa: {
    id: 'yodogawa',
    name: 'Naniwa Yodogawa Fireworks Festival',
    name_ja: 'なにわ淀川花火大会',
    location: [34.7164, 135.4918],
    city: 'Osaka',
    city_ja: '大阪',
    startDate: '2026-08-08',
    endDate: '2026-08-08',
    shortDescription: 'Osaka’s largest volunteer-run fireworks spectacular along the Yodo River.',
    shortDescription_ja: '淀川の河川敷から打ち上げられる、大阪最大規模の手作り花火大会。',
    image: 'https://images.unsplash.com/photo-1533657388126-17a4c7e63d3e?q=80&w=600&auto=format&fit=crop',
    description: 'The Naniwa Yodogawa Fireworks Festival is Osaka\'s largest summer fireworks display, launched from the banks of the Yodo River. It is entirely funded and organized by local volunteers and features an incredible array of starmines and massive aerial shells.',
    description_ja: 'なにわ淀川花火大会は、淀川の河川敷から打ち上げられる大阪最大規模の夏の花火大会です。地元ボランティアによって運営・開催されており、見事なスターマインや巨大な打ち上げ花火が特徴です。',
    subitems: [
      { name: 'Spectacular Display', name_ja: '大迫力の打ち上げ', details: ['Features immense "Starmine" rapid-fire sequences', 'Synchronized to music with vibrant colors'], details_ja: ['巨大なスターマインの連射', '音楽とシンクロした鮮やかな色彩'] },
      { name: 'Food Stalls', name_ja: '屋台', details: ["Hundreds of yatai (food stalls) lining the riverbanks", "Serving local favorites like takoyaki and okonomiyaki"], details_ja: ['河川敷に並ぶ数百の屋台', 'たこ焼きやお好み焼きなど地元の人気グルメ'] }
    ]
  },
  edogawa: {
    id: 'edogawa',
    name: 'Edogawa Fireworks Festival',
    name_ja: '江戸川区花火大会',
    location: [35.6959, 139.8828],
    city: 'Tokyo (Edogawa)',
    city_ja: '東京 (江戸川)',
    startDate: '2026-08-01',
    endDate: '2026-08-01',
    shortDescription: 'Famous for an explosive opening sequence on the banks of Tokyo.',
    shortDescription_ja: '開始5秒で1,000発を打ち上げる圧巻のオープニングで有名な東京の花火大会。',
    image: 'https://images.unsplash.com/photo-1563840742511-2eb947eb3dfa?q=80&w=600&auto=format&fit=crop',
    description: 'The Edogawa Fireworks Festival is one of Tokyo\'s most spectacular events, jointly held with the city of Ichikawa across the Edogawa River. It is famous for its dramatic opening sequence where thousands of fireworks are launched in just a few seconds.',
    description_ja: '江戸川区花火大会は、江戸川を挟んで市川市と合同で開催される東京でもっとも壮観な花火大会の一つです。わずか数秒で数千発の花火が打ち上がるドラマチックなオープニングで有名です。',
    subitems: [
      { name: 'Eight Themes', name_ja: '8つのテーマ', details: ['The show is divided into eight different acts with distinct music and colors'], details_ja: ['プログラムは、それぞれ異なる音楽と色彩の8つの場面で構成される'] },
      { name: 'Grand Opening', name_ja: 'グランドオープニング', details: ["1,000 fireworks launched in just 5 seconds to kick off the event"], details_ja: ['開始5秒で1,000発の花火が打ち上がる圧倒的なオープニング'] }
    ]
  },
  nagaoka: {
    id: 'nagaoka',
    name: 'Nagaoka Matsuri Grand Fireworks Festival',
    name_ja: '長岡まつり大花火大会',
    location: [37.4465, 138.8487],
    city: 'Nagaoka',
    city_ja: '長岡',
    startDate: '2026-08-02',
    endDate: '2026-08-03',
    shortDescription: 'Legendary massive Sanjakudama shells light up Niigata for peace and recovery.',
    shortDescription_ja: '復興への祈りを込めた「フェニックス」や大輪の正三尺玉が舞う日本三大花火大会。',
    image: 'https://images.unsplash.com/photo-1627043831810-726ffea592a4?q=80&w=600&auto=format&fit=crop',
    description: 'The Nagaoka Matsuri Grand Fireworks Festival in Niigata Prefecture is widely considered one of the top three fireworks festivals in Japan. Originally started to commemorate the rebuilding of the city after WWII, it features incredibly immense fireworks, including the massive "Sanjakudama".',
    description_ja: '新潟県で開催される長岡まつり大花火大会は、日本三大花火大会の一つに数えられています。戦災からの復興を祈願して始まり、巨大な「正三尺玉」など、圧倒的なスケールの花火が特徴です。',
    subitems: [
      { name: 'Sanjakudama', name_ja: '正三尺玉', details: ['Massive fireworks shells measuring 90cm wide', 'Explosions span up to 650 meters across the sky'], details_ja: ['直径約90cmの巨大な花火の殻', '上空で直径約650mにも広がる大輪の花'] },
      { name: 'Phoenix Display', name_ja: '復興祈願花火フェニックス', details: ["A massive, wide-spanning display symbolizing recovery and hope"], details_ja: ['復興と希望を象徴する、幅約2kmにも及ぶ超大型の連続打ち上げ'] }
    ]
  },
  akita: {
    id: 'akita',
    name: 'Akita Kanto Matsuri',
    name_ja: '秋田竿燈まつり',
    location: [39.7195, 140.1025],
    city: 'Akita',
    city_ja: '秋田',
    startDate: '2026-08-03',
    endDate: '2026-08-06',
    shortDescription: 'Performers balance massive bamboo poles strung with dozens of glowing lanterns.',
    shortDescription_ja: '数十個の提灯を吊るした巨大な竿燈を手のひらや額で絶妙に操る光の祭典。',
    image: 'https://images.unsplash.com/photo-1707054696144-b0d3e51cd5fb?q=80&w=600&auto=format&fit=crop',
    description: 'The Akita Kanto Matsuri is a dramatic festival where performers balance incredibly tall, heavy bamboo poles (kanto) adorned with dozens of paper lanterns. It is held to pray for a good harvest and to ward off summer diseases.',
    description_ja: '秋田竿燈まつりは、数十個の提灯を吊るした非常に高く重い竹竿（竿燈）を演者がバランス良く操る、迫力のあるお祭りです。五穀豊穣と無病息災を祈願して行われます。',
    subitems: [
      { name: 'Kanto Poles', name_ja: '竿燈', details: ['Up to 12 meters tall and weighing 50 kilograms', 'Carrying up to 46 lit paper lanterns resembling ears of rice'], details_ja: ['最大で高さ12メートル、重さ50キログラム', '稲穂に見立てた最大46個の提灯を吊るす'] },
      { name: 'Performances', name_ja: '妙技', details: ["Performers balance the poles on their palms, foreheads, shoulders, and lower backs", "Accompanied by traditional festival music"], details_ja: ['演者は竿燈を手のひら、額、肩、腰に乗せてバランスをとる', '伝統的なお囃子とともに披露される'] }
    ]
  },
  hakata: {
    id: 'hakata',
    name: 'Hakata Gion Yamakasa',
    name_ja: '博多祇園山笠',
    location: [33.5902, 130.4017],
    city: 'Fukuoka (Hakata)',
    city_ja: '福岡 (博多)',
    startDate: '2026-07-01',
    endDate: '2026-07-15',
    shortDescription: 'A thrilling summer race of one-ton floats carried by neighborhood teams.',
    shortDescription_ja: '締め込み姿の男たちが重さ1トンの山笠を担いで福岡の街を駆け抜ける。',
    image: 'https://images.unsplash.com/photo-1543787309-9b986b4fabe0?q=80&w=600&auto=format&fit=crop',
    description: 'Hakata Gion Yamakasa is a fast-paced and thrilling festival in Fukuoka where teams of men race through the streets carrying one-ton floats (Kakiyama). The festival culminates in the Oiyama race in the early hours of July 15.',
    description_ja: '博多祇園山笠は、福岡で行われるスピード感溢れるスリリングなお祭りで、締め込み姿の男たちが重さ1トンの舁き山笠（かきやま）を担いで街を駆け抜けます。7月15日早朝の「追い山」で最高潮に達します。',
    subitems: [
      { name: 'Kakiyama Floats', name_ja: '舁き山', details: ['Heavy, beautifully decorated floats carried by teams', 'Teams represent different neighborhoods (nagare)'], details_ja: ['男たちが担ぐ重く美しく装飾された山笠', '各チームは異なる地域（流）を代表する'] },
      { name: 'Oiyama Race', name_ja: '追い山', details: ["The thrilling climax starting at 4:59 AM", "Teams race a 5-kilometer course through the city"], details_ja: ['午前4時59分に始まるスリリングなクライマックス', '市内約5kmのコースを各チームが全力で駆け抜けるタイムレース'] }
    ]
  },
  kumamoto: {
    id: 'kumamoto',
    name: 'Hinokuni Matsuri',
    name_ja: '火の国まつり',
    location: [32.8031, 130.7079],
    city: 'Kumamoto',
    city_ja: '熊本',
    startDate: '2026-08-07',
    endDate: '2026-08-09',
    shortDescription: 'Thousands dance to the beloved Otemoyan song down Kumamoto’s streets.',
    shortDescription_ja: '「おてもやん総踊り」で何千人もの市民が熊本市街を踊り歩く熱気溢れるお祭り。',
    image: 'https://images.unsplash.com/photo-1533657388126-17a4c7e63d3e?q=80&w=600&auto=format&fit=crop',
    description: 'The Hinokuni Matsuri (Fire Country Festival) in Kumamoto features the massive "Otemoyan Sō-Odori" dance parade where thousands of people dance through the downtown streets to traditional folk songs.',
    description_ja: '熊本の火の国まつりでは、何千人もの人々が伝統的な民謡に合わせて中心街を踊り歩く大規模な「おてもやん総踊り」が開催されます。',
    subitems: [
      { name: 'Otemoyan Dance', name_ja: 'おてもやん総踊り', details: ['Thousands of participants dancing to the beloved local folk song Otemoyan', 'A joyful and colorful street parade'], details_ja: ['愛される地元の民謡「おてもやん」に合わせた何千人もの参加者による踊り', '楽しくカラフルなストリートパレード'] },
      { name: 'Festive Atmosphere', name_ja: 'お祭り気分', details: ["Numerous events and food stalls throughout the city center"], details_ja: ['市内中心部で開催される多数のイベントと屋台'] }
    ]
  },
  yosakoi: {
    id: 'yosakoi',
    name: 'Yosakoi Matsuri',
    name_ja: 'よさこい祭り',
    location: [33.5597, 133.5311],
    city: 'Kochi',
    city_ja: '高知',
    startDate: '2026-08-09',
    endDate: '2026-08-12',
    shortDescription: 'High-energy, modern street dances with traditional Naruko clappers.',
    shortDescription_ja: '鳴子を手に、趣向を凝らした衣装で舞うエネルギッシュな高知の発祥祭。',
    image: 'https://images.unsplash.com/photo-1596707328654-e05dc3de614e?q=80&w=600&auto=format&fit=crop',
    description: 'The Yosakoi Matsuri in Kochi is a highly energetic dance festival where thousands of dancers in brightly colored costumes perform dynamic routines using wooden clappers called naruko. The dance style has become so popular it has spread across the country and the world.',
    description_ja: '高知のよさこい祭りは、色鮮やかな衣装を着た何千人もの踊り子が「鳴子」と呼ばれる木製の打楽器を鳴らしながらダイナミックに踊る、非常にエネルギッシュな舞踊祭です。このスタイルは全国的、そして世界的に広まっています。',
    subitems: [
      { name: 'Naruko Clappers', name_ja: '鳴子', details: ['Small wooden instruments clapped in rhythm with the dance', 'Originally used to scare birds away from rice fields'], details_ja: ['踊りのリズムに合わせて鳴らす小さな木製の楽器', '元々は田んぼの鳥よけに使われていた'] },
      { name: 'Dynamic Performances', name_ja: 'ダイナミックな演舞', details: ['Modern arrangements of the traditional Yosakoi Naruko Dancing song', 'Elaborate costumes and impressive choreography'], details_ja: ['伝統的な「よさこい鳴子踊り」の現代的なアレンジ', '手の込んだ衣装と印象的な振り付け'] }
    ]
  },
  awaodori: {
    id: 'awaodori',
    name: 'Awa Odori',
    name_ja: '阿波おどり',
    location: [34.0704, 134.5548],
    city: 'Tokushima',
    city_ja: '徳島',
    startDate: '2026-08-12',
    endDate: '2026-08-15',
    shortDescription: '"The dancing fool and watching fool"—Japan’s most famous traditional dance festival.',
    shortDescription_ja: '「踊る阿呆に見る阿呆」の掛け声に乗せて街中が日本最大の盆踊りに熱狂する。',
    image: 'https://images.unsplash.com/photo-1628178653229-2cd1681ab708?q=80&w=600&auto=format&fit=crop',
    description: 'The Awa Odori is Japan\'s largest traditional dance festival, drawing over a million spectators to Tokushima. Dancers, known as "ren", parade through the streets performing the "Fool\'s Dance," characterized by its distinct two-beat rhythm and the famous chant: "The dancing fool and the watching fool are both fools, so why not dance!"',
    description_ja: '阿波おどりは日本最大の伝統的な盆踊りであり、徳島に100万人以上の観客を集めます。「連」と呼ばれる踊り手のグループが、独特の2拍子のリズムと「踊る阿呆に見る阿呆、同じ阿呆なら踊らな損々」の掛け声で知られる「阿呆踊り」を披露しながら街を練り歩きます。',
    subitems: [
      { name: 'Ren Groups', name_ja: '連', details: ['Organized dance troupes, each with their own unique style and costumes', 'Performances range from elegant to highly energetic'], details_ja: ['独自のスタイルと衣装を持つ組織化された踊り手のグループ', '優雅なものから非常にエネルギッシュなものまで、様々なパフォーマンスがある'] },
      { name: 'Musical Accompaniment', name_ja: 'お囃子', details: ['Features shamisen, taiko drums, shinobue flutes, and kane bells'], details_ja: ['三味線、太鼓、篠笛、鉦による演奏'] }
    ]
  },
  jidai: {
    id: 'jidai',
    name: 'Jidai Matsuri',
    name_ja: '時代祭',
    location: [35.0268, 135.7824], // Heian Shrine
    city: 'Kyoto',
    city_ja: '京都',
    startDate: '2026-10-22',
    endDate: '2026-10-22',
    shortDescription: 'Kyoto’s breathtaking procession of 2,000 participants in meticulously accurate historical garb.',
    shortDescription_ja: '各時代の精巧な衣装をまとった2,000人の大行列が練り歩く京都三大祭りの一つ。',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop',
    description: 'The Jidai Matsuri (Festival of Ages) is one of Kyoto\'s three great festivals. It features a spectacular procession of over 2,000 people dressed in historically accurate costumes representing different eras of Japanese history, marching from the Imperial Palace to Heian Shrine.',
    description_ja: '時代祭は京都三大祭りの一つです。日本の各時代の歴史的に正確な衣装を身にまとった約2,000人の壮大な行列が、京都御所から平安神宮まで練り歩きます。',
    subitems: [
      { name: 'Historical Procession', name_ja: '時代行列', details: ['Costumes spanning from the Meiji Restoration back to the Enryaku period', 'Meticulous attention to historical detail'], details_ja: ['明治維新から延暦時代までを遡る各時代の衣装', '細部までこだわった歴史的な正確さ'] },
      { name: 'Heian Shrine', name_ja: '平安神宮', details: ['The grand conclusion of the parade', 'Dedicated to the first and last emperors who resided in Kyoto'], details_ja: ['行列の壮大な終着点', '京都で過ごした最初と最後の天皇を祀る'] }
    ]
  },
  shoryonagashi: {
    id: 'shoryonagashi',
    name: 'Shoro Nagashi',
    name_ja: '精霊流し',
    location: [32.7503, 129.8777],
    city: 'Nagasaki',
    city_ja: '長崎',
    startDate: '2026-08-15',
    endDate: '2026-08-15',
    shortDescription: 'Families send off ancestral spirits in vibrant handmade boats through roaring firecrackers.',
    shortDescription_ja: '莫大な爆竹の轟音のなか、故人の霊を乗せた手作りの精霊船が長崎の街を往く。',
    image: 'https://images.unsplash.com/photo-1543787309-9b986b4fabe0?q=80&w=600&auto=format&fit=crop',
    description: 'The Shoro Nagashi (Spirit Boat Procession) is a traditional event during Obon in Nagasaki where families pull elaborately decorated boats (shorobune) through the streets to the harbor, symbolizing the sending off of the spirits of deceased loved ones. The event is characterized by the deafening sound of millions of firecrackers.',
    description_ja: '精霊流しは長崎のお盆の伝統行事で、遺族が精巧に装飾された船（精霊船）を港まで曳き回し、故人の魂を送り出します。何百万発もの爆竹の耳をつんざくような音が特徴です。',
    subitems: [
      { name: 'Spirit Boats', name_ja: '精霊船', details: ['Handcrafted boats decorated with lanterns and family crests', 'Carrying the spirits of those who passed away during the past year'], details_ja: ['提灯や家紋で装飾された手作りの船', '過去1年間に亡くなった人々の魂を乗せる'] },
      { name: 'Firecrackers', name_ja: '爆竹', details: ['Lit continuously to ward off evil spirits and purify the path', 'Creates an incredibly loud and smoky atmosphere'], details_ja: ['悪霊を追い払い、道を清めるために絶え間なく鳴らされる', '信じられないほど騒々しく煙に包まれた空間を作り出す'] }
    ]
  },
  kishiwada: {
    id: 'kishiwada',
    name: 'Kishiwada Danjiri Matsuri',
    name_ja: '岸和田だんじり祭',
    location: [34.4601, 135.3741],
    city: 'Kishiwada',
    city_ja: '岸和田',
    startDate: '2026-09-19',
    endDate: '2026-09-20',
    shortDescription: 'Watch 4-ton wooden shrines careening dangerously around corners at breakneck speeds.',
    shortDescription_ja: '数百人が引く重さ4トンのだんじりが猛スピードで角を曲がる「やりまわし」が圧巻。',
    image: 'https://images.unsplash.com/photo-1543787309-9b986b4fabe0?q=80&w=600&auto=format&fit=crop',
    description: 'The Kishiwada Danjiri Matsuri is renowned as one of Japan\'s most thrilling and dangerous festivals. Giant wooden floats (danjiri) are pulled through narrow city streets by hundreds of people at breakneck speeds, turning corners rapidly in a maneuver called "yarimawashi".',
    description_ja: '岸和田だんじり祭は、日本で最もスリリングで危険な祭りの一つとして有名です。巨大な木製の山車（だんじり）が数百人の引き手によって猛スピードで狭い市街地を牽引され、「やりまわし」と呼ばれる豪快な方向転換が最大の見どころです。',
    subitems: [
      { name: 'Danjiri Floats', name_ja: 'だんじり', details: ['Intricately carved wooden floats weighing up to 4 tons', 'Pulled by massive teams using long ropes'], details_ja: ['重さ最大4トンにもなる精巧な彫刻が施された木製の山車', '長い綱を使って大人数のチームで引き回される'] },
      { name: 'Daiku-gata', name_ja: '大工方', details: ['The brave individual who dances atop the speeding float', 'Guides the team through treacherous corners'], details_ja: ['猛スピードで進むだんじりの大屋根の上で舞う勇壮な役割', '危険な角を曲がる際にチームを導く'] }
    ]
  },
  sapporosnow: {
    id: 'sapporosnow',
    name: 'Sapporo Snow Festival',
    name_ja: 'さっぽろ雪まつり',
    location: [43.0611, 141.3564],
    city: 'Sapporo',
    city_ja: '札幌',
    startDate: '2026-02-04',
    endDate: '2026-02-11',
    shortDescription: 'World-renowned winter event showcasing elaborate multistory masterpieces carved in snow and ice.',
    shortDescription_ja: '精巧で巨大な雪像や氷像が街中に立ち並ぶ、世界的に有名な冬の祭典。',
    image: 'https://images.unsplash.com/photo-1614749451167-96a1ebf2a71d?q=80&w=600&auto=format&fit=crop',
    description: 'The Sapporo Snow Festival is one of Japan\'s largest winter events, featuring hundreds of massive snow and ice sculptures spread across Odori Park, Susukino, and Tsudome. Millions of visitors come to see these intricate, temporary masterpieces and enjoy winter activities.',
    description_ja: 'さっぽろ雪まつりは日本最大級の冬のイベントで、大通公園、すすきの、つどーむの各会場に数百の巨大な雪像や氷像が展示されます。何百万人もの観光客が、この精巧で一時的な傑作を見に行き、冬のアクティビティを楽しみます。',
    subitems: [
      { name: 'Giant Snow Sculptures', name_ja: '大雪像', details: ['Some sculptures measure up to 15 meters high and 25 meters wide', 'Often depicting famous buildings or popular characters'], details_ja: ['高さ15メートル、幅25メートルに達する彫刻もある', '有名な建造物や人気キャラクターが題材になることが多い'] },
      { name: 'Illuminations', name_ja: 'イルミネーション・プロジェクションマッピング', details: ['Stunning light and projection mapping shows on the sculptures at night'], details_ja: ['夜には雪像に美しい光の演出やプロジェクションマッピングが行われる'] }
    ]
  }
};

