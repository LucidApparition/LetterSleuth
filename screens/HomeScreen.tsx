// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface HomeScreenProps {
  navigation: any; // Import the 'navigation' prop type from 'react-navigation' or 'react-navigation/native'
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleGroupGamePress = () => {
    // Navigate to the GroupGameScreen
    navigation.navigate('GroupGameScreen');
  };
  const handleSinglePlayerPress = () => {
    navigation.navigate('PlayerScreen');
  };
  const handleOnlineGamePress = () => {
    console.log('Online Game Pressed');
  };
  const handleSettingsPress = () => {
    console.log('Settings Pressed');
  };
  const handleProfilePress = () => {
    console.log('Profile Pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Letter Sleuth</Text>

      {/* Buttons for Single Player, Group Game, and Online */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSinglePlayerPress}>
          <Text style={styles.buttonText}>Single Player</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleGroupGamePress}>
          <Text style={styles.buttonText}>Group Game</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleOnlineGamePress}>
          <Text style={styles.buttonText}>Online</Text>
        </TouchableOpacity>

      </View>

      {/* Settings and Player Profile buttons */}
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.bottomButton} onPress={handleSettingsPress}>
          <Text style={styles.bottomButtonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={handleProfilePress}>
          <Text style={styles.bottomButtonText}>Player Profile</Text>
        </TouchableOpacity>
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
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: '#3498db',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
  },
  bottomButton: {
    width: 100,
    height: 30,
    backgroundColor: '#3498db',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default HomeScreen;
