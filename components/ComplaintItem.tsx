// components/WorkRecordItem.tsx
// Component to display a single work record item.
// Used on the Worker Dashboard (image_818641.png).

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors'; // Assuming Colors.ts defines your color palette

type ComplaintRecord = {
  id: string;
  date: string;
  title: string;
  description: string;
  status: string;
};

type ComplaintItemProps = {
  record: ComplaintRecord;
};

export default function ComplaintItem({ record }: ComplaintItemProps) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.row}>
        <Text style={styles.complaintTitle}>{record.title}</Text>
        <View style={[styles.statusTag, record.status === 'Solved' ? styles.solved : styles.inProgress]}>
          <Text style={styles.statusText}>{record.status}</Text>
        </View>
      </View>
      <Text style={styles.date}>{record.date}</Text>
      <Text style={styles.description}>{record.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  complaintTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.darkText,
    flex: 1,
  },
  statusTag: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  solved: {
    backgroundColor: Colors.successLight,
  },
  inProgress: {
    backgroundColor: Colors.warningLight,
  },
  statusText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.darkText,
    textTransform: 'capitalize',
  },
  date: {
    fontSize: 13,
    color: Colors.mediumText,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: Colors.darkText,
  },
});
