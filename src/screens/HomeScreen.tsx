import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const stories = [
    { id: 1, title: 'La Creación', subtitle: 'Génesis 1-2', color: '#4A90E2' },
    { id: 2, title: 'Adán y Eva', subtitle: 'Génesis 3', color: '#7ED321' },
    { id: 3, title: 'El Arca de Noé', subtitle: 'Génesis 6-9', color: '#F5A623' },
    { id: 4, title: 'La Torre de Babel', subtitle: 'Génesis 11', color: '#D0021B' },
    { id: 5, title: 'Abraham', subtitle: 'Génesis 12-25', color: '#9013FE' },
    { id: 6, title: 'Moisés y el Éxodo', subtitle: 'Éxodo 1-40', color: '#50E3C2' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>¡Bienvenido!</Text>
          <Text style={styles.subtitle}>Descubre las historias más hermosas de la Biblia</Text>
        </View>

        {/* Featured Story */}
        <View style={styles.featuredCard}>
          <View style={styles.featuredContent}>
            <Text style={styles.featuredTitle}>Historia Destacada</Text>
            <Text style={styles.featuredSubtitle}>La Creación del Mundo</Text>
            <Text style={styles.featuredDescription}>
              "En el principio creó Dios los cielos y la tierra..."
            </Text>
            <TouchableOpacity style={styles.featuredButton}>
              <Text style={styles.featuredButtonText}>Leer Historia</Text>
              <Ionicons name="arrow-forward" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Stories Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Historias Populares</Text>
          <View style={styles.storiesGrid}>
            {stories.map((story) => (
              <TouchableOpacity key={story.id} style={[styles.storyCard, { backgroundColor: story.color }]}>
                <Text style={styles.storyTitle}>{story.title}</Text>
                <Text style={styles.storySubtitle}>{story.subtitle}</Text>
                <Ionicons name="book" size={24} color="#fff" style={styles.storyIcon} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.actionCard}>
              <Ionicons name="search" size={24} color="#4A90E2" />
              <Text style={styles.actionText}>Buscar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Ionicons name="heart" size={24} color="#D0021B" />
              <Text style={styles.actionText}>Favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Ionicons name="bookmark" size={24} color="#7ED321" />
              <Text style={styles.actionText}>Marcadores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Ionicons name="settings" size={24} color="#F5A623" />
              <Text style={styles.actionText}>Configuración</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  featuredCard: {
    margin: 20,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featuredContent: {
    alignItems: 'center',
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 5,
  },
  featuredSubtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 10,
  },
  featuredDescription: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  featuredButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  featuredButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  storiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  storyCard: {
    width: '48%',
    height: 120,
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    justifyContent: 'space-between',
    position: 'relative',
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  storySubtitle: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.9,
  },
  storyIcon: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginTop: 8,
  },
});

