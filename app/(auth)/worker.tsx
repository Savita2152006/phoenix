// app/(auth)/worker.tsx
// This screen provides a simple login form for workers.

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useContext } from 'react';
import { AuthContext } from '../_layout'; // Import AuthContext
import Colors from '../../constants/Colors'; // Assuming Colors.ts defines your color palette
import CustomButton from '../../components/CustomButton'; // Reusable button component


export default function WorkerLoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const auth = useContext(AuthContext) as any;
  const login = auth?.login;

  const handleLogin = () => {
    // Basic validation and simulated login logic
    if (username === 'worker' && password === 'worker123') {
      if (login) {
        login('worker'); // Set user role to 'worker'
        router.replace('/(worker)/dashboard'); // Navigate to worker dashboard tabs
      }
    } else {
      Alert.alert('Login Failed', 'Invalid username or password. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Text style={styles.title}>Worker Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        accessibilityLabel="Username"
        returnKeyType="next"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        accessibilityLabel="Password"
        returnKeyType="done"
      />
      <CustomButton title="Login as Worker" onPress={handleLogin} buttonStyle={styles.loginButton} />
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backText}>Back to Main</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  backgroundColor: Colors.white,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: Colors.darkText,
  },
  input: {
    width: '90%',
    padding: 15,
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  loginButton: {
    backgroundColor: Colors.success,
    width: '90%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  backText: {
    marginTop: 20,
    color: Colors.primary,
    fontSize: 16,
  },
});
