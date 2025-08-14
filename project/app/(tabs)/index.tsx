import { ScrollView, View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Zap, Eye, Shield } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/1438248/pexels-photo-1438248.jpeg' }}
        style={styles.heroSection}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.7)', 'rgba(45,87,56,0.8)', 'rgba(0,0,0,0.9)']}
          style={styles.heroGradient}
        >
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>HUNTER × HUNTER</Text>
            <Text style={styles.heroSubtitle}>GREED ISLAND CHRONICLES</Text>
            <Text style={styles.heroDescription}>
              Embark on an epic journey through the most dangerous game ever created.
              Master your Nen abilities, forge alliances, and survive the ultimate test.
            </Text>
            
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Zap size={24} color="#DAA520" />
                <Text style={styles.statNumber}>100+</Text>
                <Text style={styles.statLabel}>Nen Abilities</Text>
              </View>
              <View style={styles.statItem}>
                <Eye size={24} color="#DC143C" />
                <Text style={styles.statNumber}>15+</Text>
                <Text style={styles.statLabel}>Hunter Classes</Text>
              </View>
              <View style={styles.statItem}>
                <Shield size={24} color="#6A0DAD" />
                <Text style={styles.statNumber}>50+</Text>
                <Text style={styles.statLabel}>Epic Battles</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>

      {/* Features Preview */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Experience the Hunter World</Text>
        
        <View style={styles.featureCard}>
          <ImageBackground
            source={{ uri: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg' }}
            style={styles.featureImage}
            imageStyle={styles.featureImageStyle}
          >
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.8)']}
              style={styles.featureGradient}
            >
              <Text style={styles.featureTitle}>Dynamic Combat System</Text>
              <Text style={styles.featureDescription}>
                Master unique Nen techniques with real-time combat mechanics
              </Text>
            </LinearGradient>
          </ImageBackground>
        </View>

        <View style={styles.featureCard}>
          <ImageBackground
            source={{ uri: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg' }}
            style={styles.featureImage}
            imageStyle={styles.featureImageStyle}
          >
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.8)']}
              style={styles.featureGradient}
            >
              <Text style={styles.featureTitle}>Vast Exploration</Text>
              <Text style={styles.featureDescription}>
                Discover mysterious islands and hidden secrets
              </Text>
            </LinearGradient>
          </ImageBackground>
        </View>

        <View style={styles.featureCard}>
          <ImageBackground
            source={{ uri: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg' }}
            style={styles.featureImage}
            imageStyle={styles.featureImageStyle}
          >
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.8)']}
              style={styles.featureGradient}
            >
              <Text style={styles.featureTitle}>Epic Boss Battles</Text>
              <Text style={styles.featureDescription}>
                Face legendary creatures and formidable opponents
              </Text>
            </LinearGradient>
          </ImageBackground>
        </View>
      </View>

      {/* Call to Action */}
      <View style={styles.ctaSection}>
        <BlurView intensity={20} style={styles.ctaCard}>
          <Text style={styles.ctaTitle}>Ready to Become a Hunter?</Text>
          <Text style={styles.ctaDescription}>
            Join thousands of players in the most immersive Hunter x Hunter experience ever created.
          </Text>
        </BlurView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  heroSection: {
    height: 500,
    width: '100%',
  },
  heroGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#DAA520',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 2,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  heroSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 1,
  },
  heroDescription: {
    fontSize: 16,
    color: '#cccccc',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#cccccc',
    marginTop: 4,
  },
  featuresSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 30,
    letterSpacing: 1,
  },
  featureCard: {
    marginBottom: 20,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  featureImage: {
    height: 200,
    justifyContent: 'flex-end',
  },
  featureImageStyle: {
    borderRadius: 16,
  },
  featureGradient: {
    padding: 20,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#cccccc',
    lineHeight: 20,
  },
  ctaSection: {
    padding: 20,
    marginBottom: 20,
  },
  ctaCard: {
    padding: 30,
    borderRadius: 16,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#DAA520',
    textAlign: 'center',
    marginBottom: 12,
  },
  ctaDescription: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 22,
  },
});