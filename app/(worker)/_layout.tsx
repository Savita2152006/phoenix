// app/(worker)/_layout.tsx
// This file defines the tab navigation for the Worker's dashboard.
// It will have a single tab pointing to the Worker Dashboard.

import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors'; // Assuming Colors.ts defines your color palette

export default function WorkerTabLayout() {
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
        headerShown: false, // We'll handle headers within each screen for more control
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      {/*
        You can add more worker-specific tabs here if needed, e.g.,
        <Tabs.Screen
          name="work_records"
          options={{
            title: 'Work Records',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="document-text-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="complaints"
          options={{
            title: 'My Complaints',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="clipboard-outline" size={size} color={color} />
            ),
          }}
        />
      */}
    </Tabs>
  );
}
