// components/WorkRecordItem.tsx
// Component to display a single work record item.
// Used on the Worker Dashboard (image_818641.png).

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors'; // Assuming Colors.ts defines your color palette

type WorkRecord = {
  date: string;
  workplace: string;
  hours: string;
  wage: string;
  description: string;
};

type WorkRecordItemProps = {
  record: WorkRecord;
};

export default function WorkRecordItem({ record }: WorkRecordItemProps) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.column}>
        <Text style={styles.label}>Date</Text>
        <Text style={styles.value}>{record.date}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Workplace</Text>
        <Text style={styles.value}>{record.workplace}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Hours</Text>
        <Text style={styles.value}>{record.hours}</Text>
        <Text style={styles.subValue}>{record.wage}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.value}>{record.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 12,
    color: Colors.mediumText,
    marginBottom: 5,
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.darkText,
  },
  subValue: {
    fontSize: 12,
    color: Colors.mediumText,
    marginTop: 2,
  },
});
