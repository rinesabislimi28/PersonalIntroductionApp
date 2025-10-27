import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  //State to control whether skills are visible or hidden
  const [showSkills, setShowSkills] = useState(false);

  return (
    <View style={styles.container}>
      {/* Profile Image */}
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

      {/* Button to toggle skills visibility */}
      <TouchableOpacity
        style={styles.button}
        onPress={()=> setShowSkills(!showSkills)}
      >
        <Text style={styles.buttonText}>
          {showSkills ? 'Hide Skills' : 'Show Skills'}
        </Text>
      </TouchableOpacity>

      {/* Skills section, only visible if showSkills is true */}
      {showSkills && (
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>💻 HTML, CSS, JavaScript</Text>
          <Text style={styles.skill}>🎨 Graphic Design (Canva)</Text>
          <Text style={styles.skill}>⚙️ C# Programming</Text>
        </View>
      )}
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#c6a3a5ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 120,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#a16464ff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#5a2a27',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#6d3530ff',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#a16464ff',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  skillsContainer: {
    flexDirection: 'column', 
    flexWrap: 'wrap',    
    justifyContent: 'center',
    gap: 10,            
    marginTop: 20,
  },
  skill: {
    backgroundColor: '#e6c1c1ff',
    color: '#44211fff',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    borderWidth: 2,       
    borderColor: '#a16464ff', 
    shadowColor: '#2d0000ff',
    fontWeight: '500',    
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
    margin: 5,
  }
});
