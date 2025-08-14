import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Github, Mail, Linkedin, Star, Code, Heart } from 'lucide-react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Developer Profile */}
      <LinearGradient
        colors={['#2D5738', '#1a2f1f', '#0a0a0a']}
        style={styles.profileSection}
      >
        <BlurView intensity={20} style={styles.profileCard}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
            style={styles.profileImage}
          />
          <Text style={styles.developerName}>Achref Rhouma</Text>
          <Text style={styles.developerTitle}>Full-Stack Developer & Game Designer</Text>
          <Text style={styles.developerBio}>
            Passionate about creating immersive gaming experiences that bring beloved anime worlds to life.
            Specialized in React Native, game mechanics, and user experience design.
          </Text>
          
          <View style={styles.socialLinks}>
            <BlurView intensity={40} style={styles.socialButton}>
              <Github size={20} color="#ffffff" />
            </BlurView>
            <BlurView intensity={40} style={styles.socialButton}>
              <Mail size={20} color="#ffffff" />
            </BlurView>
            <BlurView intensity={40} style={styles.socialButton}>
              <Linkedin size={20} color="#ffffff" />
            </BlurView>
          </View>
        </BlurView>
      </LinearGradient>

      {/* Project Information */}
      <View style={styles.projectSection}>
        <Text style={styles.sectionTitle}>Project Overview</Text>
        
        <BlurView intensity={30} style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Star size={24} color="#DAA520" />
            <Text style={styles.infoTitle}>Hunter × Hunter: Greed Island Chronicles</Text>
          </View>
          <Text style={styles.infoDescription}>
            An immersive mobile game experience that captures the essence of the Hunter × Hunter universe.
            Built with cutting-edge React Native technology and featuring cinematic visuals, 
            dynamic combat systems, and authentic anime-style presentation.
          </Text>
        </BlurView>

        <BlurView intensity={30} style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Code size={24} color="#DC143C" />
            <Text style={styles.infoTitle}>Technical Stack</Text>
          </View>
          <View style={styles.techStack}>
            <View style={styles.techItem}>
              <Text style={styles.techLabel}>Framework</Text>
              <Text style={styles.techValue}>React Native & Expo</Text>
            </View>
            <View style={styles.techItem}>
              <Text style={styles.techLabel}>Navigation</Text>
              <Text style={styles.techValue}>Expo Router</Text>
            </View>
            <View style={styles.techItem}>
              <Text style={styles.techLabel}>UI Library</Text>
              <Text style={styles.techValue}>React Native Elements</Text>
            </View>
            <View style={styles.techItem}>
              <Text style={styles.techLabel}>Animations</Text>
              <Text style={styles.techValue}>Reanimated 3</Text>
            </View>
            <View style={styles.techItem}>
              <Text style={styles.techLabel}>Icons</Text>
              <Text style={styles.techValue}>Lucide React Native</Text>
            </View>
            <View style={styles.techItem}>
              <Text style={styles.techLabel}>Effects</Text>
              <Text style={styles.techValue}>Expo Linear Gradient & Blur</Text>
            </View>
          </View>
        </BlurView>

        <BlurView intensity={30} style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Heart size={24} color="#6A0DAD" />
            <Text style={styles.infoTitle}>Design Philosophy</Text>
          </View>
          <Text style={styles.infoDescription}>
            Every element is crafted with meticulous attention to detail, from the cinematic hero sections
            to the character stat visualizations. The app combines anime-inspired aesthetics with modern
            mobile design principles to create an engaging and immersive user experience.
          </Text>
        </BlurView>
      </View>

      {/* Features Showcase */}
      <View style={styles.featuresShowcase}>
        <Text style={styles.sectionTitle}>App Highlights</Text>
        
        <View style={styles.highlightGrid}>
          <BlurView intensity={40} style={styles.highlightCard}>
            <Text style={styles.highlightNumber}>5</Text>
            <Text style={styles.highlightLabel}>Interactive Screens</Text>
          </BlurView>
          
          <BlurView intensity={40} style={styles.highlightCard}>
            <Text style={styles.highlightNumber}>4</Text>
            <Text style={styles.highlightLabel}>Legendary Characters</Text>
          </BlurView>
          
          <BlurView intensity={40} style={styles.highlightCard}>
            <Text style={styles.highlightNumber}>4</Text>
            <Text style={styles.highlightLabel}>Epic Environments</Text>
          </BlurView>
          
          <BlurView intensity={40} style={styles.highlightCard}>
            <Text style={styles.highlightNumber}>6</Text>
            <Text style={styles.highlightLabel}>Core Features</Text>
          </BlurView>
        </View>
      </View>

      {/* Credits */}
      <View style={styles.creditsSection}>
        <Text style={styles.creditsTitle}>Credits & Acknowledgments</Text>
        <Text style={styles.creditsText}>
          Hunter × Hunter created by Yoshihiro Togashi{'\n'}
          Images courtesy of Pexels photographers{'\n'}
          Icons provided by Lucide{'\n'}
          Built with React Native & Expo{'\n'}
          {'\n'}
          This is a fan-made concept project created for educational and portfolio purposes.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  profileSection: {
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  profileCard: {
    alignItems: 'center',
    padding: 30,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    width: '100%',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#DAA520',
  },
  developerName: {
    fontSize: 28,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 8,
    letterSpacing: 1,
  },
  developerTitle: {
    fontSize: 16,
    color: '#DAA520',
    marginBottom: 16,
    fontWeight: '600',
  },
  developerBio: {
    fontSize: 15,
    color: '#cccccc',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  socialLinks: {
    flexDirection: 'row',
    gap: 16,
  },
  socialButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  projectSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#DAA520',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 1,
  },
  infoCard: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.08)',
    marginBottom: 16,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginLeft: 12,
  },
  infoDescription: {
    fontSize: 15,
    color: '#cccccc',
    lineHeight: 22,
  },
  techStack: {
    gap: 12,
  },
  techItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  techLabel: {
    fontSize: 14,
    color: '#888888',
    fontWeight: '600',
  },
  techValue: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
  },
  featuresShowcase: {
    padding: 20,
  },
  highlightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  highlightCard: {
    width: '48%',
    padding: 20,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
  },
  highlightNumber: {
    fontSize: 36,
    fontWeight: '900',
    color: '#DAA520',
    marginBottom: 8,
  },
  highlightLabel: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
  },
  creditsSection: {
    padding: 20,
    marginBottom: 40,
  },
  creditsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
  },
  creditsText: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
    lineHeight: 20,
  },
});