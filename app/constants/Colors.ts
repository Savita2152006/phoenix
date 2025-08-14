// constants/Colors.ts
// Centralized color palette for the application for consistency.

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
  // Custom palette for the app
  primary: '#0A84FF', // Blue for main actions/branding
  secondary: '#5C5CFF', // Purple-ish for admin specific actions
  success: '#34C759', // Green for positive actions/status
  warning: '#FFCC00', // Yellow for warnings/in-progress
  error: '#FF3B30', // Red for errors/complaints
  info: '#007AFF', // Light blue for information

  // Lighter shades for backgrounds/tags
  primaryLight: '#E6F0FF',
  successLight: '#E8FBF2',
  warningLight: '#FFF8E6',
  errorLight: '#FFE8E6',
  infoLight: '#E6F0FF',

  // Neutrals
  white: '#FFFFFF',
  black: '#000000',
  lightGrey: '#F5F5F5',
  mediumGrey: '#CCCCCC',
  darkGrey: '#333333',
  border: '#E0E0E0',
  borderLight: '#F0F0F0',

  // Text colors
  darkText: '#333333',
  mediumText: '#666666',
  lightText: '#999999',
};
