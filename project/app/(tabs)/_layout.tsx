import { Tabs } from 'expo-router';
import { Swords, Users, Mountain, Gamepad2, Info } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#DAA520',
        tabBarInactiveTintColor: '#666',
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabLabel,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Swords size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="characters"
        options={{
          title: 'Hunters',
          tabBarIcon: ({ size, color }) => (
            <Users size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="environments"
        options={{
          title: 'Worlds',
          tabBarIcon: ({ size, color }) => (
            <Mountain size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="features"
        options={{
          title: 'Features',
          tabBarIcon: ({ size, color }) => (
            <Gamepad2 size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ size, color }) => (
            <Info size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#1a1a1a',
    borderTopWidth: 1,
    borderTopColor: '#333',
    height: 60,
    paddingBottom: 8,
    paddingTop: 8,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
  },
});