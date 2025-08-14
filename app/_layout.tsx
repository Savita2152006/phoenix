// app/_layout.tsx
// This file sets up the root navigation for your Expo app using Expo Router.
// Updated to prioritize the 'initial-entry' screen when not authenticated.

import { Stack } from 'expo-router';
import { useState, useEffect, createContext, useContext } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

// Types for user role and AuthContext
type UserRole = 'worker' | 'admin' | null;
type AuthContextType = {
  isAuthenticated: boolean;
  userRole: UserRole;
  login: (role: Exclude<UserRole, null>) => void;
  logout: () => void;
};

// Create an AuthContext to manage the user's authentication state across the app
export const AuthContext = createContext<AuthContextType | null>(null);

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Overall auth state
  const [userRole, setUserRole] = useState<UserRole>(null); // 'worker' or 'admin'
  const [isLoading, setIsLoading] = useState(true); // Loading state for initial auth check

  // Simulate an asynchronous authentication check on app load
  useEffect(() => {
    const checkAuth = async () => {
      // In a real app, you would check AsyncStorage or a global state for a token/user session.
      // For this frontend-only example, we'll start unauthenticated.
      // Simulate a network request delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsAuthenticated(false); // Initially not authenticated
      setUserRole(null);
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  // Function to handle login (passed down via context)
  const login = (role: Exclude<UserRole, null>) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  // Function to handle logout (passed down via context)
  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  if (isLoading) {
    // Show a loading indicator while checking authentication status
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      <Stack>
        {/*
          Conditionally render screen groups based on authentication status and role.
          Expo Router will automatically select the first matching route.
        */}
        {isAuthenticated ? (
          userRole === 'worker' ? (
            <Stack.Screen name="(worker)" options={{ headerShown: false }} />
          ) : (
            <Stack.Screen name="(admin)" options={{ headerShown: false }} />
          )
        ) : (
          // When not authenticated, always go to the initial-entry screen first
          <Stack.Screen name="initial-entry" options={{ headerShown: false }} />
          // The (auth) group will still exist but is not the default unauthenticated path anymore.
          // You can still navigate to '/(auth)/worker' or '/(auth)/admin' if needed, e.g., after logout
        )}
        {/*
          Fallback for unmatched routes (e.g., if a deep link points to a non-existent route)
        */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
