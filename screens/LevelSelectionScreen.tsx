// screens/LevelSelectionScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import CustomHeaderButton from '../components/CustomHeaderButton'; // Import your custom header
import { images } from '../assets';

interface LevelSelectionScreenProps {
  navigation: any;
}

const LevelSelectionScreen: React.FC<LevelSelectionScreenProps> = ({ navigation }) => {
  const unlockedLevels = [1, 2, 3];

  const handleLevelPress = (level: number) => {
    if (unlockedLevels.includes(level)) {
      navigation.navigate('LevelScreen', { level });
    } else {
      console.log(`Level ${level} is locked. Complete the previous levels to unlock.`);
    }
  };

  const handleSettingsPress = () => {
    // Handle settings button press
    console.log('Settings button pressed');
  };

  const handleProfilePress = () => {
    // Handle profile button press
    console.log('Profile button pressed');
  };

  return (
    <View style={styles.container}>
      {/* Use CustomHeaderButton as the header */}
      <CustomHeaderButton onSettingsPress={handleSettingsPress} onProfilePress={handleProfilePress} />

      <Text style={styles.title}>Level Selection</Text>

      <View style={styles.levelButtonsContainer}>
        {[1, 2, 3, 4, 5].map((level) => (
          <TouchableOpacity
            key={level}
            style={styles.levelButton}
            onPress={() => handleLevelPress(level)}
          >
            {unlockedLevels.includes(level) ? (
              <Text style={styles.levelButtonText}>{level}</Text>
            ) : (
              <Image
                source={images.lockSVG}
                style={styles.lockIcon}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  levelButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  levelButton: {
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelButtonText: {
    color: 'white',
    fontSize: 18,
  },
  lockIcon: {
    width: 30,
    height: 30,
  },
});

export default LevelSelectionScreen;
