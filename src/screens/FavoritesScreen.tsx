import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function FavoritesScreen() {
  const favorites = [
    { id: 1, title: 'La Creación', book: 'Génesis 1-2', date: 'Hace 2 días' },
    { id: 2, title: 'El Nacimiento de Jesús', book: 'Lucas 2', date: 'Hace 1 semana' },
    { id: 3, title: 'Moisés y el Éxodo', book: 'Éxodo 1-40', date: 'Hace 2 semanas' },
    { id: 4, title: 'La Resurrección', book: 'Juan 20', date: 'Hace 3 semanas' },
  ];

  const recentReads = [
    { id: 1, title: 'Abraham', book: 'Génesis 12-25', progress: 75 },
    { id: 2, title: 'El Arca de Noé', book: 'Génesis 6-9', progress: 100 },
    { id: 3, title: 'Los Milagros de Jesús', book: 'Mateo 8-9', progress: 30 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Mis Favoritos</Text>
          <Text style={styles.subtitle}>Tus historias guardadas y recientes</Text>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Ionicons name="heart" size={24} color="#D0021B" />
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Favoritos</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="book" size={24} color="#4A90E2" />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Leídas</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="time" size={24} color="#7ED321" />
            <Text style={styles.statNumber}>3h</Text>
            <Text style={styles.statLabel}>Tiempo</Text>
          </View>
        </View>

        {/* Favorites Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Historias Favoritas</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Ver todas</Text>
            </TouchableOpacity>
          </View>
          
          {favorites.map((favorite) => (
            <TouchableOpacity key={favorite.id} style={styles.favoriteCard}>
              <View style={styles.favoriteContent}>
                <View style={styles.favoriteIcon}>
                  <Ionicons name="heart" size={20} color="#D0021B" />
                </View>
                <View style={styles.favoriteInfo}>
                  <Text style={styles.favoriteTitle}>{favorite.title}</Text>
                  <Text style={styles.favoriteBook}>{favorite.book}</Text>
                  <Text style={styles.favoriteDate}>{favorite.date}</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#7f8c8d" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Reads Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Lecturas Recientes</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Ver todas</Text>
            </TouchableOpacity>
          </View>
          
          {recentReads.map((read) => (
            <TouchableOpacity key={read.id} style={styles.recentCard}>
              <View style={styles.recentContent}>
                <View style={styles.recentIcon}>
                  <Ionicons name="book" size={20} color="#4A90E2" />
                </View>
                <View style={styles.recentInfo}>
                  <Text style={styles.recentTitle}>{read.title}</Text>
                  <Text style={styles.recentBook}>{read.book}</Text>
                  <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                      <View style={[styles.progressFill, { width: `${read.progress}%` }]} />
                    </View>
                    <Text style={styles.progressText}>{read.progress}%</Text>
                  </View>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#7f8c8d" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.actionCard}>
              <Ionicons name="download" size={24} color="#4A90E2" />
              <Text style={styles.actionText}>Descargar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Ionicons name="share" size={24} color="#7ED321" />
              <Text style={styles.actionText}>Compartir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Ionicons name="sync" size={24} color="#F5A623" />
              <Text style={styles.actionText}>Sincronizar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Ionicons name="trash" size={24} color="#D0021B" />
              <Text style={styles.actionText}>Limpiar</Text>
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
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 30,
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    fontWeight: '500',
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  seeAllText: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '600',
  },
  favoriteCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  favoriteContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  favoriteIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffe6e6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  favoriteInfo: {
    flex: 1,
  },
  favoriteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  favoriteBook: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '600',
    marginBottom: 2,
  },
  favoriteDate: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  recentCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  recentContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  recentIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e6f3ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  recentInfo: {
    flex: 1,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  recentBook: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '600',
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4A90E2',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: '#7f8c8d',
    fontWeight: '600',
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 10,
  },
  actionCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
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

