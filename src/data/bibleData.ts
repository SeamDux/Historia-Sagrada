// Tipos de datos para las historias bíblicas

export interface BibleCharacter {
  id: string;
  name: string;
  description: string;
  period: string;
  image?: string;
  stories: string[]; // IDs de las historias relacionadas
  attributes: string[];
  verses: string[];
}

export interface BibleStory {
  id: string;
  title: string;
  description: string;
  content: string;
  characters: string[]; // IDs de los personajes
  book: string;
  chapter: number;
  verses: string;
  period: 'Antiguo Testamento' | 'Nuevo Testamento';
  category: 'Creación' | 'Patriarcas' | 'Éxodo' | 'Jueces' | 'Reyes' | 'Profetas' | 'Evangelios' | 'Hechos' | 'Epístolas' | 'Apocalipsis';
  difficulty: 'Fácil' | 'Intermedio' | 'Avanzado';
  estimatedTime: number; // en minutos
  image?: string;
  audioUrl?: string;
  questions?: StoryQuestion[];
  moral?: string;
  tags: string[];
}

export interface StoryQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UserProgress {
  userId: string;
  completedStories: string[];
  completedCharacters: string[];
  favoriteStories: string[];
  readingTime: number; // en minutos
  lastReadDate: Date;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  category: 'Lectura' | 'Conocimiento' | 'Dedicación' | 'Especial';
}

// Datos de ejemplo para las historias bíblicas
export const bibleStories: BibleStory[] = [
  {
    id: 'creation',
    title: 'La Creación del Mundo',
    description: 'Dios crea el mundo en seis días y descansa en el séptimo',
    content: 'En el principio creó Dios los cielos y la tierra...',
    characters: ['god'],
    book: 'Génesis',
    chapter: 1,
    verses: '1:1-2:3',
    period: 'Antiguo Testamento',
    category: 'Creación',
    difficulty: 'Fácil',
    estimatedTime: 10,
    tags: ['creación', 'dios', 'principio'],
    moral: 'Dios es el creador de todas las cosas y merece nuestro respeto y adoración.',
    questions: [
      {
        id: 'q1',
        question: '¿En cuántos días creó Dios el mundo?',
        options: ['Seis días', 'Siete días', 'Cinco días', 'Ocho días'],
        correctAnswer: 0,
        explanation: 'Dios creó el mundo en seis días y descansó en el séptimo día.'
      }
    ]
  },
  {
    id: 'adam-eve',
    title: 'Adán y Eva',
    description: 'La creación del primer hombre y la primera mujer',
    content: 'Entonces Jehová Dios formó al hombre del polvo de la tierra...',
    characters: ['adam', 'eve', 'god'],
    book: 'Génesis',
    chapter: 2,
    verses: '2:7-2:25',
    period: 'Antiguo Testamento',
    category: 'Creación',
    difficulty: 'Fácil',
    estimatedTime: 8,
    tags: ['adán', 'eva', 'jardín', 'edén'],
    moral: 'Dios nos creó a su imagen y nos dio la responsabilidad de cuidar su creación.'
  },
  {
    id: 'noah-ark',
    title: 'Noé y el Arca',
    description: 'Noé construye un arca para salvar a su familia y los animales del diluvio',
    content: 'Y dijo Dios a Noé: He decidido el fin de todo ser...',
    characters: ['noah', 'god'],
    book: 'Génesis',
    chapter: 6,
    verses: '6:9-9:17',
    period: 'Antiguo Testamento',
    category: 'Patriarcas',
    difficulty: 'Intermedio',
    estimatedTime: 15,
    tags: ['noé', 'arca', 'diluvio', 'pacto'],
    moral: 'La obediencia a Dios nos protege y nos lleva a la salvación.'
  },
  {
    id: 'jesus-birth',
    title: 'El Nacimiento de Jesús',
    description: 'El nacimiento milagroso de Jesucristo en Belén',
    content: 'Y aconteció que estando ellos allí, se cumplieron los días de su alumbramiento...',
    characters: ['jesus', 'mary', 'joseph'],
    book: 'Lucas',
    chapter: 2,
    verses: '2:1-20',
    period: 'Nuevo Testamento',
    category: 'Evangelios',
    difficulty: 'Fácil',
    estimatedTime: 12,
    tags: ['jesús', 'nacimiento', 'belén', 'navidad'],
    moral: 'Jesús vino al mundo para salvarnos y traernos esperanza.'
  }
];

// Datos de ejemplo para los personajes bíblicos
export const bibleCharacters: BibleCharacter[] = [
  {
    id: 'god',
    name: 'Dios',
    description: 'El Creador del universo y Padre de toda la humanidad',
    period: 'Eterno',
    stories: ['creation', 'adam-eve', 'noah-ark'],
    attributes: ['Creador', 'Omnipotente', 'Omnisciente', 'Amoroso', 'Justo'],
    verses: ['Génesis 1:1', 'Juan 3:16', '1 Juan 4:8']
  },
  {
    id: 'adam',
    name: 'Adán',
    description: 'El primer hombre creado por Dios',
    period: 'Creación',
    stories: ['adam-eve'],
    attributes: ['Primer hombre', 'Creado a imagen de Dios', 'Responsable del jardín'],
    verses: ['Génesis 2:7', 'Génesis 1:27']
  },
  {
    id: 'eve',
    name: 'Eva',
    description: 'La primera mujer, creada de la costilla de Adán',
    period: 'Creación',
    stories: ['adam-eve'],
    attributes: ['Primera mujer', 'Ayuda idónea', 'Madre de todos'],
    verses: ['Génesis 2:22', 'Génesis 3:20']
  },
  {
    id: 'noah',
    name: 'Noé',
    description: 'Hombre justo que construyó el arca para salvar a su familia',
    period: 'Patriarcas',
    stories: ['noah-ark'],
    attributes: ['Justo', 'Obediente', 'Constructor', 'Salvador'],
    verses: ['Génesis 6:9', 'Génesis 7:1']
  },
  {
    id: 'jesus',
    name: 'Jesús',
    description: 'El Hijo de Dios, Salvador del mundo',
    period: 'Nuevo Testamento',
    stories: ['jesus-birth'],
    attributes: ['Hijo de Dios', 'Salvador', 'Maestro', 'Sanador', 'Rey'],
    verses: ['Juan 3:16', 'Mateo 1:21', 'Filipenses 2:6-7']
  },
  {
    id: 'mary',
    name: 'María',
    description: 'La madre de Jesús, elegida por Dios',
    period: 'Nuevo Testamento',
    stories: ['jesus-birth'],
    attributes: ['Madre de Jesús', 'Virgen', 'Humilde', 'Obediente'],
    verses: ['Lucas 1:28', 'Lucas 1:38']
  },
  {
    id: 'joseph',
    name: 'José',
    description: 'El padre adoptivo de Jesús, carpintero de Nazaret',
    period: 'Nuevo Testamento',
    stories: ['jesus-birth'],
    attributes: ['Carpintero', 'Justo', 'Protector', 'Padre adoptivo'],
    verses: ['Mateo 1:19', 'Mateo 1:24']
  }
];

// Funciones de utilidad para trabajar con los datos
export const getStoryById = (id: string): BibleStory | undefined => {
  return bibleStories.find(story => story.id === id);
};

export const getCharacterById = (id: string): BibleCharacter | undefined => {
  return bibleCharacters.find(character => character.id === id);
};

export const getStoriesByCategory = (category: BibleStory['category']): BibleStory[] => {
  return bibleStories.filter(story => story.category === category);
};

export const getStoriesByPeriod = (period: BibleStory['period']): BibleStory[] => {
  return bibleStories.filter(story => story.period === period);
};

export const getStoriesByCharacter = (characterId: string): BibleStory[] => {
  return bibleStories.filter(story => story.characters.includes(characterId));
};

export const getCharactersByStory = (storyId: string): BibleCharacter[] => {
  const story = getStoryById(storyId);
  if (!story) return [];
  
  return story.characters
    .map(characterId => getCharacterById(characterId))
    .filter((character): character is BibleCharacter => character !== undefined);
};
