// app/(admin)/_layout.tsx
// This file defines the tab navigation for the Admin's dashboard.
// It will have a single tab pointing to the Admin Dashboard, which then handles
// its own internal tab-like navigation for Complaints, Workers, and Work Records.

import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors'; // Assuming Colors.ts defines your color palette

export default function AdminTabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.mediumText,
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopWidth: 1,
          borderTopColor: Colors.border,
        },
        headerShown: false, // We'll handle headers within each screen
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Admin Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="construct-outline" size={size} color={color} />
          ),
        }}
      />
      {/* Additional top-level admin tabs could be added here if the design evolves beyond internal tabs */}
    </Tabs>
  );
}
