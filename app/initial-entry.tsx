// app/initial-entry.tsx
// This new screen serves as the immediate entry point for the app.
// It allows users to directly select their role (Worker or Admin) to proceed to the dashboard,
// simulating a "no-login" direct entry based on role.

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, useWindowDimensions, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { AuthContext } from './_layout'; // Import AuthContext from the root layout
import Colors from '../constants/Colors'; // Your custom Colors
import CustomButton from '../components/CustomButton'; // Reusable button component
import { Ionicons } from '@expo/vector-icons';

export default function InitialEntryScreen() {
  const router = useRouter();
  const auth = useContext(AuthContext) as any;
  const login = auth?.login;
  const { width } = useWindowDimensions();
  const isWide = width > 900;

  const goToWorkerDashboard = () => {
    if (login) {
      login('worker');
      router.replace('/(worker)/dashboard');
    }
  };
  const goToAdminDashboard = () => {
    if (login) {
      login('admin');
      router.replace('/(admin)/dashboard');
    }
  };

  return (
    <ScrollView contentContainerStyle={isWide ? styles.webContainer : styles.mobileContainer}>
      <View style={isWide ? styles.webLeft : styles.mobileContent}>
        <Text style={styles.logoText}><Ionicons name="shield-checkmark-outline" size={28} color={Colors.primary} /> Work Voice Guardian</Text>
        <Text style={styles.title}>Your Work, Your Rights</Text>
        <Text style={styles.subtitle}>Keep work records with voice assistant for workers. Prevent fraud, protect your rights with NGO support.</Text>
        <Text style={styles.getStarted}>Get Started Today</Text>
        <CustomButton
          title="Worker Login"
          onPress={goToWorkerDashboard}
          buttonStyle={styles.workerButton}
          textStyle={styles.buttonText}
        />
        <CustomButton
          title="Admin Login"
          onPress={goToAdminDashboard}
          buttonStyle={styles.adminButton}
          textStyle={styles.buttonText}
        />
      </View>
      {isWide && (
        <View style={styles.webRight}>
          <Image source={require('../assets/images/illustration.png')} style={styles.illustration} resizeMode="contain" />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  webContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 600,
    backgroundColor: Colors.white,
    padding: 40,
    gap: 40,
  },
  webLeft: {
    flex: 1,
    maxWidth: 600,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 40,
    gap: 10,
  },
  webRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  illustration: {
    width: 400,
    height: 320,
    borderRadius: 24,
    backgroundColor: '#eaf7d1',
    marginBottom: 0,
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 18,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: Colors.darkText,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.mediumText,
    marginBottom: 18,
    maxWidth: 500,
  },
  getStarted: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: Colors.darkText,
  },
  workerButton: {
    backgroundColor: Colors.success,
    width: 350,
    paddingVertical: 18,
    borderRadius: 14,
    marginBottom: 18,
    alignItems: 'center',
  },
  adminButton: {
    backgroundColor: Colors.secondary,
    width: 350,
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: 'bold',
  },
  mobileContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 20,
  },
  mobileContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
