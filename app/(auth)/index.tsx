// app/(auth)/index.tsx
// This screen serves as the initial landing page, allowing users to choose
// between Worker Login and Admin Login. It reflects the design from image_81858a.jpg.

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors'; // Assuming Colors.ts defines your color palette

export default function AuthLandingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="shield-account" size={24} color={Colors.primary} />
        <Text style={styles.headerText}>Work Voice Guardian</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Your Work, Your Rights</Text>
        <Text style={styles.subtitle}>
          Keep work records with voice assistant for workers. Prevent fraud, protect your rights with NGO support.
        </Text>
        <Text style={styles.getStarted}>Get Started Today</Text>

        {/* Worker Login Button */}
        <Link href="/(auth)/worker" asChild>
          <TouchableOpacity style={styles.workerButton}>
            <Ionicons name="person" size={20} color={Colors.white} />
            <Text style={styles.buttonText}>Worker Login</Text>
            <Text style={styles.buttonSubText}>With Voice Assistant</Text>
          </TouchableOpacity>
        </Link>

        {/* Admin Login Button */}
        <Link href="/(auth)/admin" asChild>
          <TouchableOpacity style={styles.adminButton}>
            <Ionicons name="people" size={20} color={Colors.white} />
            <Text style={styles.buttonText}>Admin Login</Text>
            <Text style={styles.buttonSubText}>Records & Complaint Management</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Placeholder for the illustration on the right side of the landing page */}
      <View style={styles.imageContainer}>
        {/* This is a placeholder for the illustration, in a real app you'd use a local image */}
        <Image
          source={{ uri: 'https://placehold.co/400x300/a3e635/ffffff?text=Workforce+Illustration' }}
          style={styles.illustrationImage}
          onError={(e) => console.log('Image loading error:', e.nativeEvent.error)}
        />
        <View style={styles.speakerIconContainer}>
          <Ionicons name="megaphone-outline" size={24} color={Colors.primary} />
        </View>
      </View>

      <View style={styles.featuresSection}>
        <Text style={styles.featuresTitle}>Features</Text>
        <Text style={styles.featuresSubtitle}>Powerful features to protect your work</Text>
        <View style={styles.featuresGrid}>
          <View style={styles.featureCard}>
            <Ionicons name="mic-outline" size={30} color={Colors.primary} />
            <Text style={styles.featureCardTitle}>Voice Assistant</Text>
            <Text style={styles.featureCardText}>Easy voice-based interface for illiterate workers to record work and complaints</Text>
          </View>
          <View style={styles.featureCard}>
            <Ionicons name="document-text-outline" size={30} color={Colors.success} />
            <Text style={styles.featureCardTitle}>Work Records</Text>
            <Text style={styles.featureCardText}>Keep secure records of all your work and wages for future reference</Text>
          </View>
          <View style={styles.featureCard}>
            <Ionicons name="clipboard-outline" size={30} color={Colors.warning} />
            <Text style={styles.featureCardTitle}>Complaint Management</Text>
            <Text style={styles.featureCardText}>Get help from NGO in case of fraud or wage disputes</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Protecting Workers' Rights</Text>
        <Text style={styles.footerSubText}>Work Voice Guardian - Secure, Easy, Trustworthy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    color: Colors.primary,
  },
  content: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.darkText,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.mediumText,
    marginBottom: 20,
  },
  getStarted: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.darkText,
    marginBottom: 15,
  },
  workerButton: {
    backgroundColor: Colors.success,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  adminButton: {
    backgroundColor: Colors.secondary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonSubText: {
    color: Colors.white,
    fontSize: 12,
    marginLeft: 'auto',
  },
  imageContainer: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 20,
    top: 100,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  illustrationImage: {
    width: 250,
    height: 180,
    resizeMode: 'cover',
  },
  speakerIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: Colors.white,
    borderRadius: 25,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  featuresSection: {
    backgroundColor: Colors.white,
    padding: 20,
    marginTop: 20,
    borderRadius: 15,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  featuresTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: Colors.darkText,
  },
  featuresSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.mediumText,
    marginBottom: 20,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  featureCard: {
    backgroundColor: Colors.white,
    width: '30%', // Adjust for spacing
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  featureCardTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
    color: Colors.darkText,
  },
  featureCardText: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.mediumText,
    marginTop: 5,
  },
  footer: {
    backgroundColor: Colors.secondary,
    paddingVertical: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footerSubText: {
    color: Colors.white,
    fontSize: 12,
  },
});
