// components/VoiceAssistantSection.tsx
// Component for the Voice Assistant feature on the Worker Dashboard.
// It reflects the design from image_818641.png.

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'; // Import Alert
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Card from './Card'; // Reusing the Card component

export default function VoiceAssistantSection() {
  const handleRecordWork = () => {
    // Placeholder for recording work using voice
    Alert.alert('Voice Recording', 'Voice recording for work started!');
  };

  const handleFileComplaint = () => {
    // Placeholder for filing a complaint using voice
    Alert.alert('Voice Recording', 'Voice recording for complaint started!');
  };

  return (
    <Card style={styles.voiceAssistantCard} title="Voice Assistant">
      <Text style={styles.voiceAssistantSubtitle}>Record your work or complaint using voice</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.recordWorkButton} onPress={handleRecordWork}>
          <Ionicons name="mic-circle-outline" size={50} color={Colors.white} />
          <Text style={styles.buttonText}>Record Work</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fileComplaintButton} onPress={handleFileComplaint}>
          <Ionicons name="megaphone-outline" size={50} color={Colors.white} />
          <Text style={styles.buttonText}>File Complaint</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  voiceAssistantCard: {
    backgroundColor: Colors.primaryLight, // Light green background for this section
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  voiceAssistantSubtitle: {
    fontSize: 16,
    color: Colors.mediumText,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  recordWorkButton: {
    backgroundColor: Colors.success,
    padding: 20,
    borderRadius: 75, // Makes it a circle
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
  fileComplaintButton: {
    backgroundColor: Colors.error,
    padding: 20,
    borderRadius: 75, // Makes it a circle
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
