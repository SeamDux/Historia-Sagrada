import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, borders } from '../styles/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  icon?: keyof typeof Ionicons.glyphMap;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  icon,
  disabled = false,
  style,
  textStyle,
}) => {
  const getButtonStyle = () => {
    let buttonStyle = { ...styles.button };
    
    // Variantes
    switch (variant) {
      case 'primary':
        buttonStyle = { ...buttonStyle, ...styles.primaryButton };
        break;
      case 'secondary':
        buttonStyle = { ...buttonStyle, ...styles.secondaryButton };
        break;
      case 'outline':
        buttonStyle = { ...buttonStyle, ...styles.outlineButton };
        break;
      case 'text':
        buttonStyle = { ...buttonStyle, ...styles.textButton };
        break;
    }
    
    // Tamaños
    switch (size) {
      case 'small':
        buttonStyle = { ...buttonStyle, ...styles.smallButton };
        break;
      case 'medium':
        buttonStyle = { ...buttonStyle, ...styles.mediumButton };
        break;
      case 'large':
        buttonStyle = { ...buttonStyle, ...styles.largeButton };
        break;
    }
    
    if (disabled) {
      buttonStyle = { ...buttonStyle, ...styles.disabledButton };
    }
    
    return buttonStyle;
  };

  const getTextStyle = () => {
    let textStyle = { ...styles.buttonText };
    
    switch (variant) {
      case 'primary':
        textStyle = { ...textStyle, ...styles.primaryText };
        break;
      case 'secondary':
        textStyle = { ...textStyle, ...styles.secondaryText };
        break;
      case 'outline':
        textStyle = { ...textStyle, ...styles.outlineText };
        break;
      case 'text':
        textStyle = { ...textStyle, ...styles.textButtonText };
        break;
    }
    
    if (disabled) {
      textStyle = { ...textStyle, ...styles.disabledText };
    }
    
    return textStyle;
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View style={styles.buttonContent}>
        {icon && (
          <Ionicons
            name={icon}
            size={size === 'small' ? 16 : size === 'large' ? 24 : 20}
            color={variant === 'primary' ? colors.white : colors.primary}
            style={styles.buttonIcon}
          />
        )}
        <Text style={[getTextStyle(), textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: borders.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  
  // Variantes
  primaryButton: {
    backgroundColor: colors.primary,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: borders.width.medium,
    borderColor: colors.primary,
  },
  textButton: {
    backgroundColor: 'transparent',
  },
  
  // Tamaños
  smallButton: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    minHeight: 36,
  },
  mediumButton: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    minHeight: 48,
  },
  largeButton: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    minHeight: 56,
  },
  
  // Estados
  disabledButton: {
    backgroundColor: colors.lightGray,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  
  // Texto
  buttonText: {
    fontWeight: '600' as const,
    textAlign: 'center',
  },
  primaryText: {
    color: colors.white,
    fontSize: typography.fontSize.md,
  },
  secondaryText: {
    color: colors.white,
    fontSize: typography.fontSize.md,
  },
  outlineText: {
    color: colors.primary,
    fontSize: typography.fontSize.md,
  },
  textButtonText: {
    color: colors.primary,
    fontSize: typography.fontSize.md,
  },
  disabledText: {
    color: colors.gray,
  },
  
  // Contenido del botón
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    marginRight: spacing.sm,
  },
});