// app/(worker)/dashboard.tsx
// This screen displays the Worker Dashboard, including the voice assistant feature,
// work records, and complaints. It reflects the designs from image_818641.png and image_818909.png.

import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { AuthContext } from '../_layout'; // Import AuthContext

import Colors from '../../constants/Colors';
import { useTheme } from '@react-navigation/native';
import WorkRecordItem from '../../components/WorkRecordItem';
import ComplaintItem from '../../components/ComplaintItem';
import VoiceAssistantSection from '../../components/VoiceAssistantSection';

export default function WorkerDashboardScreen() {
  const router = useRouter();
  const auth = useContext(AuthContext) as any;
  const logout = auth?.logout;

  // Dummy data for work records and complaints
  const workRecords = [
    { id: '1', date: '2024-01-10', workplace: 'Construction Site A', hours: '8 hrs', wage: '₹500', description: 'Brick work' },
    { id: '2', date: '2024-01-09', workplace: 'Office Cleaning', hours: '6 hrs', wage: '₹300', description: 'Office cleaning work' },
    { id: '3', date: '2024-01-08', workplace: 'Farm Labor', hours: '10 hrs', wage: '₹450', description: 'Harvesting crops' },
  ];

  const complaints = [
    { id: '1', date: '2024-01-08', title: 'Wage not received', description: 'Last week\'s wage has not been received yet', status: 'In Progress' },
    { id: '2', date: '2024-01-05', title: 'Overtime work without proper pay', description: 'Worked 12 hours but paid for only 8 hours', status: 'Solved' },
    { id: '3', date: '2024-01-03', title: 'Safety equipment not provided', description: 'No helmet or safety shoes given at site', status: 'In Progress' },
  ];

  const handleLogout = () => {
    logout(); // Clear authentication state
    router.replace('/(auth)'); // Go back to the authentication landing page
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Worker Dashboard</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.homeButton}>
          <Ionicons name="log-out-outline" size={20} color={Colors.primary} />
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Voice Assistant Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeader}>Voice Assistant</Text>
          <VoiceAssistantSection />
        </View>

        {/* Work Records Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeader}>Work Records</Text>
          <Text style={styles.sectionSubHeader}>Detailed records of your work and wages</Text>
          <View style={styles.listCard}>
            {workRecords.map((record) => (
              <WorkRecordItem key={record.id} record={record} />
            ))}
          </View>
        </View>

        {/* Complaints Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeader}>Complaints</Text>
          <Text style={styles.sectionSubHeader}>Manage your complaints and issues</Text>
          <View style={styles.listCard}>
            {complaints.map((complaint) => (
              <ComplaintItem key={complaint.id} record={complaint} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.darkText,
  },
  homeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: Colors.white,
  },
  homeButtonText: {
    marginLeft: 5,
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  scrollViewContent: {
    padding: 30,
    paddingBottom: 100,
    gap: 30,
  },
  sectionCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 18,
    padding: 24,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 8,
  },
  sectionSubHeader: {
    fontSize: 15,
    color: Colors.mediumText,
    marginBottom: 16,
  },
  listCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 8,
    gap: 8,
  },
});
