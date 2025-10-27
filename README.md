# Historia Sagrada - App de Historias Bíblicas

Una aplicación móvil desarrollada con React Native y Expo para explorar las maravillosas historias de la Biblia y conocer a los personajes más importantes de la fe cristiana.

## 🏗️ Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── Button.tsx       # Botón personalizable
│   ├── Card.tsx         # Tarjeta de contenido
│   ├── Header.tsx       # Encabezado personalizable
│   └── index.ts         # Exportaciones de componentes
├── data/                # Datos y tipos
│   └── bibleData.ts     # Historias y personajes bíblicos
├── navigation/          # Navegación de la app
│   └── TabNavigator.tsx # Navegador de pestañas
├── screens/             # Pantallas principales
│   ├── HomeScreen.tsx   # Pantalla de inicio
│   ├── StoriesScreen.tsx # Pantalla de historias
│   ├── CharactersScreen.tsx # Pantalla de personajes
│   ├── SettingsScreen.tsx # Pantalla de configuración
│   └── index.ts         # Exportaciones de pantallas
├── styles/              # Estilos y temas
│   └── theme.ts         # Colores, tipografía y estilos
└── utils/               # Utilidades y helpers
    └── helpers.ts        # Funciones de utilidad
```

## 🎨 Características Principales

### 📱 Pantallas
- **Inicio**: Dashboard con estadísticas y acceso rápido
- **Historias**: Lista de historias bíblicas con filtros y búsqueda
- **Personajes**: Catálogo de personajes bíblicos organizados por período
- **Configuración**: Ajustes de la aplicación y preferencias

### 🧩 Componentes Reutilizables
- **Button**: Botón personalizable con variantes y tamaños
- **Card**: Tarjeta de contenido con diferentes estilos
- **Header**: Encabezado personalizable con iconos

### 📊 Datos Estructurados
- Historias bíblicas con metadatos completos
- Personajes con atributos y relaciones
- Sistema de categorización y etiquetas
- Preguntas de comprensión para cada historia

## 🚀 Tecnologías Utilizadas

- **React Native** - Framework de desarrollo móvil
- **Expo** - Plataforma de desarrollo
- **TypeScript** - Tipado estático
- **React Navigation** - Navegación entre pantallas
- **Expo Vector Icons** - Iconografía

## 📦 Dependencias Principales

```json
{
  "@expo/vector-icons": "^15.0.3",
  "@react-navigation/bottom-tabs": "^7.5.0",
  "@react-navigation/native": "^7.1.18",
  "expo": "~54.0.18",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "react-native-safe-area-context": "^5.6.1"
}
```

## 🎨 Sistema de Diseño

### Colores
- **Primario**: Verde bíblico (#2E7D32)
- **Secundario**: Dorado (#FF8F00)
- **Fondo**: Gris claro (#F5F5F5)
- **Texto**: Negro (#212121)

### Tipografía
- Tamaños desde 12px hasta 32px
- Pesos desde light (300) hasta bold (700)
- Altura de línea optimizada para legibilidad

### Espaciado
- Sistema de espaciado consistente (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- Bordes redondeados y sombras sutiles

## 🔧 Scripts Disponibles

```bash
# Iniciar el servidor de desarrollo
npm start

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios

# Ejecutar en web
npm run web
```

---

**Historia Sagrada** - Fortaleciendo la fe a través de las historias bíblicas 📖✨
