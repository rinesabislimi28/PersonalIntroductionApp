import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions,
  Linking 
} from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  // State for making navigation functional
  const [activeTab, setActiveTab] = useState('skills');

  // Function to handle contact (Email)
  const handleContact = () => {
    Linking.openURL('mailto:rinesabislimi28@gmail.com'); 
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Visual Background Elements */}
      <View style={styles.pinkGlowTop} />
      <View style={styles.purpleGlowBottom} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Profile Identity Section */}
        <View style={styles.profileSection}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('./assets/profile.jpg')} 
              style={styles.profileAvatar}
            />
            <View style={styles.activeStatus} />
          </View>
          
          <Text style={styles.nameText}>Rinesa Bislimi</Text>
          <Text style={styles.tagline}>3rd Year Student of Computer Science and Engineering</Text>
          
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>📍 Skenderaj, KOSOVO</Text>
          </View>
        </View>

        {/* Professional Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>9.08</Text>
            <Text style={styles.statLabel}>GPA</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>10+</Text>
            <Text style={styles.statLabel}>PROJECTS</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>YEAR 3</Text>
            <Text style={styles.statLabel}>STUDENT</Text>
          </View>
        </View>

        {/* Functional Tab Navigation */}
        <View style={styles.tabBar}>
          {['skills', 'education', 'awards'].map((tab) => (
            <TouchableOpacity 
              key={tab} 
              onPress={() => setActiveTab(tab)}
              style={[styles.tabBtn, activeTab === tab && styles.tabBtnActive]}
            >
              <Text style={[styles.tabBtnText, activeTab === tab && styles.tabBtnTextActive]}>
                {tab.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Dynamic Content Card */}
        <View style={styles.detailsCard}>
          {activeTab === 'skills' && (
            <View>
              <Text style={styles.cardHeader}>Technical Stack</Text>
              <View style={styles.skillGrid}>
                {['React Native', 'JavaScript', 'Node.js', 'Python', 'SQL', 'UI/UX Design (Justinmind, Canva)'].map((skill, i) => (
                  <View key={i} style={styles.skillBadge}>
                    <View style={styles.pinkDot} />
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {activeTab === 'education' && (
            <View>
              <Text style={styles.cardHeader}>Education Path</Text>
              <View style={styles.timelineItem}>
                <Text style={styles.timelineDate}>2023 - 2026</Text>
                <Text style={styles.timelineTitle}>BSc. Computer Science & Engineering (2023–2026)</Text>
                <Text style={styles.timelineSub}>🎓 University of Mitrovica “Isa Boletini” </Text>
              </View>
              <View style={styles.timelineSeparator} />
              <View style={styles.timelineItem}>
                <Text style={styles.timelineDate}>2020 - 2023</Text>
                <Text style={styles.timelineTitle}>Natural Sciences Diploma</Text>
                <Text style={styles.timelineSub}>🏫 Gymnasium “Hamëz Jashari” Skenderaj(2020–2023)</Text>
              </View>
            </View>
          )}

          {activeTab === 'awards' && (
            <View>
              <Text style={styles.cardHeader}>Certifications</Text>
              {['📜 ICT for Kosovo’s Growth — Web Application Development Professional (July 2025)', '☁️ Prishtina REA — Web App Developer & Cloud Computing (Jan–Apr 2025)', '💡 KSV Center for Self-Support — Web Programming (HTML) (June 2023)'].map((cert, idx) => (
                <View key={idx} style={styles.awardRow}>
                  <Text style={styles.awardEmoji}>⭐</Text>
                  <Text style={styles.awardText}>{cert}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Functional Contact Button */}
        <TouchableOpacity style={styles.mainButton} onPress={handleContact}>
          <Text style={styles.mainButtonText}>CONTACT ME</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050005', 
  },
  // Aurora Pink Glow Effects
  pinkGlowTop: {
    position: 'absolute',
    top: -width * 0.3,
    right: -width * 0.2,
    width: width,
    height: width,
    borderRadius: width / 2,
    backgroundColor: '#FF006E',
    opacity: 0.12,
  },
  purpleGlowBottom: {
    position: 'absolute',
    bottom: -50,
    left: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#8338EC',
    opacity: 0.1,
  },
  scrollContent: {
    paddingBottom: 60,
    alignItems: 'center',
  },
  // Profile Section
  profileSection: {
    marginTop: 80,
    alignItems: 'center',
  },
  imageWrapper: {
    padding: 4,
    borderRadius: 80,
    backgroundColor: '#FF006E',
    shadowColor: '#FF006E',
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 15,
  },
  profileAvatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 5,
    borderColor: '#050005',
  },
  activeStatus: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#00F5D4',
    borderWidth: 4,
    borderColor: '#050005',
  },
  nameText: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFF',
    marginTop: 20,
    letterSpacing: -1,
  },
  tagline: {
    fontSize: 14,
    color: '#FF4D6D',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    textAlign: 'center',
    marginTop: 3,
  },
  locationContainer: {
    marginTop: 15,
    backgroundColor: 'rgba(255, 0, 110, 0.1)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 0, 110, 0.3)',
  },
  locationText: {
    color: '#FF758F',
    fontSize: 10,
    fontWeight: '800',
  },
  // Stats Section
  statsRow: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    marginTop: 30,
    borderRadius: 25,
    padding: 20,
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#FF006E',
    fontSize: 20,
    fontWeight: '900',
  },
  statLabel: {
    color: '#888',
    fontSize: 10,
    fontWeight: '700',
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  // Navigation Tabs
  tabBar: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    marginTop: 30,
    borderRadius: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 15,
  },
  tabBtnActive: {
    backgroundColor: '#FF006E',
  },
  tabBtnText: {
    color: '#666',
    fontSize: 11,
    fontWeight: '900',
  },
  tabBtnTextActive: {
    color: '#FFF',
  },
  // Content Card
  detailsCard: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    marginTop: 20,
    borderRadius: 30,
    padding: 25,
    borderWidth: 1,
    borderColor: 'rgba(255, 0, 110, 0.2)',
  },
  cardHeader: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFF',
    marginBottom: 20,
  },
  // Skills UI
  skillGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 0, 110, 0.08)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 0, 110, 0.15)',
  },
  pinkDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF006E',
    marginRight: 8,
  },
  skillText: {
    color: '#DDD',
    fontSize: 13,
    fontWeight: '600',
  },
  // Timeline UI
  timelineItem: {
    paddingVertical: 5,
  },
  timelineDate: {
    color: '#FF006E',
    fontSize: 12,
    fontWeight: '800',
  },
  timelineTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
  timelineSub: {
    color: '#888',
    fontSize: 13,
  },
  timelineSeparator: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    marginVertical: 15,
  },
  // Awards UI
  awardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  awardEmoji: {
    fontSize: 18,
    marginRight: 12,
  },
  awardText: {
    color: '#EEE',
    fontWeight: '600',
  },
  // Main CTA Button
  mainButton: {
    width: '90%',
    backgroundColor: '#FF006E',
    marginTop: 40,
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#FF006E',
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 10,
  },
  mainButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2,
  },
});