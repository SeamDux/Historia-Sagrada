import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { colors } from '../../styles/theme';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();
  const books = [
    { abbr: 'Gn', name: 'Génesis' },
    { abbr: 'Ex', name: 'Éxodo' },
    { abbr: 'Lv', name: 'Levítico' },
    { abbr: 'Nm', name: 'Números' },
    { abbr: 'Dt', name: 'Deuteronomio' },
    { abbr: 'Jos', name: 'Josué' },
    { abbr: 'Jue', name: 'Jueces' },
    { abbr: 'Rut', name: 'Rut' },
    { abbr: '1 S', name: '1 Samuel' },
    { abbr: '2 S', name: '2 Samuel' },
    { abbr: '1 R', name: '1 Reyes' },
    { abbr: '2 R', name: '2 Reyes' },
    { abbr: '1 Cr', name: '1 Crónicas' },
    { abbr: '2 Cr', name: '2 Crónicas' },
    { abbr: 'Esd', name: 'Esdras' },
    { abbr: 'Neh', name: 'Nehemías' },
    { abbr: 'Est', name: 'Ester' },
    { abbr: 'Job', name: 'Job' },
    { abbr: 'Sal', name: 'Salmos' },
    { abbr: 'Pr', name: 'Proverbios' },
    { abbr: 'Ecl', name: 'Eclesiastés' },
    { abbr: 'Cnt', name: 'Cantares' },
    { abbr: 'Is', name: 'Isaías' },
    { abbr: 'Jer', name: 'Jeremías' },
    { abbr: 'Lam', name: 'Lamentaciones' },
    { abbr: 'Ez', name: 'Ezequiel' },
    { abbr: 'Dn', name: 'Daniel' },
    { abbr: 'Os', name: 'Oseas' },
    { abbr: 'Jl', name: 'Joel' },
    { abbr: 'Am', name: 'Amós' },
    { abbr: 'Abd', name: 'Abdías' },
    { abbr: 'Jon', name: 'Jonás' },
    { abbr: 'Mi', name: 'Miqueas' },
    { abbr: 'Nah', name: 'Nahúm' },
    { abbr: 'Hab', name: 'Habacuc' },
    { abbr: 'Sof', name: 'Sofonías' },
    { abbr: 'Hag', name: 'Hageo' },
    { abbr: 'Zac', name: 'Zacarías' },
    { abbr: 'Mal', name: 'Malaquías' },
    { abbr: 'Mt', name: 'Mateo' },
    { abbr: 'Mr', name: 'Marcos' },
    { abbr: 'Lc', name: 'Lucas' },
    { abbr: 'Jn', name: 'Juan' },
    { abbr: 'Hch', name: 'Hechos' },
    { abbr: 'Ro', name: 'Romanos' },
    { abbr: '1 Co', name: '1 Corintios' },
    { abbr: '2 Co', name: '2 Corintios' },
    { abbr: 'Gá', name: 'Gálatas' },
    { abbr: 'Ef', name: 'Efesios' },
    { abbr: 'Flp', name: 'Filipenses' },
    { abbr: 'Col', name: 'Colosenses' },
    { abbr: '1 Ts', name: '1 Tesalonicenses' },
    { abbr: '2 Ts', name: '2 Tesalonicenses' },
    { abbr: '1 Ti', name: '1 Timoteo' },
    { abbr: '2 Ti', name: '2 Timoteo' },
    { abbr: 'Tit', name: 'Tito' },
    { abbr: 'Flm', name: 'Filemón' },
    { abbr: 'Heb', name: 'Hebreos' },
    { abbr: 'Stg', name: 'Santiago' },
    { abbr: '1 P', name: '1 Pedro' },
    { abbr: '2 P', name: '2 Pedro' },
    { abbr: '1 Jn', name: '1 Juan' },
    { abbr: '2 Jn', name: '2 Juan' },
    { abbr: '3 Jn', name: '3 Juan' },
    { abbr: 'Jud', name: 'Judas' },
    { abbr: 'Ap', name: 'Apocalipsis' },
  ];

  const nameByAbbr = useMemo(() => {
    const map: Record<string, string> = {};
    books.forEach(b => { map[b.abbr] = b.name; });
    return map;
  }, [books]);

  type Subsection = { title: string; items: string[] };
  type Section = { title: string; subsections: Subsection[] };

  const sections: Section[] = [
    {
      title: 'Antiguo Testamento',
      subsections: [
        { title: 'Pentateuco', items: ['Gn','Ex','Lv','Nm','Dt'] },
        { title: 'Libros Históricos', items: ['Jos','Jue','Rut','1 S','2 S','1 R','2 R','1 Cr','2 Cr','Esd','Neh','Est'] },
        { title: 'Libros Sapienciales', items: ['Job','Sal','Pr','Ecl','Cnt'] },
        { title: 'Libros Proféticos', items: ['Is','Jer','Lam','Ez','Dn','Os','Jl','Am','Abd','Jon','Mi','Nah','Hab','Sof','Hag','Zac','Mal'] },
      ],
    },
    {
      title: 'Nuevo Testamento',
      subsections: [
        { title: 'Evangelios', items: ['Mt','Mr','Lc','Jn'] },
        { title: 'Hechos de los Apóstoles', items: ['Hch'] },
        { title: 'Cartas Paulinas', items: ['Ro','1 Co','2 Co','Gá','Ef','Flp','Col','1 Ts','2 Ts','1 Ti','2 Ti','Tit','Flm'] },
        { title: 'Otras Cartas', items: ['Heb','Stg','1 P','2 P','1 Jn','2 Jn','3 Jn','Jud'] },
        { title: 'Apocalipsis', items: ['Ap'] },
      ],
    },
  ];

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'Antiguo Testamento': true,
    'Nuevo Testamento': true,
  });
  const [expandedSubsections, setExpandedSubsections] = useState<Record<string, boolean>>({
    'Antiguo Testamento/Pentateuco': true,
    'Antiguo Testamento/Libros Históricos': false,
    'Antiguo Testamento/Libros Sapienciales': false,
    'Antiguo Testamento/Libros Proféticos': false,
    'Nuevo Testamento/Evangelios': true,
    'Nuevo Testamento/Hechos de los Apóstoles': false,
    'Nuevo Testamento/Cartas Paulinas': false,
    'Nuevo Testamento/Otras Cartas': false,
    'Nuevo Testamento/Apocalipsis': false,
  });

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const toggleSubsection = (sectionTitle: string, subsectionTitle: string) => {
    const key = `${sectionTitle}/${subsectionTitle}`;
    setExpandedSubsections(prev => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={[styles.content, { paddingTop: headerHeight + 8, paddingBottom: 4 }]} showsVerticalScrollIndicator={false}>
        <Text style={styles.welcomeText}>
          ¡Bienvenido a Historia Sagrada!
        </Text>
        <Text style={styles.descriptionText}>
          Explora las maravillosas historias de la Biblia y conoce a los personajes más importantes de la fe cristiana.
        </Text>
        {sections.map((section, idx) => {
          const isLastSection = idx === sections.length - 1;
          const isOpen = expandedSections[section.title];
          return (
            <View key={section.title} style={[styles.sectionBlock, isLastSection && styles.sectionBlockLast]}>
              <TouchableOpacity style={styles.sectionHeader} onPress={() => toggleSection(section.title)}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <Ionicons name={isOpen ? 'chevron-down' : 'chevron-forward'} size={22} color={colors.text} />
              </TouchableOpacity>
              {isOpen && (
                <View style={styles.sectionBody}>
                  {section.subsections.map(sub => {
                    const subKey = `${section.title}/${sub.title}`;
                    const subOpen = expandedSubsections[subKey];
                    return (
                      <View key={sub.title} style={styles.subsectionBlock}>
                        <TouchableOpacity style={styles.subsectionHeader} onPress={() => toggleSubsection(section.title, sub.title)}>
                          <Text style={styles.subsectionTitle}>{sub.title}</Text>
                          <Ionicons name={subOpen ? 'chevron-down' : 'chevron-forward'} size={20} color={colors.textSecondary} />
                        </TouchableOpacity>
                        {subOpen && (
                          <View style={styles.subsectionBody}>
                            {sub.items.map(abbr => (
                              <View key={abbr} style={styles.listItem}>
                                <View style={styles.abbrevBadge}>
                                  <Text style={styles.abbrevText}>{abbr}</Text>
                                </View>
                                <Text style={styles.bookName}>{nameByAbbr[abbr] || abbr}</Text>
                              </View>
                            ))}
                          </View>
                        )}
                      </View>
                    );
                  })}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 16,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 16,
  },
  descriptionText: {
    fontSize: 18,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  listContent: {
    width: '100%',
    paddingTop: 8,
    paddingBottom: 0,
  },
  sectionBlock: {
    width: '100%',
    marginBottom: 12,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.lightGray,
    borderWidth: 1,
    overflow: 'hidden',
  },
  sectionBlockLast: {
    marginBottom: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: '#F8FAFC',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  sectionBody: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  subsectionBlock: {
    width: '100%',
    marginTop: 8,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderColor: colors.lightGray,
    borderWidth: 1,
    overflow: 'hidden',
  },
  subsectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#F9FBFF',
  },
  subsectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.text,
  },
  subsectionBody: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  listItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 8,
  },
  abbrevBadge: {
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  abbrevText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  bookName: {
    color: colors.text,
    fontSize: 18,
    flexShrink: 1,
  },
});
