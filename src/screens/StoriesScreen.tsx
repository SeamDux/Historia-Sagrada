import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function StoriesScreen() {
  const [searchText, setSearchText] = useState('');
  
  const stories = [
    { id: 1, title: 'La Creación', book: 'Génesis', chapter: '1-2', description: 'Dios crea el mundo en seis días', category: 'Antiguo Testamento' },
    { id: 2, title: 'Adán y Eva', book: 'Génesis', chapter: '3', description: 'La caída del hombre en el jardín del Edén', category: 'Antiguo Testamento' },
    { id: 3, title: 'El Arca de Noé', book: 'Génesis', chapter: '6-9', description: 'Noé construye el arca y el diluvio', category: 'Antiguo Testamento' },
    { id: 4, title: 'La Torre de Babel', book: 'Génesis', chapter: '11', description: 'La confusión de lenguas', category: 'Antiguo Testamento' },
    { id: 5, title: 'Abraham', book: 'Génesis', chapter: '12-25', description: 'El padre de la fe', category: 'Antiguo Testamento' },
    { id: 6, title: 'Moisés y el Éxodo', book: 'Éxodo', chapter: '1-40', description: 'La liberación de Israel de Egipto', category: 'Antiguo Testamento' },
    { id: 7, title: 'El Nacimiento de Jesús', book: 'Lucas', chapter: '2', description: 'Jesús nace en Belén', category: 'Nuevo Testamento' },
    { id: 8, title: 'Los Milagros de Jesús', book: 'Mateo', chapter: '8-9', description: 'Jesús sana y hace milagros', category: 'Nuevo Testamento' },
    { id: 9, title: 'La Crucifixión', book: 'Juan', chapter: '19', description: 'Jesús muere en la cruz', category: 'Nuevo Testamento' },
    { id: 10, title: 'La Resurrección', book: 'Juan', chapter: '20', description: 'Jesús resucita al tercer día', category: 'Nuevo Testamento' },
  ];

  const categories = ['Todos', 'Antiguo Testamento', 'Nuevo Testamento'];

  const filteredStories = stories.filter(story => 
    story.title.toLowerCase().includes(searchText.toLowerCase()) ||
    story.description.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Historias de la Biblia</Text>
        <Text style={styles.subtitle}>Explora las historias más importantes</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#7f8c8d" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar historias..."
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#7f8c8d"
        />
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryChip}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Stories List */}
      <ScrollView style={styles.storiesContainer} showsVerticalScrollIndicator={false}>
        {filteredStories.map((story) => (
          <TouchableOpacity key={story.id} style={styles.storyCard}>
            <View style={styles.storyHeader}>
              <Text style={styles.storyTitle}>{story.title}</Text>
              <Ionicons name="bookmark-outline" size={20} color="#7f8c8d" />
            </View>
            <Text style={styles.storyBook}>{story.book} {story.chapter}</Text>
            <Text style={styles.storyDescription}>{story.description}</Text>
            <View style={styles.storyFooter}>
              <View style={styles.categoryTag}>
                <Text style={styles.categoryTagText}>{story.category}</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#7f8c8d" />
            </View>
          </TouchableOpacity>
        ))}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#2c3e50',
  },
  categoriesContainer: {
    marginBottom: 20,
    paddingLeft: 20,
  },
  categoryChip: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  storiesContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  storyCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  storyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  storyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    flex: 1,
  },
  storyBook: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '600',
    marginBottom: 8,
  },
  storyDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
    marginBottom: 12,
  },
  storyFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryTagText: {
    fontSize: 12,
    color: '#7f8c8d',
    fontWeight: '500',
  },
});

