import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Zap, Target, Shield, Flame } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const characters = [
  {
    id: 1,
    name: "Gon Freecss",
    class: "Enhancer",
    ability: "Jajanken",
    icon: Zap,
    color: '#2D5738',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
    description: "A young Hunter with incredible potential and an unbreakable spirit.",
    stats: { power: 85, speed: 90, defense: 70, technique: 75 }
  },
  {
    id: 2,
    name: "Killua Zoldyck",
    class: "Transmuter",
    ability: "Godspeed",
    icon: Target,
    color: '#6A0DAD',
    image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg',
    description: "Former assassin turned Hunter with lightning-fast reflexes.",
    stats: { power: 80, speed: 95, defense: 75, technique: 88 }
  },
  {
    id: 3,
    name: "Kurapika",
    class: "Conjurer",
    ability: "Chain Jail",
    icon: Shield,
    color: '#DC143C',
    image: 'https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg',
    description: "Last survivor of the Kurta clan, seeking vengeance.",
    stats: { power: 82, speed: 85, defense: 90, technique: 92 }
  },
  {
    id: 4,
    name: "Leorio",
    class: "Emitter",
    ability: "Remote Punch",
    icon: Flame,
    color: '#DAA520',
    image: 'https://images.pexels.com/photos/1040883/pexels-photo-1040883.jpeg',
    description: "Medical student with a strong sense of justice.",
    stats: { power: 75, speed: 70, defense: 85, technique: 65 }
  },
];

export default function CharactersScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>LEGENDARY HUNTERS</Text>
        <Text style={styles.subtitle}>Master the art of Nen and become unstoppable</Text>
      </View>

      {characters.map((character) => (
        <TouchableOpacity key={character.id} style={styles.characterCard}>
          <Image source={{ uri: character.image }} style={styles.characterImage} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.9)']}
            style={styles.characterGradient}
          >
            <View style={styles.characterInfo}>
              <View style={styles.characterHeader}>
                <View>
                  <Text style={styles.characterName}>{character.name}</Text>
                  <View style={styles.classContainer}>
                    <character.icon size={16} color={character.color} />
                    <Text style={[styles.characterClass, { color: character.color }]}>
                      {character.class}
                    </Text>
                  </View>
                </View>
                <BlurView intensity={50} style={styles.abilityBadge}>
                  <Text style={styles.abilityText}>{character.ability}</Text>
                </BlurView>
              </View>
              
              <Text style={styles.characterDescription}>{character.description}</Text>
              
              <View style={styles.statsContainer}>
                <View style={styles.statRow}>
                  <Text style={styles.statLabel}>Power</Text>
                  <View style={styles.statBar}>
                    <LinearGradient
                      colors={[character.color, character.color + '80']}
                      style={[styles.statFill, { width: `${character.stats.power}%` }]}
                    />
                  </View>
                  <Text style={styles.statValue}>{character.stats.power}</Text>
                </View>
                
                <View style={styles.statRow}>
                  <Text style={styles.statLabel}>Speed</Text>
                  <View style={styles.statBar}>
                    <LinearGradient
                      colors={[character.color, character.color + '80']}
                      style={[styles.statFill, { width: `${character.stats.speed}%` }]}
                    />
                  </View>
                  <Text style={styles.statValue}>{character.stats.speed}</Text>
                </View>
                
                <View style={styles.statRow}>
                  <Text style={styles.statLabel}>Defense</Text>
                  <View style={styles.statBar}>
                    <LinearGradient
                      colors={[character.color, character.color + '80']}
                      style={[styles.statFill, { width: `${character.stats.defense}%` }]}
                    />
                  </View>
                  <Text style={styles.statValue}>{character.stats.defense}</Text>
                </View>
                
                <View style={styles.statRow}>
                  <Text style={styles.statLabel}>Technique</Text>
                  <View style={styles.statBar}>
                    <LinearGradient
                      colors={[character.color, character.color + '80']}
                      style={[styles.statFill, { width: `${character.stats.technique}%` }]}
                    />
                  </View>
                  <Text style={styles.statValue}>{character.stats.technique}</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
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
  characterCard: {
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
    height: 400,
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  characterImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  characterGradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  characterInfo: {
    padding: 20,
  },
  characterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  characterName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  classContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  characterClass: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  abilityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  abilityText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
  },
  characterDescription: {
    fontSize: 14,
    color: '#cccccc',
    marginBottom: 16,
    lineHeight: 20,
  },
  statsContainer: {
    gap: 8,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statLabel: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '600',
    width: 60,
  },
  statBar: {
    flex: 1,
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 3,
  },
  statFill: {
    height: '100%',
    borderRadius: 3,
  },
  statValue: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '600',
    width: 24,
    textAlign: 'right',
  },
});