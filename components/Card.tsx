// components/Card.tsx
// A reusable card component to display sections of content with a consistent look.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors'; // Assuming Colors.ts defines your color palette

import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
  style?: object;
};

export default function Card({ children, title, icon, style }: CardProps) {
  return (
    <View style={[styles.card, style]}>
      {(title || icon) && (
        <View style={styles.cardHeader}>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          {title && <Text style={styles.cardTitle}>{title}</Text>}
        </View>
      )}
      <View style={styles.cardContent}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingBottom: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkText,
  },
  cardContent: {
    // Styles for content inside the card
  },
});
