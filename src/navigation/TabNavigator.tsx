import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Pantallas
import { HomeScreen, StoriesScreen, CharactersScreen, SettingsScreen } from '../app';

// Colores del tema
import { colors } from '../styles/theme';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const insets = useSafeAreaInsets();
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Inicio') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Historias') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Personajes') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Configuración') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else {
            iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: 'transparent',
          borderTopWidth: 0,
          height: Platform.OS === 'ios' ? 90 + insets.bottom : 70 + insets.bottom,
          paddingBottom: Platform.OS === 'ios' ? 30 + insets.bottom : 15 + insets.bottom,
          paddingTop: 15,
          shadowColor: 'transparent',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0,
          shadowRadius: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 5,
          marginBottom: 2,
        },
        tabBarIconStyle: {
          marginTop: 0.5,
        },
        headerStyle: {
          backgroundColor: colors.primary,
            // Quitar línea/sombra inferior en Android
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerBackground: () => (
          <View style={{ flex: 1, backgroundColor: colors.primary }} />
        ),
        headerTransparent: true,
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
          // Quitar sombra/borde inferior del header (iOS/Android)
          headerShadowVisible: false,
      })}
    >
      <Tab.Screen 
        name="Inicio" 
        component={HomeScreen}
        options={{ 
          title: 'Historia Sagrada',
          tabBarLabel: 'Inicio'
        }}
      />
      <Tab.Screen 
        name="Historias" 
        component={StoriesScreen}
        options={{ 
          title: 'Historias Bíblicas',
          tabBarLabel: 'Historias'
        }}
      />
      <Tab.Screen 
        name="Personajes" 
        component={CharactersScreen}
        options={{ 
          title: 'Personajes',
          tabBarLabel: 'Personajes'
        }}
      />
      <Tab.Screen 
        name="Configuración" 
        component={SettingsScreen}
        options={{ 
          title: 'Configuración',
          tabBarLabel: 'Configuración'
        }}
      />
    </Tab.Navigator>
  );
}