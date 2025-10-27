import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const menuItems = [
    { icon: 'person', title: 'Mi Perfil', subtitle: 'Editar información personal' },
    { icon: 'bookmark', title: 'Mis Marcadores', subtitle: 'Gestionar marcadores' },
    { icon: 'download', title: 'Descargas', subtitle: 'Contenido descargado' },
    { icon: 'share', title: 'Compartir App', subtitle: 'Invitar amigos' },
    { icon: 'help-circle', title: 'Ayuda', subtitle: 'Centro de ayuda' },
    { icon: 'information-circle', title: 'Acerca de', subtitle: 'Versión 1.0.0' },
  ];

  const settingsItems = [
    { icon: 'notifications', title: 'Notificaciones', type: 'switch', value: notificationsEnabled, onValueChange: setNotificationsEnabled },
    { icon: 'moon', title: 'Modo Oscuro', type: 'switch', value: darkModeEnabled, onValueChange: setDarkModeEnabled },
    { icon: 'language', title: 'Idioma', subtitle: 'Español', type: 'arrow' },
    { icon: 'text', title: 'Tamaño de Fuente', subtitle: 'Mediano', type: 'arrow' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Mi Perfil</Text>
          <Text style={styles.subtitle}>Gestiona tu cuenta y preferencias</Text>
        </View>

        {/* User Info Card */}
        <View style={styles.userCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={40} color="#4A90E2" />
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="camera" size={16} color="#4A90E2" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>Usuario</Text>
          <Text style={styles.userEmail}>usuario@ejemplo.com</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Historias</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>4</Text>
              <Text style={styles.statLabel}>Favoritos</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>3h</Text>
              <Text style={styles.statLabel}>Tiempo</Text>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cuenta</Text>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Ionicons name={item.icon as any} size={20} color="#4A90E2" />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#7f8c8d" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Configuración</Text>
          {settingsItems.map((item, index) => (
            <View key={index} style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Ionicons name={item.icon as any} size={20} color="#4A90E2" />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                {item.subtitle && <Text style={styles.menuSubtitle}>{item.subtitle}</Text>}
              </View>
              {item.type === 'switch' ? (
                <Switch
                  value={item.value}
                  onValueChange={item.onValueChange}
                  trackColor={{ false: '#e0e0e0', true: '#4A90E2' }}
                  thumbColor="#fff"
                />
              ) : (
                <Ionicons name="chevron-forward" size={16} color="#7f8c8d" />
              )}
            </View>
          ))}
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appName}>Historia Sagrada</Text>
          <Text style={styles.appVersion}>Versión 1.0.0</Text>
          <Text style={styles.appDescription}>
            Descubre las historias más hermosas de la Biblia
          </Text>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out" size={20} color="#D0021B" />
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
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
  userCard: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e6f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#e0e0e0',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 1,
    padding: 16,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e6f3ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  appInfo: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  appVersion: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  appDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ffe6e6',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#D0021B',
    marginLeft: 8,
  },
});

