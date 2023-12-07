// screens/PlayersScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomHeaderButton from '../components/CustomHeaderButton';

interface PlayersScreenProps {
  navigation: any;
}

const PlayersScreen: React.FC<PlayersScreenProps> = ({ navigation }) => {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);
  const totalLevels = 50;

  const levels = Array.from({ length: totalLevels }, (_, index) => index + 1);

  const toggleExpand = (level: number) => {
    if (expandedLevel === level) {
      setExpandedLevel(null);
    } else {
      setExpandedLevel(level);
    }
  };

  const renderLevelButton = (level: number) => (
    <TouchableOpacity
      style={styles.levelButton}
      onPress={() => toggleExpand(level)}
    >
      <Text style={styles.levelButtonText}>{`Level ${level}`}</Text>
    </TouchableOpacity>
  );

  const renderGrid = () => {
    if (expandedLevel === null) {
      return null;
    }

    // Render grid items based on the expanded level
    const levelsInGrid = levels.slice(0, totalLevels / 5).map((level) => (
      <TouchableOpacity
        key={level}
        style={styles.gridItem}
        onPress={() => navigateToGame(level)}
      >
        <Text style={styles.gridItemText}>{`Level ${level}`}</Text>
      </TouchableOpacity>
    ));

    return (
      <View style={styles.gridContainer}>
        {levelsInGrid}
      </View>
    );
  };

  const navigateToGame = (level: number) => {
    // You can pass the selected level to the next screen if needed
    navigation.navigate('Game', { level });
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
      <CustomHeaderButton
        onSettingsPress={handleSettingsPress}
        onProfilePress={handleProfilePress}
      />

      <Text style={styles.title}>Players Screen</Text>
      {levels.map((level) => (
        <View key={level} style={styles.levelContainer}>
          {renderLevelButton(level)}
          {expandedLevel === level && renderGrid()}
        </View>
      ))}
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
  levelContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  levelButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  levelButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridItem: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    margin: 5,
  },
  gridItemText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default PlayersScreen;
