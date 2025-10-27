// Utilidades generales para la aplicación Historia Sagrada

// Formateo de texto
export const formatText = (text: string, maxLength?: number): string => {
  if (maxLength && text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

// Formateo de tiempo de lectura
export const formatReadingTime = (minutes: number): string => {
  if (minutes < 1) {
    return 'Menos de 1 min';
  } else if (minutes === 1) {
    return '1 minuto';
  } else {
    return `${minutes} minutos`;
  }
};

// Formateo de fechas
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatRelativeDate = (date: Date): string => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) {
    return 'Hoy';
  } else if (diffInDays === 1) {
    return 'Ayer';
  } else if (diffInDays < 7) {
    return `Hace ${diffInDays} días`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `Hace ${weeks} semana${weeks > 1 ? 's' : ''}`;
  } else {
    return formatDate(date);
  }
};

// Validación de email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Generación de IDs únicos
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Debounce para búsquedas
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle para eventos frecuentes
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Almacenamiento local (AsyncStorage simulation)
export const storage = {
  async getItem(key: string): Promise<string | null> {
    try {
      // En una app real usarías AsyncStorage
      return localStorage.getItem(key);
    } catch (error) {
      console.error('Error getting item from storage:', error);
      return null;
    }
  },
  
  async setItem(key: string, value: string): Promise<void> {
    try {
      // En una app real usarías AsyncStorage
      localStorage.setItem(key, value);
    } catch (error) {
      console.error('Error setting item in storage:', error);
    }
  },
  
  async removeItem(key: string): Promise<void> {
    try {
      // En una app real usarías AsyncStorage
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing item from storage:', error);
    }
  }
};

// Funciones de progreso del usuario
export const progressUtils = {
  calculateProgress(completed: number, total: number): number {
    if (total === 0) return 0;
    return Math.round((completed / total) * 100);
  },
  
  getProgressText(completed: number, total: number): string {
    return `${completed} de ${total} completado`;
  },
  
  getProgressColor(progress: number): string {
    if (progress >= 80) return '#4CAF50'; // Verde
    if (progress >= 60) return '#FF9800'; // Naranja
    if (progress >= 40) return '#FFC107'; // Amarillo
    return '#F44336'; // Rojo
  }
};

// Funciones de búsqueda
export const searchUtils = {
  searchStories(query: string, stories: any[]): any[] {
    if (!query.trim()) return stories;
    
    const lowercaseQuery = query.toLowerCase();
    return stories.filter(story => 
      story.title.toLowerCase().includes(lowercaseQuery) ||
      story.description.toLowerCase().includes(lowercaseQuery) ||
      story.tags.some((tag: string) => tag.toLowerCase().includes(lowercaseQuery))
    );
  },
  
  searchCharacters(query: string, characters: any[]): any[] {
    if (!query.trim()) return characters;
    
    const lowercaseQuery = query.toLowerCase();
    return characters.filter(character => 
      character.name.toLowerCase().includes(lowercaseQuery) ||
      character.description.toLowerCase().includes(lowercaseQuery) ||
      character.attributes.some((attr: string) => attr.toLowerCase().includes(lowercaseQuery))
    );
  }
};

// Funciones de ordenamiento
export const sortUtils = {
  sortByTitle(a: { title: string }, b: { title: string }): number {
    return a.title.localeCompare(b.title, 'es');
  },
  
  sortByDate(a: { date?: Date }, b: { date?: Date }): number {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.getTime() - a.date.getTime();
  },
  
  sortByDifficulty(a: { difficulty: string }, b: { difficulty: string }): number {
    const difficultyOrder = { 'Fácil': 1, 'Intermedio': 2, 'Avanzado': 3 };
    return difficultyOrder[a.difficulty as keyof typeof difficultyOrder] - 
           difficultyOrder[b.difficulty as keyof typeof difficultyOrder];
  }
};

// Funciones de estadísticas
export const statsUtils = {
  calculateTotalReadingTime(stories: any[]): number {
    return stories.reduce((total, story) => total + (story.estimatedTime || 0), 0);
  },
  
  getMostReadCategory(stories: any[]): string {
    const categories: { [key: string]: number } = {};
    stories.forEach(story => {
      categories[story.category] = (categories[story.category] || 0) + 1;
    });
    
    return Object.keys(categories).reduce((a, b) => 
      categories[a] > categories[b] ? a : b
    );
  },
  
  getAverageDifficulty(stories: any[]): string {
    if (stories.length === 0) return 'Fácil';
    
    const difficultyValues = { 'Fácil': 1, 'Intermedio': 2, 'Avanzado': 3 };
    const totalDifficulty = stories.reduce((sum, story) => 
      sum + difficultyValues[story.difficulty as keyof typeof difficultyValues], 0
    );
    
    const average = totalDifficulty / stories.length;
    
    if (average <= 1.5) return 'Fácil';
    if (average <= 2.5) return 'Intermedio';
    return 'Avanzado';
  }
};
