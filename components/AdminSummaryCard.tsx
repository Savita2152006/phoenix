// components/AdminSummaryCard.tsx
// A reusable component for the summary cards on the Admin Dashboard.
// It reflects the design from image_818945.png.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors'; // Assuming Colors.ts defines your color palette

type AdminSummaryCardProps = {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  backgroundColor?: string;
};

export default function AdminSummaryCard({ icon, value, label, backgroundColor = Colors.white }: AdminSummaryCardProps) {
  return (
    <View style={[styles.card, { backgroundColor }]}> 
      <View style={styles.iconContainer}> 
        {icon} 
      </View> 
      <Text style={styles.value}>{value}</Text> 
      <Text style={styles.label}>{label}</Text> 
    </View> 
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%', // Approx. half width for two cards per row with spacing
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    borderColor: Colors.border,
    borderWidth: 1,
  },
  iconContainer: {
    marginBottom: 10,
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.darkText,
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: Colors.mediumText,
  },
});
