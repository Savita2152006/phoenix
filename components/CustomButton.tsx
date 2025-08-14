// components/CustomButton.tsx
// A reusable button component for consistent styling.

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors'; // Assuming Colors.ts defines your color palette

import { ReactNode } from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function CustomButton({ title, onPress, buttonStyle, textStyle }: CustomButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary, // Default background
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: Colors.white, // Default text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});
