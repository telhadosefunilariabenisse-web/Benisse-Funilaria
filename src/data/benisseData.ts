export const COMPANY = {
  name: 'Benisse Funilaria',
  shortName: 'Benisse',
  phoneDisplay: '(51) 98134-7393',
  whatsappNumber: '5551981347393',
  email: 'telhadosefunilariabenisse@gmail.com',
  address: 'Av. Flores da Cunha, Cachoeirinha - RS',
  regionLabel: 'Região Metropolitana de Porto Alegre',
  hours: 'Segunda a Sexta: 08:00 às 18:00 · Sábado: 08:00 às 12:00',
  instagram: 'https://www.instagram.com/benisse.telhadosefunilaria/',
  defaultWhatsAppMessage:
    'Olá! Gostaria de solicitar um orçamento com a Benisse Funilaria.',
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || COMPANY.defaultWhatsAppMessage);
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${text}`;
}

export const IMAGES = {
  heroWorkshop: '/src/assets/images/hero_sheet_metal_workshop_1795311790785.jpg',
  aboutLogo: '/LOGO 2.png',
  gutters: '/Calhas.png',
  algerosas: '/VEDAÇAO.jpeg',
  rufos: '/Rufos.jpeg',
  coifas: '/COIFA.png',
  dutos: '/DUTO.png',
  toldo: '/toldo.jpeg',
  customBending: '/src/assets/images/service_custom_bending_1795311790714.jpg',
} as const;

export type ServiceCategory =
  | 'Escoamento Pluvial'
  | 'Vedação e Divisas'
  | 'Exaustão e Dutos'
  | 'Sob Medida';

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface FunilariaService {
  id: string;
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  materials: string[];
  benefits: string[];
  technicalSpecs: string[];
  faqs: ServiceFaq[];
}

export const SERVICES: FunilariaService[] = [
  {
    id: 'calhas',
    slug: 'calhas',
    index: '01',
    title: 'Calhas Metálicas e Condutores',
    shortTitle: 'Calhas',
    category: 'Escoamento Pluvial',
    summary:
      'Fabricação, instalação, substituição e manutenção de calhas para coleta e direcionamento de águas pluviais.',
    description:
      'Desenvolvemos e instalamos calhas metálicas sob medida para residências, comércios e pavilhões industriais. Um sistema de captação bem dimensionado evita o acúmulo de água, protege paredes externas, beirais e fundações contra umidade e garante escoamento contínuo mesmo em chuvas intensas.',
    image: IMAGES.gutters,
    imageAlt: 'Calha metálica em chapa galvalume grafite com condutor retangular instalado',
    materials: ['Galvalume', 'Aço Galvanizado', 'Alumínio', 'Pintura Eletrostática'],
    benefits: [
      'Direcionamento eficiente da água pluvial para condutores e ralos',
      'Redução de umidade, respingos e manchas nas fachadas e muros',
      'Prevenção de acúmulo e transbordamento em beirais e platibandas',
      'Acabamento limpo integrado à arquitetura do imóvel',
      'Manutenção, limpeza periódica e substituição de trechos comprometidos',
    ],
    technicalSpecs: [
      'Chapas nas bitolas 24, 26 e 28 conforme vazão exigida',
      'Fabricação sob medida com redução de emendas',
      'Vedação de juntas com selante PU náutico de alta aderência',
      'Suportes reforçados e instalação opcional de grelhas protetoras',
    ],
    faqs: [
      {
        question: 'Qual o material mais indicado para calhas?',
        answer:
          'O galvalume e a chapa galvanizada com pintura eletrostática oferecem elevada resistência à corrosão e ótima relação entre durabilidade e acabamento. Em projetos específicos, também trabalhamos com alumínio.',
      },
      {
        question: 'Vocês também fazem limpeza e manutenção de calhas?',
        answer:
          'Sim. Realizamos limpeza completa de calhas e condutores, retirada de folhas e detritos, verificação de caimento, reforço de suportes e revisão das vedações.',
      },
    ],
  },
  {
    id: 'algerosas',
    slug: 'algerosas',
    index: '02',
    title: 'Algerosas Sob Medida',
    shortTitle: 'Algerosas',
    category: 'Vedação e Divisas',
    summary:
      'Fabricação e instalação de algerosas metálicas para proteção, direcionamento de água e vedação em encontros com paredes e divisas.',
    description:
      'Amplamente conhecidas no Rio Grande do Sul pelo termo regional algerosas, essas peças metálicas são essenciais na transição entre superfícies e paredes ou muros de divisa. Fabricamos cada perfil sob medida para impedir escorrimentos internos, manchas de umidade e infiltrações ao longo das junções.',
    image: IMAGES.algerosas,
    imageAlt: 'Algerosa metálica sob medida instalada para vedação junto à parede',
    materials: ['Galvalume', 'Aço Galvanizado', 'Alumínio'],
    benefits: [
      'Vedação contínua nas junções com paredes, muros e divisas',
      'Bloqueio contra umidade descendente e descascamento de reboco',
      'Acabamento geométrico preciso que acompanha o desenho da construção',
      'Proteção durável contra intempéries e dilatação térmica',
    ],
    technicalSpecs: [
      'Dobras precisas executadas conforme levantamento no local',
      'Fixação com parafusos emborrachados e buchas adequadas',
      'Selagem com poliuretano (PU) em toda a linha de encontro',
      'Bitolas selecionadas de acordo com o vão e exposição ao vento',
    ],
    faqs: [
      {
        question: 'Qual a diferença entre algerosa e rufo?',
        answer:
          'Na Região Sul, o termo algerosa refere-se aos acabamentos e peças de funilaria instalados no encontro com paredes e divisas para direcionar e vedar a passagem da água. Em muitos casos, atua em conjunto com rufos de encosto ou capa.',
      },
      {
        question: 'Mancha de umidade no alto da parede pode ser falta de algerosa?',
        answer:
          'Sim. Com frequência, a umidade próxima ao teto junto a paredes de divisa decorre de falha na vedação, ressecamento do selante ou ausência de algerosa dimensionada corretamente.',
      },
    ],
  },
  {
    id: 'rufos',
    slug: 'rufos',
    index: '03',
    title: 'Rufos Metálicos',
    shortTitle: 'Rufos',
    category: 'Vedação e Divisas',
    summary:
      'Fabricação e instalação de rufos externos, de encosto e de capa para proteção de junções, platibandas e áreas vulneráveis.',
    description:
      'Os rufos metálicos protegem pontos críticos de encontro entre diferentes planos construtivos, reduzindo drasticamente a penetração de água da chuva levada pelo vento. Produzimos rufos externos, de encosto e modelos especiais adaptados a cada geometria de alvenaria ou estrutura metálica.',
    image: IMAGES.rufos,
    imageAlt: 'Rufo metálico fabricado e instalado sob medida pela Benisse Funilaria',
    materials: ['Galvalume', 'Aço Galvanizado', 'Pintura Eletrostática'],
    benefits: [
      'Proteção eficaz em encontros com paredes, chaminés e platibandas',
      'Redução de infiltrações laterais causadas por chuvas com vento',
      'Acabamento alinhado que valoriza a estética externa do imóvel',
      'Alta resistência estrutural em chapas dimensionadas para o projeto',
    ],
    technicalSpecs: [
      'Perfis externos, de encosto ou tipo capa sob medida',
      'Dobras em ângulo rigoroso com pingadeira integrada quando necessário',
      'Vedação contínua com PU industrial resistente a raios UV',
      'Opções em chapa natural ou pintura eletrostática combinando com a fachada',
    ],
    faqs: [
      {
        question: 'Em quais locais o rufo é indispensável?',
        answer:
          'Sempre que houver encontro entre uma superfície inclinada ou plana e uma parede vertical, em muros de divisa, platibandas, marquises e passagens de dutos ou chaminés.',
      },
    ],
  },
  {
    id: 'coifas',
    slug: 'coifas',
    index: '04',
    title: 'Coifas Metálicas Sob Medida',
    shortTitle: 'Coifas',
    category: 'Exaustão e Dutos',
    summary:
      'Fabricação de coifas metálicas residenciais, comerciais e industriais projetadas conforme o espaço e a aplicação.',
    description:
      'Confeccionamos coifas metálicas sob medida para áreas gourmet, churrasqueiras, cozinhas residenciais, restaurantes e ambientes industriais. Cada coifa é dimensionada para captar fumaça, vapor e calor com eficiência, combinando funcionalidade e acabamento metálico limpo.',
    image: IMAGES.coifas,
    imageAlt: 'Coifa metálica sob medida fabricada pela Benisse Funilaria',
    materials: ['Aço Galvanizado', 'Aço Inox', 'Pintura Eletrostática'],
    benefits: [
      'Captação eficiente de fumaça, gordura e vapores no ambiente',
      'Dimensões exatas para bancadas, churrasqueiras e cozinhas comerciais',
      'Estrutura rígida com acabamento reforçado nas arestas',
      'Integração direta com a rede de dutos e chapéu terminal',
    ],
    technicalSpecs: [
      'Fabricação sob medida em formatos piramidais, retangulares ou de ilha',
      'Acabamento em chapa galvanizada, pintura eletrostática ou aço inox',
      'Rebitagem firme e vedação das junções internas',
      'Compatível com sistemas de exaustão natural ou mecânica',
    ],
    faqs: [
      {
        question: 'Vocês fabricam coifas para churrasqueiras e cozinhas comerciais?',
        answer:
          'Sim. Desenvolvemos coifas tanto para áreas gourmet residenciais quanto para cozinhas de restaurantes e ambientes comerciais, sempre conforme as medidas do local.',
      },
    ],
  },
  {
    id: 'dutos',
    slug: 'dutos',
    index: '05',
    title: 'Dutos de Exaustão, Ventilação e Chapéus',
    shortTitle: 'Dutos',
    category: 'Exaustão e Dutos',
    summary:
      'Fabricação e instalação de dutos metálicos de condução e exaustão de ar, exaustores eólicos e chapéus sob medida.',
    description:
      'Projetamos e executamos linhas de dutos metálicos redondos ou retangulares para condução e exaustão de ar, fumaça e renovação térmica, além de chapéus de churrasqueira e lareira (giratório, tipo canhão e chinês) e exaustores eólicos.',
    image: IMAGES.dutos,
    imageAlt: 'Dutos metálicos de exaustão, ventilação e chapéus sob medida',
    materials: ['Aço Galvanizado', 'Galvalume', 'Alumínio'],
    benefits: [
      'Fluxo contínuo de ar e fumaça com baixa perda de carga',
      'Proteção da saída contra entrada de água da chuva e retorno de fumaça',
      'Soluções personalizadas para trajetos internos e externos',
      'Melhoria na circulação e renovação de ar em galpões e cozinhas',
    ],
    technicalSpecs: [
      'Dutos retangulares e circulares fabricados sob medida',
      'Curvas, reduções, flanges e suportes de fixação personalizados',
      'Chapéus para chaminés e churrasqueiras em diferentes modelos',
      'Instalação de exaustores eólicos para ventilação natural',
    ],
    faqs: [
      {
        question: 'Vocês produzem curvas, reduções e chapéus para chaminés?',
        answer:
          'Sim. Fabricamos toda a linha complementar de dutos, incluindo curvas, desvios, colarinhos de vedação e chapéus tipo canhão, chinês ou giratório.',
      },
    ],
  },
  {
    id: 'toldo',
    slug: 'toldo',
    index: '06',
    title: 'Toldo Metálico Sob Medida',
    shortTitle: 'Toldo',
    category: 'Sob Medida',
    summary:
      'Fabricação e instalação de toldo metálico sob medida para proteção de acessos, janelas, portas e fachadas, além de peças dobradas sob projeto.',
    description:
      'Fabricamos e instalamos toldos metálicos sob medida com estrutura firme, dobras precisas e acabamento alinhado à fachada. Projetados para proteger portas, janelas, garagens, passagens e fachadas comerciais contra sol e chuva, também executamos pingadeiras e perfis especiais sob encomenda.',
    image: IMAGES.toldo,
    imageAlt: 'Toldo metálico sob medida instalado para proteção de fachada e acesso',
    materials: ['Galvalume', 'Aço Galvanizado', 'Alumínio', 'Pintura Eletrostática'],
    benefits: [
      'Proteção eficiente contra chuva direta e incidência solar em portas e janelas',
      'Estrutura metálica sob medida com acabamento limpo integrado à fachada',
      'Alta durabilidade frente a ventos e variações climáticas',
      'Possibilidade de pintura eletrostática em cores personalizadas',
    ],
    technicalSpecs: [
      'Dimensões, projeção e caimento definidos conforme levantamento no local',
      'Chapas nas bitolas 24, 26 e 28 com fixação reforçada na alvenaria',
      'Acabamento lateral e frontal com dobras rígidas e vedação em PU',
      'Integração com rufos de encosto e calha de recolhimento quando necessário',
    ],
    faqs: [
      {
        question: 'Vocês fabricam toldo metálico nas medidas exatas do imóvel?',
        answer:
          'Sim. Realizamos a medição no local e fabricamos o toldo metálico sob medida para portas, janelas, corredores laterais ou fachadas comerciais, podendo incluir pintura eletrostática.',
      },
    ],
  },
];

export const DIFFERENTIALS = [
  {
    number: '01',
    title: 'Soluções sob medida',
    description:
      'Cada calha, algerosa, rufo, coifa, duto ou toldo é fabricado de acordo com as dimensões reais da sua obra, evitando adaptações improvisadas.',
  },
  {
    number: '02',
    title: 'Acabamento cuidadoso',
    description:
      'Dobras precisas, alinhamento rigoroso, redução de emendas e aplicação criteriosa de selante PU para um resultado limpo e estanque.',
  },
  {
    number: '03',
    title: 'Chapas nas bitolas corretas',
    description:
      'Trabalhamos com aço galvanizado, galvalume e alumínio nas bitolas 24, 26 e 28, dimensionadas conforme a exigência de cada peça.',
  },
  {
    number: '04',
    title: 'Atendimento personalizado',
    description:
      'Avaliação técnica direta para entender o problema do imóvel, indicar o perfil adequado e apresentar um orçamento transparente.',
  },
  {
    number: '05',
    title: 'Praticidade e agilidade',
    description:
      'Atendimento ágil via WhatsApp, agendamento organizado e execução limpa em ambientes residenciais, comerciais e industriais.',
  },
  {
    number: '06',
    title: 'Atenção às necessidades do cliente',
    description:
      'Orientação clara sobre materiais, manutenção preventiva e soluções definitivas, com garantia formal dos serviços executados.',
  },
];

export interface MaterialSpec {
  name: string;
  gauges: string;
  application: string;
  highlight: string;
}

export const MATERIALS: MaterialSpec[] = [
  {
    name: 'Aço Galvanizado',
    gauges: 'Bitolas 24 · 26 · 28',
    application: 'Calhas, algerosas, rufos, dutos e peças industriais',
    highlight: 'Revestimento de zinco contra oxidação com ótima rigidez mecânica.',
  },
  {
    name: 'Galvalume',
    gauges: 'Bitolas 24 · 26 · 28',
    application: 'Calhas externas, rufos, pingadeiras e divisas expostas',
    highlight: 'Liga de alumínio e zinco com elevada resistência às intempéries.',
  },
  {
    name: 'Alumínio',
    gauges: 'Sob especificação',
    application: 'Calhas contínuas, acabamentos de fachada e peças especiais',
    highlight: 'Leveza estrutural e alta resistência à corrosão atmosférica.',
  },
  {
    name: 'Pintura Eletrostática',
    gauges: 'Cores sob consulta',
    application: 'Calhas aparentes, condutores, rufos e pingadeiras',
    highlight: 'Integração estética com a fachada e camada extra de proteção.',
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  referenceNote: string;
  image: string;
  imageAlt: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-calha',
    title: 'Calhas Metálicas e Condutores',
    category: 'Escoamento Pluvial',
    caption:
      'Calha metálica com condutor alinhado para captação e escoamento contínuo de águas pluviais.',
    referenceNote: 'Calhas sob medida',
    image: IMAGES.gutters,
    imageAlt: 'Calhas metálicas e condutores fabricados sob medida',
  },
  {
    id: 'gal-algerosa',
    title: 'Algerosas Sob Medida e Vedação',
    category: 'Vedação e Divisas',
    caption:
      'Instalação de algerosa dobrada sob medida com vedação em encontro de parede e divisa.',
    referenceNote: 'Vedação e acabamento',
    image: IMAGES.algerosas,
    imageAlt: 'Algerosa sob medida instalada com vedação junto à alvenaria',
  },
  {
    id: 'gal-coifa',
    title: 'Coifas Metálicas Sob Medida',
    category: 'Exaustão e Dutos',
    caption:
      'Coifa metálica confeccionada conforme as dimensões do ambiente para captação eficiente.',
    referenceNote: 'Coifas sob medida',
    image: IMAGES.coifas,
    imageAlt: 'Coifa metálica fabricada sob medida',
  },
  {
    id: 'gal-duto',
    title: 'Dutos de Exaustão e Ventilação',
    category: 'Exaustão e Dutos',
    caption:
      'Dutos metálicos sob medida para condução, exaustão de ar e chapéus de saída.',
    referenceNote: 'Dutos e exaustão',
    image: IMAGES.dutos,
    imageAlt: 'Dutos metálicos de exaustão e ventilação sob medida',
  },
  {
    id: 'gal-rufo',
    title: 'Rufos Metálicos',
    category: 'Vedação e Divisas',
    caption:
      'Rufos dobrados com ângulos definidos e vedação profissional para proteção de encontros e platibandas.',
    referenceNote: 'Rufos sob medida',
    image: IMAGES.rufos,
    imageAlt: 'Rufo metálico instalado sob medida para proteção e vedação',
  },
  {
    id: 'gal-toldo',
    title: 'Toldo Metálico Sob Medida',
    category: 'Sob Medida',
    caption:
      'Toldo metálico fabricado e instalado sob medida para proteção de portas, janelas e acessos.',
    referenceNote: 'Toldo sob medida',
    image: IMAGES.toldo,
    imageAlt: 'Toldo metálico sob medida instalado em fachada',
  },
];

export interface CityCoverage {
  id: string;
  slug: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  neighborhoods: string[];
  highlights: string[];
}

export const CITIES: CityCoverage[] = [
  {
    id: 'cachoeirinha',
    slug: 'cachoeirinha',
    name: 'Cachoeirinha',
    badge: 'Base Operacional',
    headline: 'Funilaria, Calhas e Algerosas em Cachoeirinha',
    description:
      'Com base localizada em Cachoeirinha, atendemos residências, comércios e o Distrito Industrial com agilidade na fabricação e instalação de calhas, algerosas, rufos, pingadeiras, coifas e dutos sob medida.',
    neighborhoods: [
      'Centro',
      'Vila Fátima',
      'Granja Esperança',
      'Parque da Matriz',
      'Anair',
      'Betânia',
      'Distrito Industrial',
      'Vila Imbuí',
      'Bela Vista',
    ],
    highlights: [
      'Atendimento ágil na fabricação e entrega de peças sob medida',
      'Instalação de calhas e algerosas residenciais e comerciais',
      'Projetos de funilaria e dutos para empresas no Distrito Industrial',
    ],
  },
  {
    id: 'gravatai',
    slug: 'gravatai',
    name: 'Gravataí',
    badge: 'Atendimento Rápido',
    headline: 'Calhas, Rufos e Funilaria em Gravataí',
    description:
      'Atendemos toda a cidade de Gravataí com sistemas completos de escoamento pluvial e peças metálicas sob medida, dimensionados para suportar as chuvas intensas e ventos característicos da região.',
    neighborhoods: [
      'Centro',
      'Parque dos Anjos',
      'Morada do Vale',
      'Barnabé',
      'São Jerônimo',
      'Neópolis',
      'Cruzeiro',
      'Salgado Filho',
      'Vila Branca',
    ],
    highlights: [
      'Calhas de alta vazão para residências e pavilhões industriais',
      'Fabricação de algerosas, rufos e pingadeiras para muros e divisas',
      'Limpeza e manutenção preventiva em redes de escoamento existentes',
    ],
  },
  {
    id: 'canoas',
    slug: 'canoas',
    name: 'Canoas',
    badge: 'Residencial e Industrial',
    headline: 'Soluções em Funilaria e Calhas em Canoas',
    description:
      'Prestamos atendimento técnico em Canoas para instalação de calhas, algerosas, rufos, coifas e dutos metálicos em casas, condomínios, lojas e galpões logísticos.',
    neighborhoods: [
      'Centro',
      'Niterói',
      'Marechal Rondon',
      'Guajuviras',
      'Mathias Velho',
      'Igara',
      'Rio Branco',
      'Fátima',
      'Estância Velha',
      'Olaria',
    ],
    highlights: [
      'Calhas e condutores em galvalume, aço galvanizado ou alumínio',
      'Funilaria sob medida para galpões comerciais e logísticos',
      'Sistemas de exaustão, coifas e dutos para estabelecimentos',
    ],
  },
  {
    id: 'porto-alegre',
    slug: 'porto-alegre',
    name: 'Porto Alegre',
    badge: 'Todas as Zonas',
    headline: 'Funilaria Sob Medida em Porto Alegre',
    description:
      'Atendemos todas as regiões de Porto Alegre — Zona Norte, Zona Sul, Zona Leste e Centro — com calhas estéticas, pintura eletrostática, rufos, pingadeiras, coifas e manutenção de escoamento.',
    neighborhoods: [
      'Menino Deus',
      'Moinhos de Vento',
      'Petrópolis',
      'Tristeza',
      'Ipanema',
      'Sarandi',
      'Partenon',
      'Auxiliadora',
      'Bela Vista',
      "Passo d'Areia",
    ],
    highlights: [
      'Calhas e condutores com pintura eletrostática para fachadas',
      'Atendimento a residências, prédios e condomínios',
      'Soluções precisas de algerosas e rufos para contenção de infiltrações',
    ],
  },
  {
    id: 'alvorada',
    slug: 'alvorada',
    name: 'Alvorada',
    badge: 'Atendimento Completo',
    headline: 'Calhas, Algerosas e Funilaria em Alvorada',
    description:
      'Levamos serviços de funilaria sob medida para moradores e empresas de Alvorada, executando calhas residenciais, algerosas de divisa, pingadeiras e proteção contra escorrimentos em muros.',
    neighborhoods: [
      'Centro',
      'Bela Vista',
      'Piratini',
      'Aparecida',
      'Passo do Feijó',
      'Formosa',
      'Sumaré',
      'Porto Verde',
      'Intersul',
    ],
    highlights: [
      'Instalação de calhas galvanizadas e galvalume sob medida',
      'Algerosas e pingadeiras para proteção de muros e fachadas',
      'Orçamento transparente e atendimento ágil pelo WhatsApp',
    ],
  },
  {
    id: 'viamao',
    slug: 'viamao',
    name: 'Viamão',
    badge: 'Residencial e Condomínios',
    headline: 'Funilaria, Calhas e Coifas em Viamão',
    description:
      'Atendemos o centro, bairros e condomínios de Viamão com fabricação e instalação de calhas, rufos, pingadeiras, coifas para áreas gourmet e chapéus de churrasqueira e lareira.',
    neighborhoods: [
      'Centro',
      'Santa Isabel',
      'Cecília',
      'Augusta Marina',
      'Caminho do Meio',
      'Viamópolis',
      'Tarumã',
      'Estalagem',
      'Fiorelo',
    ],
    highlights: [
      'Acabamentos metálicos estéticos para residências e condomínios',
      'Chapéus de lareira, churrasqueira e coifas sob medida',
      'Limpeza preventiva e manutenção de calhas e condutores',
    ],
  },
  {
    id: 'sapucaia-do-sul',
    slug: 'sapucaia-do-sul',
    name: 'Sapucaia do Sul',
    badge: 'Comercial e Industrial',
    headline: 'Funilaria Industrial e Residencial em Sapucaia do Sul',
    description:
      'Executamos projetos de funilaria em Sapucaia do Sul, com calhas robustas de grande vazão em chapa bitola 24 e 26, rufos externos, dutos metálicos e peças especiais para comércios e indústrias.',
    neighborhoods: [
      'Centro',
      'Vargas',
      'Cohab',
      'Piratini',
      'Capão da Cruz',
      'São José',
      'Pasqualini',
      'Silva',
      'Nova Sapucaia',
    ],
    highlights: [
      'Calhas coletoras de alta vazão e condutores reforçados',
      'Dutos de ventilação, exaustores eólicos e rufos externos',
      'Atendimento corporativo com garantia formal de serviço',
    ],
  },
];

export const GENERAL_FAQS: ServiceFaq[] = [
  {
    question: 'A avaliação técnica e o orçamento têm custo?',
    answer:
      'Não. Realizamos o levantamento técnico e elaboramos o orçamento sem compromisso para os municípios atendidos na Região Metropolitana de Porto Alegre.',
  },
  {
    question: 'Quais espessuras de chapa vocês utilizam?',
    answer:
      'Trabalhamos com chapas nas bitolas 24, 26 e 28 (aço galvanizado e galvalume), além de alumínio e opções com pintura eletrostática, selecionadas conforme a largura da peça e exigência de vazão.',
  },
  {
    question: 'Os serviços possuem garantia?',
    answer:
      'Sim. Todas as instalações e fabricações sob medida da Benisse Funilaria contam com garantia formal conforme o serviço executado e os materiais especificados.',
  },
  {
    question: 'Quais formas de pagamento estão disponíveis?',
    answer:
      'Aceitamos Pix, cartões de crédito com opção de parcelamento e faturamento corporativo para empresas mediante consulta.',
  },
  {
    question: 'Como posso solicitar um orçamento rápido?',
    answer:
      'Você pode clicar em qualquer botão de WhatsApp do site ou preencher o formulário na página de Contato informando cidade, serviço desejado e medidas aproximadas para agilizar o atendimento.',
  },
];
