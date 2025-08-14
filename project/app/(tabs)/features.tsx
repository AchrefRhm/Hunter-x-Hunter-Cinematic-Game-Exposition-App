import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Sword, Users, Trophy, Map, Zap, Heart, Star, Settings } from 'lucide-react-native';

const features = [
  {
    id: 1,
    title: "Dynamic Nen System",
    icon: Zap,
    color: '#DAA520',
    description: "Master six types of Nen abilities with unique skill trees, combinations, and evolution paths.",
    highlights: ["6 Nen Categories", "100+ Abilities", "Custom Combinations", "Evolution System"]
  },
  {
    id: 2,
    title: "Multiplayer Battles",
    icon: Sword,
    color: '#DC143C',
    description: "Engage in real-time PvP combat with friends or challenge players worldwide in ranked matches.",
    highlights: ["Real-time Combat", "Ranked Matches", "Team Battles", "Tournament Mode"]
  },
  {
    id: 3,
    title: "Guild System",
    icon: Users,
    color: '#2D5738',
    description: "Form powerful alliances, complete guild missions, and compete in large-scale guild wars.",
    highlights: ["Guild Creation", "Cooperative Missions", "Guild Wars", "Shared Resources"]
  },
  {
    id: 4,
    title: "Hunter License Progression",
    icon: Trophy,
    color: '#6A0DAD',
    description: "Progress through Hunter ranks, unlock exclusive content, and earn prestigious achievements.",
    highlights: ["15 Hunter Classes", "Rank Progression", "Exclusive Content", "Achievement System"]
  },
  {
    id: 5,
    title: "Open World Exploration",
    icon: Map,
    color: '#FF4500',
    description: "Explore vast interconnected worlds with hidden secrets, rare creatures, and dynamic events.",
    highlights: ["Massive Worlds", "Hidden Secrets", "Dynamic Events", "Rare Encounters"]
  },
  {
    id: 6,
    title: "Character Customization",
    icon: Star,
    color: '#32CD32',
    description: "Create unique Hunters with deep customization options for appearance, abilities, and playstyle.",
    highlights: ["Visual Customization", "Ability Builds", "Playstyle Options", "Unique Appearances"]
  },
];

export default function FeaturesScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>GAME FEATURES</Text>
        <Text style={styles.subtitle}>Experience the ultimate Hunter x Hunter adventure</Text>
      </View>

      <View style={styles.featuresGrid}>
        {features.map((feature) => (
          <BlurView key={feature.id} intensity={30} style={styles.featureCard}>
            <LinearGradient
              colors={[feature.color + '20', 'transparent']}
              style={styles.featureGradient}
            >
              <View style={styles.featureHeader}>
                <View style={[styles.iconContainer, { backgroundColor: feature.color + '20' }]}>
                  <feature.icon size={32} color={feature.color} />
                </View>
                <Text style={styles.featureTitle}>{feature.title}</Text>
              </View>
              
              <Text style={styles.featureDescription}>{feature.description}</Text>
              
              <View style={styles.highlightsContainer}>
                {feature.highlights.map((highlight, index) => (
                  <View key={index} style={styles.highlightItem}>
                    <View style={[styles.highlightDot, { backgroundColor: feature.color }]} />
                    <Text style={styles.highlightText}>{highlight}</Text>
                  </View>
                ))}
              </View>
            </LinearGradient>
          </BlurView>
        ))}
      </View>

      {/* Technical Specifications */}
      <BlurView intensity={20} style={styles.techSection}>
        <View style={styles.techHeader}>
          <Settings size={24} color="#DAA520" />
          <Text style={styles.techTitle}>Technical Excellence</Text>
        </View>
        
        <View style={styles.techGrid}>
          <View style={styles.techItem}>
            <Text style={styles.techLabel}>Engine</Text>
            <Text style={styles.techValue}>Custom Nen Engine 3.0</Text>
          </View>
          <View style={styles.techItem}>
            <Text style={styles.techLabel}>Graphics</Text>
            <Text style={styles.techValue}>Anime-Style Rendering</Text>
          </View>
          <View style={styles.techItem}>
            <Text style={styles.techLabel}>Physics</Text>
            <Text style={styles.techValue}>Dynamic Nen Physics</Text>
          </View>
          <View style={styles.techItem}>
            <Text style={styles.techLabel}>Audio</Text>
            <Text style={styles.techValue}>3D Spatial Sound</Text>
          </View>
        </View>
      </BlurView>

      {/* Performance Metrics */}
      <BlurView intensity={20} style={styles.metricsSection}>
        <Text style={styles.metricsTitle}>Performance Metrics</Text>
        
        <View style={styles.metricItem}>
          <Text style={styles.metricLabel}>Frame Rate</Text>
          <View style={styles.metricBar}>
            <LinearGradient
              colors={['#32CD32', '#228B22']}
              style={[styles.metricFill, { width: '90%' }]}
            />
          </View>
          <Text style={styles.metricValue}>60 FPS</Text>
        </View>

        <View style={styles.metricItem}>
          <Text style={styles.metricLabel}>Loading Time</Text>
          <View style={styles.metricBar}>
            <LinearGradient
              colors={['#DAA520', '#B8860B']}
              style={[styles.metricFill, { width: '85%' }]}
            />
          </View>
          <Text style={styles.metricValue}>{'< 3s'}</Text>
        </View>

        <View style={styles.metricItem}>
          <Text style={styles.metricLabel}>Memory Usage</Text>
          <View style={styles.metricBar}>
            <LinearGradient
              colors={['#DC143C', '#B22222']}
              style={[styles.metricFill, { width: '70%' }]}
            />
          </View>
          <Text style={styles.metricValue}>2.1 GB</Text>
        </View>
      </BlurView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#DAA520',
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#cccccc',
    textAlign: 'center',
  },
  featuresGrid: {
    padding: 20,
    gap: 20,
  },
  featureCard: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.05)',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  featureGradient: {
    padding: 20,
  },
  featureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    flex: 1,
  },
  featureDescription: {
    fontSize: 15,
    color: '#cccccc',
    marginBottom: 16,
    lineHeight: 22,
  },
  highlightsContainer: {
    gap: 8,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  highlightDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 12,
  },
  highlightText: {
    fontSize: 14,
    color: '#e0e0e0',
    fontWeight: '500',
  },
  techSection: {
    margin: 20,
    padding: 20,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  techHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  techTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginLeft: 12,
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  techItem: {
    width: '48%',
  },
  techLabel: {
    fontSize: 12,
    color: '#888888',
    marginBottom: 4,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  techValue: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
  metricsSection: {
    margin: 20,
    padding: 20,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.08)',
    marginBottom: 40,
  },
  metricsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 20,
  },
  metricItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  metricLabel: {
    fontSize: 14,
    color: '#cccccc',
    fontWeight: '600',
    width: 100,
  },
  metricBar: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 4,
  },
  metricFill: {
    height: '100%',
    borderRadius: 4,
  },
  metricValue: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
    width: 50,
    textAlign: 'right',
  },
});