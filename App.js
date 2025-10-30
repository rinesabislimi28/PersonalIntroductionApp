import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  // Tracks which section (skills, education, certifications) is currently open
  const [activeSection, setActiveSection] = useState(null);

  return (
    <View style={styles.container}>
      {/* Profile image */}
      <Image
        source={require('./assets/profile.jpg')}
        style={styles.image}
      />

      {/* Name */}
      <Text style={styles.title}>Rinesa Bislimi</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        3rd Year Student of Computer Science and Engineering
      </Text>

      {/* Row of buttons to toggle each section */}
      <View style={styles.buttonRow}>
        {/* Skills button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setActiveSection(activeSection === 'skills' ? null : 'skills')}
        >
          <Text style={styles.buttonText}>
            {activeSection === 'skills' ? 'Hide Skills' : 'Show Skills'}
          </Text>
        </TouchableOpacity>

        {/* Education button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setActiveSection(activeSection === 'education' ? null : 'education')}
        >
          <Text style={styles.buttonText}>
            {activeSection === 'education' ? 'Hide Education' : 'Show Education'}
          </Text>
        </TouchableOpacity>

        {/* Certifications button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setActiveSection(activeSection === 'certifications' ? null : 'certifications')}
        >
          <Text style={styles.buttonText}>
            {activeSection === 'certifications' ? 'Hide Certifications' : 'Show Certifications'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Skills section */}
      {activeSection === 'skills' && (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Skills</Text>

          {/* List of technical and soft skills */}
          <View style={styles.skillsContainer}>
            <Text style={styles.skill}>💻 Frontend: HTML, CSS, JavaScript, React.js</Text>
            <Text style={styles.skill}>🖥️ Backend: Node.js, ASP.NET Core</Text>
            <Text style={styles.skill}>🗄️ Databases: MongoDB, SQL</Text>
            <Text style={styles.skill}>🎨 Design: Canva (Graphic Design)</Text>
            <Text style={styles.skill}>🧠 Programming Languages: Python, C#</Text>
          </View>
        </View>
      )}

      {/* Education section */}
      {activeSection === 'education' && (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skill}>🎓 University of Mitrovica “Isa Boletini” — BSc Computer Science & Engineering (2023–2026)</Text>
            <Text style={styles.skill}>🏫 Gymnasium “Hamëz Jashari” (2020–2023)</Text>
          </View>
        </View>
      )}

      {/* Certifications section */}
      {activeSection === 'certifications' && (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skill}>📜 ICT for Kosovo’s Growth — Web Application Development Professional (July 2025)</Text>
            <Text style={styles.skill}>☁️ Prishtina REA — Web App Developer & Cloud Computing (Jan–Apr 2025)</Text>
            <Text style={styles.skill}>💡 KSV Center for Self-Support — Web Programming (HTML) (June 2023)</Text>
          </View>
        </View>
      )}

      {/* Status bar */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: '#c6a3a5ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  // Profile image style
  image: {
    width: 220,
    height: 220,
    borderRadius: 120,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#a16464ff',
  },

  // Name text
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#5a2a27',
    marginBottom: 6,
  },

  // Subtitle text
  subtitle: {
    fontSize: 16,
    color: '#6d3530ff',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 25,
  },

  // Button row
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    width: '100%',
  },

  // Button style
  button: {
    backgroundColor: '#a16464ff',
    paddingVertical: 11,
    paddingHorizontal: 8,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    marginHorizontal: 2,
  },

  // Button text style
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },

  // Section container (Skills, Education, Certifications)
  sectionContainer: {
    width: '100%',
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: '#deb8b8ff',
    borderRadius: 40,
    padding: 10,
  },

  // Section title
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    margin: 5,
    color: '#52251fff',
  },

  // Inner container for text items
  skillsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 5,
  },

  // Each skill/education/certification item
  skill: {
    backgroundColor: '#cea09bff',
    color: '#320a0aff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#d88b8b',
    shadowColor: '#b37272',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
    margin: 6,
  },
});
