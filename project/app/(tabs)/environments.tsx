import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { TreePine, Building, Mountain, Waves } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const environments = [
  {
    id: 1,
    name: "Yorknew City",
    type: "Urban Metropolis",
    icon: Building,
    image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg',
    description: "A massive metropolitan area filled with danger and opportunity. Navigate through towering skyscrapers, underground tunnels, and bustling markets.",
    features: ["Auction Houses", "Underground Network", "Phantom Troupe Territory"],
    ambiance: "Neon-lit streets with constant activity",
    color: '#DC143C',
  },
  {
    id: 2,
    name: "Greed Island",
    type: "Mystical Game World",
    icon: Waves,
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg',
    description: "An enchanted island where reality bends to game rules. Collect spell cards, face unique challenges, and uncover ancient mysteries.",
    features: ["Spell Card System", "Dynamic Quests", "Hidden Treasures"],
    ambiance: "Magical landscapes with shifting terrains",
    color: '#2D5738',
  },
  {
    id: 3,
    name: "Heavens Arena",
    type: "Combat Colosseum",
    icon: Mountain,
    image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg',
    description: "A towering arena where fighters from around the world come to test their skills. Climb through 251 floors of increasingly difficult battles.",
    features: ["Floor Progression", "Elite Tournaments", "Nen Mastery Tests"],
    ambiance: "Intense battlegrounds with roaring crowds",
    color: '#DAA520',
  },
  {
    id: 4,
    name: "Dark Continent",
    type: "Forbidden Territory",
    icon: TreePine,
    image: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg',
    description: "An unexplored realm beyond human civilization. Face legendary beasts, discover ancient civilizations, and survive the ultimate wilderness.",
    features: ["Ancient Ruins", "Legendary Creatures", "Survival Challenges"],
    ambiance: "Primordial forests with lurking dangers",
    color: '#6A0DAD',
  },
];

export default function EnvironmentsScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>EPIC WORLDS</Text>
        <Text style={styles.subtitle}>Explore vast environments filled with mystery and danger</Text>
      </View>

      {environments.map((env) => (
        <View key={env.id} style={styles.environmentCard}>
          <Image source={{ uri: env.image }} style={styles.environmentImage} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.85)']}
            style={styles.environmentGradient}
          >
            <View style={styles.environmentContent}>
              <View style={styles.environmentHeader}>
                <View>
                  <Text style={styles.environmentName}>{env.name}</Text>
                  <View style={styles.typeContainer}>
                    <env.icon size={16} color={env.color} />
                    <Text style={[styles.environmentType, { color: env.color }]}>
                      {env.type}
                    </Text>
                  </View>
                </View>
              </View>
              
              <Text style={styles.environmentDescription}>{env.description}</Text>
              
              <BlurView intensity={30} style={styles.ambianceCard}>
                <Text style={styles.ambianceLabel}>Ambiance</Text>
                <Text style={styles.ambianceText}>{env.ambiance}</Text>
              </BlurView>
              
              <View style={styles.featuresContainer}>
                <Text style={styles.featuresTitle}>Key Features</Text>
                <View style={styles.featuresGrid}>
                  {env.features.map((feature, index) => (
                    <BlurView key={index} intensity={40} style={styles.featureBadge}>
                      <Text style={styles.featureText}>{feature}</Text>
                    </BlurView>
                  ))}
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      ))}
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
  environmentCard: {
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 20,
    overflow: 'hidden',
    height: 500,
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  environmentImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  environmentGradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  environmentContent: {
    padding: 24,
  },
  environmentHeader: {
    marginBottom: 16,
  },
  environmentName: {
    fontSize: 28,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 6,
    letterSpacing: 1,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  environmentType: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  environmentDescription: {
    fontSize: 15,
    color: '#e0e0e0',
    marginBottom: 20,
    lineHeight: 22,
  },
  ambianceCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  ambianceLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#DAA520',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  ambianceText: {
    fontSize: 14,
    color: '#ffffff',
    fontStyle: 'italic',
  },
  featuresContainer: {
    marginTop: 12,
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 12,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  featureBadge: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  featureText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
  },
});