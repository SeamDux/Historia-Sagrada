import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, borders } from '../styles/theme';

interface CardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  variant?: 'default' | 'elevated' | 'outlined';
  icon?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  onPress,
  style,
  variant = 'default',
  icon,
  iconColor = colors.primary,
}) => {
  const CardComponent = onPress ? TouchableOpacity : View;

  const getCardStyle = () => {
    let cardStyle = { ...styles.card };
    
    switch (variant) {
      case 'elevated':
        cardStyle = { ...cardStyle, ...styles.elevatedCard };
        break;
      case 'outlined':
        cardStyle = { ...cardStyle, ...styles.outlinedCard };
        break;
      default:
        cardStyle = { ...cardStyle, ...styles.defaultCard };
        break;
    }
    
    return cardStyle;
  };

  return (
    <CardComponent
      style={[getCardStyle(), style]}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      {(title || subtitle || icon) && (
        <View style={styles.header}>
          {icon && (
            <Ionicons
              name={icon}
              size={24}
              color={iconColor}
              style={styles.icon}
            />
          )}
          <View style={styles.headerText}>
            {title && <Text style={styles.title}>{title}</Text>}
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
      )}
      
      {children && (
        <View style={styles.content}>
          {children}
        </View>
      )}
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: borders.radius.md,
    marginVertical: spacing.sm,
    marginHorizontal: spacing.md,
    overflow: 'hidden',
  },
  
  // Variantes
  defaultCard: {
    backgroundColor: colors.surface,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  elevatedCard: {
    backgroundColor: colors.surface,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  outlinedCard: {
    backgroundColor: colors.surface,
    borderWidth: borders.width.thin,
    borderColor: colors.lightGray,
  },
  
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    paddingBottom: spacing.sm,
  },
  icon: {
    marginRight: spacing.sm,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: typography.lineHeight.normal * typography.fontSize.sm,
  },
  
  // Contenido
  content: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },
});